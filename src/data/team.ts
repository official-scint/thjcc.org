export const teamGroups = [
  { id: "coordination", name: "總召組", leadLabel: "總召", deputyLabel: "副召" },
  { id: "challenges", name: "出題組", leadLabel: "組長", deputyLabel: "副組長" },
  { id: "testing", name: "驗題組", leadLabel: "組長", deputyLabel: "副組長" },
  { id: "infrastructure", name: "網管組", leadLabel: "組長", deputyLabel: "副組長" },
  { id: "administration", name: "文書組", leadLabel: "組長", deputyLabel: "副組長" },
  { id: "design", name: "設計組", leadLabel: "組長", deputyLabel: "副組長" },
] as const;

export type TeamGroupId = typeof teamGroups[number]["id"];
export type TeamPosition = "lead" | "deputy" | "member";

export type TeamMembership = {
  group: TeamGroupId;
  position: TeamPosition;
};

export type TeamSocialLink = {
  label: string;
  href: string;
};

export type TeamMember = {
  id: string;
  name: string;
  /** Public image path, for example /images/team-name.webp. Null shows the THJCC icon. */
  image: string | null;
  group: TeamGroupId;
  position: TeamPosition;
  /** Additional assignments reuse this member's image, biography, and social links. */
  additionalRoles?: TeamMembership[];
  /** Self-introduction paragraphs shown in the member's modal. */
  bio?: string[];
  /** GitHub, Instagram, personal website, email, or other public profiles. */
  socialLinks?: TeamSocialLink[];
  /** Include this member in the homepage's featured team. */
  featured?: boolean;
  decoration?: "left" | "right" | "denny" | "jonah" | "justin" | "twcat";
  largeRole?: boolean;
};

