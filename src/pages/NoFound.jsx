import { useTranslation } from "react-i18next";

function NoFound() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("not_found.title")}</h1>
    </div>
  );
}

export { NoFound };
