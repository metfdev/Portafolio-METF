import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <section className="page" id="contact">
      <h1>{t("contact.title")}</h1>
    </section>
  );
}

export { Contact };
