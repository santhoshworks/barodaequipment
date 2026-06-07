'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { adminNavLinks } from '@/data/admin-navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <Link href="/">
          <Image src="/logo.png" alt="Baroda Equipment" width={160} height={29} />
        </Link>
        <span className="admin-sidebar-badge">Admin</span>
      </div>

      <nav className="admin-sidebar-nav">
        {adminNavLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`admin-nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="admin-sidebar-footer">
        <Link href="/" className="admin-nav-link">
          Back to Website
        </Link>
      </div>
    </aside>
  );
}
