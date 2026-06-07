import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link href="/" className="auth-logo">
          <Image src="/logo.png" alt="Baroda Equipment & Vessels" width={198} height={36} priority />
        </Link>
        {children}
      </div>
    </div>
  );
}
