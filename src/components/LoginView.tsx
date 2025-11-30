import { useState } from 'react';
import { Lock, User, AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { mockAdmin } from '../data/mockData';
import { useI18n } from '../contexts/i18nContext';
import { useTheme } from '../contexts/themeContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

interface LoginViewProps {
  onLogin: () => void;
  onBack: () => void;
}

export function LoginView({ onLogin, onBack }: LoginViewProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { t } = useI18n();
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication using mockData credentials
    if (username === mockAdmin.username && password === mockAdmin.password) {
      onLogin();
    } else {
      setError(t.invalidCredentials);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
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
          <h1 className="text-2xl sm:text-4xl mb-2">{t.adminPanel}</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t.adminSubtitle}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">{t.login}</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Usuario: {mockAdmin.username} / Contraseña: {mockAdmin.password}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm">{t.username}</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder={mockAdmin.username}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm">{t.password}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-sm sm:text-base"
                />
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t.back}
                </Button>
                <Button type="submit" className="flex-1">
                  {t.loginButton}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}