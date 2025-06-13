import { useI18n } from "@/app/public/locales/client";

const XiaoErpLogo = () => {
  const t = useI18n();
  return <span className="text-2xl font-bold"> {t("logo")}</span>;
};

export default XiaoErpLogo;
