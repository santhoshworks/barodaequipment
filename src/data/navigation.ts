import type { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  {
    label: 'Products',
    href: '/#products',
    children: [
      { label: 'Pressure Vessels', href: '/products/pressure-vessels' },
      { label: 'Heat Exchangers', href: '/products/heat-exchangers' },
      { label: 'Storage Tanks', href: '/products/storage-tanks' },
      { label: 'Portable Chemical Tanks', href: '/products/portable-chemical-tanks' },
      { label: 'Pressure Piping', href: '/products/pressure-piping' },
      { label: 'Boiler Pressure Parts', href: '/products/boiler-pressure-parts' },
      { label: 'Structures', href: '/products/structures' },
      { label: 'Skid Mounted Assemblies', href: '/products/skid-mounted-assemblies' },
      { label: 'Offshore Containers', href: '/products/offshore-containers' },
      { label: 'Miscellaneous Equipment', href: '/products/miscellaneous-equipment' },
    ],
  },
  { label: 'About', href: '/#about' },
  { label: 'Clients', href: '/#clients' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Location', href: '/#location' },
];
