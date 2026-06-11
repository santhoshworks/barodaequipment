import { projectData } from './project-data';

export interface FootprintProject {
  jobNo: string;
  clientName: string;
  groupName: string;
  ownerName: string;
  description: string;
  startDate: string;
  endDate: string;
  year: number;
  category: string;
  categorySlug: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  'pressure-vessels': 'Pressure Vessels',
  'heat-exchangers': 'Heat Exchangers',
  'storage-tanks': 'Storage Tanks',
  'portable-chemical-tanks': 'Portable Chemical Tanks',
  'pressure-piping': 'Pressure Piping',
  'boiler-pressure-parts': 'Boiler Pressure Parts',
  'structures': 'Structures',
  'skid-mounted-assemblies': 'Skid Mounted Assemblies',
  'offshore-containers': 'Offshore Containers',
  'miscellaneous-equipment': 'Miscellaneous Equipment',
};

function parseYear(dateStr: string): number {
  if (!dateStr) return 0;
  const match = dateStr.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
}

function buildProjectList(): FootprintProject[] {
  const projects: FootprintProject[] = [];
  const seen = new Set<string>();

  for (const [slug, data] of Object.entries(projectData)) {
    const category = CATEGORY_LABELS[slug] ?? slug;
    for (const entry of data.projectList) {
      const key = entry.jobNo;
      if (seen.has(key)) continue;
      seen.add(key);
      projects.push({
        jobNo: entry.jobNo,
        clientName: entry.clientName,
        groupName: entry.groupName,
        ownerName: entry.ownerName,
        description: entry.description,
        startDate: entry.startDate,
        endDate: entry.endDate,
        year: parseYear(entry.startDate),
        category,
        categorySlug: slug,
      });
    }
  }

  // Most recent first
  return projects.sort((a, b) => b.year - a.year || b.jobNo.localeCompare(a.jobNo));
}

export interface FootprintMeta {
  projects: FootprintProject[];
  categories: string[];
  years: number[];
  groups: string[];
}

// Data fetcher — replace body with API call when backend is ready
export async function getFootprintData(): Promise<FootprintMeta> {
  const projects = buildProjectList();

  const categories = [...new Set(projects.map((p) => p.category))].sort();
  const years = [...new Set(projects.map((p) => p.year).filter(Boolean))].sort(
    (a, b) => b - a,
  );
  const groups = [...new Set(projects.map((p) => p.groupName).filter(Boolean))].sort();

  return { projects, categories, years, groups };
}
