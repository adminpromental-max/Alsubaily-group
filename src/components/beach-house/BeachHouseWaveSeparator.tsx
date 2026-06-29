export function BeachHouseWaveSeparator() {
  return (
    <div className="bh-wave-separator relative z-10 -mt-px overflow-hidden" aria-hidden>
      <svg
        className="relative block h-20 w-full md:h-28"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#5BA8C4"
          d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z"
        />
        <path
          fill="#7EC0D8"
          d="M0,80 C320,48 640,104 960,72 C1120,56 1280,88 1440,80 L1440,120 L0,120 Z"
          opacity="0.85"
        />
        <path
          fill="#A8D8EA"
          d="M0,96 C360,112 720,80 1080,96 C1260,104 1380,88 1440,96 L1440,120 L0,120 Z"
        />
      </svg>
      <div className="h-6 bg-[#A8D8EA] md:h-8" />
    </div>
  );
}
