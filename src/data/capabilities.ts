import type { Capability } from '@/types';

export const capabilities: Capability[] = [
  { id: 'weight',      value: '200 MT',          label: 'Max Equipment Weight' },
  { id: 'diameter',    value: '4,000 mm',        label: 'Max Shell Diameter' },
  { id: 'thickness',   value: '150 mm',          label: 'Max Shell Thickness' },
  { id: 'pressure',    value: '350 bar',         label: 'Max Design Pressure' },
  { id: 'length',      value: '30,000 mm',       label: 'Max Vessel Length' },
  { id: 'temperature', value: '-196°C to 600°C', label: 'Design Temperature Range' },
];
