import type { Capability } from '@/types';

export const capabilities: Capability[] = [
  { id: 'design',      icon: '⚙️', title: 'Engineering Design',    description: 'In-house engineering with PV Elite, AutoCAD, and HTRI for pressure vessel and heat exchanger design.' },
  { id: 'fabrication', icon: '🔧', title: 'Heavy Fabrication',     description: 'Fully equipped workshop with plate rolling, CNC cutting, and automated welding up to 100mm thickness.' },
  { id: 'ndt',         icon: '🔬', title: 'NDT Testing',           description: 'UT, RT, MT, PT and PWHT — all major non-destructive testing methods available in-house.' },
  { id: 'quality',     icon: '✅', title: 'Quality Assurance',     description: 'ISO 9001 certified QMS with full material traceability, WPS/PQR, and third-party inspection support.' },
  { id: 'delivery',    icon: '🚚', title: 'On-Time Delivery',      description: 'Proven track record of on-schedule delivery to oil & gas, refinery, and chemical plant clients globally.' },
  { id: 'standards',   icon: '📋', title: 'Global Standards',      description: 'ASME, PED, IBR, API, TEMA, IS — designed and stamped to the standards your project demands.' },
];