// Group and position control the directory badges.
export const teamMembers: TeamMember[] = [
  {
    id: "pgpenguin72", name: "PGpenguin72", image: "/images/team-pgpenguin72.webp",
    group: "coordination", position: "lead", featured: true, decoration: "left",
    additionalRoles: [
      { group: "challenges", position: "lead" },
    ],
    bio: ["咕咕嘎嘎，是一隻企鵝喔，然後還是個資安小白，但莫名其妙當了總召…?"],
    socialLinks: [
      { label: "GitHub", href: "https://github.com/PGpenguin72" },
      { label: "Instagram", href: "https://www.instagram.com/pg_penguin_72/" },
      { label: "Email", href: "mailto:hi@pg72.tw" },
    ],
  },
  {
    id: "denny", name: "Denny", image: "/images/team-denny.webp",
    group: "challenges", position: "deputy",
    bio: ["嗨，我是剛學資安沒多久的小白，請多多指教：）"],
    socialLinks: [
      { label: "Website", href: "https://denny.li" },
    ],
  },
  {
    id: "justin", name: "Justin", image: "/images/team-justin.webp",
    group: "infrastructure", position: "lead", featured: true, decoration: "justin",
    bio: ["全端開發者 缺錢，有專案想讓我賺歡迎私訊我"],
    socialLinks: [
      { label: "Website", href: "https://justin0711.com/" }, 
    ],
  },
  {
    id: "twcat0503", name: "twcat0503", image: "/images/team-twcat0503.webp",
    group: "administration", position: "lead", featured: true, decoration: "twcat", largeRole: true,
    bio: ["一隻台貓，本屆文書組組長，一個可悲科研仔。喵"],
    socialLinks: [
      { label: "個人網站", href: "https://twcat0503.org" },
      { label: "GitHub", href: "https://github.com/twcat0503" },
      { label: "Email", href: "mailto:me@twcat0503.org" },
    ],
  },
  {
    id: "itousouta", name: "itouSouta", image: "/images/team-itousouta.webp",
    group: "design", position: "lead", featured: true, decoration: "right", largeRole: true,
    additionalRoles: [{ group: "infrastructure", position: "member" }],
    bio: ["SCAICT 第五屆會長，一個喜歡 VOCALOID 和畫畫的高三牲，BTW 我是這個網站的設計者及開發者。設計組沒招到人啊 QAQ"],
    socialLinks: [
      { label: "個人網站", href: "https://itousouta.me/" },
      { label: "GitHub", href: "https://github.com/itousouta15" },
      { label: "Instagram", href: "https://www.instagram.com/itou.souta15" },
      { label: "Email", href: "mailto:itousouta@scaict.org" },
      { label: "Linkedin", href: "https://www.linkedin.com/in/jia-ruei-kuo-6654a6442" },
    ],
  },
  {
    id: "leaf-0223", name: "Leaf_0223", image: null,
    group: "challenges", position: "member",
  },
  {
    id: "sirius-w", name: "SIRIUS-W", image: "/images/team-sirius-w.webp",
    group: "challenges", position: "member",
    bio: ["熱知識：SIRIUS 是天狼星的意思"],
    socialLinks: [
      { label: "Instagram", href: "https://www.instagram.com/s1rius_w/" },
      { label: "GitHub", href: "https://github.com/SiriusW823" },
      { label: "ORCID", href: "https://orcid.org/0009-0000-4638-4749" },
    ],
  },
  {
    id: "xzhiyouu", name: "xzhiyouu", image: null,
    group: "challenges", position: "member",
  },
  {
    id: "蝦淇", name: "蝦淇", image: null,
    group: "challenges", position: "member",
  },
  {
    id: "jimmy", name: "jimmy", image: "/images/team-jimmy.webp",
    group: "challenges", position: "member",
    bio: ["🫩"],
    socialLinks: [
      { label: "GitHub", href: "https://github.com/jimmy20180130" },
      { label: "website", href: "https://blog.xi11.cc/" },
    ],
  },
  {
    id: "lairay", name: "LaiRay", image: null,
    group: "challenges", position: "member",
  },
  {
    id: "eh", name: "EH", image: null,
    group: "challenges", position: "member",
  },
  {
    id: "kaiyasi", name: "Kaiyasi", image: "/images/team-kaiyasi.webp",
    group: "infrastructure", position: "member",
    bio: ["OTJcMlI8V3lOPjp2YF05OE5EQ285Mjc2NDZDIVRBOnVHQlo0QWdqcA=="],
    socialLinks: [
      { label: "Website", href: "https://www.gonets.top/" },
      { label: "GitHub", href: "https://github.com/kaiyasi" },
    ],
  },
  {
    id: "r3x-dj", name: "R3X DJ", image: "/images/team-r3x-dj.webp",
    group: "challenges", position: "member",
    bio: ["RCEs 戰隊隊長，喜歡數學、資安、講幹話。可以教我怎麼出 CTF 題目ㄇ"],
    socialLinks: [
      { label: "GitHub", href: "https://github.com/r3xdj" },
      { label: "Instagram", href: "https://www.instagram.com/_ts.hacker/" },
      { label: "Website", href: "https://r3xdj.pages.dev/" }
    ]
  },
  {
    id: "cgm-97", name: "Cgm._.97", image: "/images/team-cgm-97.webp",
    group: "challenges", position: "member",
    bio: ["RCEs 戰隊副隊長，一個正在資工系熬夜爆肝的高三生"],
    socialLinks: [
      { label: "個人網站", href: "https://cgm-csie.me/" },
      { label: "Instagram", href: "https://www.instagram.com/cgm._.97/" },
      { label: "GitHub", href: "https://github.com/Cgm-97" },
    ],
  },
  {
    id: "lao-z-3", name: "LAO_Z_3", image: null,
    group: "testing", position: "deputy",
  },
  {
    id: "jonah", name: "jonah", image: null, featured: true, decoration: "jonah",
    group: "testing", position: "lead",
  },
  {
    id: "steven", name: "Steven", image: "/images/team-steven.webp",
    group: "infrastructure", position: "member",
    bio: ["好玩😊"],
    socialLinks: [
      { label: "個人網站", href: "https://steventeng.uk/" },
      { label: "Email", href: "mailto:me@steventeng.uk" },
      { label: "Instagram", href: "https://www.instagram.com/steventeng0925/" },
      { label: "GitHub", href: "https://github.com/steventeng2022" },
    ],
  },
  {
    id: "吳鑽", name: "吳鑽", image: "/images/team-wuzuan.webp",
    group: "infrastructure", position: "member",
    bio: ["🫠"],
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com/wuzuantw" },
      { label: "GitHub", href: "https://github.com/wu-zuan/" },
    ],
  },
  {
    id: "br3ach", name: "Br3ach", image: "/images/team-br3ach.webp",
    group: "administration", position: "member",
    bio: ["我只希望下個月的token可以燒少一點..."],
    socialLinks: [
      { label: "個人網站", href: "https://blog.br3ach.workers.dev/" },
      { label: "GitHub", href: "https://github.com/user-404-not-found" },
    ],
  },
  {
    id: "凡", name: "凡", image: "/images/team-fan.webp",
    group: "administration", position: "member",
    bio: ["聽說這邊需要文書所以我來了，人家是資安小白我是白到反光o(TヘTo)"],
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com/llf._.meow" },
      { label: "Email", href: "mailto:capqq82@gmail.com" },
      { label: "Website", href: "https://casperlin100w.github.io/" }
    ],
  },
];

export function getTeamMemberships(member: TeamMember): TeamMembership[] {
  const memberships = [{ group: member.group, position: member.position }, ...(member.additionalRoles ?? [])];
  return memberships.filter((membership, index) => memberships.findIndex(role => role.group === membership.group) === index);
}

export function getTeamPositionLabel(member: TeamMembership) {
  const group = teamGroups.find(group => group.id === member.group)!;
  if (member.position === "lead") return group.leadLabel;
  if (member.position === "deputy") return group.deputyLabel;
  return "組員";
}

export function getTeamMemberRole(member: TeamMembership) {
  const group = teamGroups.find(group => group.id === member.group)!;
  const position = getTeamPositionLabel(member);
  return member.group === "coordination" ? position : `${group.name.slice(0, -1)}${position}`;
}

const featuredTeamOrder: Record<string, number> = {
  pgpenguin72: 0,
  jonah: 1,
  justin: 2,
  twcat0503: 3,
  itousouta: 4,
};

export const featuredTeam = teamMembers.filter(member => member.featured)
  .sort((a, b) => (featuredTeamOrder[a.id] ?? Infinity) - (featuredTeamOrder[b.id] ?? Infinity))
  .map(member => ({ ...member, role: getTeamMemberRole(member) }));
