import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  // Common
  back: string;
  cancel: string;
  save: string;
  delete: string;
  edit: string;
  
  // Search View
  searchTitle: string;
  searchSubtitle: string;
  searchPlaceholder: string;
  searchButton: string;
  recentSearches: string;
  noRecentSearches: string;
  
  // Property View
  warning: string;
  crimeWarning: string;
  mainInfo: string;
  purchasePrice: string;
  annualYield: string;
  crimeRate: string;
  estimatedMonthlyRent: string;
  estimatedAnnualIncome: string;
  nearbyServices: string;
  hideMap: string;
  showMap: string;
  month: string;
  year: string;
  
  // Crime Rate
  low: string;
  medium: string;
  high: string;
  
  // Services
  bank: string;
  supermarket: string;
  school: string;
  healthcare: string;
  pharmacy: string;
  transport: string;
  
  // Admin View
  adminPanel: string;
  adminSubtitle: string;
  login: string;
  logout: string;
  username: string;
  password: string;
  loginButton: string;
  invalidCredentials: string;
  crimeRateManagement: string;
  zone: string;
  rate: string;
  lastUpdated: string;
  actions: string;
  editRate: string;
  deleteRate: string;
  addNewZone: string;
  addZone: string;
  editZone: string;
  zoneName: string;
  crimeRateValue: string;
  enterZoneName: string;
  rateRange: string;
  applyChanges: string;
  confirmRateChange: string;
  changesSavedSuccessfully: string;
  selectZone: string;
  overviewMap: string;
  selectedZone: string;
  legend: string;
  veryLow: string;
  veryHigh: string;
  currentRate: string;
  newRate: string;
  confirmChange: string;
  safeArea: string;
  moderateArea: string;
  highRiskArea: string;
  zoneList: string;
  madridZones: string;
  selectZoneToEdit: string;
  districts: string;
  neighborhoods: string;
  district: string;
  editZoneName: string;
  adjustRateDescription: string;
  level: string;
  confirmChangeTitle: string;
  confirmChangeDescription: string;
  
  // Error View
  errorTitle: string;
  errorSubtitle: string;
  propertyNotFound: string;
  propertyNotFoundDescription: string;
  backToSearch: string;
}

