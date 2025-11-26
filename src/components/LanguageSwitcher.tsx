import { Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useI18n } from '../contexts/i18nContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="hidden sm:inline">{language === 'es' ? 'Inglés' : 'Spanish'}</span>
      <span className="sm:hidden">{language === 'es' ? 'EN' : 'ES'}</span>
    </Button>
  );
}
