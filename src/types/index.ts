export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
  features?: string[];
}

export interface Stat {
  count: number;
  suffix?: string;
  label: string;
}

export interface Certification {
  id: string;
  name: string;
  image: string;
  width: number;
  height: number;
}

export interface Capability {
  id: string;
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}
