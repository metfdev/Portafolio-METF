import { useState, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Input } from "../components/ui/Input/Input";
import { TextArea } from "../components/ui/Input/TextArea";
import { Button } from "../components/ui/Button/Button";

function Contact() {
  const { t } = useTranslation();
  const contactRef = useRef(null);
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".contact-header", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".contact-card",
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)",
          },
          "-=0.4",
        )
        .from(
          ".contact-form",
          { opacity: 0, x: 20, duration: 0.8, ease: "power3.out" },
          "-=0.2",
        );
    },
    { scope: contactRef },
  );

  const sanitizeInput = (str) => {
    return str.replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[m],
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    // Basic Validation and Sanitization
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      service: sanitizeInput(formData.service),
      message: sanitizeInput(formData.message),
      _subject: "Contacto de Pagina Web",
      _replyto: formData.email,
    };

    try {
      // NOTE: Replace the ID below with your Formspree ID or use info@mtfsystemservice.com if already configured
      // For now, we use a fetch to Formspree
      const response = await fetch("https://formspree.io/f/mykkvkkj", {
        // Placeholder ID
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section
      ref={contactRef}
      className="page min-h-full px-4 pb-10 flex flex-col items-center justify-center gap-6"
      id="contact"
    >
      <div className="contact-header text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
          {t("contact.title")}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {t("contact.subtitle")}
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Info Cards */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Social Media Card */}
          <div className="contact-card px-6 py-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-3xl border border-white/20 dark:border-slate-800/50 shadow-xl shadow-cyan-500/5">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600">
                <img
                  src="/img/icons/globe-teal.svg"
                  alt="globe"
                  className="w-5 h-5 invert dark:invert-0"
                />
              </span>
              {t("contact.info.social_title")}
            </h3>
            <div className="flex gap-4">
              <a
                href={import.meta.env.VITE_LINKEDIN_URL}
                target="_blank"
                className="w-12 h-12 rounded-2xl bg-blue-500 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all transform hover:-translate-y-1"
              >
                <img src="/img/icons/linkedin-white.svg" alt="linkedin" />
              </a>
              <a
                href={import.meta.env.VITE_GITHUB_URL}
                target="_blank"
                className="w-12 h-12 rounded-2xl bg-blue-500 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-900 dark:hover:bg-black transition-all transform hover:-translate-y-1"
              >
                <img src="/img/icons/github-white.svg" alt="github" />
              </a>
              <a
                href={import.meta.env.VITE_INSTAGRAM_URL}
                target="_blank"
                className="w-12 h-12 rounded-2xl bg-blue-500 dark:bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-all transform hover:-translate-y-1"
              >
                <img src="/img/icons/instagram-white.svg" alt="instagram" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="contact-card px-6 py-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-3xl border border-white/20 dark:border-slate-800/50 shadow-xl shadow-cyan-500/5">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600">
                <img
                  src="/img/icons/mail-white.svg"
                  alt="email"
                  className="w-5 h-5 invert dark:invert-0"
                />
              </span>
              {t("contact.info.email_title")}
            </h3>
            <a
              href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`}
              target="_blank"
              className="text-gray-600 dark:text-gray-400 select-all font-medium hover:text-cyan-600 transition-all"
            >
              {import.meta.env.VITE_EMAIL_ADDRESS}
            </a>
          </div>

          {/* Map Card */}
          <div className="contact-card overflow-hidden bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-3xl border border-white/20 dark:border-slate-800/50 shadow-xl shadow-cyan-500/5">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600">
                  <img
                    src="/img/icons/pingLocation.svg"
                    alt="location"
                    className="w-5 h-5 invert dark:invert-0"
                  />
                </span>
                {t("contact.info.location_title")}
              </h3>
            </div>
            <div className="h-50 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.137785340157!2d-64.46464525!3d9.4361545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d3319808605df0f%3A0x6bba46c535783307!2sAnaco%2C%20Anzo%C3%A1tegui!5e0!3m2!1ses!2sve!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale dark:invert-[0.9] dark:opacity-80"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-8 contact-form">
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] border border-white/20 dark:border-slate-800/50 shadow-2xl/50 shadow-cyan-500/10 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label={t("contact.form.name")}
                name="name"
                placeholder={t("contact.form.placeholder_name")}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label={t("contact.form.email")}
                name="email"
                type="email"
                placeholder={t("contact.form.placeholder_email")}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2 group">
              <label
                htmlFor="service"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
              >
                {t("contact.form.service")}{" "}
                <span className="text-rose-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 dark:focus:border-cyan-400 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 appearance-none"
              >
                <option value="" disabled>
                  {t("contact.form.select_service")}
                </option>
                <option value={t("contact.form.services.web_design")}>
                  {t("contact.form.services.web_design")}
                </option>
                <option value={t("contact.form.services.development")}>
                  {t("contact.form.services.development")}
                </option>
                <option value={t("contact.form.services.maintenance")}>
                  {t("contact.form.services.maintenance")}
                </option>
                <option value={t("contact.form.services.consulting")}>
                  {t("contact.form.services.consulting")}
                </option>
                <option value={t("contact.form.services.other")}>
                  {t("contact.form.services.other")}
                </option>
              </select>
            </div>

            <TextArea
              label={t("contact.form.message")}
              name="message"
              placeholder={t("contact.form.placeholder_message")}
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
            />

            <Button
              type="submit"
              disabled={formStatus === "sending"}
              style="w-fit px-10 py-4 bg-gradient-to-r from-cyan-600 to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all text-lg"
            >
              {formStatus === "sending" ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                t("contact.form.send")
              )}
            </Button>

            {formStatus === "success" && (
              <p className="text-teal-600 dark:text-teal-400 font-medium animate-bounce">
                {t("contact.form.success")}
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-rose-600 dark:text-rose-400 font-medium">
                {t("contact.form.error")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export { Contact };