const translations: Record<Language, Translations> = {
  es: {
    // Common
    back: 'Volver',
    cancel: 'Cancelar',
    save: 'Guardar',
    delete: 'Eliminar',
    edit: 'Editar',
    
    // Search View
    searchTitle: 'Búsqueda de Propiedades',
    searchSubtitle: 'Ingresa el enlace de Idealista para analizar la propiedad',
    searchPlaceholder: 'https://www.idealista.com/inmueble/...',
    searchButton: 'Buscar Propiedad',
    recentSearches: 'Búsquedas Recientes',
    noRecentSearches: 'No hay búsquedas recientes',
    
    // Property View
    warning: 'Advertencia',
    crimeWarning: 'Esta zona tiene una tasa de criminalidad alta. Considere este factor en su decisión.',
    mainInfo: 'Información Principal',
    purchasePrice: 'Precio de compra',
    annualYield: 'Rentabilidad anual',
    crimeRate: 'Tasa de criminalidad',
    estimatedMonthlyRent: 'Precio de renta mensual estimado',
    estimatedAnnualIncome: 'Ingreso anual estimado',
    nearbyServices: 'Servicios Cercanos',
    hideMap: 'Ocultar mapa',
    showMap: 'Mostrar mapa',
    month: 'mes',
    year: 'año',
    
    // Crime Rate
    low: 'Baja',
    medium: 'Media',
    high: 'Alta',
    
    // Services
    bank: 'Banco',
    supermarket: 'Supermercado',
    school: 'Colegio',
    healthcare: 'Centro de salud',
    pharmacy: 'Farmacia',
    transport: 'Transporte',
    
    // Admin View
    adminPanel: 'Panel de Administración',
    adminSubtitle: 'Gestión de tasas de criminalidad por zonas',
    login: 'Iniciar Sesión',
    logout: 'Cerrar Sesión',
    username: 'Usuario',
    password: 'Contraseña',
    loginButton: 'Iniciar Sesión',
    invalidCredentials: 'Usuario o contraseña inválidos',
    crimeRateManagement: 'Gestión de Tasas de Criminalidad',
    zone: 'Zona',
    rate: 'Tasa',
    lastUpdated: 'Última actualización',
    actions: 'Acciones',
    editRate: 'Editar tasa',
    deleteRate: 'Eliminar zona',
    addNewZone: 'Añadir nueva zona',
    addZone: 'Añadir Zona',
    editZone: 'Editar Zona',
    zoneName: 'Nombre de la zona',
    crimeRateValue: 'Tasa de criminalidad',
    enterZoneName: 'Ingrese el nombre de la zona',
    rateRange: 'Valor entre 0 y 5 (pasos de 0.5)',
    applyChanges: 'Aplicar Cambios',
    confirmRateChange: '¿Estás seguro de que deseas cambiar la tasa de criminalidad para esta zona?',
    changesSavedSuccessfully: 'Cambios guardados exitosamente',
    selectZone: 'Seleccionar Zona',
    overviewMap: 'Mapa de Visión General',
    selectedZone: 'Zona Seleccionada',
    legend: 'Leyenda',
    veryLow: 'Muy Baja',
    veryHigh: 'Muy Alta',
    currentRate: 'Tasa Actual',
    newRate: 'Nueva Tasa',
    confirmChange: 'Confirmar Cambio',
    safeArea: 'Esta zona tiene una tasa de criminalidad baja, lo que la hace muy segura para vivir.',
    moderateArea: 'Esta zona tiene una tasa de criminalidad media. Se recomienda tomar precauciones normales.',
    highRiskArea: 'Esta zona tiene una tasa de criminalidad alta. Se recomienda extremar las precauciones.',
    zoneList: 'Lista de Zonas',
    madridZones: 'Zonas de Madrid',
    selectZoneToEdit: 'Selecciona una zona para editar',
    districts: 'Distritos',
    neighborhoods: 'barrios',
    district: 'Distrito',
    editZoneName: 'Editar nombre de la zona',
    adjustRateDescription: 'Ajusta la tasa de criminalidad para esta zona',
    level: 'Nivel',
    confirmChangeTitle: 'Confirmar Cambio',
    confirmChangeDescription: '¿Estás seguro de que deseas aplicar estos cambios?',
    
    // Error View
    errorTitle: 'Error',
    errorSubtitle: 'Ocurrió un problema',
    propertyNotFound: 'Propiedad no encontrada',
    propertyNotFoundDescription: 'No se pudo encontrar la propiedad con el enlace proporcionado. Por favor, verifica el enlace e intenta nuevamente.',
    backToSearch: 'Volver a la búsqueda',
  },
  en: {
    // Common
    back: 'Back',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    
    // Search View
    searchTitle: 'Property Search',
    searchSubtitle: 'Enter the Idealista link to analyze the property',
    searchPlaceholder: 'https://www.idealista.com/property/...',
    searchButton: 'Search Property',
    recentSearches: 'Recent Searches',
    noRecentSearches: 'No recent searches',
    
    // Property View
    warning: 'Warning',
    crimeWarning: 'This area has a high crime rate. Please consider this factor in your decision.',
    mainInfo: 'Main Information',
    purchasePrice: 'Purchase price',
    annualYield: 'Annual yield',
    crimeRate: 'Crime rate',
    estimatedMonthlyRent: 'Estimated monthly rent',
    estimatedAnnualIncome: 'Estimated annual income',
    nearbyServices: 'Nearby Services',
    hideMap: 'Hide map',
    showMap: 'Show map',
    month: 'month',
    year: 'year',
    
    // Crime Rate
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    
    // Services
    bank: 'Bank',
    supermarket: 'Supermarket',
    school: 'School',
    healthcare: 'Healthcare',
    pharmacy: 'Pharmacy',
    transport: 'Transport',
    
    // Admin View
    adminPanel: 'Admin Panel',
    adminSubtitle: 'Crime rate management by zones',
    login: 'Login',
    logout: 'Logout',
    username: 'Username',
    password: 'Password',
    loginButton: 'Login',
    invalidCredentials: 'Invalid username or password',
    crimeRateManagement: 'Crime Rate Management',
    zone: 'Zone',
    rate: 'Rate',
    lastUpdated: 'Last updated',
    actions: 'Actions',
    editRate: 'Edit rate',
    deleteRate: 'Delete zone',
    addNewZone: 'Add new zone',
    addZone: 'Add Zone',
    editZone: 'Edit Zone',
    zoneName: 'Zone name',
    crimeRateValue: 'Crime rate',
    enterZoneName: 'Enter zone name',
    rateRange: 'Value between 0 and 5 (steps of 0.5)',
    applyChanges: 'Apply Changes',
    confirmRateChange: 'Are you sure you want to change the crime rate for this zone?',
    changesSavedSuccessfully: 'Changes saved successfully',
    selectZone: 'Select Zone',
    overviewMap: 'Overview Map',
    selectedZone: 'Selected Zone',
    legend: 'Legend',
    veryLow: 'Very Low',
    veryHigh: 'Very High',
    currentRate: 'Current Rate',
    newRate: 'New Rate',
    confirmChange: 'Confirm Change',
    safeArea: 'This area has a low crime rate, making it very safe to live in.',
    moderateArea: 'This area has a moderate crime rate. Normal precautions are recommended.',
    highRiskArea: 'This area has a high crime rate. Extra precautions are strongly recommended.',
    zoneList: 'Zone List',
    madridZones: 'Madrid Zones',
    selectZoneToEdit: 'Select a zone to edit',
    districts: 'Districts',
    neighborhoods: 'neighborhoods',
    district: 'District',
    editZoneName: 'Edit zone name',
    adjustRateDescription: 'Adjust the crime rate for this zone',
    level: 'Level',
    confirmChangeTitle: 'Confirm Change',
    confirmChangeDescription: 'Are you sure you want to apply these changes?',
    
    // Error View
    errorTitle: 'Error',
    errorSubtitle: 'An error occurred',
    propertyNotFound: 'Property not found',
    propertyNotFoundDescription: 'The property with the provided link could not be found. Please verify the link and try again.',
    backToSearch: 'Back to search',
  }
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}