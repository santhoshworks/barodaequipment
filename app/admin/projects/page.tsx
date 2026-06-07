'use client';

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { productSlugs } from '@/data/product-pages';
import { projectData } from '@/data/project-data';
import type { ProjectListEntry } from '@/data/product-pages';

const PRODUCT_OPTIONS = productSlugs.map((slug) => ({
  value: slug,
  label: slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' '),
}));

interface ProjectFormData {
  productSlug: string;
  clientName: string;
  groupName: string;
  ownerName: string;
  jobNo: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface ProjectRow extends ProjectListEntry {
  productSlug: string;
  id: string;
}

function buildInitialProjects(): ProjectRow[] {
  const rows: ProjectRow[] = [];
  for (const [slug, data] of Object.entries(projectData)) {
    for (const entry of data.projectList) {
      rows.push({
        ...entry,
        productSlug: slug,
        id: `${slug}-${entry.jobNo || entry.clientName}-${entry.startDate}`,
      });
    }
  }
  return rows;
}

export default function ProjectsAdminPage() {
  const [projects, setProjects] = useState<ProjectRow[]>(buildInitialProjects);
  const [filterProduct, setFilterProduct] = useState('');
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, reset, setValue } = useForm<ProjectFormData>();

  const filtered = useMemo(() => {
    let list = projects;
    if (filterProduct) {
      list = list.filter((p) => p.productSlug === filterProduct);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.clientName.toLowerCase().includes(q) ||
          p.ownerName.toLowerCase().includes(q) ||
          p.groupName.toLowerCase().includes(q) ||
          p.jobNo.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [projects, filterProduct, search]);

  function openAdd() {
    reset({
      productSlug: filterProduct || '',
      clientName: '',
      groupName: '',
      ownerName: '',
      jobNo: '',
      description: '',
      startDate: '',
      endDate: '',
    });
    setEditingId(null);
    setShowForm(true);
  }

  function openEdit(row: ProjectRow) {
    setValue('productSlug', row.productSlug);
    setValue('clientName', row.clientName);
    setValue('groupName', row.groupName);
    setValue('ownerName', row.ownerName);
    setValue('jobNo', row.jobNo);
    setValue('description', row.description);
    setValue('startDate', row.startDate);
    setValue('endDate', row.endDate);
    setEditingId(row.id);
    setShowForm(true);
  }

  function onSubmit(data: ProjectFormData) {
    const newId = `${data.productSlug}-${data.jobNo || data.clientName}-${data.startDate}`;

    if (editingId) {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editingId ? { ...data, id: newId } : p
        )
      );
    } else {
      setProjects((prev) => [{ ...data, id: newId }, ...prev]);
    }

    setShowForm(false);
    setEditingId(null);
    reset();
  }

  function onDelete(id: string) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }

  function formatSlug(slug: string) {
    return slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  return (
    <div className="admin-page" style={{ maxWidth: 1200 }}>
      <div className="admin-page-header">
        <h1>Project References</h1>
        <p>
          Manage project entries across all product categories. {projects.length} total projects.
        </p>
      </div>

      {/* ── TOOLBAR ── */}
      <div className="admin-form-card" style={{ marginBottom: '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <select
            className="form-control"
            value={filterProduct}
            onChange={(e) => setFilterProduct(e.target.value)}
            style={{ maxWidth: 240 }}
          >
            <option value="">All Products</option>
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <input
            className="form-control"
            type="text"
            placeholder="Search client, owner, job no..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ maxWidth: 300 }}
          />

          <span style={{ fontSize: 13, color: '#666' }}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </span>

          <button
            className="btn btn-primary"
            style={{ marginLeft: 'auto' }}
            onClick={openAdd}
          >
            + Add Project
          </button>
        </div>
      </div>

      {/* ── ADD/EDIT FORM ── */}
      {showForm && (
        <div className="admin-form-card" style={{ marginBottom: '1.5rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <h3 style={{ margin: 0 }}>
              {editingId ? 'Edit Project' : 'Add New Project'}
            </h3>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}
              style={{ padding: '4px 12px', fontSize: 13 }}
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="productSlug">
                  Product Category *
                </label>
                <select
                  id="productSlug"
                  className="form-control"
                  {...register('productSlug', { required: true })}
                >
                  <option value="" disabled>
                    Select product
                  </option>
                  {PRODUCT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="jobNo">
                  Job No
                </label>
                <input
                  id="jobNo"
                  className="form-control"
                  {...register('jobNo')}
                  placeholder="e.g. 4541"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="clientName">
                  Client Name *
                </label>
                <input
                  id="clientName"
                  className="form-control"
                  {...register('clientName', { required: true })}
                  placeholder="e.g. Linde AG, Germany"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="groupName">
                  Group Name
                </label>
                <input
                  id="groupName"
                  className="form-control"
                  {...register('groupName')}
                  placeholder="e.g. Linde"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="ownerName">
                  Owner / End User
                </label>
                <input
                  id="ownerName"
                  className="form-control"
                  {...register('ownerName')}
                  placeholder="e.g. Reliance Industries Ltd"
                />
              </div>
              <div className="form-group" style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label className="form-label" htmlFor="startDate">
                    Start Date
                  </label>
                  <input
                    id="startDate"
                    className="form-control"
                    {...register('startDate')}
                    placeholder="e.g. May 21, 2025"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="form-label" htmlFor="endDate">
                    End Date
                  </label>
                  <input
                    id="endDate"
                    className="form-control"
                    {...register('endDate')}
                    placeholder="e.g. July 28, 2025"
                  />
                </div>
              </div>
            </div>

            <div className="form-group form-group-full">
              <label className="form-label" htmlFor="description">
                Description *
              </label>
              <textarea
                id="description"
                className="form-control"
                rows={3}
                {...register('description', { required: true })}
                placeholder="Describe the scope of work, equipment types, standards, etc."
              />
            </div>

            <div className="admin-form-actions">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Update Project' : 'Save Project'}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── TABLE ── */}
      <div className="admin-form-card" style={{ padding: 0 }}>
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Job No</th>
                <th>Client</th>
                <th>Owner / End User</th>
                <th style={{ minWidth: 250 }}>Description</th>
                <th>Start</th>
                <th>End</th>
                <th style={{ width: 100 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                    No projects found.
                  </td>
                </tr>
              ) : (
                filtered.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <span className="status-badge open" style={{ fontSize: 11 }}>
                        {formatSlug(row.productSlug)}
                      </span>
                    </td>
                    <td style={{ fontWeight: 500 }}>{row.jobNo || '—'}</td>
                    <td>
                      <div style={{ fontWeight: 500 }}>{row.clientName}</div>
                      {row.groupName && (
                        <div style={{ fontSize: 12, color: '#888' }}>{row.groupName}</div>
                      )}
                    </td>
                    <td>{row.ownerName || '—'}</td>
                    <td style={{ fontSize: 13, lineHeight: 1.4 }}>{row.description}</td>
                    <td style={{ whiteSpace: 'nowrap', fontSize: 13 }}>{row.startDate || '—'}</td>
                    <td style={{ whiteSpace: 'nowrap', fontSize: 13 }}>{row.endDate || '—'}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button
                          className="btn btn-secondary"
                          style={{ padding: '3px 10px', fontSize: 12 }}
                          onClick={() => openEdit(row)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-secondary"
                          style={{
                            padding: '3px 10px',
                            fontSize: 12,
                            color: '#c62828',
                            borderColor: '#c62828',
                          }}
                          onClick={() => onDelete(row.id)}
                        >
                          Del
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
