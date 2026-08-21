import { resolveLegacyAsset } from "@/lib/assets";

/** Resolve legacy asset path → display URL (local now, API when VITE_USE_API_MEDIA=true) */
const asset = (path: string) => resolveLegacyAsset(path);

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Aspire", href: "#aspire" },
  { label: "Associate", href: "#associate" },
  { label: "Achieve", href: "#achieve" },
  { label: "Announcement", href: "#announcement" },
  { label: "About", href: "#about" },
];

export const visitors = [
  { name: "Natarajan Chandrasekaran", role: "Executive Chairman", org: "Tata Sons", quote: "What you have today is quite impressive considering that you achieved it in less than two years." },
  { name: "Mats Viberg", role: "Vice Chancellor", org: "Blekinge Institute of Technology", quote: "The environment makes research and entrepreneurship feel contiguous." },
  { name: "Malcolm Byrne", role: "Senator", org: "Senate of Ireland", quote: "The quality of the conversation matches the ambition of the space." },
  { name: "Dr. Lawrence Jones", role: "Programme Director", org: "Wageningen University", quote: "A well-composed ecosystem is visible in the details." },
  { name: "N. R. Narayana Murthy", role: "Founder", org: "Infosys", quote: "Enduring companies are built where discipline and imagination meet." },
  { name: "G. Malikarjuna Rao", role: "Chairman", org: "GMR Group", quote: "This is how a regional institution starts thinking globally." },
  { name: "Carmelo Rosa", role: "Director", org: "UD FDA", quote: "The overall tone is measured, confident, and future-facing." },
];

export const portfolio = [
  {
    founder: "Ragvendra Varma",
    founderTitle: "Founder & CEO",
    startup: "EduEmblem",
    industry: "E-Commerce",
    category: "EDTECH",
    desc: "An e-commerce platform specializing in curated lifestyle merchandise for university communities, alumni, and sports enthusiasts.",
    achievements: ["Alumni Collections", "Apparel & Accessories", "Centenary Editions"],
    funding: "Pre-Seed · $300K",
    logo: "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/eduemblem.png",
    founderImage: "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/eduemblem_founder_varma.jpg",
    website: "https://eduemblem.com/",
  },
  {
    founder: "Ujwal Surampalli",
    founderTitle: "Entrepreneur & Developer",
    startup: "Interview Buddy",
    industry: "EdTech",
    category: "EDTECH",
    desc: "AI-powered mock interviews and placement readiness for students and early-career professionals.",
    achievements: ["AI Mock Interviews", "Placement Ready", "Empowering Careers"],
    funding: "Seed · $1.2M",
    logo: "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/interview_buddy_logo.png",
    founderImage: "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/interview_buddy_founder.png",
    website: "https://interviewbuddy.in",
  },
  {
    founder: "Giri Balasubramaniam",
    founderTitle: "Founder & CEO",
    startup: "DreamBot",
    industry: "AI & Robotics",
    category: "AI TECH",
    desc: "A robotic home cook that automates cooking using AI and robotics with voice and app control.",
    achievements: ["Automated Cooking", "Voice Control", "Family Safety"],
    funding: "Seed · $500K",
    logo: "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/dreambot.png",
    founderImage: "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/giri-balasubramaniam_drembot_founder.jpg",
    website: "https://www.dreambot.co.in/",
  },
  {
    founder: "Sagar Sahit",
    founderTitle: "Founder & CEO",
    startup: "Joora Drones",
    industry: "Drone Technology",
    category: "DRONE TECH",
    desc: "Professional drone consulting for data collection and visualization — land surveying, inspections, 3D mapping, and photography.",
    achievements: ["170+ Projects", "50+ Clients", "10x Faster"],
    funding: "Seed · $400K",
    logo: "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/joora_drone_consultants_logo-removebg-preview.png",
    founderImage: "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/sagar_sahit_joora+drones.png",
    website: "https://www.jooradrones.com/",
  },
  {
    founder: "Radha Alla",
    founderTitle: "Founder & CEO",
    startup: "KodeFast",
    industry: "Enterprise AI",
    category: "AI TECH",
    desc: "An AI-governed enterprise platform to design, automate, and scale applications with intelligent governance.",
    achievements: ["500+ Apps Built", "98% Automation", "50+ Integrations"],
    funding: "Seed · $1M",
    logo: "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/kodefast-removebg-preview.png",
    founderImage: "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/kodefast_founder.jpg",
    website: "https://www.kodefast.com/",
  },
];

