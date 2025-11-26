export interface Property {
  id: string;
  url: string;
  title: string;
  price: number;
  location: {
    lat: number;
    lng: number;
    address: string;
    zone: string;
  };
  rentalYield: number;
  crimeRate: number; // 0 to 5
  nearbyServices: {
    type: 'bank' | 'supermarket' | 'school' | 'healthcare' | 'pharmacy' | 'transport';
    name: string;
    distance: number;
    lat: number;
    lng: number;
  }[];
}

export interface Zone {
  id: string;
  name: string;
  crimeRate: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const mockProperties: Property[] = [
  {
    id: '1',
    url: 'https://www.idealista.com/inmueble/12345678/',
    title: 'Piso en Salamanca, Madrid',
    price: 450000,
    location: {
      lat: 40.4318,
      lng: -3.6785,
      address: 'Calle Serrano, 45, Madrid',
      zone: 'Salamanca'
    },
    rentalYield: 4.0,
    crimeRate: 2.0,
    nearbyServices: [
      { type: 'bank', name: 'Banco Santander', distance: 0.2, lat: 40.4336, lng: -3.6790 },
      { type: 'supermarket', name: 'Mercadona', distance: 0.3, lat: 40.4345, lng: -3.6770 },
      { type: 'school', name: 'Colegio San Patricio', distance: 0.5, lat: 40.4363, lng: -3.6755 },
      { type: 'healthcare', name: 'Centro de Salud Goya', distance: 0.4, lat: 40.4280, lng: -3.6755 },
      { type: 'pharmacy', name: 'Farmacia Central', distance: 0.1, lat: 40.4327, lng: -3.6795 },
      { type: 'transport', name: 'Metro Velázquez', distance: 0.3, lat: 40.4253, lng: -3.6840 }
    ]
  },
  {
    id: '2',
    url: 'https://www.idealista.com/inmueble/87654321/',
    title: 'Apartamento en Vallecas, Madrid',
    price: 180000,
    location: {
      lat: 40.3897,
      lng: -3.6511,
      address: 'Avenida de la Albufera, 120, Madrid',
      zone: 'Vallecas'
    },
    rentalYield: 5.8,
    crimeRate: 4.0,
    nearbyServices: [
      { type: 'bank', name: 'BBVA', distance: 0.4, lat: 40.3933, lng: -3.6525 },
      { type: 'supermarket', name: 'Carrefour Express', distance: 0.2, lat: 40.3915, lng: -3.6495 },
      { type: 'school', name: 'CEIP Villa de Vallecas', distance: 0.6, lat: 40.3951, lng: -3.6475 },
      { type: 'healthcare', name: 'Centro de Salud Vallecas', distance: 0.5, lat: 40.3852, lng: -3.6475 },
      { type: 'pharmacy', name: 'Farmacia Vallecas', distance: 0.3, lat: 40.3924, lng: -3.6538 },
      { type: 'transport', name: 'Metro Portazgo', distance: 0.7, lat: 40.3834, lng: -3.6448 }
    ]
  },
  {
    id: '3',
    url: 'https://www.idealista.com/inmueble/11223344/',
    title: 'Piso en Chamberí, Madrid',
    price: 380000,
    location: {
      lat: 40.4365,
      lng: -3.7038,
      address: 'Calle Fuencarral, 78, Madrid',
      zone: 'Chamberí'
    },
    rentalYield: 4.5,
    crimeRate: 2.8,
    nearbyServices: [
      { type: 'bank', name: 'CaixaBank', distance: 0.15, lat: 40.4378, lng: -3.7025 },
      { type: 'supermarket', name: 'Día', distance: 0.1, lat: 40.4373, lng: -3.7048 },
      { type: 'school', name: 'Colegio Sagrado Corazón', distance: 0.4, lat: 40.4401, lng: -3.7015 },
      { type: 'healthcare', name: 'Centro de Salud Ríos Rosas', distance: 0.6, lat: 40.4419, lng: -3.6998 },
      { type: 'pharmacy', name: 'Farmacia Chamberí', distance: 0.2, lat: 40.4383, lng: -3.7055 },
      { type: 'transport', name: 'Metro Bilbao', distance: 0.2, lat: 40.4338, lng: -3.7010 }
    ]
  },
  {
    id: '4',
    url: 'https://www.idealista.com/inmueble/22334455/',
    title: 'Ático en Salamanca, Madrid',
    price: 520000,
    location: {
      lat: 40.4328,
      lng: -3.6795,
      address: 'Calle Goya, 32, Madrid',
      zone: 'Salamanca'
    },
    rentalYield: 3.9,
    crimeRate: 1.0,
    nearbyServices: [
      { type: 'bank', name: 'Banco Santander', distance: 0.15, lat: 40.4341, lng: -3.6810 },
      { type: 'supermarket', name: 'El Corte Inglés', distance: 0.25, lat: 40.4351, lng: -3.6778 },
      { type: 'school', name: 'Liceo Español', distance: 0.7, lat: 40.4391, lng: -3.6742 },
      { type: 'healthcare', name: 'Centro Médico Goya', distance: 0.3, lat: 40.4301, lng: -3.6768 },
      { type: 'pharmacy', name: 'Farmacia Goya', distance: 0.1, lat: 40.4337, lng: -3.6805 },
      { type: 'transport', name: 'Metro Goya', distance: 0.2, lat: 40.4308, lng: -3.6820 }
    ]
  },
  {
    id: '5',
    url: 'https://www.idealista.com/inmueble/33445566/',
    title: 'Estudio en Salamanca, Madrid',
    price: 320000,
    location: {
      lat: 40.4308,
      lng: -3.6775,
      address: 'Calle Príncipe de Vergara, 89, Madrid',
      zone: 'Salamanca'
    },
    rentalYield: 4.0,
    crimeRate: 1.8,
    nearbyServices: [
      { type: 'bank', name: 'BBVA', distance: 0.25, lat: 40.4330, lng: -3.6795 },
      { type: 'supermarket', name: 'Carrefour Express', distance: 0.15, lat: 40.4321, lng: -3.6762 },
      { type: 'school', name: 'Colegio Ramón y Cajal', distance: 0.5, lat: 40.4353, lng: -3.6730 },
      { type: 'healthcare', name: 'Clínica La Paz', distance: 0.45, lat: 40.4268, lng: -3.6738 },
      { type: 'pharmacy', name: 'Farmacia Plaza', distance: 0.2, lat: 40.4326, lng: -3.6785 },
      { type: 'transport', name: 'Metro Núñez de Balboa', distance: 0.35, lat: 40.4275, lng: -3.6810 }
    ]
  },
  {
    id: '6',
    url: 'https://www.idealista.com/inmueble/44556677/',
    title: 'Dúplex en Salamanca, Madrid',
    price: 680000,
    location: {
      lat: 40.4338,
      lng: -3.6805,
      address: 'Calle Velázquez, 54, Madrid',
      zone: 'Salamanca'
    },
    rentalYield: 3.7,
    crimeRate: 1.0,
    nearbyServices: [
      { type: 'bank', name: 'CaixaBank', distance: 0.18, lat: 40.4354, lng: -3.6820 },
      { type: 'supermarket', name: 'Sánchez Romero', distance: 0.22, lat: 40.4358, lng: -3.6788 },
      { type: 'school', name: 'British Council School', distance: 0.6, lat: 40.4392, lng: -3.6755 },
      { type: 'healthcare', name: 'Hospital Universitario', distance: 0.8, lat: 40.4410, lng: -3.6735 },
      { type: 'pharmacy', name: 'Farmacia Velázquez', distance: 0.12, lat: 40.4349, lng: -3.6815 },
      { type: 'transport', name: 'Metro Velázquez', distance: 0.25, lat: 40.4315, lng: -3.6835 }
    ]
  }
];

export const mockZones: Zone[] = [
  { id: '1', name: 'Salamanca', crimeRate: 1.5, coordinates: { lat: 40.4318, lng: -3.6785 } },
  { id: '2', name: 'Vallecas', crimeRate: 4.0, coordinates: { lat: 40.3897, lng: -3.6511 } },
  { id: '3', name: 'Chamberí', crimeRate: 3.0, coordinates: { lat: 40.4365, lng: -3.7038 } },
  { id: '4', name: 'Retiro', crimeRate: 2.0, coordinates: { lat: 40.4153, lng: -3.6838 } },
  { id: '5', name: 'Carabanchel', crimeRate: 3.5, coordinates: { lat: 40.3850, lng: -3.7425 } },
  { id: '6', name: 'Moncloa', crimeRate: 2.5, coordinates: { lat: 40.4349, lng: -3.7187 } }
];

export const mockAdmin = {
  username: 'admin',
  password: 'admin123'
};