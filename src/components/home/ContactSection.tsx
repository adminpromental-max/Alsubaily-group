import { useState } from "react";
import { useLang } from "@/contexts/lang-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PROJECTS } from "@/data/projects";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const { t, dir } = useLang();
  const isRTL = dir === "rtl";

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
    <section id="contact" className="relative bg-stone-dark py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div
          className={`flex flex-col items-center gap-12 md:items-stretch md:gap-16 ${isRTL ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          {/* Text side */}
          <div className="flex w-full max-w-md flex-1 flex-col justify-center text-center md:max-w-none md:text-start">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C9A962]">
              {t("تواصل معنا", "Contact Us")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#FAFAF8] md:text-5xl">
              {t("نحن هنا لمساعدتك", "We Are Here to Help")}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#FAFAF8]/60 md:text-base">
              {t(
                "مجموعة خالد سعود الشبيلي تفتخر بتقديم مشاريع عقارية واستثمارية متميزة في أنحاء المملكة. سواء كنت مستثمراً تبحث عن فرصة واعدة أو عميلاً يطمح لمسكن فاخر، فريقنا جاهز لخدمتك.",
                "Khalid Saud AlShubaily Group takes pride in delivering distinguished real estate and investment projects across the Kingdom. Whether you are an investor seeking a promising opportunity or a client aspiring for a luxury home, our team is ready to serve you.",
              )}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
              <span className="inline-block h-px w-12 bg-[#C9A962]/60" />
              <span className="text-xs font-medium tracking-wider text-[#C9A962]">
                {t("مجموعة الشبيلي", "AlShubaily Group")}
              </span>
            </div>
          </div>

          {/* Form side */}
          <div className="w-full max-w-md flex-1 md:max-w-none">
            <form
              onSubmit={handleSubmit}
              className="stone-surface-cream mx-auto w-full max-w-md rounded-2xl border border-[#E0D3C2]/10 p-6 shadow-xl md:max-w-none md:p-8"
            >
              <div className="space-y-5">
                {/* Name */}
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
                    className="border-[#E0D3C2] bg-white text-[#1A1612] placeholder:text-[#5C5348]/80 focus-visible:ring-[#C9A962]"
                    dir={dir}
                  />
                </div>

                {/* Phone */}
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
                    className="border-[#E0D3C2] bg-white text-[#1A1612] placeholder:text-[#5C5348]/80 focus-visible:ring-[#C9A962]"
                    dir="ltr"
                  />
                </div>

                {/* Type */}
                <div className="space-y-2">
                  <Label className="text-[#1A1612]">
                    {t("نوع الاستفسار", "Inquiry Type")}
                  </Label>
                  <RadioGroup
                    value={type}
                    onValueChange={(v) => setType(v as "investor" | "client")}
                    className="flex gap-6"
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

                {/* Project */}
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
                    className="flex h-10 w-full rounded-md border border-[#E0D3C2] bg-white px-3 py-2 text-sm text-[#1A1612] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C9A962] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>
                      {t("اختر المشروع", "Select a project")}
                    </option>
                    {PROJECTS.map((p) => (
                      <option key={p.id} value={String(p.id)}>
                        {isRTL ? p.nameAr : p.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="gold"
                  disabled={isSubmitting}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold tracking-wide disabled:opacity-70"
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
                    t("إرسال", "Submit")
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
