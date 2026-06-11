export interface ClientEntry {
  name: string;
  country: string;
  sector: 'psu' | 'global' | 'epc' | 'oem';
}

const CLIENT_DATA: ClientEntry[] = [
  // Indian PSUs & Major Indian Companies
  { name: 'Indian Oil Corporation Ltd', country: 'India', sector: 'psu' },
  { name: 'ONGC', country: 'India', sector: 'psu' },
  { name: 'Bharat Petroleum Corporation Ltd', country: 'India', sector: 'psu' },
  { name: 'Hindustan Petroleum Corporation', country: 'India', sector: 'psu' },
  { name: 'GAIL (India) Ltd', country: 'India', sector: 'psu' },
  { name: 'Bharat Heavy Electricals Ltd', country: 'India', sector: 'psu' },
  { name: 'NTPC Ltd', country: 'India', sector: 'psu' },
  { name: 'Engineers India Ltd', country: 'India', sector: 'psu' },
  { name: 'GNFC', country: 'India', sector: 'psu' },
  { name: 'MECON Ltd', country: 'India', sector: 'psu' },
  { name: 'Nayara Energy', country: 'India', sector: 'psu' },
  { name: 'Reliance Industries Ltd', country: 'India', sector: 'psu' },
  { name: 'Adani Group', country: 'India', sector: 'psu' },
  // Global Majors
  { name: 'Air Products', country: 'USA / Netherlands / UK', sector: 'global' },
  { name: 'Air Liquide', country: 'France / India', sector: 'global' },
  { name: 'Linde AG', country: 'Germany / India', sector: 'global' },
  { name: 'ABB', country: 'Germany / UK', sector: 'global' },
  { name: 'Siemens', country: 'Germany / India', sector: 'global' },
  { name: 'Shell', country: 'Netherlands', sector: 'global' },
  { name: 'Rolls Royce Power Engineering', country: 'UK', sector: 'global' },
  { name: 'Albemarle Corporation', country: 'USA', sector: 'global' },
  { name: 'Lanxess Deutschland', country: 'Germany', sector: 'global' },
  { name: 'FLSmidth', country: 'Denmark', sector: 'global' },
  { name: 'Petronas', country: 'Malaysia', sector: 'global' },
  { name: 'BHP Billiton', country: 'Australia', sector: 'global' },
  { name: 'Howden', country: 'UK / France / Netherlands / India', sector: 'global' },
  { name: 'Procter & Gamble', country: 'USA / India', sector: 'global' },
  { name: 'SRF Ltd', country: 'India', sector: 'global' },
  { name: 'Thermax Limited', country: 'India', sector: 'global' },
  { name: 'Aarti Industries', country: 'India', sector: 'global' },
  { name: 'Archean Chemical Industries', country: 'India', sector: 'global' },
  { name: 'Mundra Petrochem Ltd', country: 'India', sector: 'global' },
  { name: 'Iluka Rare Earths Pty Ltd', country: 'Australia', sector: 'global' },
  { name: 'Sami Bitumen Technologies (Colas)', country: 'Australia', sector: 'global' },
  // EPC Contractors
  { name: 'Larsen & Toubro', country: 'India', sector: 'epc' },
  { name: 'Technip', country: 'France', sector: 'epc' },
  { name: 'Worley', country: 'Australia', sector: 'epc' },
  { name: 'Fluor Corporation', country: 'USA', sector: 'epc' },
  { name: 'Samsung E&C', country: 'South Korea', sector: 'epc' },
  { name: 'Fives Group', country: 'France / India', sector: 'epc' },
  { name: 'Enter Engineering Pte. Ltd.', country: 'Singapore', sector: 'epc' },
  { name: 'Access Petrotec', country: 'Australia', sector: 'epc' },
  // OEMs & Technology Licensors
  { name: 'UOP (Honeywell)', country: 'India / USA', sector: 'oem' },
  { name: 'Sandvik', country: 'India / Sweden', sector: 'oem' },
  { name: 'BMA AG', country: 'Germany', sector: 'oem' },
  { name: 'Burckhardt Compression', country: 'India / Switzerland', sector: 'oem' },
  { name: 'DrM Filter Technology', country: 'India', sector: 'oem' },
  { name: 'Luwa India (Nederman)', country: 'India', sector: 'oem' },
  { name: 'Steri Technologies', country: 'India', sector: 'oem' },
  { name: 'Bliss Anand Pvt Ltd', country: 'India', sector: 'oem' },
  { name: 'Carborundum Universal', country: 'India', sector: 'oem' },
  { name: 'Gujarat State Fertilizers & Chemicals', country: 'India', sector: 'oem' },
  { name: 'Balmer Lawrie', country: 'India', sector: 'oem' },
  { name: 'Dresser-Rand India (Siemens)', country: 'India', sector: 'oem' },
  { name: 'Prodair (Air Products India)', country: 'India', sector: 'oem' },
];

export const SECTOR_LABELS: Record<ClientEntry['sector'], string> = {
  psu: 'Indian PSUs & Major Corporates',
  global: 'Global Majors',
  epc: 'EPC Contractors',
  oem: 'OEMs & Technology Licensors',
};

// Data fetcher — replace body with API call when backend is ready
export async function getClients(): Promise<ClientEntry[]> {
  return CLIENT_DATA;
}
