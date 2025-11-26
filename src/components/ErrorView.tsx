import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useI18n } from '../contexts/i18nContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

interface ErrorViewProps {
  onBack: () => void;
}

export function ErrorView({ onBack }: ErrorViewProps) {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="absolute top-4 right-4 flex gap-2">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-destructive rounded-full">
              <AlertCircle className="h-8 w-8 sm:h-12 sm:w-12 text-destructive-foreground" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl mb-2">{t.propertyNotFound}</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t.propertyNotFoundDescription}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">{t.errorTitle}</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              {t.propertyNotFoundDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={onBack} className="w-full" size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.backToSearch}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
