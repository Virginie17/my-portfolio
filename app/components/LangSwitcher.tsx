"use client";
import * as React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

type Language = "en" | "fr";

interface LanguageInfo {
  name: string;
}

const languages: Record<Language, LanguageInfo> = {
  en: { name: "English" },
  fr: { name: "Français" },
};

export const LangSwitcher: React.FC = () => {
  const locale = useLocale() as Language;
  const router = useRouter();

  const handleLocaleChange = (newLocale: Language) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
    router.refresh();
  };

  return (
    <select
      className="bg-transparent border-none text-white"
      value={locale}
      onChange={(e) => handleLocaleChange(e.target.value as Language)}
    >
      {Object.entries(languages).map(([code, { name }]) => (
        <option key={code} value={code}className="text-black">
          {name}
        </option>
      ))}
    </select>
  );
};

export default LangSwitcher;