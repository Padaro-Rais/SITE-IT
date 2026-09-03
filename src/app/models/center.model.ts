export interface Center {
  id: string;
  name: string;
  city: string;
  address: string;
  landmark: string;
  phone: string[];
  image: string;

  whatsapp: string;

  mapsUrl: string;

  location?: {
    lat: number;
    lng: number;
  };
}

export const CENTERS: Center[] = [

  {
    id: 'agoe-demakpoe',

    name: 'Agoè Démakpoè',

    city: 'Lomé, Togo',

    address: 'Agoè Démakpoè',

    landmark: 'Église Auto Auto',

    phone: [
      '+228 72 69 66 66 ;72 69 99 39'
    ],

    image: 'assets/imag.jpeg',

    whatsapp: 'https://wa.me/22872696666',

    mapsUrl:
      'https://maps.app.goo.gl/rnGWZW5YHRgh8m4z9',

    // À remplacer par les coordonnées GPS exactes
    location: {
      lat: 1.1992870470770933,
      lng: 6.243001836208539
    }
  },


  {
    id: 'adidogome-atigangome',

    name: 'Adidogomé Atigangomé',

    city: 'Lomé, Togo',

    address: 'Adidogomé Atigangomé',

    landmark: 'Station Sanol',

    phone: [
      '+228 70 64 66 34'
    ],

    image: 'assets/imad.jpeg',

    whatsapp: 'https://wa.me/22870646634',

    mapsUrl: 'https://maps.app.goo.gl/zL8b1RapWJQTQi697',

    // À remplacer par les coordonnées GPS exactes
    location: {
      lat:  1.1378679521641297,
      lng: 6.20555254726189
    }
  },


  {
    id: 'kpogan',

    name: 'Kpogan',

    city: 'Lomé, Togo',

    address: 'Kpogan',

    landmark: 'Mosquée, Mairie, Afiadegnigban',

    phone: [
      '+228 70 27 13 14'
    ],

    image: 'assets/imkp.jpeg',

    whatsapp: 'https://wa.me/22870271314',

    mapsUrl:
      'https://maps.app.goo.gl/RsnGgGBSiuPbEvNu7',

    // À remplacer par les coordonnées GPS exactes
    location: {
      lat: 1.3888453590060592,
      lng: 6.181055623157806
    }
  }

];