const acirLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/acir.jpg";
const alcoveLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/alcove.jpg";
const atpiLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/atpi.jpg";
const avantiLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/avanti.png";
const ciiLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/cii.png";
const digifacLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/digifac.png";
const edLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/ed.jpg";
const gaitSolutionsLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/gait_solutions.png";
const icompassLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/icompass.png";
const meityLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/meity.jpg";
const ministryLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/ministry+of+sceince.png";
const msmeLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/msme-logo-p.png";
const nasscomLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/nasscom.png";
const niMsmeLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/Ni-msme.png";
const pblTransportLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/pbl_trnasport.png";
const purudeLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/purude.jpg";
const rosysLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/rosys.jpg";
const sandhyaAquaLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/sandhya_aqua.jpg";
const sandlogicLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/sandlogic.jpg";
const tieWomenLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/tie_women.jpg";
const tieULogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/TiE-U.png";
const tieLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/tie.jpg";
const wageningenLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/wageningen.png";
const youngIndiansLogo = "https://dtfhihp4ovn79.cloudfront.net/Partners/young+indians.jpg";

export type PartnerItem = {
  name: string;
  logo: string;
  description: string;
  href?: string;
};

export const marqueePartners: PartnerItem[] = [
  {
    name: "TiE Vizag",
    logo: tieLogo,
    description: "Empowering entrepreneurs with mentorship, funding access, and global networking.",
    href: "https://vizag.tie.org/",
  },
  {
    name: "Avanti Feeds",
    logo: avantiLogo,
    description: "Industry leader fostering aquaculture innovation and sustainable partnerships.",
    href: "https://avantifeeds.com/",
  },
  {
    name: "ATPI",
    logo: atpiLogo,
    description: "Promoting technology parks and industrial innovation infrastructure.",
    href: "#",
  },
  {
    name: "NASSCOM",
    logo: nasscomLogo,
    description: "Driving technology innovation and startup ecosystem growth across India.",
    href: "https://nasscom.in/",
  },
  {
    name: "Ministry of Science",
    logo: ministryLogo,
    description: "Supporting scientific research and technology-led innovation initiatives.",
    href: "https://dst.gov.in/",
  },
  {
    name: "iCompass",
    logo: icompassLogo,
    description: "Education technology partner supporting student entrepreneurship.",
    href: "https://www.icompasstech.com/",
  },
  {
    name: "SandLogic",
    logo: sandlogicLogo,
    description: "AI and deep-tech partner supporting product innovation.",
    href: "https://www.sandlogic.com/",
  },
  {
    name: "Alcove",
    logo: alcoveLogo,
    description: "Collaborative workspaces for startups and innovators.",
    href: "https://alcovepartners.com/home",
  },
  {
    name: "Rosys",
    logo: rosysLogo,
    description: "Technology solutions partner driving digital transformation.",
    href: "https://www.ross-tech.com/",
  },
  {
    name: "MSME",
    logo: msmeLogo,
    description: "Micro, Small and Medium Enterprises support and development initiatives.",
    href: "https://www.msme.gov.in/",
  },
  {
    name: "MeitY",
    logo: meityLogo,
    description: "Ministry of Electronics and Information Technology driving digital India initiatives.",
    href: "https://www.meity.gov.in/",
  },
  {
    name: "NI MSME",
    logo: niMsmeLogo,
    description: "National Institute for MSME supporting small business growth and innovation.",
    href: "https://www.nimsme.gov.in/",
  },
  {
    name: "ED (APEDCL)",
    logo: edLogo,
    description: "Electricity Distribution partner supporting energy and infrastructure development.",
    href: "#",
  },
  {
    name: "CII",
    logo: ciiLogo,
    description: "Confederation of Indian Industry fostering industrial growth and partnerships.",
    href: "https://www.cii.in/",
  },
  {
    name: "TiE Women",
    logo: tieWomenLogo,
    description: "Empowering women entrepreneurs through mentorship and global networking.",
    href: "https://www.tiewomen.org/",
  },
  {
    name: "Young Indians",
    logo: youngIndiansLogo,
    description: "Youth-driven initiative by CII fostering leadership and entrepreneurship.",
    href: "https://youngindians.net/",
  },
  {
    name: "TiE-U",
    logo: tieULogo,
    description: "University-focused TiE initiative nurturing student startups and innovation.",
    href: "#",
  },
  {
    name: "Sandhya Aqua",
    logo: sandhyaAquaLogo,
    description: "Aquaculture enterprise driving sustainable farming and seafood innovation.",
    href: "#",
  },
  {
    name: "Purdue University",
    logo: purudeLogo,
    description: "Global research university partnering in technology and innovation programs.",
    href: "https://www.purdue.edu/",
  },
  {
    name: "ACIR",
    logo: acirLogo,
    description: "Research and innovation center driving collaborative industry partnerships.",
    href: "#",
  },
  {
    name: "Wageningen",
    logo: wageningenLogo,
    description: "World-renowned university for life sciences, agriculture, and food innovation.",
    href: "https://www.wur.nl/",
  },
  {
    name: "PBL Transport",
    logo: pblTransportLogo,
    description: "Logistics and transport solutions supporting efficient supply chain operations.",
    href: "#",
  },
];

