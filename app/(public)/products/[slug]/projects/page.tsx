import { notFound } from 'next/navigation';
import Link from 'next/link';
import { productPages, productSlugs } from '@/data/product-pages';

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productPages[slug];
  if (!product) return {};
  return {
    title: `${product.title} Projects — Baroda Equipment & Vessels Pvt. Ltd.`,
    description: `Project list for ${product.title} manufactured by Baroda Equipment & Vessels.`,
  };
}

export default async function ProjectListPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productPages[slug];
  if (!product) notFound();

  return (
    <div className="project-list-page">
      <div className="project-list-header">
        <div className="container-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/#products">Products</Link>
            <span>→</span>
            <Link href={`/products/${product.slug}`}>{product.title}</Link>
            <span>→</span>
            <span className="bc-current">Projects</span>
          </div>
          <h1>{product.title.toUpperCase()}</h1>
          <p>Project list for {product.title.toLowerCase()} manufactured by BEV</p>
        </div>
      </div>

      <div className="project-list-body">
        <div className="container-inner">
          <div className="projects-table-wrap">
            <table className="projects-table">
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Group Name</th>
                  <th>Owner Name</th>
                  <th>Job No</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                {product.projectList.map((project) => (
                  <tr key={project.jobNo || project.clientName + project.startDate}>
                    <td>{project.clientName}</td>
                    <td>{project.groupName || '—'}</td>
                    <td>{project.ownerName || '—'}</td>
                    <td>{project.jobNo || '—'}</td>
                    <td>{project.description}</td>
                    <td>{project.startDate || '—'}</td>
                    <td>{project.endDate || 'Ongoing'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-note" style={{ marginTop: '16px' }}>
            Showing {product.projectList.length} recent projects. Full project
            history available upon request.
          </p>
          <div style={{ marginTop: '32px' }}>
            <Link
              href={`/products/${product.slug}`}
              className="btn btn-secondary"
            >
              ← Back to {product.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
