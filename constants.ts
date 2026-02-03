import { FaqItem, Review, SectionId, Staff } from './types';

export { SectionId };

export const SALON_NAME = "Lumière Skin";
export const SALON_SUB = "Private Beauty Salon";

export const NAV_LINKS = [
  { label: 'Concept', to: SectionId.CONCEPT },
  { label: 'News', to: 'news' }, // Added
  { label: '3 Promises', to: SectionId.PROMISES },
  { label: 'Menu', to: SectionId.MENU },
  { label: 'Gallery', to: 'gallery' }, // Added
  { label: 'Staff & Voice', to: SectionId.STAFF },
  { label: 'Access', to: SectionId.ACCESS },
];

export const CAMPAIGN_PLAN = {
  name: "初回限定トライアル",
  description: "全身美肌脱毛（顔・VIO含む）+ イオン導入",
  limit: "WEB限定",
  originalPrice: "19,800円",
  campaignPrice: "980円"
};

export const NEWS_ITEMS = [
  { date: "2023.10.15", title: "【11月限定】乾燥肌対策「高保湿イオン導入」無料グレードアップキャンペーン" },
  { date: "2023.10.01", title: "ご予約システムのメンテナンスについて（10/20 2:00-4:00）" },
  { date: "2023.09.20", title: "雑誌「Beauty Life」11月号に当サロンが掲載されました。" },
];

export const GALLERY_IMAGES = [
  { src: "https://placehold.co/600x400/F0EFED/AFAFAF?text=Reception", alt: "Reception" },
  { src: "https://placehold.co/600x400/EAEAEA/BCBCBC?text=Treatment+Room", alt: "Treatment Room" },
  { src: "https://placehold.co/600x400/F5F5F5/D3D3D3?text=Powder+Room", alt: "Powder Room" },
  { src: "https://placehold.co/600x400/EBEBEB/C0C0C0?text=Amenities", alt: "Amenities" },
];

export const PROMISES = [
  {
    no: "01",
    title_en: "Personal Support",
    title_ja: "肌を知り尽くした、専任担当制。",
    desc: "肌の状態は、季節やホルモンバランスによって繊細に変化します。当店では毎回違うスタッフが担当するのではなく、あなたの肌質・毛質を理解した専任スタッフが卒業までサポート。「今日の肌状態なら、出力をこう調整しましょう」——そんなプロの提案で、最短ルートの美肌へ導きます。"
  },
  {
    no: "02",
    title_en: "Stress Free System",
    title_ja: "「予約が取れない」をゼロに。会員数限定システム。",
    desc: "「契約したのに予約が取れない」というストレスをなくすため、毎月の新規ご入会枠に制限を設けています。既存のお客様の予約枠を最優先に確保し、通いたいペースで確実に通える環境を整えています。21時まで営業しているため、お仕事帰りでも余裕を持って通えます。"
  },
  {
    no: "03",
    title_en: "Beauty Charge",
    title_ja: "毛をなくすだけじゃない。肌を育てる「イオン導入」。",
    desc: "当店の脱毛は、ただ毛を減らすだけではありません。照射と同時に、高濃度の美肌成分（ビタミンC誘導体・プラセンタ・ヒアルロン酸）を肌の奥深くまでイオン導入します。脱毛するたびに、黒ずみや乾燥がケアされ、吸いつくような透明感あふれる肌へ。"
  }
];

export const MENU_ITEMS = {
  pickup: {
    name: "初回限定トライアル",
    content: "全身美肌脱毛（顔・VIO含む）+ イオン導入",
    price_original: "19,800円",
    price_discount: "2,980円"
  },
  normal: [
    { name: "全身美肌脱毛（顔・VIO込）", price: "1回都度払い 19,800円 / 5回コース 89,000円" },
    { name: "VIO集中ケア", price: "1回都度払い 6,600円" },
    { name: "お顔全体脱毛", price: "1回都度払い 5,500円" }
  ]
};

export const STAFF_LIST: Staff[] = [
  {
    id: 1,
    name: "店長 Haruka",
    role: "エステティシャン歴10年",
    message: "「私自身、剛毛と敏感肌がコンプレックスでした。だからこそ、お客様の『キレイになりたいけど怖い』という気持ちに誰よりも寄り添えます。どんな小さなお悩みでもご相談ください。」"
  },
  {
    id: 2,
    name: "チーフ Misaki",
    message: "「脱毛は肌をキレイにするだけでなく、心も明るくしてくれます。お客様が鏡を見て笑顔になる瞬間が一番の幸せです。リラックスできる空間作りを心がけています。」"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    age: "20代後半・会社員",
    comment: "医療脱毛は痛すぎて3回で断念しましたが、Lumière Skinさんは本当に温かい程度で驚きました！担当のHarukaさんがいつも丁寧に当ててくれるので安心です。肌もトーンアップして、友達に褒められました。"
  },
  {
    id: 2,
    age: "30代前半・主婦",
    comment: "子供がいるので予約変更などが不安でしたが、LINEで柔軟に対応してくれるのが助かります。他店では「流れ作業」を感じていましたが、ここは毎回肌の状態を見て出力を調整してくれるので、効果の実感が早いです。"
  }
];

export const FLOW_STEPS = [
  { title: "ご来店", desc: "アロマ香る受付で笑顔でお迎えします。" },
  { title: "カウンセリング", desc: "ハーブティーを飲みながら、肌状態やご希望をお伺いします。" },
  { title: "お着替え", desc: "完全個室のプライベート空間でガウンにお着替え。" },
  { title: "施術", desc: "ジェルを塗布し、丁寧に照射。会話を楽しみながらリラックス。" },
  { title: "アフターケア", desc: "イオン導入でお肌を鎮静＆保湿。" },
  { title: "メイク直し", desc: "ドレッサー完備。ReFaのドライヤーや高級アメニティをご自由にお使いください。" }
];

export const FAQS: FaqItem[] = [
  {
    question: "本当に勧誘はありませんか？",
    answer: "はい、ございません。お客様のご希望に合ったプランをご提案いたしますが、ご自宅でゆっくり検討いただけるよう、当日の契約強要は一切いたしません。"
  },
  {
    question: "生理中でも施術できますか？",
    answer: "VIO・ヒップ以外は施術可能です。また、体調が優れない場合は無理せず日程変更をご相談ください。"
  },
  {
    question: "未成年でも通えますか？",
    answer: "はい、可能です。親権者様の同意書が必要となりますので、初回カウンセリング時にご持参いただくか、同伴をお願いしております。キッズ脱毛（7歳〜）にも対応しております。"
  }
];