export const popularPartners: PartnerItem[] = [
  {
    name: "TiE Vizag",
    logo: tieLogo,
    description: "Empowering entrepreneurs with mentorship, funding access, and global networking opportunities.",
    href: "https://vizag.tie.org/",
  },
  {
    name: "Avanti Feeds",
    logo: avantiLogo,
    description: "Industry leader fostering aquaculture innovation and sustainable business partnerships.",
    href: "https://avantifeeds.com/",
  },
  {
    name: "NASSCOM",
    logo: nasscomLogo,
    description: "Driving technology innovation and startup ecosystem growth across India.",
    href: "https://nasscom.in/",
  },
  {
    name: "iCompass",
    logo: icompassLogo,
    description: "Education technology partner supporting student entrepreneurship and innovation.",
    href: "https://www.icompasstech.com/",
  },
  {
    name: "SandLogic",
    logo: sandlogicLogo,
    description: "AI and deep-tech partner supporting product innovation and scalable solutions.",
    href: "https://www.sandlogic.com/",
  },
  {
    name: "ATPI",
    logo: atpiLogo,
    description: "Promoting technology parks and industrial innovation infrastructure across regions.",
    href: "#",
  },
  {
    name: "MSME",
    logo: msmeLogo,
    description: "Micro, Small and Medium Enterprises support and development initiatives.",
    href: "https://www.msme.gov.in/",
  },
  {
    name: "MeitY",
    logo: meityLogo,
    description: "Ministry of Electronics and Information Technology driving digital India initiatives.",
    href: "https://www.meity.gov.in/",
  },
  {
    name: "NI MSME",
    logo: niMsmeLogo,
    description: "National Institute for MSME supporting small business growth and innovation.",
    href: "https://www.nimsme.gov.in/",
  },
  {
    name: "ED (APEDCL)",
    logo: edLogo,
    description: "Electricity Distribution partner supporting energy and infrastructure development.",
    href: "#",
  },
  {
    name: "CII",
    logo: ciiLogo,
    description: "Confederation of Indian Industry fostering industrial growth and partnerships.",
    href: "https://www.cii.in/",
  },
  {
    name: "TiE Women",
    logo: tieWomenLogo,
    description: "Empowering women entrepreneurs through mentorship and global networking.",
    href: "https://www.tiewomen.org/",
  },
  {
    name: "Young Indians",
    logo: youngIndiansLogo,
    description: "Youth-driven initiative by CII fostering leadership and entrepreneurship.",
    href: "https://youngindians.net/",
  },
  {
    name: "TiE-U",
    logo: tieULogo,
    description: "University-focused TiE initiative nurturing student startups and innovation.",
    href: "#",
  },
  {
    name: "Sandhya Aqua",
    logo: sandhyaAquaLogo,
    description: "Aquaculture enterprise driving sustainable farming and seafood innovation.",
    href: "#",
  },
  {
    name: "Purdue University",
    logo: purudeLogo,
    description: "Global research university partnering in technology and innovation programs.",
    href: "https://www.purdue.edu/",
  },
  {
    name: "ACIR",
    logo: acirLogo,
    description: "Research and innovation center driving collaborative industry partnerships.",
    href: "#",
  },
  {
    name: "Wageningen",
    logo: wageningenLogo,
    description: "World-renowned university for life sciences, agriculture, and food innovation.",
    href: "https://www.wur.nl/",
  },
  {
    name: "PBL Transport",
    logo: pblTransportLogo,
    description: "Logistics and transport solutions supporting efficient supply chain operations.",
    href: "#",
  },
];
