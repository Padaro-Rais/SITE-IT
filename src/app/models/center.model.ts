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
    phone: ['+228 72 69 66 66'],
  },
  {
    id: 'adidogome',
    name: 'Adidogomé Atigangomé',
    address: 'Adidogomé Atigangomé',
    landmark: 'Station sanol',
    phone: ['+228 70 64 66 34'],
  },
  {
    id: 'kpogan',
    name: 'Kpogan',
    address: 'Kpogan',
    landmark: 'Mosquée, Mairie, Afiadegnigban',
    phone: ['+228 70 27 13 14'],
  },
];
