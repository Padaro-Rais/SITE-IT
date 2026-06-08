export interface Center {
  id: string;
  name: string;
  address: string;
  landmark: string;
  phone: string[];
  location?: {
    lat: number;
    lng: number;
  };
}

export const CENTERS: Center[] = [
  {
    id: 'aguede-maque',
    name: 'Agoè démakpoè',
    address: 'Agoè démakpoè',
    landmark: 'Église Auto',
    phone: ['70 64 66 41', '70 64 66 34'],
  },
  {
    id: 'adidogome',
    name: 'Adidogomé Atigangomé',
    address: 'Adidogomé Atigangomé',
    landmark: 'Station sanol',
    phone: ['70 64 66 41', '70 64 66 34'],
  },
  {
    id: 'kogan',
    name: 'Kogan',
    address: 'Kogan',
    landmark: 'Mosquée, Mairie, Afiadegnigban',
    phone: ['70 64 66 41', '70 64 66 34'],
  },
];