export const events = [
  { title: "Startup Saturday", date: "Jan 12", tag: "Meetup", desc: "A vibrant gathering for local founders.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/startup+saturday.jpeg" },
  { title: "Been There Done That", date: "Feb 05", tag: "Panel", desc: "Experienced founders share their journey and insights.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/been+there+done+that.jpeg" },
  { title: "Google Startup Success Days", date: "Feb 20", tag: "Workshop", desc: "Learn how to scale with Google's ecosystem.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/google+starup+success+days.jpg" },
  { title: "Ideathon", date: "Mar 01", tag: "Hackathon", desc: "Brainstorm and build MVP solutions in 24 hours.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/ideathon.jpg" },
  { title: "Start Up Saturday", date: "Mar 15", tag: "Meetup", desc: "Connecting the local startup ecosystem.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/Start+Up+saturday.jpeg" },
  { title: "Been There Done That 2", date: "Apr 10", tag: "Panel", desc: "More insights from seasoned entrepreneurs.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/been+there+donw+that+2.jpeg" },
  { title: "Andhra Tech League", date: "Apr 25", tag: "Showcase", desc: "Showcasing the best tech talent in Andhra.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/andhra+texh+league.jpg" },
  { title: "Hackap Agritech Hackathon", date: "May 05", tag: "Hackathon", desc: "Innovating solutions for agriculture.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/Hackap+agritech+hackathon.jpg" },
  { title: "Startups Saturday", date: "May 20", tag: "Meetup", desc: "Networking and knowledge sharing.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/starups+staruday.jpg" },
  { title: "Runnin Wild", date: "Jun 10", tag: "Networking", desc: "A casual networking event for the bold.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/runnin+wild.jpeg" },
  { title: "EDS Student Design Competition", date: "Jun 25", tag: "Competition", desc: "Students showcase their design skills.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/eds+stduet+design+competittion.jpeg" },
  { title: "Eyes Wide Shut", date: "Jul 15", tag: "Workshop", desc: "An eye-opening workshop on market realities.", img: "https://dtfhihp4ovn79.cloudfront.net/event_calendar/eyes+wide+shut.jpg" },
];

export const partners = [
  "Sequoia", "Accel", "Lightspeed", "Blume", "Peak XV", "Matrix",
  "Tata Digital", "Razorpay", "Stripe", "AWS", "Google for Startups",
  "Microsoft", "NASSCOM", "IIT Madras", "NSRCEL", "MeitY",
];

export const institutions = [
  { name: "IIT Madras Research Park" },
  { name: "NSRCEL — IIM Bangalore" },
  { name: "ISB Hyderabad Founders Club" },
  { name: "BITS Pilani Demo Day" },
  { name: "Anna University Startup Cell" },
  { name: "Global Innovation Summit" },
];

export const stats = [
  { label: "Startups Incubated", value: 120, suffix: "+" },
  { label: "Funding Raised",     value: 50,  suffix: "Cr+", prefix: "₹" },
  { label: "Mentors",            value: 80,  suffix: "+" },
  { label: "Industry Partners",  value: 150, suffix: "+" },
];

export const mentors = [
  {
    name: "Deepak S. Madala",
    title: "Strategy & Operations Expert",
    organization: "Incubation Council",
    image: "https://dtfhihp4ovn79.cloudfront.net/mentors/Deepak_S_Madala.png",
    linkedIn: "https://linkedin.com/in/deepak-madala",
  },
  {
    name: "Dr. Diwakar K Vadapalli",
    title: "Technology Innovation Lead",
    organization: "Incubation Council",
    image: "https://dtfhihp4ovn79.cloudfront.net/mentors/Dr_Diwakar_K_Vadapalli.jpg",
    linkedIn: "https://linkedin.com/in/diwakar-vadapalli",
  },
  {
    name: "Kiran Korivi",
    title: "Product & Growth Strategist",
    organization: "Incubation Council",
    image: "https://dtfhihp4ovn79.cloudfront.net/mentors/Kiran_Korivi.png",
    linkedIn: "https://linkedin.com/in/kiran-korivi",
  },
  {
    name: "Peter Schneberger",
    title: "International Venture Advisor",
    organization: "Incubation Council",
    image: "https://dtfhihp4ovn79.cloudfront.net/mentors/Peter_Schneeberger.png",
    linkedIn: "https://linkedin.com/in/peter-schneberger",
  },
  {
    name: "Ravi Eswarapu",
    title: "Finance & Investment Strategist",
    organization: "Incubation Council",
    image: "https://dtfhihp4ovn79.cloudfront.net/mentors/Ravi_Eswwarapu.jpg",
    linkedIn: "https://linkedin.com/in/ravi-eswarapu",
  },
  {
    name: "Srinivas Savaram",
    title: "Ecosystem & Partnership Lead",
    organization: "Incubation Council",
    image: "https://dtfhihp4ovn79.cloudfront.net/mentors/Srinivas_Savaram.png",
    linkedIn: "https://linkedin.com/in/srinivas-savaram",
  },
];

export const board = [
  {
    name: "Deepak S. Madala",
    title: "Board Chair",
    organization: "Incubation Council",
    image: "https://dtfhihp4ovn79.cloudfront.net/mentors/Deepak_S_Madala.png",
    linkedIn: "https://linkedin.com/in/deepak-madala",
  },
  {
    name: "Dr. Diwakar K Vadapalli",
    title: "Board Member",
    organization: "Incubation Council",
    image: "https://dtfhihp4ovn79.cloudfront.net/mentors/Dr_Diwakar_K_Vadapalli.jpg",
    linkedIn: "https://linkedin.com/in/diwakar-vadapalli",
  },
  {
    name: "Ravi Eswarapu",
    title: "Board Member",
    organization: "Incubation Council",
    image: "https://dtfhihp4ovn79.cloudfront.net/mentors/Ravi_Eswwarapu.jpg",
    linkedIn: "https://linkedin.com/in/ravi-eswarapu",
  },
];

export { teamMembers as team, groupPhoto as teamGroupPhoto, teamPageData } from "./teamPage";
export type { TeamMember, TeamPageMeta } from "./teamPage";
export { pressItems, defaultPressPageMeta } from "./pressPage";
export type { PressItem, PressPageMeta } from "./pressPage";
