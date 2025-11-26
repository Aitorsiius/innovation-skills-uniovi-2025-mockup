import { useState } from 'react';
import { Search, Home, Shield } from 'lucide-react';
import { Property, mockProperties, mockZones, Zone } from './data/mockData';
import { SearchView } from './components/SearchView';
import { PropertyView } from './components/PropertyView';
import { LoginView } from './components/LoginView';
import { AdminView } from './components/AdminView';
import { ErrorView } from './components/ErrorView';
import { Button } from './components/ui/button';
import { I18nProvider } from './contexts/i18nContext';
import { ThemeProvider } from './contexts/themeContext';

type View = 'search' | 'property' | 'login' | 'admin' | 'error';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('search');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [zones, setZones] = useState<Zone[]>(mockZones);

  const handleSearch = (url: string) => {
    // Find property by URL in mock data
    const property = mockProperties.find(p => p.url === url);
    if (property) {
      setSelectedProperty(property);
      setCurrentView('property');
      // Add to recently viewed (max 3)
      setRecentlyViewed(prev => {
        const filtered = prev.filter(u => u !== url);
        return [url, ...filtered].slice(0, 3);
      });
    } else {
      // Property not found, show error view
      setCurrentView('error');
    }
  };

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
    setCurrentView('property');
    // Add to recently viewed
    setRecentlyViewed(prev => {
      const filtered = prev.filter(u => u !== property.url);
      return [property.url, ...filtered].slice(0, 3);
    });
  };

  const handleBackToSearch = () => {
    setCurrentView('search');
    setSelectedProperty(null);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('admin');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('search');
  };

  const handleAdminClick = () => {
    if (isAuthenticated) {
      setCurrentView('admin');
    } else {
      setCurrentView('login');
    }
  };

  const handleUpdateZone = (zoneId: string, newRate: number) => {
    setZones(zones.map(zone => 
      zone.id === zoneId ? { ...zone, crimeRate: newRate } : zone
    ));
  };

  return (
    <ThemeProvider>
      <I18nProvider>
        {currentView === 'search' && (
          <>
            <SearchView onSearch={handleSearch} recentlyViewed={recentlyViewed} />
            <Button
              onClick={handleAdminClick}
              className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg"
              size="icon"
            >
              <Shield className="h-6 w-6" />
            </Button>
          </>
        )}

        {currentView === 'property' && selectedProperty && (
          <PropertyView 
            property={selectedProperty} 
            onBack={handleBackToSearch}
            onSelectProperty={handleSelectProperty}
            zones={zones}
          />
        )}

        {currentView === 'login' && (
          <LoginView onLogin={handleLogin} onBack={handleBackToSearch} />
        )}

        {currentView === 'admin' && isAuthenticated && (
          <AdminView 
            onLogout={handleLogout} 
            zones={zones}
            onUpdateZone={handleUpdateZone}
          />
        )}

        {currentView === 'error' && (
          <ErrorView onBack={handleBackToSearch} />
        )}
      </I18nProvider>
    </ThemeProvider>
  );
}