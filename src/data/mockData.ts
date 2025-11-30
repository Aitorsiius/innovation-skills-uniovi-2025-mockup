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
  districtId: string;
}

export interface District {
  id: string;
  name: string;
  zones: Zone[];
}

export const mockProperties: Property[] = [
  {
    id: '1', // Piso A
    url: 'https://www.idealista.com/inmueble/97904988/',
    title: 'Piso en Centro-Casco Historico, Oviedo',
    price: 199999,
    location: {
      lat: 43.3649276,
      lng: -5.8516202,
      address: 'Calle Melquiades Alvarez',
      zone: 'Casco Antiguo'
    },
    rentalYield: 6.8,
    crimeRate: 1.5,
    nearbyServices: [
      { type: 'bank', name: 'Bankinter', distance: 0.2, lat: 43.3645, lng: -5.8519 },
      { type: 'supermarket', name: 'Alimerka', distance: 0.3, lat: 43.3661, lng: -5.8508},
      { type: 'school', name: 'Colegio La Compañía de Jesús', distance: 0.5, lat: 43.3654, lng: -5.8504 },
      { type: 'healthcare', name: 'Centro Médico Campoamor', distance: 0.4, lat: 43.3656, lng: -5.8520 },
      { type: 'pharmacy', name: 'Farmacia Cavia', distance: 0.1, lat: 43.3649, lng: -5.8504 },
      { type: 'transport', name: 'Parada de Bus', distance: 0.3, lat: 43.3648, lng: -5.8523 }
    ]
  },
  {
    id: '2', // Piso B
    url: 'https://www.idealista.com/inmueble/89066815/',
    title: 'Apartamento en Casco Antiguo, Oviedo',
    price: 220000,
    location: {
      lat: 43.3598521,
      lng: -5.8474118,
      address: 'Calle Rosal, Oviedo',
      zone: 'Casco Antiguo'
    },
    rentalYield: 5.09,
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
    id: '3', // Piso C
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
      { 
        type: 'pharmacy', 
        name: 'Farmacia Muñoz Degraín', 
        distance: 0.1, 
        lat: 43.3570654, 
        lng: -5.8488769 
      },
      { 
        type: 'school', 
        name: 'IES Alfonso II', 
        distance: 0.3, 
        lat: 43.3566806, 
        lng: -5.8508095 
      },
      { 
        type: 'supermarket', 
        name: 'Alimerka', 
        distance: 0.2, 
        lat: 43.3559241, 
        lng: -5.8496651 
      },
      { 
        type: 'transport', 
        name: 'Parada de bus', 
        distance: 2.8, 
        lat: 43.3721163, 
        lng: -5.8246176 
      },
      { 
        type: 'healthcare', 
        name: 'Centro de Salud La Lila', 
        distance: 0.4, 
        lat: 43.3591691, 
        lng: -5.8469356 
      },
      { 
        type: 'bank', 
        name: 'Banco Santander', 
        distance: 0.1, 
        lat: 43.3570654, 
        lng: -5.8488769 
      }
    ]
  },
  {
    id: '4', //Piso D
    url: 'https://www.idealista.com/inmueble/109260462/',
    title: 'Piso en Centro-Casco Histórico, Oviedo  ',
    price: 219500,
    location: {
      lat: 43.3619,
      lng: -5.8556,
      address: 'Calle Marques de Teverga 5, Oviedo',
      zone: 'Casco Antiguo'
    },
    rentalYield: 5.38,
    crimeRate: 1.5,
    nearbyServices: [
      { type: 'pharmacy', name: 'Farmacia Plaza de América', distance: 0.1, lat: 43.3609344, lng: -5.8564839 },
      { type: 'school', name: 'IES Aramo', distance: 0.2, lat: 43.3590022, lng: -5.8579508 },
      { type: 'supermarket', name: 'Alimerka', distance: 0.1, lat: 43.3601467, lng: -5.8560365 },
      { type: 'transport', name: 'Parada de bus', distance: 2.9, lat: 43.3721163, lng: -5.8246176 },
      { type: 'healthcare', name: 'Centro Médico Asturias', distance: 0.5, lat: 43.3650911, lng: -5.8478916 },
      { type: 'bank', name: 'Banco Sabadell', distance: 0.1, lat: 43.3607093, lng: -5.8598146 }
    ]
  },
  {
    id: '5', // Piso E
    url: 'https://www.idealista.com/inmueble/109261920/',
    title: 'Piso en Centro-Casco Historico, Oviedo',
    price: 169900,
    location: {
      lat: 43.357,
      lng: -5.8415,
      address: 'Calle Fernando Alonso Diaz',
      zone: 'Casco Antiguo'
    },
    rentalYield: 6.34,
    crimeRate: 1.5,
    nearbyServices: [
      { type: 'bank', name: 'Unicaja Banco', distance: 0.25, lat: 43.3569, lng: -5.8431 },
      { type: 'supermarket', name: 'Carrefour Express', distance: 0.15, lat: 43.3576, lng: -5.8431 },
      { type: 'school', name: 'Colegio CEIP San Lazaro', distance: 0.5, lat: 43.3559, lng: -5.8429 },
      { type: 'healthcare', name: 'Centro de Salud de Otero', distance: 0.45, lat: 43.3544, lng: -5.8377 },
      { type: 'pharmacy', name: 'Farmacia', distance: 0.2, lat: 43.3576, lng: -5.8431 },
      { type: 'transport', name: 'Parada de Bus', distance: 0.35, lat: 43.3576, lng: -5.8431 }
    ]
  },
  {
    id: '6', // Piso F
    url: 'https://www.idealista.com/inmueble/108981641/',
    title: 'Piso en Casco Antiguo, Oviedo', 
    price: 195000,
    location: {
      lat: 43.3613905,
      lng: -5.8440664,
      address: 'Calle San Antonio 9, Oviedo',
      zone: 'Casco Antiguo'
    },
    rentalYield: 9.68,
    crimeRate: 1.0,
    nearbyServices: [
      { type: 'bank', name: 'CaixaBank', distance: 0.18, lat: 40.4354, lng: -3.6820 },
      { type: 'supermarket', name: 'Sánchez Romero', distance: 0.22, lat: 40.4358, lng: -3.6788 },
      { type: 'school', name: 'British Council School', distance: 0.6, lat: 40.4392, lng: -3.6755 },
      { type: 'healthcare', name: 'Hospital Universitario', distance: 0.8, lat: 40.4410, lng: -3.6735 },
      { type: 'pharmacy', name: 'Farmacia Velázquez', distance: 0.12, lat: 40.4349, lng: -3.6815 },
      { type: 'transport', name: 'Metro Velázquez', distance: 0.25, lat: 40.4315, lng: -3.6835 }
    ]
  },
  {
    id: '7', // Piso I
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
  },
  {
    id: '8', // Piso N
    url: 'https://www.idealista.com/inmueble/109405076/',
    title: 'Piso en La Argañosa, Oviedo',
    price: 175000,
    location: {
      lat: 43.3634546,
      lng: -5.8639711,
      address: 'Calle Miguel Ángel Blanco 59, Oviedo',
      zone: 'La Argañosa'
    },
    rentalYield: 7.65,
    crimeRate: 1.0,
    nearbyServices: [
      { type: 'bank', name: 'CaixaBank', distance: 0.18, lat: 40.4354, lng: -3.6820 },
      { type: 'supermarket', name: 'Sánchez Romero', distance: 0.22, lat: 40.4358, lng: -3.6788 },
      { type: 'school', name: 'British Council School', distance: 0.6, lat: 40.4392, lng: -3.6755 },
      { type: 'healthcare', name: 'Hospital Universitario', distance: 0.8, lat: 40.4410, lng: -3.6735 },
      { type: 'pharmacy', name: 'Farmacia Velázquez', distance: 0.12, lat: 40.4349, lng: -3.6815 },
      { type: 'transport', name: 'Metro Velázquez', distance: 0.25, lat: 40.4315, lng: -3.6835 }
    ]
  },
  {
    id: '9', // Piso O
    url: 'https://www.idealista.com/inmueble/109807493/',
    title: 'Piso en Buenavista, Oviedo',
    price: 135000,
    location: {
      lat: 43.3582818,
      lng: -5.8693566,
      address: 'Calle Fuertes Acevedo 43, Oviedo',
      zone: 'Buenavista'
    },
    rentalYield: 9.21,
    crimeRate: 1.0,
    nearbyServices: [
      { type: 'bank', name: 'CaixaBank', distance: 0.18, lat: 40.4354, lng: -3.6820 },
      { type: 'supermarket', name: 'Sánchez Romero', distance: 0.22, lat: 40.4358, lng: -3.6788 },
      { type: 'school', name: 'British Council School', distance: 0.6, lat: 40.4392, lng: -3.6755 },
      { type: 'healthcare', name: 'Hospital Universitario', distance: 0.8, lat: 40.4410, lng: -3.6735 },
      { type: 'pharmacy', name: 'Farmacia Velázquez', distance: 0.12, lat: 40.4349, lng: -3.6815 },
      { type: 'transport', name: 'Metro Velázquez', distance: 0.25, lat: 40.4315, lng: -3.6835 }
    ]
  },
  {
    id: '10', // Piso P
    url: 'https://www.idealista.com/inmueble/109730797/',
    title: 'Piso en Montecerrao, Oviedo',
    price: 220000,
    location: {
      lat: 43.3538199,
      lng: -5.8582278,
      address: 'Avenida de las Segadas, Oviedo',
      zone: 'Montecerrao'
    },
    rentalYield: 6.08,
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
  // Distrito 1
  { id: '1', name: 'Casco Antiguo', crimeRate: 3.2, coordinates: { lat: 43.3617, lng: -5.8493 }, districtId: '1' },
  { id: '2', name: 'Centro-Este', crimeRate: 1.5, coordinates: { lat: 43.3625, lng: -5.8430 }, districtId: '1' },
  { id: '3', name: 'Centro-Norte', crimeRate: 1.5, coordinates: { lat: 43.3610, lng: -5.8530 }, districtId: '1' },
  { id: '4', name: 'Centro-Oeste', crimeRate: 1.7, coordinates: { lat: 43.3640, lng: -5.8530 }, districtId: '1' },
  { id: '5', name: 'Centro-Sur', crimeRate: 1.8, coordinates: { lat: 43.3590, lng: -5.8550 }, districtId: '1' },

  // Distrito 2
  { id: '6', name: 'Ciudad Naranco', crimeRate: 2.4, coordinates: { lat: 43.3680, lng: -5.8550 }, districtId: '2' },
  { id: '7', name: 'Vallobín', crimeRate: 1.6, coordinates: { lat: 43.3720, lng: -5.8550 }, districtId: '2' },
  { id: '8', name: 'La Florida', crimeRate: 2.7, coordinates: { lat: 43.3685, lng: -5.8390 }, districtId: '2' },
  { id: '9', name: 'Las Campas', crimeRate: 3.1, coordinates: { lat: 43.3660, lng: -5.8310 }, districtId: '2' },
  { id: '10', name: 'San Claudio', crimeRate: 3.4, coordinates: { lat: 43.3730, lng: -5.8300 }, districtId: '2' },
  // Distrito 3
  { id: '11', name: 'La Monxina', crimeRate: 2.2, coordinates: { lat: 43.3556, lng: -5.8683 }, districtId: '3' },
  { id: '12', name: 'Guillén-La Fuerza', crimeRate: 1.9, coordinates: { lat: 43.3550, lng: -5.8610 }, districtId: '3' },
  { id: '13', name: 'La Corredoria', crimeRate: 1.4, coordinates: { lat: 43.3514, lng: -5.8597 }, districtId: '3' },

  // Distrito 4
  { id: '14', name: 'San Lázaro', crimeRate: 2.6, coordinates: { lat: 43.3690, lng: -5.8070 }, districtId: '4' },
  { id: '15', name: 'Otero', crimeRate: 3.0, coordinates: { lat: 43.3865, lng: -5.8150 }, districtId: '4' },
  { id: '16', name: 'Tenderina', crimeRate: 3.5, coordinates: { lat: 43.3853, lng: -5.8208 }, districtId: '4' },
  { id: '17', name: 'Fonzaneldi', crimeRate: 1.2, coordinates: { lat: 43.3480, lng: -5.8080 }, districtId: '4' },
  { id: '18', name: 'Ventanielles', crimeRate: 2.1, coordinates: { lat: 43.3575, lng: -5.8450 }, districtId: '4' },
  { id: '19', name: 'Colloto', crimeRate: 2.1, coordinates: { lat: 43.3575, lng: -5.8450 }, districtId: '4' },

  // Distrito 5
  { id: '20', name: 'La Argañosa', crimeRate: 2.8, coordinates: { lat: 43.3650, lng: -5.8620 }, districtId: '5' },
  { id: '21', name: 'La Ería', crimeRate: 1.8, coordinates: { lat: 43.3620, lng: -5.8720 }, districtId: '5' },
  { id: '22', name: 'Buenavista', crimeRate: 2.3, coordinates: { lat: 43.3635, lng: -5.8670 }, districtId: '5' },
  { id: '23', name: 'El Cristo', crimeRate: 2.0, coordinates: { lat: 43.3700, lng: -5.8780 }, districtId: '5' },
  { id: '24', name: 'Montecerrado', crimeRate: 2.9, coordinates: { lat: 43.3660, lng: -5.8650 }, districtId: '5' },
    { id: '25', name: 'Olivares', crimeRate: 2.9, coordinates: { lat: 43.3660, lng: -5.8650 }, districtId: '5' },

  // Distrito 6
  { id: '26', name: 'Pumarín', crimeRate: 1.3, coordinates: { lat: 43.3490, lng: -5.8750 }, districtId: '6' },
  { id: '27', name: 'Teatinos', crimeRate: 3.3, coordinates: { lat: 43.3683, lng: -5.8444 }, districtId: '6' },
  { id: '28', name: 'Pando-Oviedo', crimeRate: 2.0, coordinates: { lat: 43.3560, lng: -5.9180 }, districtId: '6' },
  { id: '29', name: 'El Pontón de Vaqueros', crimeRate: 2.8, coordinates: { lat: 43.3595, lng: -5.8340 }, districtId: '6' }
];

export const mockDistricts: District[] = [
  {
    id: '1',
    name: '1',
    zones: mockZones.filter(zone => zone.districtId === '1')
  },
  {
    id: '2',
    name: '2',
    zones: mockZones.filter(zone => zone.districtId === '2')
  },
  {
    id: '3',
    name: '3',
    zones: mockZones.filter(zone => zone.districtId === '3')
  },
  {
    id: '4',
    name: '4',
    zones: mockZones.filter(zone => zone.districtId === '4')
  },
  {
    id: '5',
    name: '5',
    zones: mockZones.filter(zone => zone.districtId === '5')
  },
  {
    id: '6',
    name: '6',
    zones: mockZones.filter(zone => zone.districtId === '6')
  }
];
export const mockAdmin = {
  username: 'admin',
  password: 'admin123'
};