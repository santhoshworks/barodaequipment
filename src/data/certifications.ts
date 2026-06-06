import type { Certification } from '@/types';

export const certifications: Certification[] = [
  { id: 'iso9001',    name: 'ISO 9001 — Quality Management',          image: '/cert-iso9001.jpg',   width: 120, height: 80 },
  { id: 'iso14001',   name: 'ISO 14001 — Environmental Management',   image: '/cert-iso14001.jpg',  width: 120, height: 80 },
  { id: 'iso45001',   name: 'ISO 45001 — Occupational Health & Safety',image: '/cert-iso45001.png',  width: 120, height: 80 },
  { id: 'nb',         name: 'National Board',                          image: '/cert-nb.jpg',        width: 100, height: 80 },
  { id: 'ibr',        name: 'IBR — Indian Boiler Regulations',         image: '/cert-ibr.jpg',       width: 100, height: 80 },
  { id: 'peso',       name: 'PESO',                                    image: '/cert-peso.jpg',      width: 100, height: 80 },
  { id: 'ce',         name: 'CE Marking — European Conformity',        image: '/cert-ce.jpg',        width: 80,  height: 80 },
];
