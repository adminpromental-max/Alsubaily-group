import { useState } from "react";
import { Building2, Loader2, CheckCircle2, Mail, Phone } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PROJECTS } from "@/data/projects";
import { toast } from "sonner";

export function ContactSection() {
  const { t, dir } = useLang();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<"investor" | "client">("investor");
  const [project, setProject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setName("");
    setPhone("");
    setType("investor");
    setProject("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!name.trim() || !phone.trim() || !project) {
      toast.error(
        t("يرجى تعبئة جميع الحقول المطلوبة.", "Please fill in all required fields."),
      );
      return;
    }
    const phoneOk = /^[0-9+\s-]{8,15}$/.test(phone.trim());
    if (!phoneOk) {
      toast.error(
        t("رقم الجوال غير صحيح.", "Please enter a valid phone number."),
      );
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      toast.success(
        t(
          "تم إرسال طلبك بنجاح، سنتواصل معك قريباً.",
          "Your request has been sent. We'll contact you shortly.",
        ),
      );
      resetForm();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      toast.error(
        t(
          "حدث خطأ أثناء الإرسال، حاول مرة أخرى.",
          "Something went wrong. Please try again.",
        ),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-concierge relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF8F4] to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        {/* Unified concierge card — one piece, not two floating boxes */}
        <div className="contact-concierge-card overflow-hidden rounded-[1.75rem] shadow-[0_32px_80px_-24px_rgba(26,22,18,0.22)] md:rounded-[2rem]">
          <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            {/* Copy panel — full height, flush with form */}
            <div className="contact-concierge-copy relative flex flex-col justify-between px-8 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -end-8 -top-8 h-40 w-40 rounded-full bg-[#C9A962]/10 blur-3xl"
              />
              <div
                aria-hidden
                className="contact-concierge-watermark absolute bottom-6 end-6 opacity-[0.06]"
              >
                <Building2 className="h-28 w-28 text-[#C9A962] md:h-36 md:w-36" strokeWidth={0.75} />
              </div>

              <div className="relative z-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#C9A962] md:text-xs">
                  {t("تواصل معنا", "Contact Us")}
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-[#FAFAF8] md:text-4xl lg:text-[2.75rem]">
                  {t("ابدأ رحلتك", "Start Your Journey")}
                  <span className="mt-1 block text-2xl font-medium text-[#C9A962]/90 md:text-3xl">
                    {t("مع مجموعة الشبيلي", "with AlShubaily Group")}
                  </span>
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-7 text-white/60 md:text-[0.95rem]">
                  {t(
                    "سواء كنت مستثمراً تبحث عن فرصة واعدة أو عميلاً يطمح لمسكن فاخر — فريقنا جاهز لخدمتك.",
                    "Whether you're an investor seeking opportunity or a client aspiring for luxury — our team is ready to serve you.",
                  )}
                </p>
              </div>

              <div className="relative z-10 mt-10 space-y-3 md:mt-12">
                <a
                  href="tel:+966500000000"
                  className="contact-concierge-chip group"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/30 bg-[#C9A962]/10 text-[#C9A962] transition-colors group-hover:bg-[#C9A962]/20">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-white/45">
                      {t("اتصل بنا", "Call us")}
                    </span>
                    <span className="text-sm font-medium text-white/90" dir="ltr">
                      +966 50 000 0000
                    </span>
                  </span>
                </a>
                <a
                  href="mailto:info@alshubaily.com"
                  className="contact-concierge-chip group"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/30 bg-[#C9A962]/10 text-[#C9A962] transition-colors group-hover:bg-[#C9A962]/20">
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-white/45">
                      {t("راسلنا", "Email us")}
                    </span>
                    <span className="text-sm font-medium text-white/90" dir="ltr">
                      info@alshubaily.com
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Form panel — same card, cream side */}
            <div className="contact-concierge-form relative border-t border-[#C9A962]/15 px-8 py-10 md:border-t-0 md:border-s md:px-10 md:py-12 lg:px-12 lg:py-14">
              <div className="mb-7 md:mb-8">
                <p className="text-sm font-medium text-[#1A1612]">
                  {t("نموذج الاستفسار", "Inquiry Form")}
                </p>
                <p className="mt-1 text-xs text-[#5C5348]/80">
                  {t(
                    "املأ البيانات وسيتواصل معك فريقنا خلال 24 ساعة.",
                    "Fill in your details and our team will reach out within 24 hours.",
                  )}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-[#1A1612]">
                      {t("الاسم", "Name")}
                      <span className="text-red-500"> *</span>
                    </Label>
                    <Input
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t("أدخل اسمك", "Enter your name")}
                      className="contact-concierge-input"
                      dir={dir}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone" className="text-[#1A1612]">
                      {t("رقم الجوال", "Phone Number")}
                      <span className="text-red-500"> *</span>
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("05xxxxxxxx", "05xxxxxxxx")}
                      className="contact-concierge-input"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[#1A1612]">
                    {t("نوع الاستفسار", "Inquiry Type")}
                  </Label>
                  <RadioGroup
                    value={type}
                    onValueChange={(v) => setType(v as "investor" | "client")}
                    className="flex flex-wrap gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="investor"
                        id="type-investor"
                        className="border-[#C9A962] text-[#C9A962]"
                      />
                      <Label
                        htmlFor="type-investor"
                        className="cursor-pointer font-normal text-[#1A1612]"
                      >
                        {t("مستثمر", "Investor")}
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="client"
                        id="type-client"
                        className="border-[#C9A962] text-[#C9A962]"
                      />
                      <Label
                        htmlFor="type-client"
                        className="cursor-pointer font-normal text-[#1A1612]"
                      >
                        {t("عميل", "Client")}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-project" className="text-[#1A1612]">
                    {t("المشروع", "Project")}
                    <span className="text-red-500"> *</span>
                  </Label>
                  <select
                    id="contact-project"
                    dir={dir}
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="contact-concierge-select"
                  >
                    <option value="" disabled>
                      {t("اختر المشروع", "Select a project")}
                    </option>
                    {PROJECTS.map((p) => (
                      <option key={p.id} value={String(p.id)}>
                        {dir === "rtl" ? p.nameAr : p.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  disabled={isSubmitting}
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold tracking-wide disabled:opacity-70 sm:w-auto sm:min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t("جارٍ الإرسال...", "Sending...")}
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      {t("تم الإرسال", "Sent")}
                    </>
                  ) : (
                    t("إرسال الطلب", "Submit Request")
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
