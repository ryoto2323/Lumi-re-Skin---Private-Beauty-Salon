export interface Review {
  id: number;
  age: string;
  comment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Staff {
  id: number;
  name: string;
  role?: string;
  message: string;
  image?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  TOP = 'top',
  CONCEPT = 'concept',
  PROMISES = 'promises',
  OFFER = 'offer',
  MACHINE = 'machine',
  MENU = 'menu',
  STAFF = 'staff',
  VOICE = 'voice',
  FLOW = 'flow',
  FAQ = 'faq',
  ACCESS = 'access',
}