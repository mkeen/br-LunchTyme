interface RestaurantLocation {
  address: string;
  lat: number;
  lng: number;
  postalCode: string;
  cc: string;
  city: string;
  state: string;
  country: string;
  formattedAddress: string[];
}

interface RestaurantContact {
  phone: string;
  formattedPhone: string;
  twitter: string;
}

export interface Restaurant {
  name: string;
  backgroundImageURL: string;
  category: string;
  location: RestaurantLocation;
  contact: RestaurantContact;
}

