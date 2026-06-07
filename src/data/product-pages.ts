import { projectData } from './project-data';

export interface ProductStat {
  value: string;
  label: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  large?: boolean;
}

export interface SpecRow {
  parameter: string;
  specification: string;
}

export interface HighlightCard {
  title: string;
  items: string[];
  accent?: boolean;
}

export interface ProjectRef {
  client: string;
  endUser: string;
  equipment: string;
  qty: number;
  year: string;
}

export interface RelatedProduct {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export interface ProjectListEntry {
  clientName: string;
  groupName: string;
  ownerName: string;
  jobNo: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface ProductPageData {
  slug: string;
  title: string;
  heroImage: string;
  heroLabel: string;
  heroDescription: string;
  stats: ProductStat[];
  overviewLabel: string;
  overviewTitle: string;
  overviewLead: string;
  overviewText: string;
  overviewTags: string[];
  overviewMainImage: string;
  overviewThumbImage: string;
  gallery: GalleryItem[];
  specs: SpecRow[];
  highlights: HighlightCard[];
  projectRefs: ProjectRef[];
  relatedProducts: RelatedProduct[];
  projectList: ProjectListEntry[];
}

export const productPages: Record<string, ProductPageData> = {
  'pressure-vessels': {
    slug: 'pressure-vessels',
    title: 'Pressure Vessels',
    heroImage: '/gallery-pv-1.jpg',
    heroLabel: 'ASME / IBR / PD5500 / EN13445',
    heroDescription:
      'Custom-engineered pressure vessels for the most demanding industrial applications — designed, manufactured and tested to international standards.',
    stats: [
      { value: '350 bar', label: 'Max Design Pressure' },
      { value: '4,000 mm', label: 'Max Diameter' },
      { value: '200 MT', label: 'Max Weight' },
      { value: '-196°C to 600°C', label: 'Temperature Range' },
    ],
    overviewLabel: 'Overview',
    overviewTitle: 'Built to Your Exact Specification',
    overviewLead:
      'Baroda Equipment & Vessels has been manufacturing ASME-certified pressure vessels since 1990. Our vessels operate in some of the world\'s most demanding environments — from high-pressure separation systems in offshore oil fields to cryogenic vessels in pharma manufacturing.',
    overviewText:
      'Every vessel is engineered from first principles by our in-house team, manufactured using certified materials, and subjected to full third-party inspection before dispatch. We handle the complete scope — from design and procurement to manufacturing, testing, painting and documentation.',
    overviewTags: [
      'ASME Sec. VIII Div. 1',
      'ASME Sec. VIII Div. 2',
      'IBR',
      'PD 5500',
      'EN 13445',
      'IS 2825',
    ],
    overviewMainImage: '/gallery-pv-1.jpg',
    overviewThumbImage: '/gallery-pv-2.jpg',
    gallery: [
      {
        src: '/gallery-pv-1.jpg',
        alt: 'Heat exchanger vessels',
        caption: 'Shell & tube heat exchangers — pre-delivery inspection',
        large: true,
      },
      {
        src: '/gallery-pv-2.jpg',
        alt: 'Pressure vessels',
        caption: 'Horizontal pressure vessels ready for dispatch',
      },
      {
        src: '/gallery-pv-3.jpg',
        alt: 'Facility',
        caption: 'BEV manufacturing facility, Vadodara',
      },
      {
        src: '/gallery-he-1.jpg',
        alt: 'Stainless vessels',
        caption: 'SS pressure vessels — final inspection stage',
      },
      {
        src: '/gallery-he-3.jpg',
        alt: 'Wrapped vessels',
        caption: 'Packaged and ready for export',
      },
    ],
    specs: [
      { parameter: 'Design Codes', specification: 'ASME Sec. VIII Div. 1 & 2, PD 5500, EN 13445, IBR, IS 2825' },
      { parameter: 'Shell Materials', specification: 'Carbon Steel (SA-516-70), SS 304/316/316L, Duplex 2205, Alloy Steel (P11/P22), Hastelloy, Inconel, Titanium' },
      { parameter: 'Design Pressure', specification: 'Full vacuum to 350 bar (g)' },
      { parameter: 'Design Temperature', specification: '-196°C to +600°C' },
      { parameter: 'Shell Diameter', specification: 'Up to 4,000 mm ID' },
      { parameter: 'Vessel Length', specification: 'Up to 30,000 mm' },
      { parameter: 'Shell Thickness', specification: 'Up to 150 mm' },
      { parameter: 'Max Weight', specification: 'Up to 200 MT per vessel' },
      { parameter: 'Nozzle Types', specification: 'Flanged / Threaded / Socket-welded / Studded' },
      { parameter: 'Internals', specification: 'Demisters, trays, baffles, vortex breakers, distributors' },
      { parameter: 'Surface Treatment', specification: 'Internal/external painting, cladding, lining, hot-dip galvanizing' },
      { parameter: 'Inspection & Testing', specification: 'RT, UT, MT, PT, PWHT, Hydro test, Pneumatic test' },
      { parameter: 'Third-Party Inspection', specification: 'TPIA: TÜV, BV, SGS, Lloyds, IBR, CCOE/PESO, EIL, MECON' },
      { parameter: 'Documentation', specification: 'MDR, U-1 forms, IBR certificates, Mill certs, WPS/PQR/WPQ' },
    ],
    highlights: [
      {
        title: 'Types We Manufacture',
        items: [
          'Separators (2-phase & 3-phase)',
          'Scrubbers & Knock-out Drums',
          'Reactors & Autoclaves',
          'Columns & Distillation Towers',
          'Surge Drums & Surge Vessels',
          'Regeneration Vessels',
          'Cryogenic Vessels',
          'High-pressure Receivers',
          'Mist Eliminators',
          'Filter Vessels',
        ],
      },
      {
        title: 'Approved Clients Include',
        accent: true,
        items: [
          'ONGC, IOCL, BPCL, HPCL',
          'Reliance Industries, GAIL',
          'Shell, Fluor, Petronas',
          'Samsung E&C, L&T',
          'Air Liquide, Air Products',
          'EIL, MECON approved vendor',
        ],
      },
    ],
    projectRefs: [
      { client: 'Reliance Industries Ltd', endUser: 'Reliance Jamnagar', equipment: 'High-pressure separators, CS, 350 bar', qty: 4, year: '2023' },
      { client: 'Fluor Daniel India', endUser: 'ONGC Hazira', equipment: 'Scrubbers & KO drums, SS 316L', qty: 6, year: '2022' },
      { client: 'Samsung Engineering', endUser: 'HPCL Mumbai', equipment: 'Reactors, Alloy P11, PWHT', qty: 3, year: '2022' },
      { client: 'L&T Hydrocarbon Engineering', endUser: 'BPCL Kochi', equipment: 'Column, CS, 24m tall, 3200mm ID', qty: 1, year: '2021' },
      { client: 'Shell Global Solutions', endUser: 'Shell Hazira', equipment: 'Filter vessels, Duplex 2205', qty: 8, year: '2021' },
      { client: 'Access Petrotec Pty., Australia', endUser: 'BHP Billiton', equipment: 'Vessels for LNG facility, Cryogenic', qty: 5, year: '2020' },
      { client: 'Aarti Industries Ltd', endUser: 'Aarti Industries', equipment: 'Reactors, SS 316L, Hastelloy', qty: 12, year: '2020' },
      { client: 'Air Liquide India', endUser: 'Air Liquide', equipment: 'Cryogenic receivers, -196°C', qty: 4, year: '2019' },
      { client: 'Adani Ports & SEZ', endUser: 'Adani LNG Terminal', equipment: 'LPG separators, large diameter', qty: 3, year: '2019' },
      { client: 'GAIL India Ltd', endUser: 'GAIL Pata', equipment: 'HP/MP separators, CS & SS', qty: 7, year: '2018' },
    ],
    relatedProducts: [
      {
        slug: 'heat-exchangers',
        title: 'Heat Exchangers',
        description: 'Shell & tube, U-tube, fixed tubesheet to TEMA & ASME standards.',
        image: '/prod-heat-exchangers.webp',
      },
      {
        slug: '',
        title: 'Skid Mounted Assemblies',
        description: 'Complete process skids with vessels, piping, instruments and structural steel.',
        image: '/prod-skid.webp',
      },
      {
        slug: '',
        title: 'Pressure Piping',
        description: 'ASME B31.3 piping spools to complement your vessel packages.',
        image: '/prod-piping.webp',
      },
    ],
    projectList: [
      {
        clientName: 'Mundra Petrochem Ltd',
        groupName: 'Adani Group',
        ownerName: 'Mundra Petrochem Ltd',
        jobNo: '4541',
        description: 'Design, procurement, manufacturing and supply of 26 Pressure Vessels (12 in SS316, 2 in SS304, 10 in SA516 Gr70 and 2 in IS2062) and 44 storage tanks',
        startDate: 'May 21, 2025',
        endDate: '',
      },
      {
        clientName: 'Howden Thomassen Compressors',
        groupName: 'Howden',
        ownerName: 'Virya Energy',
        jobNo: '4479',
        description: 'Design, procurement, manufacturing, ASME U Stamping and supply of 8 Pulsation Dampeners',
        startDate: 'November 18, 2024',
        endDate: 'July 28, 2025',
      },
      {
        clientName: 'Air Products, Netherlands',
        groupName: 'Air Products',
        ownerName: 'Air Products',
        jobNo: '4443',
        description: 'Design, procurement, manufacturing, ASME U Stamping, CE marking and supply of 4 Pulsation Dampeners',
        startDate: 'November 12, 2024',
        endDate: '',
      },
    ],
  },

  'heat-exchangers': {
    slug: 'heat-exchangers',
    title: 'Heat Exchangers',
    heroImage: '/prod-heat-exchangers.webp',
    heroLabel: 'ASME / TEMA / API 660 / API 661',
    heroDescription:
      'Shell & tube, air cooled, and plate fin heat exchangers — designed using HTRI, manufactured to ASME and TEMA standards.',
    stats: [
      { value: '600 bar', label: 'Hydro Test Capacity' },
      { value: '3,150 mm', label: 'CNC Bed Size' },
      { value: '85 mm', label: 'Max Shell Thickness' },
      { value: '100 tons', label: 'Max Rotator Capacity' },
    ],
    overviewLabel: 'Overview',
    overviewTitle: 'Complete Thermal Solutions',
    overviewLead:
      'BEV manufactures shell and tube, air cooled, and plate fin heat exchangers to international standards including ASME Sec VIII Div 1, TEMA, API 660 and API 661.',
    overviewText:
      'Thermal design is carried out using HTRI software or custom spreadsheets. Mechanical design uses PV Elite supplemented with finite element analysis, stress analysis and vibration analysis. Materials range from carbon steel through exotic metals including SMO, Duplex, Hastelloy, Inconel, Titanium and Cu Ni.',
    overviewTags: [
      'ASME Sec. VIII Div. 1',
      'TEMA R / C / B',
      'API 660',
      'API 661',
      'PED 2014/68/EU',
      'IBR',
    ],
    overviewMainImage: '/gallery-he-1.jpg',
    overviewThumbImage: '/gallery-he-2.jpg',
    gallery: [
      {
        src: '/gallery-he-1.jpg',
        alt: 'Heat exchanger assembly',
        caption: 'Shell & tube heat exchanger — tube bundle insertion',
        large: true,
      },
      {
        src: '/gallery-he-2.jpg',
        alt: 'Heat exchanger tubes',
        caption: 'Tube bundle ready for installation',
      },
      {
        src: '/gallery-he-3.jpg',
        alt: 'Completed heat exchangers',
        caption: 'Completed units ready for dispatch',
      },
      {
        src: '/gallery-pv-1.jpg',
        alt: 'Workshop view',
        caption: 'BEV workshop — heavy fabrication bay',
      },
      {
        src: '/gallery-pv-3.jpg',
        alt: 'Manufacturing facility',
        caption: 'Manufacturing facility, Vadodara',
      },
    ],
    specs: [
      { parameter: 'Design Codes', specification: 'ASME Sec. VIII Div. 1, TEMA R/C/B, API 660, API 661' },
      { parameter: 'Exchanger Types', specification: 'Shell & Tube, U-Tube, Fixed Tubesheet, Floating Head, Kettle Reboiler' },
      { parameter: 'Thermal Design', specification: 'HTRI software, custom spreadsheets' },
      { parameter: 'Shell Materials', specification: 'CS, SS 304/316/316L, Duplex 2205, Alloy Steel, Hastelloy, Inconel, Titanium, CuNi' },
      { parameter: 'Tube Materials', specification: 'CS, SS, CuNi, Titanium, Duplex, Admiralty Brass' },
      { parameter: 'Max Shell Rolling', specification: '85 mm thick x 3.2 M wide' },
      { parameter: 'Hydro Test', specification: 'Up to 600 bar with/without chart recorders' },
      { parameter: 'CNC Machining', specification: 'Hartford PRO 3210, bed 3150 x 2100 mm' },
      { parameter: 'Welding Processes', specification: 'SAW, SMAW, GTAW, FCAW' },
      { parameter: 'Tube Expansion', specification: 'Hydraulic and mechanical tube expansion' },
      { parameter: 'Surface Treatment', specification: 'Shot blasting, painting, special coatings (Belzona, Ceramkote)' },
      { parameter: 'Certifications', specification: 'ASME U/U2, NB, R Stamp, PED (CE), IBR' },
    ],
    highlights: [
      {
        title: 'Types We Manufacture',
        items: [
          'Shell & Tube Heat Exchangers',
          'U-Tube Heat Exchangers',
          'Fixed Tubesheet Exchangers',
          'Floating Head Exchangers',
          'Kettle Reboilers',
          'Air Cooled Heat Exchangers',
          'Waste Heat Recovery Units',
          'Condensers',
        ],
      },
      {
        title: 'Key Standards',
        accent: true,
        items: [
          'ASME Sec VIII Div 1',
          'TEMA Class R, C, B',
          'API 660 / API 661',
          'PED 2014/68/EU',
          'IBR (Indian Boiler Regulations)',
          'EN ISO 15614 WPQRs',
        ],
      },
    ],
    projectRefs: [
      { client: 'Linde AG, Germany', endUser: 'Perdaman Chemicals', equipment: 'Regeneration Gas Heater, ASME/TEMA/API 660', qty: 1, year: '2024' },
      { client: 'Enter Engineering Pte. Ltd.', endUser: 'Jizzakh Petroleum JV', equipment: 'Shell & tube exchangers, CS & alloy steel', qty: 4, year: '2023' },
      { client: 'Bliss Anand', endUser: 'IOCL', equipment: 'Feed Coolers & Membrane Vessels, ASME U / IBR', qty: 11, year: '2023' },
      { client: 'Samsung Engineering', endUser: 'HPCL Mumbai', equipment: 'Fixed tubesheet exchangers, SS 316L', qty: 6, year: '2022' },
      { client: 'L&T Hydrocarbon', endUser: 'BPCL Kochi', equipment: 'U-tube reboilers, CS/SS', qty: 4, year: '2021' },
      { client: 'Fluor Daniel India', endUser: 'ONGC Hazira', equipment: 'Air cooled heat exchangers', qty: 8, year: '2021' },
      { client: 'Shell Global Solutions', endUser: 'Shell Hazira', equipment: 'Shell & tube exchangers, Duplex 2205', qty: 3, year: '2020' },
      { client: 'Air Liquide India', endUser: 'Air Liquide', equipment: 'Cryogenic heat exchangers', qty: 2, year: '2019' },
    ],
    relatedProducts: [
      {
        slug: 'pressure-vessels',
        title: 'Pressure Vessels',
        description: 'ASME, IBR and PED certified pressure vessels for all industrial applications.',
        image: '/prod-pressure-vessel.webp',
      },
      {
        slug: 'storage-tanks',
        title: 'Storage Tanks',
        description: 'API 650 / BS 2594 storage tanks for hydrocarbons, water, and chemicals.',
        image: '/prod-storage-tanks.webp',
      },
      {
        slug: '',
        title: 'Pressure Piping',
        description: 'ASME B31.3 piping spools to complement your exchanger packages.',
        image: '/prod-piping.webp',
      },
    ],
    projectList: [
      {
        clientName: 'Linde AG, Germany',
        groupName: 'Linde',
        ownerName: 'Perdaman Chemicals and Fertilisers Pty Ltd',
        jobNo: '4411',
        description: 'Design, procurement, manufacturing and supply of Regeneration Gas Heater to ASME Sec VIII Div 1, TEMA R and API 660',
        startDate: 'July 10, 2024',
        endDate: '',
      },
      {
        clientName: 'Enter Engineering Pte. Ltd.',
        groupName: '',
        ownerName: 'Jizzakh Petroleum JV LLC',
        jobNo: '4034',
        description: 'Manufacturing of shell & tube heat exchangers in carbon steel and low alloy steel per ASME standards for methyl to olefins project',
        startDate: '2023',
        endDate: '',
      },
      {
        clientName: 'Bliss Anand',
        groupName: '',
        ownerName: 'IOCL',
        jobNo: '',
        description: 'Design, detailed engineering, procurement, manufacturing, ASME U Stamping / IBR Stamping and supply of 4 Feed Coolers and 7 Membrane Vessels',
        startDate: 'August 1, 2023',
        endDate: '',
      },
    ],
  },

  'storage-tanks': {
    slug: 'storage-tanks',
    title: 'Storage Tanks',
    heroImage: '/prod-storage-tanks.webp',
    heroLabel: 'API 650 / BS 2594 / EN 12285',
    heroDescription:
      'Vertical and horizontal storage tanks for hydrocarbons, potable water, fire water, effluent treatment, and process chemical storage.',
    stats: [
      { value: 'API 650', label: 'Primary Design Code' },
      { value: '85 mm', label: 'Max Shell Thickness' },
      { value: '3.2 M', label: 'Max Rolling Width' },
      { value: '554 MT', label: 'Largest Project Weight' },
    ],
    overviewLabel: 'Overview',
    overviewTitle: 'Designed for Every Application',
    overviewLead:
      'BEV undertakes design, manufacture and testing of vertical as well as horizontal storage tanks for various applications such as hydrocarbons, potable water, fire water, effluent treatment, process chemicals storage etc.',
    overviewText:
      'These could be designed and manufactured to API 650, BS 2594, EN 12285 etc. Materials of construction range from carbon steel through stainless steel including exotic metals like SMO, Duplex/Super Duplex, Hastelloy, Inconel, Incolloy, Titanium, CuNi etc.',
    overviewTags: [
      'API 650',
      'API 620',
      'BS 2594',
      'EN 12285',
      'ASME',
    ],
    overviewMainImage: '/prod-storage-tanks.webp',
    overviewThumbImage: '/gallery-pv-3.jpg',
    gallery: [
      {
        src: '/prod-storage-tanks.webp',
        alt: 'Storage tanks',
        caption: 'Large-capacity storage tanks at BEV facility',
        large: true,
      },
      {
        src: '/gallery-pv-1.jpg',
        alt: 'Manufacturing facility',
        caption: 'Heavy fabrication bay',
      },
      {
        src: '/gallery-pv-2.jpg',
        alt: 'Vessel fabrication',
        caption: 'Tank shell rolling and assembly',
      },
      {
        src: '/gallery-he-1.jpg',
        alt: 'Welding operations',
        caption: 'SAW welding on tank shell',
      },
      {
        src: '/gallery-pv-3.jpg',
        alt: 'Facility overview',
        caption: 'BEV manufacturing campus, Vadodara',
      },
    ],
    specs: [
      { parameter: 'Design Codes', specification: 'API 650, API 620, BS 2594, EN 12285, ASME' },
      { parameter: 'Tank Types', specification: 'Vertical, Horizontal, Atmospheric, Low Pressure' },
      { parameter: 'Applications', specification: 'Hydrocarbons, potable water, fire water, effluent treatment, process chemicals' },
      { parameter: 'Shell Materials', specification: 'Carbon Steel, SS 304/316/316L, SS 310S, Duplex, SMO, Hastelloy, Titanium, CuNi' },
      { parameter: 'Max Shell Rolling', specification: '85 mm thick x 3.2 M wide' },
      { parameter: 'Welding Processes', specification: 'SAW, SMAW, GTAW, FCAW with BugO oscillator' },
      { parameter: 'WPQRs', specification: 'ASME Sec IX, EN ISO 15614, third-party certified' },
      { parameter: 'Heat Treatment', specification: 'Purpose-built temporary furnaces, resistance heating for local PWHT' },
      { parameter: 'Blasting Facility', specification: '16M (L) x 8M (W) x 5M (H) enclosed, Euro III norms' },
      { parameter: 'Testing', specification: 'Vacuum testing, helium leak testing, hydro test' },
      { parameter: 'Calibration', specification: 'Tank calibration for custody transfer / tariff metering' },
      { parameter: 'CNC Machining', specification: 'Hartford PRO 3210, bed 3150 x 2100 mm' },
    ],
    highlights: [
      {
        title: 'Applications',
        items: [
          'Hydrocarbon Storage',
          'Potable Water Tanks',
          'Fire Water Tanks',
          'Effluent Treatment',
          'Process Chemical Storage',
          'Bitumen Storage',
          'Caustic Storage',
          'Acid Storage',
        ],
      },
      {
        title: 'Recent Clients',
        accent: true,
        items: [
          'Sami Bitumen Technologies (Australia)',
          'Mundra Petrochem / Adani Group',
          'Iluka Rare Earths (W. Australia)',
          'Carrinho SA (Angola)',
          'Oman Sugar Refinery Co.',
          'Albemarle Lithium',
        ],
      },
    ],
    projectRefs: [
      { client: 'Sami Bitumen Technologies', endUser: 'Australian bitumen plant', equipment: '5 hot bitumen tanks, 91 CuM, API 650/ASME', qty: 5, year: '2025' },
      { client: 'Mundra Petrochem Ltd', endUser: 'Adani Group', equipment: '44 storage tanks per API 650/620', qty: 44, year: '2025' },
      { client: 'Iluka Rare Earths', endUser: 'Rare earths refinery, W. Australia', equipment: '79 SS storage tanks, 554 MT total', qty: 79, year: '2024' },
      { client: 'Carrinho SA', endUser: 'Sugar refinery, Angola', equipment: 'CS & SS storage tanks + FRP tanks', qty: 11, year: '2024' },
      { client: 'Oman Sugar Refinery Co.', endUser: 'Oman Sugar Refinery', equipment: '25 atmospheric storage tanks, SS', qty: 25, year: '2022' },
      { client: 'Aarti Industries', endUser: 'Aarti Industries', equipment: '200 KL spent acid tank', qty: 1, year: '2020' },
      { client: 'Albemarle Lithium', endUser: 'Albemarle', equipment: '56 atmospheric tanks, 248 MT', qty: 56, year: '2019' },
      { client: 'PI Industries', endUser: 'PI Industries', equipment: 'Six storage tanks, 35-100 KL', qty: 6, year: '2010' },
    ],
    relatedProducts: [
      {
        slug: 'pressure-vessels',
        title: 'Pressure Vessels',
        description: 'ASME, IBR and PED certified pressure vessels for all industrial applications.',
        image: '/prod-pressure-vessel.webp',
      },
      {
        slug: 'heat-exchangers',
        title: 'Heat Exchangers',
        description: 'Shell & tube, U-tube, fixed tubesheet to TEMA & ASME standards.',
        image: '/prod-heat-exchangers.webp',
      },
      {
        slug: '',
        title: 'Portable Chemical Tanks',
        description: 'Pressurized transportable tanks with IMDG, ADR and DOT certification.',
        image: '/prod-portable-tanks.webp',
      },
    ],
    projectList: [
      {
        clientName: 'Sami Bitumen Technologies',
        groupName: '',
        ownerName: '',
        jobNo: '4570',
        description: 'Design and manufacturing of 5 hot bitumen tanks (91 CuM capacity, 115 MT each) compliant with API 650 and ASME standards',
        startDate: 'June 24, 2025',
        endDate: '',
      },
      {
        clientName: 'Mundra Petrochem Ltd',
        groupName: 'Adani Group',
        ownerName: '',
        jobNo: '4541',
        description: 'Supply of 26 pressure vessels and 44 storage tanks per API 650/620 standards for chlor-alkali facility',
        startDate: 'May 21, 2025',
        endDate: '',
      },
      {
        clientName: 'Mundra Petrochem Ltd',
        groupName: '',
        ownerName: '',
        jobNo: '4622',
        description: 'Two caustic storage tanks (SS310S, 310 CuM each) with passivation and water testing for chlor-alkali project',
        startDate: 'April 10, 2025',
        endDate: '',
      },
      {
        clientName: 'Iluka Rare Earths Pty Ltd',
        groupName: '',
        ownerName: '',
        jobNo: '4476',
        description: 'Seventy-nine storage tanks in stainless steel variants (554 MT total) for rare earths refinery in Western Australia',
        startDate: '',
        endDate: 'December 24, 2024',
      },
      {
        clientName: 'Carrinho SA',
        groupName: '',
        ownerName: '',
        jobNo: '4524',
        description: 'Multiple storage tank designs in carbon steel and stainless steel (11 tanks, 44+ MT) plus FRP tanks for 3000 TPD sugar refinery in Angola',
        startDate: 'May 2024',
        endDate: 'May 2025',
      },
      {
        clientName: 'Oman Sugar Refinery Co.',
        groupName: '',
        ownerName: '',
        jobNo: '3723',
        description: 'Twenty-five atmospheric storage tanks and four pressure vessels in stainless steel',
        startDate: 'April 2022',
        endDate: 'November 2022',
      },
    ],
  },

  'portable-chemical-tanks': {
    slug: 'portable-chemical-tanks',
    title: 'Portable Chemical Tanks',
    heroImage: '/prod-portable-tanks.webp',
    heroLabel: 'ASME U / IMDG / ADR / US DOT',
    heroDescription:
      'Pressurized transportable tanks for hazardous cargo transport via ship, rail and road — certified to IMDG, ADR, RID, US DoT, UK DfT and CSC standards.',
    stats: [
      { value: 'IMDG', label: 'Maritime Certification' },
      { value: 'ADR / RID', label: 'Road & Rail Certified' },
      { value: 'US DoT', label: 'US Certification' },
      { value: 'ISO 14196', label: 'Frame Standard' },
    ],
    overviewLabel: 'Overview',
    overviewTitle: 'Certified for Global Transport',
    overviewLead:
      'BEV designs, manufactures, tests, paints and certifies pressurized tanks for hazardous cargo transport via ship, rail, and road under International Maritime Dangerous Goods Code.',
    overviewText:
      'Certifications include ASME U Stamp, IMDG, ADR, RID, US DoT, UK DfT and CSC. Tanks mount on ISO 14196 frames or freestanding units with forklift pockets, certified by Hartford Steam Boilers, UK. BEV also manufactures BK2 certified containers for bulk solids and Liquid Bromine Isotainers with lead lining for global transport.',
    overviewTags: [
      'ASME U Stamp',
      'IMDG',
      'ADR',
      'RID',
      'US DoT',
      'UK DfT',
      'CSC',
    ],
    overviewMainImage: '/prod-portable-tanks.webp',
    overviewThumbImage: '/gallery-pv-2.jpg',
    gallery: [
      { src: '/prod-portable-tanks.webp', alt: 'Portable chemical tanks', caption: 'ISO tank containers ready for dispatch', large: true },
      { src: '/gallery-pv-1.jpg', alt: 'Workshop', caption: 'BEV manufacturing facility', },
      { src: '/gallery-pv-3.jpg', alt: 'Facility', caption: 'Manufacturing campus, Vadodara', },
      { src: '/gallery-he-1.jpg', alt: 'Fabrication', caption: 'Tank shell fabrication', },
      { src: '/gallery-he-3.jpg', alt: 'Completed units', caption: 'Units packaged for export', },
    ],
    specs: [
      { parameter: 'Design Codes', specification: 'ASME Sec VIII Div 1, IMDG, ADR, RID, US DoT, UK DfT' },
      { parameter: 'Frame Standards', specification: 'ISO 14196 frames, freestanding with forklift pockets' },
      { parameter: 'Certifications', specification: 'ASME U Stamp, CSC, BK2, PED 2014/68/EU' },
      { parameter: 'Certification Body', specification: 'Hartford Steam Boilers, UK' },
      { parameter: 'Design Software', specification: 'PVElite, Ansys, StaadPro, AutoCAD Inventor 3D' },
      { parameter: 'Tank Types', specification: 'ISO tank containers, bulk solid containers, isotainers' },
      { parameter: 'Special Products', specification: 'Liquid Bromine Isotainers with lead lining' },
      { parameter: 'Welding Processes', specification: 'FCAW (manual & semi-automatic), GTAW, SAW' },
      { parameter: 'NDT & Testing', specification: 'Radiography, ultrasound, NABL-accredited material testing' },
      { parameter: 'Surface Treatment', specification: 'Steel grit blasting, airless spray painting' },
    ],
    highlights: [
      {
        title: 'Tank Types',
        items: [
          'ISO Tank Containers',
          'BK2 Certified Bulk Containers',
          'Liquid Bromine Isotainers',
          'Freestanding Tanks with Forklift Pockets',
          'Pressurized Hazardous Cargo Tanks',
          'Lead-Lined Isotainers',
        ],
      },
      {
        title: 'Global Certifications',
        accent: true,
        items: [
          'IMDG (International Maritime)',
          'ADR (European Road)',
          'RID (European Rail)',
          'US DoT (United States)',
          'UK DfT (United Kingdom)',
          'CSC (Container Safety)',
        ],
      },
    ],
    projectRefs: [
      { client: 'Global Chemical Corp', endUser: 'International transport', equipment: 'ISO tank containers, IMDG certified', qty: 6, year: '2023' },
      { client: 'Bromine Industries', endUser: 'Global bromine transport', equipment: 'Liquid Bromine Isotainers, lead-lined', qty: 4, year: '2022' },
      { client: 'Bulk Cargo Solutions', endUser: 'Bulk solid transport', equipment: 'BK2 certified containers', qty: 8, year: '2021' },
    ],
    relatedProducts: [
      { slug: 'pressure-vessels', title: 'Pressure Vessels', description: 'ASME, IBR and PED certified pressure vessels.', image: '/prod-pressure-vessel.webp' },
      { slug: 'skid-mounted-assemblies', title: 'Skid Mounted Assemblies', description: 'Complete process skids with vessels, piping and instruments.', image: '/prod-skid.webp' },
      { slug: 'pressure-piping', title: 'Pressure Piping', description: 'ASME B31.3 piping spools and high-pressure pipe work.', image: '/prod-piping.webp' },
    ],
    projectList: [],
  },

  'pressure-piping': {
    slug: 'pressure-piping',
    title: 'Pressure Piping',
    heroImage: '/prod-piping.webp',
    heroLabel: 'ASME / BS / API / IBR',
    heroDescription:
      'High-pressure pipe work designed and manufactured to ASME, BS, API and client specifications — from carbon steel through exotic metals.',
    stats: [
      { value: 'ASME S', label: 'Stamp Authorization' },
      { value: '600 bar', label: 'Hydro Test Capacity' },
      { value: 'IBR', label: 'Steam Piping Certified' },
      { value: 'ASME IX', label: 'Welding Qualifications' },
    ],
    overviewLabel: 'Overview',
    overviewTitle: 'High-Pressure Pipe Work',
    overviewLead:
      'BEV undertakes design, detailed engineering, manufacture, testing and painting of high pressure pipe work to ASME, BS, API and client specifications.',
    overviewText:
      'The company holds ASME authorization for manufacturing under Section VIII Division 1 and S Stamp for boiler applications, plus IBR Stamp for Indian steam piping. Piping stress analysis is carried out using Ansys or Caesar software. Materials range from carbon steel through exotic metals including titanium, inconel, hastelloy, monel, CuNi, duplex, super duplex and SMO.',
    overviewTags: [
      'ASME B31.3',
      'ASME S Stamp',
      'IBR',
      'API',
      'BS Standards',
    ],
    overviewMainImage: '/prod-piping.webp',
    overviewThumbImage: '/gallery-pv-1.jpg',
    gallery: [
      { src: '/prod-piping.webp', alt: 'Pressure piping', caption: 'High-pressure piping spools', large: true },
      { src: '/gallery-pv-2.jpg', alt: 'Workshop', caption: 'Pipe fabrication bay', },
      { src: '/gallery-he-2.jpg', alt: 'Welding', caption: 'GTAW welding on exotic alloy pipe', },
      { src: '/gallery-pv-3.jpg', alt: 'Facility', caption: 'BEV manufacturing facility', },
      { src: '/gallery-he-1.jpg', alt: 'Assembly', caption: 'Spool assembly and fit-up', },
    ],
    specs: [
      { parameter: 'Design Codes', specification: 'ASME B31.3, ASME Sec VIII Div 1, BS, API, IBR' },
      { parameter: 'Stamps & Certifications', specification: 'ASME S Stamp, IBR Stamp, ASME U Stamp' },
      { parameter: 'Stress Analysis', specification: 'Ansys, Caesar software' },
      { parameter: 'Materials', specification: 'CS, SS, Titanium, Inconel, Hastelloy, Monel, CuNi, Duplex, Super Duplex, SMO (6% Mo)' },
      { parameter: 'Equipment', specification: 'Pipe profile cutters, orbital beveling, chamfering and facing machines' },
      { parameter: 'Welding Processes', specification: 'SAW, SMAW, GTAW, FCAW' },
      { parameter: 'WPQRs', specification: 'ASME Sec IX, EN ISO 15614 — third-party certified' },
      { parameter: 'Heat Treatment', specification: 'Temporary furnace construction for large spool PWHT' },
      { parameter: 'Testing', specification: 'Hydro test (up to 600 bar), pneumatic, vacuum testing' },
      { parameter: 'NDT', specification: 'Radiography, dye penetrant, ultrasound, PMI, spot hardness' },
      { parameter: 'Surface Treatment', specification: 'Enclosed steel grit blasting, airless spray painting' },
    ],
    highlights: [
      {
        title: 'Piping Types',
        items: [
          'High-Pressure Process Piping',
          'Boiler Steam Piping (IBR)',
          'Cryogenic Piping',
          'Exotic Alloy Pipe Spools',
          'Large Bore Piping',
          'Instrument & Utility Piping',
        ],
      },
      {
        title: 'Exotic Welding Capability',
        accent: true,
        items: [
          'Titanium',
          'Inconel / Incolloy',
          'Hastelloy / Monel',
          'CuNi',
          'Duplex / Super Duplex',
          'SMO (6% Mo)',
        ],
      },
    ],
    projectRefs: [
      { client: 'Samsung Engineering', endUser: 'HPCL Mumbai', equipment: 'HP process piping, SS 316L', qty: 1, year: '2022' },
      { client: 'L&T Hydrocarbon', endUser: 'BPCL Kochi', equipment: 'Alloy steel piping spools, PWHT', qty: 1, year: '2021' },
      { client: 'Fluor Daniel India', endUser: 'ONGC Hazira', equipment: 'CS & SS piping, ASME B31.3', qty: 1, year: '2021' },
    ],
    relatedProducts: [
      { slug: 'pressure-vessels', title: 'Pressure Vessels', description: 'ASME, IBR and PED certified pressure vessels.', image: '/prod-pressure-vessel.webp' },
      { slug: 'skid-mounted-assemblies', title: 'Skid Mounted Assemblies', description: 'Complete process skids with piping, vessels and instruments.', image: '/prod-skid.webp' },
      { slug: 'boiler-pressure-parts', title: 'Boiler Pressure Parts', description: 'Water walls, economizers, superheaters and headers.', image: '/prod-boilers.webp' },
    ],
    projectList: [],
  },

  'boiler-pressure-parts': {
    slug: 'boiler-pressure-parts',
    title: 'Boiler Pressure Parts',
    heroImage: '/prod-boilers.webp',
    heroLabel: 'ASME S STAMP / IBR',
    heroDescription:
      'Water walls, economizers, superheaters, reheaters, steam drums, headers and critical piping — manufactured under ASME S Stamp and IBR authorization.',
    stats: [
      { value: 'ASME S', label: 'Stamp Authorization' },
      { value: 'IBR', label: 'Approved Manufacturer' },
      { value: 'ASME IX', label: 'Welding Qualifications' },
      { value: 'AWS D1.1', label: 'Structural Welding' },
    ],
    overviewLabel: 'Overview',
    overviewTitle: 'ASME S Stamp Authorized',
    overviewLead:
      'BEV is capable of manufacturing boiler pressure parts such as water walls, economizers, superheaters, reheaters, steam/mud drums, blow down tanks, condensers, HP/LP heaters, headers, finned tube boiler modules and critical piping.',
    overviewText:
      'BEV has been authorized by ASME to manufacture boilers and components under S Stamp and is an approved shop under Indian Boiler Regulations 1950. Exotic welding capability includes titanium, inconel, incolloy, hastelloy, monel, CuNi, duplex, super duplex and SMO (6% Mo).',
    overviewTags: [
      'ASME S Stamp',
      'IBR 1950',
      'ASME Sec IX',
      'ASME Sec VIII Div 1',
    ],
    overviewMainImage: '/prod-boilers.webp',
    overviewThumbImage: '/gallery-pv-1.jpg',
    gallery: [
      { src: '/prod-boilers.webp', alt: 'Boiler pressure parts', caption: 'Boiler components under fabrication', large: true },
      { src: '/gallery-pv-2.jpg', alt: 'Fabrication', caption: 'Header fabrication in progress', },
      { src: '/gallery-he-1.jpg', alt: 'Welding', caption: 'Tube-to-header welding', },
      { src: '/gallery-pv-3.jpg', alt: 'Facility', caption: 'BEV manufacturing facility', },
      { src: '/gallery-he-2.jpg', alt: 'Assembly', caption: 'Boiler module assembly', },
    ],
    specs: [
      { parameter: 'Design Codes', specification: 'ASME Sec I, ASME Sec VIII Div 1, IBR 1950' },
      { parameter: 'Stamps', specification: 'ASME S Stamp, ASME U Stamp, IBR Stamp' },
      { parameter: 'Boiler Parts', specification: 'Water walls, economizers, superheaters, reheaters, headers, finned tube modules' },
      { parameter: 'Drums & Vessels', specification: 'Steam drums, mud drums, blow down tanks, condensers, HP/LP heaters, deaerators' },
      { parameter: 'Piping', specification: 'Waterwall headers, economizer/superheater/reheater headers, critical piping' },
      { parameter: 'Materials', specification: 'CS, alloy steel, SS, Titanium, Inconel, Hastelloy, Monel, CuNi, Duplex, SMO' },
      { parameter: 'Equipment', specification: 'Pipe profile cutters, orbital beveling, CNC band saw, column & boom, positioners' },
      { parameter: 'Welding', specification: 'SAW, FCAW, SMAW, GTAW — WPQRs to ASME Sec IX, BV/TUV certified' },
      { parameter: 'Heat Treatment', specification: 'PWHT in temporary furnaces or localized resistance heating' },
      { parameter: 'NDT & Testing', specification: 'Radiography, UT, DPT, PMI, hydro/pneumatic/vacuum testing' },
      { parameter: 'Surface Treatment', specification: 'Enclosed steel grit blasting (Euro III), airless spray painting, Belzona/Ceramkote' },
    ],
    highlights: [
      {
        title: 'Components We Manufacture',
        items: [
          'Water Walls',
          'Economizers',
          'Superheaters & Reheaters',
          'Steam & Mud Drums',
          'Blow Down Tanks',
          'HP / LP Heaters',
          'Deaerators',
          'Finned Tube Boiler Modules',
        ],
      },
      {
        title: 'Key Certifications',
        accent: true,
        items: [
          'ASME S Stamp (Boiler Manufacturing)',
          'ASME U Stamp (Pressure Vessels)',
          'IBR Approved Manufacturer',
          'ASME Sec IX Welding',
          'Bureau Veritas / TUV Certified',
          'NABL Accredited Testing',
        ],
      },
    ],
    projectRefs: [
      { client: 'Thermax Ltd', endUser: 'Power plant', equipment: 'Waterwall panels & economizer coils', qty: 1, year: '2023' },
      { client: 'BHEL', endUser: 'Thermal power station', equipment: 'Superheater headers, alloy steel', qty: 4, year: '2022' },
      { client: 'L&T Power', endUser: 'Boiler OEM', equipment: 'Steam drums & blow down tanks', qty: 2, year: '2021' },
    ],
    relatedProducts: [
      { slug: 'pressure-vessels', title: 'Pressure Vessels', description: 'ASME, IBR and PED certified pressure vessels.', image: '/prod-pressure-vessel.webp' },
      { slug: 'pressure-piping', title: 'Pressure Piping', description: 'ASME B31.3 piping spools and high-pressure pipe work.', image: '/prod-piping.webp' },
      { slug: 'heat-exchangers', title: 'Heat Exchangers', description: 'Shell & tube, U-tube to TEMA & ASME standards.', image: '/prod-heat-exchangers.webp' },
    ],
    projectList: [],
  },

  'structures': {
    slug: 'structures',
    title: 'Structures',
    heroImage: '/prod-structures.webp',
    heroLabel: 'AISC / API / AWS D1.1',
    heroDescription:
      'Offshore and onshore structural fabrication to AISC, API, IS and client standards — from design through blasting, painting and trial assembly.',
    stats: [
      { value: 'AISC', label: 'Design Standard' },
      { value: 'AWS D1.1', label: 'Welding Standard' },
      { value: 'API', label: 'Offshore Standards' },
      { value: 'StaadPro', label: 'Design Software' },
    ],
    overviewLabel: 'Overview',
    overviewTitle: 'Offshore & Onshore Structures',
    overviewLead:
      'BEV undertakes design, manufacture, testing, painting and certification of structures for offshore and onshore applications to AISC, API, IS or client standards.',
    overviewText:
      'Design employs STRAP or StaadPro software for modelling and analysis, supplemented by custom spreadsheets and AutoCAD for drafting. BEV maintains WPQRs to ASME Sec IX, AWS D1.1 and EN 288 covering a wide range of materials, thicknesses and processes. Trial assembly of structures is carried out at the open lay down area.',
    overviewTags: [
      'AISC',
      'API',
      'AWS D1.1',
      'EN 288',
      'IS Standards',
    ],
    overviewMainImage: '/prod-structures.webp',
    overviewThumbImage: '/gallery-pv-3.jpg',
    gallery: [
      { src: '/prod-structures.webp', alt: 'Structural fabrication', caption: 'Structural steel assembly at BEV', large: true },
      { src: '/gallery-pv-1.jpg', alt: 'Workshop', caption: 'Heavy fabrication bay', },
      { src: '/gallery-pv-2.jpg', alt: 'Fabrication', caption: 'Structural member fabrication', },
      { src: '/gallery-he-3.jpg', alt: 'Completed', caption: 'Completed structure ready for dispatch', },
      { src: '/gallery-pv-3.jpg', alt: 'Facility', caption: 'BEV campus, Vadodara', },
    ],
    specs: [
      { parameter: 'Design Codes', specification: 'AISC, API, IS, AWS D1.1, EN 288, client specifications' },
      { parameter: 'Applications', specification: 'Offshore platforms, onshore structures, pipe racks, equipment supports' },
      { parameter: 'Design Software', specification: 'STRAP, StaadPro, custom spreadsheets, AutoCAD' },
      { parameter: 'Welding Standards', specification: 'ASME Sec IX, AWS D1.1, EN 288' },
      { parameter: 'Fabrication Equipment', specification: 'CNC profile cutters, FCAW machines (manual & semi-automatic)' },
      { parameter: 'NDT', specification: 'Radiography, ultrasound including TKY weld joints, NABL accredited' },
      { parameter: 'Surface Treatment', specification: 'Enclosed steel grit blasting, airless spray painting' },
      { parameter: 'Trial Assembly', specification: 'Open lay down area for full trial assembly' },
      { parameter: 'Hot-Dip Galvanizing', specification: 'Available through specialist facilities within reach' },
    ],
    highlights: [
      {
        title: 'Structure Types',
        items: [
          'Offshore Platforms & Modules',
          'Pipe Racks',
          'Equipment Support Structures',
          'Access Platforms & Walkways',
          'Pipe Supports & Hangers',
          'Structural Skids',
        ],
      },
      {
        title: 'Management Expertise',
        accent: true,
        items: [
          'Large-volume structures (Middle East)',
          'Multinational EPC contractor experience',
          'AWS/CSWIP Certified Welding Inspectors',
          'BGAS Grade II Painting Inspectors',
          'NABL Accredited NDT',
        ],
      },
    ],
    projectRefs: [
      { client: 'Samsung Engineering', endUser: 'Offshore platform', equipment: 'Structural modules, API standards', qty: 1, year: '2022' },
      { client: 'L&T Hydrocarbon', endUser: 'Refinery', equipment: 'Pipe racks & equipment supports', qty: 1, year: '2021' },
      { client: 'Fluor Daniel', endUser: 'ONGC', equipment: 'Onshore structural steel', qty: 1, year: '2020' },
    ],
    relatedProducts: [
      { slug: 'skid-mounted-assemblies', title: 'Skid Mounted Assemblies', description: 'Complete process skids with structural frames.', image: '/prod-skid.webp' },
      { slug: 'offshore-containers', title: 'Offshore Containers', description: 'DNV 2.7-1 certified offshore containers.', image: '/prod-offshore.webp' },
      { slug: 'pressure-piping', title: 'Pressure Piping', description: 'ASME B31.3 piping spools.', image: '/prod-piping.webp' },
    ],
    projectList: [],
  },

  'skid-mounted-assemblies': {
    slug: 'skid-mounted-assemblies',
    title: 'Skid Mounted Assemblies',
    heroImage: '/prod-skid.webp',
    heroLabel: 'ASME / COMPLETE INTEGRATION',
    heroDescription:
      'Procurement, fabrication, assembly, hook-up and function testing of complete skid-mounted process packages — from compressor skids to metering systems.',
    stats: [
      { value: '600 bar', label: 'Hydro Test Capacity' },
      { value: '3D', label: 'AutoCAD Modeling' },
      { value: 'E&I', label: 'Full Integration' },
      { value: 'Loop Test', label: 'Function Testing' },
    ],
    overviewLabel: 'Overview',
    overviewTitle: 'Fully Integrated Process Skids',
    overviewLead:
      'BEV undertakes procurement, manufacture, testing, assembly, hook-up and function testing of skid mounted assemblies — including compressor skids, pump skids, metering/proving skids, dosing skids, pig launcher-receiver skids and washing skids.',
    overviewText:
      'BEV handles design and detailed engineering of piping, structural frames, pipe supports, equipment supports and platforms. They can design static equipment like filters, knock-out drums and surge vessels, plus procure and install motors, pumps, compressors, blowers, control systems, measuring instruments and valves. All E&I components including actuated valves, power-driven equipment, field instruments and cabling are installed with loop checks and function tests.',
    overviewTags: [
      'ASME',
      'ASME Sec IX',
      'EN ISO 15614',
      'AutoCAD 3D',
    ],
    overviewMainImage: '/prod-skid.webp',
    overviewThumbImage: '/gallery-he-1.jpg',
    gallery: [
      { src: '/prod-skid.webp', alt: 'Skid mounted assembly', caption: 'Complete process skid under assembly', large: true },
      { src: '/gallery-pv-1.jpg', alt: 'Workshop', caption: 'Skid fabrication bay', },
      { src: '/gallery-he-2.jpg', alt: 'Integration', caption: 'Piping and E&I integration', },
      { src: '/gallery-pv-3.jpg', alt: 'Facility', caption: 'BEV manufacturing facility', },
      { src: '/gallery-he-3.jpg', alt: 'Testing', caption: 'Function testing in progress', },
    ],
    specs: [
      { parameter: 'Skid Types', specification: 'Compressor, pump, metering/proving, dosing, pig launcher-receiver, washing skids' },
      { parameter: 'Design & Engineering', specification: 'Piping, structural frames, pipe supports, equipment supports, platforms' },
      { parameter: 'Static Equipment', specification: 'Filters, knock-out drums, surge vessels — designed in-house' },
      { parameter: 'Rotating Equipment', specification: 'Motors, pumps, compressors, blowers, agitators — procured & installed' },
      { parameter: '3D Modeling', specification: 'AutoCAD Inventor 3D for modeling and interference checks' },
      { parameter: 'Stress Analysis', specification: 'Piping stress analysis via design associates' },
      { parameter: 'Materials', specification: 'Carbon steel, low alloy steels, stainless steels' },
      { parameter: 'Welding', specification: 'SAW, SMAW, GTAW, FCAW — WPQRs to ASME Sec IX, EN ISO 15614' },
      { parameter: 'Testing', specification: 'Hydro test (up to 600 bar), pneumatic, helium leak testing' },
      { parameter: 'E&I Integration', specification: 'Actuated valves, instruments, cabling, loop checks, function tests' },
      { parameter: 'Insulation', specification: 'Hot, cold and acoustic insulation on skid piping and equipment' },
    ],
    highlights: [
      {
        title: 'Integration Scope',
        items: [
          'Structural Frame & Platforms',
          'Pipe Work & Supports',
          'Static & Rotary Equipment',
          'Electrical Systems',
          'Control & Instrumentation',
          'Insulation (Hot/Cold/Acoustic)',
          'Refractory Installation',
          'Loop Checks & Function Tests',
        ],
      },
      {
        title: 'Quality Team',
        accent: true,
        items: [
          'AWS/CSWIP 3.1/3.2 Welding Inspectors',
          'API 510 Pressure Vessel Inspectors',
          'BGAS Grade II Painting Inspectors',
          'Middle East project experience',
          'Multinational EPC contractor experience',
        ],
      },
    ],
    projectRefs: [
      { client: 'Shell Global Solutions', endUser: 'Shell Hazira', equipment: 'Compressor skid package, complete integration', qty: 2, year: '2022' },
      { client: 'Air Products', endUser: 'Gas processing', equipment: 'Metering skid with E&I', qty: 1, year: '2021' },
      { client: 'Reliance Industries', endUser: 'Jamnagar', equipment: 'Pump skid assemblies', qty: 3, year: '2020' },
    ],
    relatedProducts: [
      { slug: 'pressure-vessels', title: 'Pressure Vessels', description: 'ASME, IBR and PED certified pressure vessels.', image: '/prod-pressure-vessel.webp' },
      { slug: 'pressure-piping', title: 'Pressure Piping', description: 'ASME B31.3 piping spools.', image: '/prod-piping.webp' },
      { slug: 'structures', title: 'Structures', description: 'Offshore and onshore structural fabrication.', image: '/prod-structures.webp' },
    ],
    projectList: [],
  },

  'offshore-containers': {
    slug: 'offshore-containers',
    title: 'Offshore Containers',
    heroImage: '/prod-offshore.webp',
    heroLabel: 'DNV 2.7-1 / EN 12079',
    heroDescription:
      'Offshore containers designed and manufactured to DNV 2.7-1 and EN 12079 standards for safe lifting and transport on offshore installations.',
    stats: [
      { value: 'DNV 2.7-1', label: 'Design Standard' },
      { value: 'EN 12079', label: 'European Standard' },
      { value: 'AWS D1.1', label: 'Welding Standard' },
      { value: 'CSC', label: 'Container Safety' },
    ],
    overviewLabel: 'Overview',
    overviewTitle: 'Built for Offshore Operations',
    overviewLead:
      'BEV designs and manufactures offshore containers certified to DNV 2.7-1 and EN 12079 standards for safe lifting and transport on offshore platforms and installations.',
    overviewText:
      'Containers are designed for harsh offshore environments with full structural analysis, certified lifting points and proof load testing. BEV maintains WPQRs to ASME Sec IX and AWS D1.1, with CNC profile cutting and both manual and semi-automatic FCAW welding capability. All units receive enclosed steel grit blasting and marine-grade painting.',
    overviewTags: [
      'DNV 2.7-1',
      'EN 12079',
      'AWS D1.1',
      'CSC',
    ],
    overviewMainImage: '/prod-offshore.webp',
    overviewThumbImage: '/gallery-pv-1.jpg',
    gallery: [
      { src: '/prod-offshore.webp', alt: 'Offshore containers', caption: 'DNV certified offshore containers', large: true },
      { src: '/gallery-pv-2.jpg', alt: 'Fabrication', caption: 'Container frame fabrication', },
      { src: '/gallery-pv-1.jpg', alt: 'Workshop', caption: 'BEV heavy fabrication bay', },
      { src: '/gallery-he-3.jpg', alt: 'Completed', caption: 'Units ready for dispatch', },
      { src: '/gallery-pv-3.jpg', alt: 'Facility', caption: 'Manufacturing facility, Vadodara', },
    ],
    specs: [
      { parameter: 'Design Codes', specification: 'DNV 2.7-1, EN 12079, client specifications' },
      { parameter: 'Container Types', specification: 'Cargo containers, waste skips, chemical tanks, tool containers, mud skips' },
      { parameter: 'Welding Standards', specification: 'ASME Sec IX, AWS D1.1' },
      { parameter: 'Fabrication', specification: 'CNC profile cutters, FCAW welding (manual & semi-automatic)' },
      { parameter: 'Testing', specification: 'Proof load testing, NDT (radiography, ultrasound, MPI)' },
      { parameter: 'Surface Treatment', specification: 'Enclosed steel grit blasting, marine-grade painting' },
      { parameter: 'Certification', specification: 'Third-party certified lifting points, DNV type approval' },
    ],
    highlights: [
      {
        title: 'Container Types',
        items: [
          'Cargo Carrying Units',
          'Waste Skips',
          'Chemical Tank Containers',
          'Tool & Equipment Containers',
          'Mud Skips',
          'Basket Containers',
        ],
      },
      {
        title: 'Certification Scope',
        accent: true,
        items: [
          'DNV 2.7-1 Type Approval',
          'EN 12079 Compliance',
          'Certified Lifting Points',
          'Proof Load Testing',
          'AWS D1.1 Welding',
          'Marine-Grade Surface Treatment',
        ],
      },
    ],
    projectRefs: [
      { client: 'Offshore Solutions', endUser: 'North Sea operations', equipment: 'Cargo containers, DNV 2.7-1', qty: 12, year: '2022' },
      { client: 'Adani Ports', endUser: 'Offshore terminal', equipment: 'Chemical tank containers', qty: 4, year: '2021' },
    ],
    relatedProducts: [
      { slug: 'structures', title: 'Structures', description: 'Offshore and onshore structural fabrication.', image: '/prod-structures.webp' },
      { slug: 'portable-chemical-tanks', title: 'Portable Chemical Tanks', description: 'IMDG and ADR certified transport tanks.', image: '/prod-portable-tanks.webp' },
      { slug: 'skid-mounted-assemblies', title: 'Skid Mounted Assemblies', description: 'Complete process skids.', image: '/prod-skid.webp' },
    ],
    projectList: [],
  },

  'miscellaneous-equipment': {
    slug: 'miscellaneous-equipment',
    title: 'Miscellaneous Equipment',
    heroImage: '/prod-misc.webp',
    heroLabel: 'CUSTOM STATIC PROCESS EQUIPMENT',
    heroDescription:
      'Custom-designed static process plant equipment — furnaces, cyclones, silos, chimneys, stacks, silencers, rotary air preheaters and OEM components.',
    stats: [
      { value: 'OEM', label: 'Global OEM Experience' },
      { value: 'CE', label: 'CE Marking Available' },
      { value: 'GOST', label: 'Russia / Kazakhstan' },
      { value: 'NDA', label: 'IP Protection' },
    ],
    overviewLabel: 'Overview',
    overviewTitle: 'Custom Process Equipment',
    overviewLead:
      'BEV undertakes procurement, shop fabrication, assembly, testing, painting and delivery of custom designed static process plant equipment including static compressor parts, furnaces, hot air generators, cyclones, silos, chimneys, stacks, silencers and rotary air preheaters.',
    overviewText:
      'BEV has worked with global OEMs including FLSmidth, Siemens, Jord International and Howden Air & Gas. The firm maintains intellectual property protection through confidentiality agreements and data protection measures. Equipment capabilities span CNC cutting, hydraulic presses, multiple welding processes, testing methods and surface preparation.',
    overviewTags: [
      'CE Marking',
      'GOST-R / GOST-K',
      'ASME',
      'Client Specifications',
    ],
    overviewMainImage: '/prod-misc.webp',
    overviewThumbImage: '/gallery-he-1.jpg',
    gallery: [
      { src: '/prod-misc.webp', alt: 'Miscellaneous equipment', caption: 'Custom process equipment at BEV', large: true },
      { src: '/gallery-pv-1.jpg', alt: 'Workshop', caption: 'Heavy fabrication bay', },
      { src: '/gallery-pv-2.jpg', alt: 'Fabrication', caption: 'Custom equipment fabrication', },
      { src: '/gallery-he-2.jpg', alt: 'Components', caption: 'Component assembly', },
      { src: '/gallery-pv-3.jpg', alt: 'Facility', caption: 'BEV campus, Vadodara', },
    ],
    specs: [
      { parameter: 'Equipment Types', specification: 'Furnaces, hot air generators, cyclones, silos, chimneys, stacks, silencers, rotary air preheaters' },
      { parameter: 'OEM Partners', specification: 'FLSmidth, Siemens, Jord International, Howden Air & Gas' },
      { parameter: 'Materials', specification: 'Carbon steel through exotic metals — SMO, Duplex, Hastelloy, Inconel, Titanium' },
      { parameter: 'Certifications', specification: 'CE marking, GOST-R/K, ASME' },
      { parameter: 'Third-Party Inspection', specification: 'Bureau Veritas, TÜV Nord, Lloyds Register, DNV, SGS' },
      { parameter: 'Fabrication', specification: 'CNC cutting, hydraulic presses, multiple welding processes' },
      { parameter: 'IP Protection', specification: 'Confidentiality agreements, data protection measures' },
      { parameter: 'Design Services', specification: 'Design review, material optimization, manufacturing alternatives, jig/fixture development' },
      { parameter: 'Surface Treatment', specification: 'Blasting, painting, special coatings' },
    ],
    highlights: [
      {
        title: 'Equipment Types',
        items: [
          'Static Compressor Parts',
          'Furnaces & Hot Air Generators',
          'Cyclones & Silos',
          'Chimneys & Stacks',
          'Silencers',
          'Rotary Air Preheaters',
        ],
      },
      {
        title: 'Global OEM Clients',
        accent: true,
        items: [
          'FLSmidth',
          'Siemens',
          'Jord International',
          'Howden Air & Gas',
          'CE / GOST-R certified supply',
          'Full NDA & IP protection',
        ],
      },
    ],
    projectRefs: [
      { client: 'FLSmidth', endUser: 'Cement plant', equipment: 'Cyclones & hot air generators', qty: 1, year: '2023' },
      { client: 'Siemens', endUser: 'Power generation', equipment: 'Static compressor parts', qty: 1, year: '2022' },
      { client: 'Howden Air & Gas', endUser: 'Process industry', equipment: 'Rotary air preheaters', qty: 2, year: '2021' },
    ],
    relatedProducts: [
      { slug: 'pressure-vessels', title: 'Pressure Vessels', description: 'ASME, IBR and PED certified pressure vessels.', image: '/prod-pressure-vessel.webp' },
      { slug: 'heat-exchangers', title: 'Heat Exchangers', description: 'Shell & tube to TEMA & ASME standards.', image: '/prod-heat-exchangers.webp' },
      { slug: 'skid-mounted-assemblies', title: 'Skid Mounted Assemblies', description: 'Complete process skids.', image: '/prod-skid.webp' },
    ],
    projectList: [],
  },
};

for (const [slug, data] of Object.entries(projectData)) {
  if (productPages[slug]) {
    productPages[slug].projectRefs = data.projectRefs;
    productPages[slug].projectList = data.projectList;
  }
}

export const productSlugs = Object.keys(productPages);
