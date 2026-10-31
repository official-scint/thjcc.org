import type { Organization } from "./site";

type OrganizationDetails = {
  shortName: string;
  category: "主辦單位" | "協辦單位" | "合作單位";
  paragraphs: string[];
  highlights: string[];
  website: string;
};

// Summarized from each organization's official website. Keep event-specific
// contributions limited to the organizer categories supplied in the design.
export const organizationDetails: Record<Organization["id"], OrganizationDetails> = {
  scint: {
    shortName: "SCINT",
    category: "主辦單位",
    paragraphs: [
      "SCINT 北臺灣學生資訊社群串連高中職資訊社團與學生，透過課程、競賽與交流活動，把分散的學習資源連接起來。",
      "除了程式與資安相關活動，社群也提供活動協辦、社群推廣與運算資源支援，讓學生和社團不必各自從零開始。SCINT 是本屆 THJCC 的主辦單位之一。",
    ],
    highlights: ["高中職資訊社團交流", "課程、競賽與工作坊", "活動協辦與資源串連"],
    website: "https://scint.org/",
  },
  scaict: {
    shortName: "SCAICT",
    category: "主辦單位",
    paragraphs: [
      "SCAICT 中部高中電資社團聯合會議成立於 2021 年，由熱愛資訊科技與社團活動的高中職學生組成，致力於整合中部資訊科技資源。",
      "透過主題課程、公開教材與社團合作，讓更多學生接觸資訊領域，也協助學校創立或復興電資類社團。SCAICT 是本屆 THJCC 的主辦單位之一。",
    ],
    highlights: ["中部電資社團合作", "主題課程與開放教材", "協助社團成立與發展"],
    website: "https://scaict.org/",
  },
  scist: {
    shortName: "SCIST",
    category: "主辦單位",
    paragraphs: [
      "SCIST 南臺灣學生資訊社群由來自嘉義、臺南、高雄與屏東的高中學生組成，希望透過課程與研討會縮小資訊學習資源的落差。",
      "社群提供演算法與資訊安全培訓，資安課程涵蓋 PWN、密碼學、逆向工程、網頁安全與數位鑑識，鼓勵學生以實作與競賽檢驗學習成果。SCIST 是本屆 THJCC 的主辦單位之一。",
    ],
    highlights: ["南臺灣學生資訊交流", "演算法與資訊安全培訓", "實作與競賽學習"],
    website: "https://scist.org/",
  },
  hitcon: {
    shortName: "HIT",
    category: "合作單位",
    paragraphs: [
      "社團法人台灣駭客協會以推廣資訊安全與駭客精神為目標，透過研討會、教育訓練與社群計畫，促進技術交流和資安人才培育。",
      "協會的相關計畫包含 HITCON、CTF 競賽與 ZeroDay 公益漏洞通報平台，也持續支持臺灣資安社群。台灣駭客協會是本屆 THJCC 的合作單位之一。",
    ],
    highlights: ["資訊安全研討會與訓練", "CTF 與社群交流", "公益漏洞通報與人才培育"],
    website: "https://hacker.org.tw/",
  },
  ocf: {
    shortName: "OCF",
    category: "協辦單位",
    paragraphs: [
      "財團法人開放文化基金會於 2014 年由臺灣多個開源社群共同發起，關注開放原始碼、開放資料、開放政府與數位人權。",
      "基金會透過社群支援、組織合作、國際交流與顧問諮詢，促進不同領域的開放協作，讓科技成為更多人可以共同參與的資源。OCF 是本屆 THJCC 的協辦單位之一。",
    ],
    highlights: ["開放原始碼與開放資料", "社群支援與跨域合作", "數位人權與國際交流"],
    website: "https://ocf.tw/",
  },
  ncse: {
    shortName: "NCSE Network",
    category: "合作單位",
    paragraphs: [
      "NCSE Network 提供雲端主機與網路基礎設施服務，服務範圍包含 VPS、機房代管、IP Transit，以及伺服器管理和技術支援。",
      "除了雲端與網路服務，也提供網路架構規劃及網站、程式與專案客製化服務。NCSE Network 是本屆 THJCC 的合作單位。",
    ],
    highlights: ["VPS 與雲端主機", "網路基礎設施服務", "技術支援與客製化開發"],
    website: "https://ncse.tw/zh/",
  },
  longtai: {
    shortName: "longtai.me",
    category: "合作單位",
    paragraphs: [
      "longtai.me 贊助了本次活動，但由於還沒想好要打什麼，所以等之後再來看看吧！",
      "我真的不知道要打什麼，但他們的Code看起來是要打這一行，所以你又多看了一段廢話。longtai.me 是本屆 THJCC 的合作單位。",
    ],
    highlights: ["這是我的第一個highlights", "然後這是第二個highlights", "啊這是第三個highlights"],
    website: "https://longtai.me/",
  },
};
