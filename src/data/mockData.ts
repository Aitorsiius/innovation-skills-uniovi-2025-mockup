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
    title: 'Piso en Casco Antiguo, Oviedo',
    price: 199999,
    location: {
      lat: 43.3649276,
      lng: -5.8516202,
      address: 'Calle Melquiades Álvarez',
      zone: 'Casco Antiguo'
    },
    rentalYield: 6.8,
    nearbyServices: [
      { type: 'bank', name: 'Bankinter', distance: 0.05, lat: 43.3645, lng: -5.8519 },
      { type: 'supermarket', name: 'Alimerka', distance: 0.15, lat: 43.3661, lng: -5.8508 },
      { type: 'school', name: 'Colegio La Compañía de Jesús', distance: 0.11, lat: 43.3654, lng: -5.8504 },
      { type: 'healthcare', name: 'Centro Médico Campoamor', distance: 0.08, lat: 43.3656, lng: -5.8520 },
      { type: 'pharmacy', name: 'Farmacia Cavia', distance: 0.10, lat: 43.3649, lng: -5.8504 },
      { type: 'transport', name: 'Uría La Llave', distance: 0.06, lat: 43.3648, lng: -5.8523 }
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
      address: 'Calle Rosal',
      zone: 'Casco Antiguo'
    },
    rentalYield: 5.09,
    nearbyServices: [
      { type: 'bank', name: 'ABANCA', distance: 0.2, lat: 43.36038360479134, lng: -5.848396495162587 },
      { type: 'supermarket', name: 'Alimerka', distance: 0.1, lat: 43.35964464997573, lng: -5.848506455198496 },
      { type: 'school', name: 'IES Alfonso II', distance: 0.3, lat: 43.359192277594964, lng: -5.8502981705654475 },
      { type: 'healthcare', name: 'Centro de Salud Paulino Prieto', distance: 0.1, lat: 43.35912384227214, lng: -5.847023204232178 },
      { type: 'pharmacy', name: 'Farmacia Cristina Ordiales', distance: 0.1, lat: 43.35974029796007, lng: -5.847747387291729 },
      { type: 'transport', name: 'Martínez Marina', distance: 0.2, lat: 43.35885094487873, lng: -5.846776430543832 }
    ]
  },
  {
    id: '3', // Piso C
    url: 'https://www.idealista.com/inmueble/109725657/',
    title: 'Piso en Casco Antiguo, Oviedo',
    price: 229999,
    location: {
      lat: 43.3559,
      lng: -5.8481,
      address: 'Calle Sacramento, 24',
      zone: 'Casco Antiguo'
    },
    rentalYield: 5.04,
    nearbyServices: [
      { type: 'pharmacy', name: 'Farmacia Muñoz Degraín', distance: 0.14, lat: 43.3570654, lng: -5.8488769 },
      { type: 'school', name: 'IES Alfonso II', distance: 0.23, lat: 43.3566806, lng: -5.8508095 },
      { type: 'supermarket', name: 'Alimerka', distance: 0.13, lat: 43.3559241, lng: -5.8496651 },
      { type: 'transport', name: 'González Besada', distance: 0.17, lat: 43.3564, lng: -5.8501 },
      { type: 'healthcare', name: 'Centro de Salud La Lila', distance: 0.37, lat: 43.3591691, lng: -5.8469356 },
      { type: 'bank', name: 'Banco Santander', distance: 0.14, lat: 43.3570654, lng: -5.8488769 }
    ]
  },
  {
    id: '4', // Piso D
    url: 'https://www.idealista.com/inmueble/109260462/',
    title: 'Piso en Casco Antiguo, Oviedo',
    price: 219500,
    location: {
      lat: 43.3619,
      lng: -5.8556,
      address: 'Calle Marques de Teverga, 5',
      zone: 'Casco Antiguo'
    },
    rentalYield: 5.38,
    nearbyServices: [
      { type: 'pharmacy', name: 'Farmacia Plaza de América', distance: 0.13, lat: 43.3609344, lng: -5.8564839 },
      { type: 'school', name: 'IES Aramo', distance: 0.37, lat: 43.3590022, lng: -5.8579508 },
      { type: 'supermarket', name: 'Alimerka', distance: 0.20, lat: 43.3601467, lng: -5.8560365 },
      { type: 'transport', name: 'Plaza de América', distance: 0.13, lat: 43.3611000, lng: -5.8568000 },
      { type: 'healthcare', name: 'Centro Médico Asturias', distance: 0.71, lat: 43.3650911, lng: -5.8478916 },
      { type: 'bank', name: 'Banco Sabadell', distance: 0.36, lat: 43.3607093, lng: -5.8598146 }
    ]
  },
  {
    id: '5', // Piso E
    url: 'https://www.idealista.com/inmueble/109261920/',
    title: 'Piso en Casco Antiguo, Oviedo',
    price: 169900,
    location: {
      lat: 43.357,
      lng: -5.8415,
      address: 'Calle Fernando Alonso Díaz',
      zone: 'Casco Antiguo'
    },
    rentalYield: 6.34,
    nearbyServices: [
      { type: 'bank', name: 'Unicaja Banco', distance: 0.13, lat: 43.3569, lng: -5.8431 },
      { type: 'supermarket', name: 'Carrefour Express', distance: 0.15, lat: 43.3576, lng: -5.8431 },
      { type: 'school', name: 'CEIP San Lázaro', distance: 0.17, lat: 43.3559, lng: -5.8429 },
      { type: 'healthcare', name: 'Centro de Salud de Otero', distance: 0.42, lat: 43.3544, lng: -5.8377 },
      { type: 'pharmacy', name: 'Farmacia', distance: 0.15, lat: 43.3576, lng: -5.8431 },
      { type: 'transport', name: 'San Lázaro', distance: 0.15, lat: 43.3576, lng: -5.8431 }
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
      address: 'Calle San Antonio, 9',
      zone: 'Casco Antiguo'
    },
    rentalYield: 9.68,
    nearbyServices: [
      { type: 'bank', name: 'Sabadell', distance: 0.4, lat: 43.3612138, lng: -5.8470829 },
      { type: 'supermarket', name: 'Mercadona', distance: 0.4, lat: 43.3596228, lng: -5.8460644 },
      { type: 'school', name: 'Colegio Público Dolores Medio', distance: 0.4, lat: 43.3637011, lng: -5.8457342 },
      { type: 'healthcare', name: 'Centro de Salud Paulino Prieto', distance: 0.5, lat: 43.3591691, lng: -5.8469356 },
      { type: 'pharmacy', name: 'Farmacia', distance: 0.2, lat: 43.3596017, lng: -5.8448496 },
      { type: 'transport', name: 'Santa Susana', distance: 0.7, lat: 43.3581796, lng: -5.8487157 }
    ]
  },
  {
    id: '7', // Piso I
    url: 'https://www.idealista.com/inmueble/109685182/',
    title: 'Piso en Llamaquique, Oviedo', 
    price: 265000,
    location: {
      lat: 43.3635,
      lng: -5.841,
      address: 'Calle Azcárraga',
      zone: 'Casco Antiguo'
    },
    rentalYield: 3.3,
    nearbyServices: [
      { type: 'pharmacy', name: 'Farmacia Ldo. Pérez', distance: 0.25, lat: 43.3637186, lng: -5.8440887 },
      { type: 'school', name: 'Instituto Santa María del Naranco', distance: 0.38, lat: 43.3637011, lng: -5.8457342 },
      { type: 'supermarket', name: 'Alimerka', distance: 0.19, lat: 43.3639642, lng: -5.8433422 },
      { type: 'transport', name: 'Calle Azcárraga', distance: 0.05, lat: 43.3633000, lng: -5.8415000 },
      { type: 'healthcare', name: 'Centro Médico Asturias', distance: 0.58, lat: 43.3650911, lng: -5.8478916 },
      { type: 'bank', name: 'CaixaBank', distance: 0.25, lat: 43.3637186, lng: -5.8440887 }
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
      address: 'Calle Miguel Ángel Blanco, 59',
      zone: 'La Argañosa'
    },
    rentalYield: 7.65,
    nearbyServices: [
      { type: 'bank', name: 'BBVA', distance: 1.0, lat: 43.36125, lng: -5.85449 },
      { type: 'supermarket', name: 'Covirán', distance: 0.2, lat: 43.3646897, lng: -5.8646787 },
      { type: 'school', name: 'Colegio Nazaret', distance: 0.2, lat: 43.3626194, lng: -5.8644527 },
      { type: 'healthcare', name: 'Centro de Salud La Ería', distance: 0.3, lat: 43.36222, lng: -5.86574 },
      { type: 'pharmacy', name: 'Farmacia', distance: 0.5, lat: 43.3646507, lng: -5.8622972 },
      { type: 'transport', name: 'Puente de La Argañosa', distance: 0.3, lat: 43.3634621, lng: -5.8615043 }
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
      address: 'Calle Fuertes Acevedo, 43',
      zone: 'Buenavista'
    },
    rentalYield: 9.21,
    nearbyServices: [
      { type: 'bank', name: 'Sabadell', distance: 0.1, lat: 43.3581, lng: -5.87027 },
      { type: 'supermarket', name: 'Alimerka', distance: 0.2, lat: 43.35857, lng: -5.86885 },
      { type: 'school', name: 'Colegio Público Buenavista II', distance: 0.8, lat: 43.35813, lng: -5.86247 },
      { type: 'healthcare', name: 'Centro de Salud La Ería', distance: 0.8, lat: 43.36221, lng: -5.86604 },
      { type: 'pharmacy', name: 'Farmacia', distance: 0.2, lat: 43.35777, lng: -5.87143 },
      { type: 'transport', name: 'Plaza de Toros', distance: 0.3, lat: 43.35868, lng: -5.86783 }
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
      address: 'Avenida de las Segadas',
      zone: 'Montecerrao'
    },
    rentalYield: 6.08,
    nearbyServices: [
      { type: 'bank', name: 'Sabadell', distance: 0.4, lat: 43.35571, lng: -5.85861 },
      { type: 'supermarket', name: 'Mercadona', distance: 0.5, lat: 43.35458, lng: -5.85975 },
      { type: 'school', name: 'CEIP Buenavista I', distance: 0.7, lat: 43.35661, lng: -5.86061 },
      { type: 'healthcare', name: 'Centro de Salud El Cristo', distance: 0.8, lat: 43.35637, lng: -5.8626 },
      { type: 'pharmacy', name: 'Farmacia Hermanos Escobedo', distance: 0.6, lat: 43.35617, lng: -5.86062 },
      { type: 'transport', name: 'Joaquín Villa Cañal', distance: 0.6, lat: 43.35418, lng: -5.86141 }
    ]
  },
  {
    id: '11',
    url: 'https://www.idealista.com/inmueble/10487166/',
    title: 'Piso en La Corredoria, Oviedo',
    price: 149000,
    location: {
      lat: 43.382950,
      lng: -5.822920,
      address: 'Calle Francisco Pintado Fe, 18',
      zone: 'La Corredoria'
    },
    rentalYield: 6.45, 
    nearbyServices: [
      { 
        type: 'supermarket', 
        name: 'Mercadona', 
        distance: 0.14, 
        lat: 43.384120, 
        lng: -5.821850 
      },
      { 
        type: 'healthcare', 
        name: 'Centro de Salud La Corredoria', 
        distance: 0.15, 
        lat: 43.381890, 
        lng: -5.824100 
      },
      { 
        type: 'pharmacy', 
        name: 'Farmacia Ldo. José Manuel', 
        distance: 0.05, 
        lat: 43.383100, 
        lng: -5.823150 
      },
      { 
        type: 'transport', 
        name: 'Estación Renfe La Corredoria', 
        distance: 0.55, 
        lat: 43.386340, 
        lng: -5.828210 
      },
      { 
        type: 'school', 
        name: 'IES La Corredoria', 
        distance: 0.42, 
        lat: 43.385510, 
        lng: -5.826050 
      },
      { 
        type: 'bank', 
        name: 'Unicaja Banco', 
        distance: 0.04, 
        lat: 43.382600, 
        lng: -5.823010 
      }
    ]
  },
  {
    id: '12',
    url: 'https://www.idealista.com/inmueble/10734615/', 
    title: 'Piso en Ventanielles, Oviedo',
    price: 68500,
    location: {
      lat: 43.367120,
      lng: -5.830150,
      address: 'Calle Río Sella, 12',
      zone: 'Ventanielles'
    },
    rentalYield: 7.85,
    nearbyServices: [
      { 
        type: 'supermarket', 
        name: 'Supermercado DIA', 
        distance: 0.18, 
        lat: 43.366510, 
        lng: -5.828540 
      },
      { 
        type: 'healthcare', 
        name: 'Centro de Salud Ventanielles', 
        distance: 0.25, 
        lat: 43.368210, 
        lng: -5.827550 
      },
      { 
        type: 'school', 
        name: 'Colegio Público Ventanielles', 
        distance: 0.30, 
        lat: 43.369100, 
        lng: -5.829200 
      },
      { 
        type: 'pharmacy', 
        name: 'Farmacia Lda. Maria Teresa', 
        distance: 0.22, 
        lat: 43.368050, 
        lng: -5.828100 
      },
      { 
        type: 'transport', 
        name: 'Parada Tenderina Baja', 
        distance: 0.15, 
        lat: 43.366800, 
        lng: -5.831500 
      },
      { 
        type: 'bank', 
        name: 'Cajero Unicaja', 
        distance: 0.20, 
        lat: 43.366200, 
        lng: -5.832100 
      }
    ]
  }
];

