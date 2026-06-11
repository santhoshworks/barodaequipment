// Team and org-chart data.
//
// Static today — to pull from an API, replace the `static*` arrays with fetch
// calls inside `getTeam()` and `getOrgChartImages()`.

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
}

export interface OrgChartImage {
  src: string;
  label: string;
  width: number;
  height: number;
}

// ---------------------------------------------------------------------------
// Static data (source: barodaequip.com/team/ and /org-chart/)
// ---------------------------------------------------------------------------

const staticTeam: TeamMember[] = [
  {
    id: 'lekshminarayanan-s',
    name: 'Er. Lekshminarayanan S',
    title: 'Managing Director',
    photo: 'https://barodaequip.com/wp-content/uploads/2023/02/Lekshminarayanan.png',
    bio: '1984 mechanical engineering graduate with 40+ years of industry experience in power plant commissioning, quality systems, and project management. Member of ASME; Corporate Fellow of Institution of Engineers (India). Previously worked with BHEL, NKK Corporation, Foster Wheeler, and Madina Group across India, Malaysia, and Qatar. Founder Promoter of BEV.',
  },
  {
    id: 'rishi-oberai',
    name: 'Rishi Oberai',
    title: 'Director – Technical',
    photo: 'https://barodaequip.com/wp-content/uploads/2023/02/Rishi-Oberai.png',
    bio: '1994 mechanical engineer with 29 years experience in manufacturing and construction industries focused on oil/gas and petrochemical sectors. Holds API 510 Pressure Vessel Inspector, CSWIP 3.1 Welding Inspector certifications. Supervises Design & Engineering, Project Management, and OHS&E functions.',
  },
  {
    id: 'rajesh-deshmukh',
    name: 'Rajesh Deshmukh',
    title: 'General Manager Production',
    photo: 'http://barodaequip.com/wp-content/uploads/2024/07/Rajesh.png',
    bio: '1993 mechanical engineer with 30 years of experience in the manufacturing of static equipment like pressure vessels, heat exchangers, and reactors. Expertise in Kaizen and Lean Manufacturing; skilled in process mapping and shop floor problem solving.',
  },
  {
    id: 'mahendra-patel',
    name: 'Mahendra Patel',
    title: 'General Manager Finance and Administration',
    photo: 'https://barodaequip.com/wp-content/uploads/2023/02/MAHENDRA-PATEL.png',
    bio: 'M.Com with Taxation Practice diploma. Brings 33+ years experience in accounts, taxation, commercial operations, human resources, and banking with extensive statutory compliance knowledge.',
  },
  {
    id: 'r-ramachandran',
    name: 'R. Ramachandran',
    title: 'Sr. Manager Estimation and Proposals',
    photo: 'https://barodaequip.com/wp-content/uploads/2023/02/R-Ramachandran.png',
    bio: 'B.S. in Engineering Technology from BITS Pilani with 30 years in heavy engineering manufacturing focused on quality. Former Head of Quality at BEV (2009–2015); holds API 510 and NDE Level II certifications.',
  },
  {
    id: 'tejas-ganatra',
    name: 'Tejas Ganatra',
    title: 'Sr. Manager Procurement',
    photo: 'https://barodaequip.com/wp-content/uploads/2023/02/Tejas-Ganatra.png',
    bio: 'Mechanical Engineering diploma and business administration credentials. 23+ years experience in Supply Chain Management across steel manufacturing, shipbuilding, and oil & gas sectors. Former roles at Essar Steel, Welspun, and Reliance Infrastructure.',
  },
  {
    id: 'darpan-acharya',
    name: 'Darpan Acharya',
    title: 'Sr. Manager Production',
    photo: 'https://barodaequip.com/wp-content/uploads/2023/02/DARPAN-ACHARYA.png',
    bio: 'Fabrication Technology graduate with 17+ years of experience in Production at L&T HED, Essar Heavy Engineering, Inox Wind, and TEMA India. Leads production function at BEV.',
  },
  {
    id: 'pragnesh-patel',
    name: 'Pragnesh Patel',
    title: 'Manager Production',
    photo: 'https://barodaequip.com/wp-content/uploads/2024/10/Group-1000001287.png',
    bio: 'Mechanical engineer from North Maharashtra University with 16+ years of experience in production at GMM Pfaudler, Godrej & Boyce, and other heavy engineering firms. Heads production planning at BEV.',
  },
  {
    id: 'paras-upadhyay',
    name: 'Paras Upadhyay',
    title: 'Manager Quality',
    photo: 'https://barodaequip.com/wp-content/uploads/2024/05/PARAS-UPADHYAY.png',
    bio: 'Mechanical engineer with 15 years of experience in Quality Control and Assurance. Previously with Inox, Thermax, L&T HED Oman, and SGS. ASNT Level II qualified; well-versed in PED, IBR, and PESO standards. Oversees quality control, assurance, planning, and engineering.',
  },
  {
    id: 'vishal-thakkar',
    name: 'Vishal Thakkar',
    title: 'Manager Projects',
    photo: 'https://barodaequip.com/wp-content/uploads/2023/02/VISHAL-THAKKAR.png',
    bio: '2010 mechanical engineering graduate with 13 years of experience in project planning, production planning, and material planning in chemical and pharma industries. Proficient with MS Project scheduling software.',
  },
  {
    id: 'lawrence-parmar',
    name: 'Lawrence Parmar',
    title: 'Manager Projects',
    photo: 'https://barodaequip.com/wp-content/uploads/2023/02/LAWRENCE-PARMAR.png',
    bio: '2009 mechanical engineer with 12 years of experience in project management at L&T Heavy Engineering Division and GMM Pfaudler. Skilled with MS Project and Primavera scheduling tools.',
  },
  {
    id: 'kanaiyalal-patel',
    name: 'Kanaiyalal Patel',
    title: 'Manager Maintenance',
    photo: 'https://barodaequip.com/wp-content/uploads/2023/02/KANAIYALAL-PATEL.png',
    bio: '2011 Electrical Engineering diploma holder with 16+ years experience in maintenance management in factories and plants. CNC machine maintenance specialist.',
  },
];

const staticOrgChartImages: OrgChartImage[] = [
  {
    src: 'https://barodaequip.com/wp-content/uploads/2023/06/org-chart-min.png',
    label: 'Org Chart (June 2023)',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://barodaequip.com/wp-content/uploads/2024/10/BEV-Org-Chart.jpg',
    label: 'Org Chart (October 2024 — latest)',
    width: 1200,
    height: 800,
  },
];

// ---------------------------------------------------------------------------
// Data-access functions — swap the body of each with a fetch() when the
// backend is ready, e.g.:
//   const res = await fetch(`${process.env.API_BASE}/team`);
//   return res.json() as Promise<TeamMember[]>;
// ---------------------------------------------------------------------------

export async function getTeam(): Promise<TeamMember[]> {
  return staticTeam;
}

export async function getOrgChartImages(): Promise<OrgChartImage[]> {
  return staticOrgChartImages;
}
