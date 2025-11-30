import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useI18n } from '../contexts/i18nContext';
import { useTheme } from '../contexts/themeContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

interface SearchViewProps {
  onSearch: (url: string) => void;
  recentlyViewed: string[];
}

export function SearchView({ onSearch, recentlyViewed }: SearchViewProps) {
  const [url, setUrl] = useState('');
  const { t } = useI18n();
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSearch(url.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="absolute top-4 right-4 flex gap-2">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src={theme === 'dark' ? '/logo_dark.png' : '/logo.png'} 
              alt="Logo" 
              className="h-16 w-16 sm:h-24 sm:w-24 object-contain" 
            />
          </div>
          <h1 className="text-xl sm:text-2xl mb-2">{t.searchTitle}</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t.searchSubtitle}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">{t.searchButton}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="url"
                  placeholder={t.searchPlaceholder}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full text-sm sm:text-base"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Search className="h-4 w-4 mr-2" />
                {t.searchButton}
              </Button>
            </form>
          </CardContent>
        </Card>

        {recentlyViewed.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">{t.recentSearches}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentlyViewed.map((exampleUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setUrl(exampleUrl)}
                    className="w-full text-left text-xs sm:text-sm p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors truncate"
                  >
                    {exampleUrl}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}