export const mockZones: Zone[] = [
  // Distrito 1
  { id: '1', name: 'Casco Antiguo', crimeRate: 1.0, coordinates: { lat: 43.3617, lng: -5.8493 }, districtId: '1' },
  { id: '2', name: 'Centro-Este', crimeRate: 1.0, coordinates: { lat: 43.3625, lng: -5.8430 }, districtId: '1' },
  { id: '3', name: 'Centro-Norte', crimeRate: 1.0, coordinates: { lat: 43.3610, lng: -5.8530 }, districtId: '1' },
  { id: '4', name: 'Centro-Oeste', crimeRate: 1.0, coordinates: { lat: 43.3640, lng: -5.8530 }, districtId: '1' },
  { id: '5', name: 'Centro-Sur', crimeRate: 1.0, coordinates: { lat: 43.3590, lng: -5.8550 }, districtId: '1' },

  // Distrito 2
  { id: '6', name: 'Ciudad Naranco', crimeRate: 2.0, coordinates: { lat: 43.3680, lng: -5.8550 }, districtId: '2' },
  { id: '7', name: 'Vallobín', crimeRate: 2.0, coordinates: { lat: 43.3720, lng: -5.8550 }, districtId: '2' },
  { id: '8', name: 'La Florida', crimeRate: 1.0, coordinates: { lat: 43.3685, lng: -5.8390 }, districtId: '2' },
  { id: '9', name: 'Las Campas', crimeRate: 1.0, coordinates: { lat: 43.3660, lng: -5.8310 }, districtId: '2' },
  { id: '10', name: 'San Claudio', crimeRate: 2.0, coordinates: { lat: 43.3730, lng: -5.8300 }, districtId: '2' },
  // Distrito 3
  { id: '11', name: 'La Monxina', crimeRate: 2.0, coordinates: { lat: 43.3556, lng: -5.8683 }, districtId: '3' },
  { id: '12', name: 'Guillén-La Fuerza', crimeRate: 2.0, coordinates: { lat: 43.3550, lng: -5.8610 }, districtId: '3' },
  { id: '13', name: 'La Corredoria', crimeRate: 2.0, coordinates: { lat: 43.3514, lng: -5.8597 }, districtId: '3' },

  // Distrito 4
  { id: '14', name: 'San Lázaro', crimeRate: 3.0, coordinates: { lat: 43.3690, lng: -5.8070 }, districtId: '4' },
  { id: '15', name: 'Otero', crimeRate: 3.0, coordinates: { lat: 43.3865, lng: -5.8150 }, districtId: '4' },
  { id: '16', name: 'Tenderina', crimeRate: 3.0, coordinates: { lat: 43.3853, lng: -5.8208 }, districtId: '4' },
  { id: '17', name: 'Fonzaneldi', crimeRate: 3.0, coordinates: { lat: 43.3480, lng: -5.8080 }, districtId: '4' },
  { id: '18', name: 'Ventanielles', crimeRate: 4.0, coordinates: { lat: 43.3575, lng: -5.8450 }, districtId: '4' },
  { id: '19', name: 'Colloto', crimeRate: 2.0, coordinates: { lat: 43.3575, lng: -5.8450 }, districtId: '4' },

  // Distrito 5
  { id: '20', name: 'La Argañosa', crimeRate: 2.0, coordinates: { lat: 43.3650, lng: -5.8620 }, districtId: '5' },
  { id: '21', name: 'La Ería', crimeRate: 0, coordinates: { lat: 43.3620, lng: -5.8720 }, districtId: '5' },
  { id: '22', name: 'Buenavista', crimeRate: 1.0, coordinates: { lat: 43.3635, lng: -5.8670 }, districtId: '5' },
  { id: '23', name: 'El Cristo', crimeRate: 1.0, coordinates: { lat: 43.3700, lng: -5.8780 }, districtId: '5' },
  { id: '24', name: 'Montecerrao', crimeRate: 0, coordinates: { lat: 43.3660, lng: -5.8650 }, districtId: '5' },
    { id: '25', name: 'Olivares', crimeRate: 1.0, coordinates: { lat: 43.3660, lng: -5.8650 }, districtId: '5' },

  // Distrito 6
  { id: '26', name: 'Pumarín', crimeRate: 2.0, coordinates: { lat: 43.3490, lng: -5.8750 }, districtId: '6' },
  { id: '27', name: 'Teatinos', crimeRate: 2.0, coordinates: { lat: 43.3683, lng: -5.8444 }, districtId: '6' },
  { id: '28', name: 'Pando-Oviedo', crimeRate: 2.0, coordinates: { lat: 43.3560, lng: -5.9180 }, districtId: '6' },
  { id: '29', name: 'El Pontón de Vaqueros', crimeRate: 2.0, coordinates: { lat: 43.3595, lng: -5.8340 }, districtId: '6' }
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