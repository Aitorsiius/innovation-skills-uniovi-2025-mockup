import { useState } from 'react';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, MapPin, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Zone, mockDistricts } from '../data/mockData';
import { useI18n } from '../contexts/i18nContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/themeContext';

interface AdminViewProps {
  onLogout: () => void;
  zones: Zone[];
  onUpdateZone: (zoneId: string, newRate: number) => void;
}

export function AdminView({ onLogout, zones, onUpdateZone }: AdminViewProps) {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [pendingRate, setPendingRate] = useState<number | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [expandedDistrict, setExpandedDistrict] = useState<string | null>(null);
  const { t } = useI18n();
  const { theme } = useTheme();

  const districts = mockDistricts.map(district => ({
    ...district,
    zones: zones.filter(zone => zone.districtId === district.id)
  }));

  const toggleDistrict = (districtId: string) => {
    setExpandedDistrict((current: string | null) => (current === districtId ? null : districtId));
  };

  const handleSliderChange = (value: number[]) => {
    setPendingRate(value[0]);
  };

  const handleApplyChanges = () => {
    if (selectedZone && pendingRate !== null) {
      setShowConfirmDialog(true);
    }
  };

  const handleConfirmChange = () => {
    if (selectedZone && pendingRate !== null) {
      onUpdateZone(selectedZone.id, pendingRate);
      setSelectedZone({ ...selectedZone, crimeRate: pendingRate });
      setPendingRate(null);
      setShowConfirmDialog(false);
    }
  };

  const getCrimeRateColor = (rate: number) => {
    if (rate <= 1.5) return '#22c55e';
    if (rate <= 3) return '#eab308';
    return '#ef4444';
  };

  const getCrimeRateLabel = (rate: number) => {
    if (rate <= 1.5) return t.low;
    if (rate <= 3) return t.medium;
    return t.high;
  };

  const getCrimeRateIcon = (rate: number) => {
    if (rate <= 1.5) return CheckCircle;
    if (rate <= 3) return Shield;
    return AlertTriangle;
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="border-b p-3 sm:p-4 bg-card dark:bg-card">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <div>
              <h1 className="text-base sm:text-xl">{t.adminPanel}</h1>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{t.crimeRateManagement}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button onClick={onLogout} variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">{t.logout}</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Sidebar - Centered with max width */}
        <div className="w-full max-w-2xl mx-auto bg-card overflow-y-auto">
          <div className="p-6 space-y-6 max-w-lg mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>{t.districts}</CardTitle>
                <CardDescription>
                  {t.selectZoneToEdit}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {districts.map((district) => {
                    const isExpanded = expandedDistrict === district.id;
                    const contentHeight = isExpanded ? district.zones.length * 56 : 0;
                    return (
                    <div key={district.id} className="border rounded-lg">
                      <button
                        onClick={() => toggleDistrict(district.id)}
                        className="w-full p-3 flex items-center justify-between hover:bg-muted/50 transition-colors rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="font-medium">{t.district} {district.name}</span>
                          <span className="text-sm text-muted-foreground">
                            ({district.zones.length} {t.neighborhoods})
                          </span>
                        </div>
                        {isExpanded ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      
                      <div
                        className="border-t bg-muted/20 overflow-hidden transition-all duration-500 ease-in-out"
                        style={{
                          maxHeight: `${contentHeight}px`,
                          opacity: isExpanded ? 1 : 0,
                          paddingTop: isExpanded ? '0.25rem' : 0,
                          paddingBottom: isExpanded ? '0.25rem' : 0
                        }}
                        aria-hidden={!isExpanded}
                      >
                        {isExpanded && (
                          <div className="animate-in slide-in-from-top-2 duration-500">
                            {district.zones.map((zone) => {
                              const Icon = getCrimeRateIcon(zone.crimeRate);
                              return (
                                <button
                                  key={zone.id}
                                  onClick={() => {
                                    setSelectedZone(zone);
                                    setPendingRate(zone.crimeRate);
                                  }}
                                  className={`w-full text-left p-3 transition-colors border-b last:border-b-0 ${
                                    selectedZone?.id === zone.id
                                      ? 'bg-primary text-primary-foreground'
                                      : 'hover:bg-muted/80'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 pl-4 flex-1 min-w-0">
                                      <span className="truncate">{zone.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2 ml-4 flex-shrink-0 w-24 justify-end">
                                      <Icon 
                                        className="h-4 w-4 flex-shrink-0" 
                                        style={{ color: getCrimeRateColor(zone.crimeRate) }}
                                      />
                                      <span className="text-sm font-medium w-8 text-right">{zone.crimeRate.toFixed(1)}</span>
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {selectedZone && (
              <Card>
                <CardHeader>
                  <CardTitle>{t.edit}: {selectedZone.name}</CardTitle>
                  <CardDescription>
                    {t.adjustRateDescription} (0-5)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label>{t.crimeRateValue}</Label>
                      <span className="text-2xl" style={{ color: getCrimeRateColor(pendingRate ?? selectedZone.crimeRate) }}>
                        {(pendingRate ?? selectedZone.crimeRate).toFixed(1)}
                      </span>
                    </div>
                    <Slider
                      value={[pendingRate ?? selectedZone.crimeRate]}
                      onValueChange={handleSliderChange}
                      min={0}
                      max={5}
                      step={0.5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>0 ({t.veryLow})</span>
                      <span>5 ({t.veryHigh})</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleApplyChanges}
                    className="w-full"
                    size="lg"
                    disabled={pendingRate === null || pendingRate === selectedZone.crimeRate}
                  >
                    {t.applyChanges}
                  </Button>

                  <div className="p-4 rounded-lg border" style={{ borderColor: getCrimeRateColor(selectedZone.crimeRate) }}>
                    <div className="flex items-center gap-2 mb-2">
                      {(() => {
                        const Icon = getCrimeRateIcon(selectedZone.crimeRate);
                        return <Icon className="h-5 w-5" style={{ color: getCrimeRateColor(selectedZone.crimeRate) }} />;
                      })()}
                      <span style={{ color: getCrimeRateColor(selectedZone.crimeRate) }}>
                        {t.level}: {getCrimeRateLabel(selectedZone.crimeRate)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedZone.crimeRate < 2 && t.safeArea}
                      {selectedZone.crimeRate >= 2 && selectedZone.crimeRate < 3.5 && t.moderateArea}
                      {selectedZone.crimeRate >= 3.5 && t.highRiskArea}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t.confirmChangeTitle}</DialogTitle>
            <DialogDescription>
              {t.confirmRateChange}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 p-4">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{t.zone}:</span>
              </div>
              <span className="font-medium">{selectedZone?.name}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span className="text-sm">{t.currentRate}:</span>
              </div>
              <span className="font-medium">{selectedZone?.crimeRate.toFixed(1)}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-orange-500" />
                <span className="text-sm">{t.newRate}:</span>
              </div>
              <span className="font-medium" style={{ color: getCrimeRateColor(pendingRate || 0) }}>
                {pendingRate?.toFixed(1)}
              </span>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
            >
              {t.cancel}
            </Button>
            <Button
              onClick={handleConfirmChange}
            >
              {t.confirmChange}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}