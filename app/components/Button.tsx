import { useTranslations } from 'next-intl';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  const t = useTranslations();
  return <button onClick={onClick}>{t(text)}</button>;
}