import { useState } from 'react';
import { ArrowLeft, TrendingUp, AlertTriangle, Euro, Building2, Landmark, ShoppingCart, GraduationCap, Heart, Pill, Bus, Eye, EyeOff, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Badge } from './ui/badge';
import { InteractiveMap } from './InteractiveMap';
import { CrimeRateIndicator } from './CrimeRateIndicator';
import { Property, Zone } from '../data/mockData';
import { useI18n } from '../contexts/i18nContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

interface PropertyViewProps {
  property: Property;
  onBack: () => void;
  onSelectProperty: (property: Property) => void;
  zones: Zone[];
}

const serviceIcons = {
  bank: Landmark,
  supermarket: ShoppingCart,
  school: GraduationCap,
  healthcare: Heart,
  pharmacy: Pill,
  transport: Bus
};

const serviceColors = {
  bank: 'text-blue-600 border-blue-600',
  supermarket: 'text-green-600 border-green-600',
  school: 'text-purple-600 border-purple-600',
  healthcare: 'text-red-600 border-red-600',
  pharmacy: 'text-pink-600 border-pink-600',
  transport: 'text-orange-600 border-orange-600'
};

export function PropertyView({ property, onBack, onSelectProperty, zones }: PropertyViewProps) {
  const [showMap, setShowMap] = useState(true);
  const { t } = useI18n();

  // Get updated crime rate from zones
  const zone = zones.find(z => z.name === property.location.zone);
  const crimeRate = zone ? zone.crimeRate : property.crimeRate;

  // Prepare markers for the map
  const getMapMarkers = () => {
    const markers: any[] = [
      {
        id: 'main',
        lat: property.location.lat,
        lng: property.location.lng,
        type: 'property',
        icon: Home
      }
    ];

    // Add service markers using their real coordinates
    property.nearbyServices.forEach((service, index) => {
      markers.push({
        id: `service-${index}`,
        lat: service.lat,
        lng: service.lng,
        type: 'service',
        icon: serviceIcons[service.type],
        color: serviceColors[service.type]
      });
    });

    return markers;
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b p-3 sm:p-4 bg-card z-10 flex-shrink-0">
        <div className="container mx-auto flex items-center gap-2 sm:gap-4">
          <Button onClick={onBack} variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">{t.back}</span>
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-base sm:text-xl truncate">{property.title}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">{property.location.address}</p>
          </div>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Map Section */}
        <div className={`${showMap ? 'w-full lg:flex-1 h-64 sm:h-80 lg:h-full' : 'w-0 h-0 lg:h-full'} relative bg-muted flex-shrink-0 transition-all duration-500 ease-in-out overflow-hidden`}>
          <div className={`${showMap ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out h-full w-full`}>
            <InteractiveMap
              center={{ lat: property.location.lat, lng: property.location.lng }}
              markers={getMapMarkers()}
              zoom={17}
            />
          </div>
        </div>

        {/* Content - Scrollable sidebar */}
        <div className={`${showMap ? 'w-full lg:w-96' : 'flex-1 max-w-2xl mx-auto'} bg-card overflow-y-auto transition-all duration-500 ease-in-out min-h-0`}>

          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Toggle Map Button */}
            <Button 
              onClick={() => setShowMap(!showMap)} 
              variant="outline" 
              className="w-full transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-95"
            >
              <div className="flex items-center justify-center">
                {showMap ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                <span>{showMap ? t.hideMap : t.showMap}</span>
              </div>
            </Button>

            {/* Crime Rate Warning */}
            {crimeRate >= 3.5 && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>{t.warning}</AlertTitle>
                <AlertDescription>
                  {t.crimeWarning}
                </AlertDescription>
              </Alert>
            )}

            {/* Price & Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  {t.mainInfo}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">{t.purchasePrice}</span>
                  <span className="text-lg sm:text-xl">{property.price.toLocaleString('es-ES')} €</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">{t.annualYield}</span>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-lg sm:text-xl">{property.rentalYield}%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">{t.crimeRate}</span>
                  <div className="flex items-center gap-3">
                    <CrimeRateIndicator rate={crimeRate} size="md" />
                    <span className="text-sm">{crimeRate.toFixed(1)}/5</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">{t.estimatedMonthlyRent}</div>
                  <div className="flex items-center gap-2">
                    <Euro className="h-4 w-4 text-blue-600" />
                    <span className="text-base sm:text-lg">
                      {Math.round((property.price * (property.rentalYield / 100)) / 12).toLocaleString('es-ES')} €/{t.month}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">{t.estimatedAnnualIncome}</div>
                  <div className="flex items-center gap-2">
                    <Euro className="h-4 w-4 text-green-600" />
                    <span className="text-base sm:text-lg">
                      {Math.round(property.price * (property.rentalYield / 100)).toLocaleString('es-ES')} €/{t.year}
                    </span>
                  </div>
                </div>
                
              </CardContent>
            </Card>

            {/* Nearby Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">{t.nearbyServices}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 sm:space-y-3">
                  {[...property.nearbyServices]
                    .sort((a, b) => a.distance - b.distance)
                    .map((service, index) => {
                    const Icon = serviceIcons[service.type];
                    const colorClass = serviceColors[service.type];
                    return (
                      <div key={index} className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <div className={`p-1.5 sm:p-2 rounded-full bg-background ${colorClass} flex-shrink-0`}>
                            <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs sm:text-sm truncate">{service.name}</p>
                            <p className="text-xs text-muted-foreground capitalize">{t[service.type as keyof typeof t] || service.type}</p>
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm flex-shrink-0 ml-2">{service.distance} km</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}