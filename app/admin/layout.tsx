import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminGuard from '@/components/auth/AdminGuard';

export const metadata = {
  title: 'Admin Dashboard — Baroda Equipment',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <div className="admin-layout">
        <AdminSidebar />
        <main className="admin-main">
          {children}
        </main>
      </div>
    </AdminGuard>
  );
}
