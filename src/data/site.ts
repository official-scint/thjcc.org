export { featuredTeam as team } from "./team";

export type SiteLink = {
  label: string;
  href: string | null;
  variant?: "button";
};

// Null destinations stay visibly faithful to the design without inventing URLs.
// Fill these in once the official destinations are available.
export const site = {
  email: "cont@thjcc.org",
  englishName: "Taiwan High-school Joint Cybersecurity Competition",
  chineseName: "臺灣高中職聯合資安競賽",
  links: {
    discord: "https://dc.thjcc.org/",
    instagram: "https://instagram.com/thjcc.tw",
    threads: "https://www.threads.com/@thjcc.tw",
    GitHub: "https://github.com/official-scint/thjcc.org",
    sponsorship: "/sponsorship",
    faq: null as string | null,
  },
};

export const navigation: SiteLink[] = [
  { label: "關於 THJCC", href: "/about" },
  { label: "籌備團隊", href: "/team" },
  { label: "合作夥伴", href: "/partners" },
  { label: "我要贊助", href: site.links.sponsorship, variant: "button" },
];

export const pastWebsites = [
  { label: "2027（本站）", href: "/" },
  { label: "2026 夏季賽", href: "https://thjcc.org/2026-summer/" },
  { label: "2026", href: "https://thjcc.org/2026" },
];

export const aboutParagraphs = [
  "THJCC CTF 是一場專為臺灣高中職生打造的資安競賽，由 SCINT 北臺灣學生資訊社群 、 SCAICT 中部高中電資社團聯合會議及 SCIST 南臺灣學生資訊社群與全國志同道合的學生共同主辦，並獲得國內多個資安組織與單位的支持。",
  "核心宗旨在於推廣資訊安全教育，培養高中生對資安技術的興趣與實作能力，同時提供全臺學生互相學習、切磋與交流的平台。",
];

export const aboutCopy = aboutParagraphs.join("");

export type Organization = {
  id: "scint" | "scaict" | "scist" | "hitcon" | "ocf" | "ncse" | "longtai";
  name: string;
};

export const organizers: Organization[] = [
  { id: "scint", name: "北臺灣學生資訊社群" },
  { id: "scaict", name: "中部高中電資社團聯合會議" },
  { id: "scist", name: "南臺灣學生資訊社群" },
];

export const coorganizers: Organization[] = [
  { id: "hitcon", name: "社團法人台灣駭客協會" },
  { id: "ocf", name: "財團法人開放文化基金會" },
];

export const partners: Organization[] = [
  { id: "ncse", name: "NCSE Network" },
  { id: "longtai", name: "longtai.me" },
];
