import { useEffect, useRef } from "react";
import * as THREE from "three";
import { getPerfTier, prefersReducedMotion, type PerfTier } from "@/lib/device-capabilities";

/**
 * Cinematic three.js backdrop for the hero. Renders a slow, golden
 * particle field with a subtle parallax — kept intentionally light so
 * it stays smooth on mid-range mobile devices.
 *
 * Performance adaptations:
 *  - DPR clamped to [1, 1.5] (1 on low tier)
 *  - Particle count scaled to PerfTier (4k / 2k / 900)
 *  - Animation paused when offscreen via IntersectionObserver
 *  - Honors prefers-reduced-motion (renders a single static frame)
 */
export default function HeroCinematic3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tier: PerfTier = getPerfTier();
    const reduced = prefersReducedMotion();

    const particleCount = tier === "high" ? 4000 : tier === "medium" ? 2000 : 900;
    const maxDpr = tier === "low" ? 1 : 1.5;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.05);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      antialias: tier === "high",
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDpr));
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Golden particle field
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xc9a962,
      size: 0.035,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Pointer parallax (skipped when reduced motion)
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      pointer.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 0.4;
    };
    if (!reduced) window.addEventListener("pointermove", onPointer, { passive: true });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    window.addEventListener("resize", onResize);

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.01 },
    );
    io.observe(container);

    let raf = 0;
    const start = performance.now();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const t = (performance.now() - start) / 1000;

      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;

      points.rotation.y = t * 0.04 + pointer.x;
      points.rotation.x = Math.sin(t * 0.15) * 0.08 + pointer.y;

      renderer.render(scene, camera);
    };

    if (reduced) {
      renderer.render(scene, camera);
    } else {
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
