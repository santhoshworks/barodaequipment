export interface AdminNavLink {
  label: string;
  href: string;
}

export const adminNavLinks: AdminNavLink[] = [
  { label: 'Dashboard',          href: '/admin' },
  { label: 'Client Information', href: '/admin/clients' },
  { label: 'Certifications',     href: '/admin/certifications' },
  { label: 'Footprint',          href: '/admin/footprint' },
  { label: 'Recent Inquiries',   href: '/admin/inquiries' },
  { label: 'Facilities',         href: '/admin/facilities' },
  { label: 'Teams',              href: '/admin/teams' },
  { label: 'Vacancies',          href: '/admin/vacancies' },
  { label: 'Downloads',          href: '/admin/downloads' },
  { label: 'Image Gallery',      href: '/admin/gallery' },
];
