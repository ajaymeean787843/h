export type Language = 'en' | 'hi';

export interface Assignment {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  category: 'content' | 'data' | 'transcription' | 'home';
  workType: {
    en: string;
    hi: string;
  };
  estimatedTime: {
    en: string;
    hi: string;
  };
  skillLevel: {
    en: string;
    hi: string;
  };
  paymentMethod: {
    en: string;
    hi: string;
  };
  rateGuide: {
    en: string;
    hi: string;
  };
  availability: {
    en: string;
    hi: string;
  };
  slotsLeft: number;
  deliveryType: 'Digital' | 'Courier / Physical' | 'Digital / Optional Courier';
  description: {
    en: string;
    hi: string;
  };
  sampleTask: {
    en: string;
    hi: string;
  };
  requirements: {
    en: string[];
    hi: string[];
  };
  isSampleDemo?: boolean;
}

export interface CourierTrackingInfo {
  trackingId: string;
  partner: string;
  recipientName: string;
  area: string;
  pincode: string;
  status: 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Material Dispatched';
  expectedDelivery: string;
  packageType: string;
  events: {
    date: string;
    time: string;
    status: string;
    location: string;
  }[];
}

export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  pincode: string;
  verified: boolean;
  joinedDate: string;
  preferredLanguage: string;
  skills: string[];
  bankLinked: boolean;
  upiId: string;
}

export interface PayoutRecord {
  id: string;
  assignmentTitle: string;
  amount: number;
  date: string;
  method: string;
  status: 'Completed' | 'In Quality Review' | 'Processing';
  referenceNo: string;
}

export interface UserSubmittedWork {
  id: string;
  assignmentId: string;
  assignmentTitle: string;
  submittedAt: string;
  wordCount?: number;
  status: 'Under Quality Review' | 'Approved' | 'Revision Requested';
  feedback?: string;
  payoutAmount?: number;
}
