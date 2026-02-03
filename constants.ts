
import { FaqItem, Review, SectionId, Staff } from './types';

export { SectionId };

export const SALON_NAME = "Lumière Skin";
export const SALON_SUB = "Private Beauty Salon";

export const NAV_LINKS = [
  { label: 'Concept', to: SectionId.CONCEPT },
  { label: '3 Promises', to: SectionId.PROMISES },
  { label: 'Hygiene', to: 'hygiene' },
  { label: 'Menu', to: SectionId.MENU },
  { label: 'Staff & Voice', to: SectionId.STAFF },
  { label: 'Access', to: SectionId.ACCESS },
];

export const GALLERY_IMAGES = [
  { src: "https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/c.png?raw=true", alt: "Reception" },
  { src: "https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/d.png?raw=true", alt: "Treatment Room" },
  { src: "https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/e.png?raw=true", alt: "Powder Room" },
  { src: "https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/f.png?raw=true", alt: "Amenities" },
];

export const PROMISES = [
  {
    no: "01",
    title_en: "Expertise Support",
    title_ja: "肌を知り尽くした専任担当制",
    desc: "認定脱毛士の資格を持つ経験豊富なスタッフが、カウンセリングから卒業までを専任で担当。毎回の肌の変化を見逃さず、その日のコンディションに合わせたオーダーメイドの出力を設定します。"
  },
  {
    no: "02",
    title_en: "Exclusive Booking",
    title_ja: "「予約が取れない」をゼロに。<br/>会員数限定システム",
    desc: "既存のお客様の快適さを最優先するため、新規ご入会枠に厳格な制限を設けております。「契約したのに予約が取れない」というストレスからあなたを解放し、理想の美肌へ最短距離で導きます。"
  },
  {
    no: "03",
    title_en: "Luxury Care",
    title_ja: "毛をなくすだけじゃない。<br/>肌を育てる「イオン導入」",
    desc: "照射と同時に高濃度美肌成分を肌の奥深くまで浸透させる最新技術。脱毛のたびに、シルクのような手触りと、内側から発光するような透明感をご実感いただけます。ReFa製ドライヤー完備の上質な空間もお愉しみください。"
  }
];

export const MENU_ITEMS = {
  pickup: {
    name: "【初回限定】美肌オーダーメイド体験",
    content: "全身美肌脱毛（顔・VIO含む）+ 高濃度イオン導入トリートメント",
    price_original: "19,800円",
    price_discount: "2,980円"
  },
  normal: [
    { name: "全身美肌脱毛（顔・VIO込）", price: "1回 19,800円 / 5回 89,000円" },
    { name: "VIO集中デザインケア", price: "1回 6,600円" },
    { name: "お顔全体・美白パック付", price: "1回 5,500円" }
  ]
};

// Fix: Added missing CAMPAIGN_PLAN constant for Offer.tsx
export const CAMPAIGN_PLAN = {
  name: "全身美肌脱毛トライアル",
  description: "顔・VIOを含む全身360°。最新SHR方式で痛みゼロの美肌体験を。",
  originalPrice: "19,800円",
  campaignPrice: "2,980円",
  limit: "毎月限定5名様"
};

// Fix: Added missing NEWS_ITEMS constant for News.tsx
export const NEWS_ITEMS = [
  { date: "2024.12.01", title: "年末年始の営業に関するお知らせ" },
  { date: "2024.11.15", title: "【新メニュー】高濃度ビタミンC導入オプションを開始いたしました" },
  { date: "2024.10.20", title: "表参道店オープン決定（2025年春予定）に伴うスタッフ募集のお知らせ" },
];

export const STAFF_LIST: Staff[] = [
  {
    id: 1,
    name: "Haruka",
    role: "JESA認定脱毛士 / 歴10年",
    message: "「私自身、敏感肌に悩んできた経験から、肌への優しさと確かな効果の両立を追求しています。単なる脱毛ではなく、お客様が自分を好きになれる肌作りをお手伝いいたします。」",
    image: "https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/g.png?raw=true"
  },
  {
    id: 2,
    name: "Misaki",
    role: "美容電気脱毛技能士 / 歴8年",
    message: "「プライベートサロンならではの静謐な時間と、細やかな配慮を大切にしています。お一人おひとりの毛質・肌質を科学的に分析し、納得感のあるカウンセリングを心がけています。」",
    image: "https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/h.png?raw=true"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    age: "30代後半・クリエイティブ職",
    comment: "騒がしい大型サロンと違い、ここは本当のリラクゼーション空間。ReFaのアイロンや高級な化粧品が揃っているパウダールームも楽しみの一つです。専任の方が丁寧に進めてくれるので、安心感が違います。"
  },
  {
    id: 2,
    age: "40代前半・経営者",
    comment: "予約の取りやすさが決め手でした。毎回決まった時間に確実に取れるので、忙しいスケジュールでも無理なく通えています。SHR方式は全く痛みがなく、温かいマッサージのようでいつも寝てしまいます。"
  }
];

export const FLOW_STEPS = [
  { title: "迎賓", desc: "お一人様ずつの完全予約制。誰にも会わずにリラックスした時間をお過ごしいただけます。" },
  { title: "美肌診断", desc: "認定脱毛士による詳細なカウンセリング。毛周期や肌質を数値で分析します。" },
  { title: "優雅な施術", desc: "SHR方式による無痛脱毛。高級リネンを使用したベッドで安らぎを。" },
  { title: "トリートメント", desc: "高濃度ビタミンCとプラセンタのイオン導入。脱毛と同時に美肌を育てます。" },
  { title: "ティータイム", desc: "施術後は厳選されたハーブティーをご用意。ドレッサーでの身支度もごゆっくり。" }
];

export const FAQS: FaqItem[] = [
  {
    question: "勧誘がないか不安なのですが…",
    answer: "Lumière Skinでは強引な勧誘を一切禁止しております。お客様の人生を彩るパートナーでありたいという想いから、ご本人が納得されないままの契約は承っておりません。"
  },
  {
    question: "どれくらいで効果を感じられますか？",
    answer: "最新のSHR方式により、3回目あたりから毛が細くなるのを実感される方が多いです。通常、10〜12回ほどで自己処理がほぼ不要な『光り輝く肌』へと導かれます。"
  }
];
