'use client';

import { useState, useMemo } from 'react';
import type { FootprintProject } from '@/data/footprint';

interface Props {
  projects: FootprintProject[];
  categories: string[];
  years: number[];
  groups: string[];
}

const PAGE_SIZE = 20;

export default function FootprintTable({ projects, categories, years, groups }: Props) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [group, setGroup] = useState('');
  const [year, setYear] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return projects.filter((p) => {
      if (category && p.category !== category) return false;
      if (group && p.groupName !== group) return false;
      if (year && p.year !== parseInt(year, 10)) return false;
      if (q) {
        return (
          p.clientName.toLowerCase().includes(q) ||
          p.ownerName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.groupName.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [projects, search, category, group, year]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function reset() {
    setSearch('');
    setCategory('');
    setGroup('');
    setYear('');
    setPage(1);
  }

  const hasFilters = search || category || group || year;

  return (
    <section className="fp-table-section">
      <div className="container-inner">

        <div className="fp-filters">
          <input
            className="fp-search"
            type="search"
            placeholder="Search by client, owner or description…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
          <div className="fp-dropdowns">
            <select
              className="fp-select"
              value={category}
              onChange={(e) => { setCategory(e.target.value); setPage(1); }}
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              className="fp-select"
              value={group}
              onChange={(e) => { setGroup(e.target.value); setPage(1); }}
            >
              <option value="">All Groups</option>
              {groups.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            <select
              className="fp-select"
              value={year}
              onChange={(e) => { setYear(e.target.value); setPage(1); }}
            >
              <option value="">All Years</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>

            {hasFilters && (
              <button className="fp-reset btn btn-secondary" onClick={reset}>
                Clear
              </button>
            )}
          </div>
        </div>

        <p className="fp-count">
          {filtered.length === projects.length
            ? `${projects.length} projects`
            : `${filtered.length} of ${projects.length} projects`}
        </p>

        <div className="projects-table-wrap">
          <table className="projects-table fp-full-table">
            <thead>
              <tr>
                <th>Job #</th>
                <th>Client / EPC</th>
                <th>Group</th>
                <th>End User / Owner</th>
                <th>Category</th>
                <th>Description</th>
                <th>Start</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                    No projects match your filters.
                  </td>
                </tr>
              ) : (
                paginated.map((p) => (
                  <tr key={p.jobNo}>
                    <td className="fp-jobno">{p.jobNo}</td>
                    <td>{p.clientName}</td>
                    <td>{p.groupName}</td>
                    <td>{p.ownerName || '—'}</td>
                    <td><span className="fp-cat-badge">{p.category}</span></td>
                    <td className="fp-desc">{p.description}</td>
                    <td className="fp-year">{p.year || '—'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="fp-pagination">
            <button
              className="fp-page-btn"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              ← Prev
            </button>
            <span className="fp-page-info">Page {page} of {totalPages}</span>
            <button
              className="fp-page-btn"
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next →
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
