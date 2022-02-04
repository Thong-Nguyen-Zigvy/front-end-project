
export const FORMAT_DATE = 'YYYY-MM-DD';
export const FORMAT_FULL_DATE_MONTH = 'dddd, MMMM D';
export const FORMAT_FULL_DATE_MONTH_DETAIL = 'dddd, MMMM D';

export const BASE_URL = 'https://099f998e-8348-4d04-83b6-891462df8f52.mock.pstmn.io/';

export const AVT_LIMIT = 4;

export type Contact = {
  name: string;
  phone: string;
  createdAt: string;
}

export type Professional = {
  id: string;
  shiftId: string;
  proId: string;
  currency: string;
  orgPay: number;
  cancelledAt: any;
  proCancelledAt: any;
  attendanceSource: any;
  dtstart: string;
  dtend: string;
  pro: {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
  },
  status: string;
}

export type Location = {
  name: string;
  address: string;
  parkingType: string;
  locationInstructions: string;
  lat: number;
  lon: number;
  locality: string;
  country: string;
  administrativeAreaLevelOne: string;
  administrativeAreaLevelTwo: string;
  administrativeAreaLevelThree: string;
  postalCode: string;
  timezone: string;
  createdAt: string;
} 

export type ShiftItemType = {
  id: string;
  groupId: string;
  position: string;
  subcategory: string;
  experienceLevel: number;
  dtstart: string;
  dtend: string;
  timezone: string;
  unpaidBreakDuration: number;
  locationName: string;
  slots: number;
  attire: string;
  additionalRequirements: string[];
  additionalInstructions: string;
  taskInstructions: string;
  basePrice: number;
  currency: string;
  pricingType: string;
  bookingFee: number;
  markupFee: number;
  priceCeiling: number;
  invoiceId: string;
  openAvailability: boolean;
  contacts: Contact[];
  proRequests: any[];
  matched: Professional[];
  matchingGroup: any;
  location: Location;
  availableSlots: number;
}