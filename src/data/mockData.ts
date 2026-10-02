import { Assignment, CourierTrackingInfo, PayoutRecord, UserProfile, UserSubmittedWork } from '../types';

export const mockAssignments: Assignment[] = [
  {
    id: 'WN-HIN-01',
    title: {
      en: 'Hindi Content Writing - Lifestyle & Home Tips',
      hi: 'हिंदी सामग्री लेखन - गृह व्यवस्था व जीवनशैली टिप्स',
    },
    category: 'content',
    workType: {
      en: 'Hindi Content Writing',
      hi: 'हिंदी सामग्री लेखन',
    },
    estimatedTime: {
      en: '2 to 3 hours per article (800 words)',
      hi: '2 से 3 घंटे प्रति लेख (800 शब्द)',
    },
    skillLevel: {
      en: 'Fluent Hindi Typing & Good Grammar',
      hi: 'सहज हिंदी टाइपिंग व अच्छा व्याकरण',
    },
    paymentMethod: {
      en: 'Direct Bank Transfer (IMPS) or UPI',
      hi: 'सीधा बैंक ट्रांसफर (IMPS) या UPI',
    },
    rateGuide: {
      en: '₹350 - ₹500 per approved article (varies by depth)',
      hi: '₹350 - ₹500 प्रति स्वीकृत लेख (गहनता अनुसार)',
    },
    availability: {
      en: 'Active Batch (12 slots available)',
      hi: 'सक्रिय बैच (12 स्थान उपलब्ध)',
    },
    slotsLeft: 12,
    deliveryType: 'Digital',
    description: {
      en: 'Write well-structured, original Hindi informative articles on parenting, home organization, traditional recipe variations, and everyday wellness. No specialized technical jargon required.',
      hi: 'घरेलू व्यवस्था, बच्चों की देखभाल, स्वास्थ्य और पारंपरिक व्यंजनों पर सरल व स्पष्ट हिंदी में मौलिक लेख लिखें। किसी कठिन तकनीकी ज्ञान की आवश्यकता नहीं।',
    },
    sampleTask: {
      en: 'Topic: "मानसून में घर की नमी और दुर्गंध दूर रखने के 5 आसान घरेलू उपाय" (600-800 words with headings).',
      hi: 'विषय: "मानसून में घर की नमी और दुर्गंध दूर रखने के 5 आसान घरेलू उपाय" (600-800 शब्द, उपशीर्षकों सहित)।',
    },
    requirements: {
      en: [
        '100% original writing (checked via anti-plagiarism tools)',
        'Accurate Hindi spelling and natural conversational flow',
        'Submission in Word document or Google Docs format',
        'Adherence to word count and deadline (typically 48 hours)',
      ],
      hi: [
        '100% मौलिक लेखन (साहित्यिक चोरी जांच प्रणाली द्वारा परीक्षित)',
        'शुद्ध हिंदी वर्तनी और स्पष्ट वाक्य विन्यास',
        'वर्ड डॉक्यूमेंट अथवा गूगल डॉक्स प्रारूप में जमा करें',
        '48 घंटे की समय सीमा का पालन',
      ],
    },
    isSampleDemo: true,
  },
  {
    id: 'WN-ENG-02',
    title: {
      en: 'English Content Writing - Educational Summaries',
      hi: 'अंग्रेजी सामग्री लेखन - शैक्षिक सारांश व गाइड',
    },
    category: 'content',
    workType: {
      en: 'English Content Writing',
      hi: 'अंग्रेजी सामग्री लेखन',
    },
    estimatedTime: {
      en: '3 to 4 hours per assignment',
      hi: '3 से 4 घंटे प्रति असाइनमेंट',
    },
    skillLevel: {
      en: 'Intermediate to Advanced English Proficiency',
      hi: 'मध्यम से उन्नत अंग्रेजी दक्षता',
    },
    paymentMethod: {
      en: 'Direct Bank NEFT / IMPS or UPI',
      hi: 'सीधा बैंक NEFT / IMPS या UPI',
    },
    rateGuide: {
      en: '₹400 - ₹650 per approved 1,000 words',
      hi: '₹400 - ₹650 प्रति स्वीकृत 1,000 शब्द',
    },
    availability: {
      en: 'Active Batch (8 slots open)',
      hi: 'सक्रिय बैच (8 स्थान उपलब्ध)',
    },
    slotsLeft: 8,
    deliveryType: 'Digital',
    description: {
      en: 'Create easy-to-understand educational explanations and study guides for secondary school curriculum. Clear explanations, bullet points, and practical everyday examples.',
      hi: 'कक्षा 8 से 10 के छात्रों के लिए सरल अंग्रेजी में अध्ययन नोट्स और विषय सारांश तैयार करें। स्पष्ट बिंदु और उदाहरण अनिवार्य हैं।',
    },
    sampleTask: {
      en: 'Summarize the causes of ocean tides with 3 real-world examples in 700 words.',
      hi: '700 शब्दों में 3 वास्तविक उदाहरणों के साथ ज्वार-भाटा (Ocean Tides) के कारणों का सारांश लिखें।',
    },
    requirements: {
      en: [
        'Clear grammatical sentence construction',
        'No AI-generated unverified fluff; fact-checked information',
        'Proper headings, sub-headings, and conclusion',
      ],
      hi: [
        'स्पष्ट और व्याकरण सम्मत अंग्रेजी वाक्य',
        'तथ्यों की शुद्धता और जांच',
        'उचित शीर्षक, उपशीर्षक और सारांश',
      ],
    },
    isSampleDemo: true,
  },
  {
    id: 'WN-PRD-03',
    title: {
      en: 'Product Description Writing - Fashion & Handicrafts',
      hi: 'उत्पाद विवरण लेखन - परिधान व हस्तशिल्प',
    },
    category: 'content',
    workType: {
      en: 'Product Description Writing',
      hi: 'उत्पाद विवरण लेखन',
    },
    estimatedTime: {
      en: '1.5 hours per batch of 5 products',
      hi: '1.5 घंटे प्रति 5 उत्पाद बैच',
    },
    skillLevel: {
      en: 'Basic English or Bilingual Writing',
      hi: 'बुनियादी अंग्रेजी अथवा द्विभाषी लेखन',
    },
    paymentMethod: {
      en: 'Weekly UPI / Bank Transfer',
      hi: 'साप्ताहिक UPI / बैंक ट्रांसफर',
    },
    rateGuide: {
      en: '₹70 - ₹110 per approved product card (120-150 words)',
      hi: '₹70 - ₹110 प्रति स्वीकृत उत्पाद (120-150 शब्द)',
    },
    availability: {
      en: 'Ongoing Assignments (15 slots)',
      hi: 'निरंतर कार्य (15 स्थान उपलब्ध)',
    },
    slotsLeft: 15,
    deliveryType: 'Digital',
    description: {
      en: 'Draft appealing, factual descriptions for Indian ethnic wear, sarees, handmade home decor, and jewellery items for local Mumbai boutique catalogs.',
      hi: 'मुंबई के बुटीक और हस्तशिल्प विक्रेताओं के लिए साड़ियों, आभूषणों और होम डेकोर उत्पादों का आकर्षक व सटीक विवरण तैयार करें।',
    },
    sampleTask: {
      en: 'Write a 120-word catalog description for a handloom Chanderi silk saree with fabric care tips.',
      hi: 'हथकरघा चंदेरी सिल्क साड़ी हेतु देखभाल निर्देशों सहित 120 शब्दों का विवरण लिखें।',
    },
    requirements: {
      en: [
        'Accurate details of fabric, color, wash instructions',
        'Catchy opening line and bulleted key features',
        'Standardized catalog template provided',
      ],
      hi: [
        'कपड़े, रंग व धुलाई के सही निर्देश',
        'आकर्षक प्रारंभिक पंक्ति और मुख्य विशेषताएं',
        'प्रदान किए गए मानक टेम्पलेट का पालन',
      ],
    },
    isSampleDemo: true,
  },
  {
    id: 'WN-DAT-04',
    title: {
      en: 'Data Entry - Catalog & Invoice Digitization',
      hi: 'डेटा एंट्री - कैटलॉग व इनवॉइस डिजिटाइजेशन',
    },
    category: 'data',
    workType: {
      en: 'Data Entry',
      hi: 'डेटा एंट्री',
    },
    estimatedTime: {
      en: '2 hours per batch (30-40 records)',
      hi: '2 घंटे प्रति बैच (30-40 रिकॉर्ड)',
    },
    skillLevel: {
      en: 'Basic Excel / Spreadsheet & Attention to Detail',
      hi: 'सामान्य एक्सेल / स्प्रेडशीट ज्ञान व सतर्कता',
    },
    paymentMethod: {
      en: 'Direct Bank NEFT / IMPS',
      hi: 'सीधा बैंक NEFT / IMPS',
    },
    rateGuide: {
      en: '₹6 - ₹9 per accurate verified entry line',
      hi: '₹6 - ₹9 प्रति सटीक सत्यापित एंट्री',
    },
    availability: {
      en: 'Active Batch (6 slots open)',
      hi: 'सक्रिय बैच (6 स्थान उपलब्ध)',
    },
    slotsLeft: 6,
    deliveryType: 'Digital / Optional Courier',
    description: {
      en: 'Enter product details, pricing, stock numbers, or scanned bill details into secure web spreadsheets. Double-entry verification ensures error-free results.',
      hi: 'स्कैन किए गए बिलों और उत्पाद सूचियों की जानकारी को सुरक्षित ऑनलाइन स्प्रेडशीट में दर्ज करना। डेटा में 98%+ शुद्धता अनिवार्य है।',
    },
    sampleTask: {
      en: 'Input 25 customer vendor billing records into a formatted Google Sheet.',
      hi: 'प्रारूपित गूगल शीट में 25 वेंडर बिलिंग रिकॉर्ड्स की प्रविष्टि करना।',
    },
    requirements: {
      en: [
        'Computer or tablet with reliable internet connection',
        'Basic familiarity with Microsoft Excel or Google Sheets',
        'High accuracy rate (minimum 98% error-free)',
      ],
      hi: [
        'कंप्यूटर/लैपटॉप और इंटरनेट कनेक्शन',
        'माइक्रोसॉफ्ट एक्सेल या गूगल शीट्स का बुनियादी ज्ञान',
        'उच्च स्तर की शुद्धता (न्यूनतम 98%)',
      ],
    },
    isSampleDemo: true,
  },
  {
    id: 'WN-PRF-05',
    title: {
      en: 'Proofreading - Hindi & English Manuscripts',
      hi: 'प्रूफरीडिंग - हिंदी व अंग्रेजी हस्तलिखित / ड्राफ्ट',
    },
    category: 'data',
    workType: {
      en: 'Proofreading',
      hi: 'प्रूफरीडिंग (वर्तनी व वाक्य सुधार)',
    },
    estimatedTime: {
      en: '1.5 to 2 hours per chapter (10-12 pages)',
      hi: '1.5 से 2 घंटे प्रति अध्याय (10-12 पृष्ठ)',
    },
    skillLevel: {
      en: 'High grammatical accuracy & eye for detail',
      hi: 'उत्कृष्ट व्याकरण ज्ञान व बारीकी पकड़ने की क्षमता',
    },
    paymentMethod: {
      en: 'UPI / Direct Bank Transfer',
      hi: 'UPI / सीधा बैंक ट्रांसफर',
    },
    rateGuide: {
      en: '₹25 - ₹45 per reviewed page',
      hi: '₹25 - ₹45 प्रति समीक्षित पृष्ठ',
    },
    availability: {
      en: 'Limited Slots (4 open)',
      hi: 'सीमित स्थान (4 उपलब्ध)',
    },
    slotsLeft: 4,
    deliveryType: 'Digital / Optional Courier',
    description: {
      en: 'Review draft manuscripts, instructional booklets, or local business newsletters for typographical errors, punctuation, punctuation slips, and missing words.',
      hi: 'प्रकाशन हेतु तैयार पुस्तिकाओं, लेखों और पत्रिकाओं में टाइपिंग की गलतियां, विराम चिह्न और व्याकरण संबंधी त्रुटियों को चिह्नित व ठीक करना।',
    },
    sampleTask: {
      en: 'Proofread an 8-page newsletter draft highlighting spelling and punctuation changes using tracked edits.',
      hi: 'ट्रैक चेंजेज का उपयोग करके 8-पृष्ठीय ड्राफ्ट की वर्तनी और वाक्य संरचना में सुधार करना।',
    },
    requirements: {
      en: [
        'Sharp attention to spelling, punctuation, and sentence tone',
        'Ability to use Track Changes in Microsoft Word or Google Docs',
        'Strict adherence to delivery timelines',
      ],
      hi: [
        'वर्तनी व विराम चिह्नों पर पैनी नजर',
        'वर्ड अथवा गूगल डॉक्स में ट्रैक चेंजेज का उपयोग',
        'समय सीमा का कड़ा पालन',
      ],
    },
    isSampleDemo: true,
  },
  {
    id: 'WN-FRM-06',
    title: {
      en: 'Form Filling - Online Directory Verification',
      hi: 'फॉर्म फिलिंग - ऑनलाइन डायरेक्टरी सत्यापन व प्रविष्टि',
    },
    category: 'data',
    workType: {
      en: 'Form Filling',
      hi: 'फॉर्म फिलिंग',
    },
    estimatedTime: {
      en: '1 to 2 hours per 20 entries',
      hi: '1 से 2 घंटे प्रति 20 प्रविष्टियां',
    },
    skillLevel: {
      en: 'Basic computer literacy & web navigation',
      hi: 'बुनियादी कंप्यूटर ज्ञान और इंटरनेट ब्राउजिंग',
    },
    paymentMethod: {
      en: 'Weekly Direct Payout',
      hi: 'साप्ताहिक सीधा भुगतान',
    },
    rateGuide: {
      en: '₹12 - ₹18 per verified complete form',
      hi: '₹12 - ₹18 प्रति पूर्ण सत्यापित फॉर्म',
    },
    availability: {
      en: 'Active Batch (10 slots open)',
      hi: 'सक्रिय बैच (10 स्थान उपलब्ध)',
    },
    slotsLeft: 10,
    deliveryType: 'Digital',
    description: {
      en: 'Verify business details (such as store timings, address pin code, contact name) and fill standard online directory listing forms through a simple web portal.',
      hi: 'स्थानीय व्यापारिक सूचियों (दुकान का पता, संपर्क व्यक्ति, पिन कोड) का ऑनलाइन मिलान करना और पोर्टल फॉर्म में सही विवरण दर्ज करना।',
    },
    sampleTask: {
      en: 'Cross-verify 15 Mumbai retail listings and submit the standardized verification form.',
      hi: '15 मुंबई खुदरा प्रतिष्ठानों की जानकारी सत्यापित कर मानक फॉर्म भरना।',
    },
    requirements: {
      en: [
        'Stable web browser on computer or laptop',
        'Accuracy in entering contact numbers, emails, and postal pins',
        'Integrity: No fictitious or randomly guessed entries allowed',
      ],
      hi: [
        'स्थिर कंप्यूटर ब्राउजर और इंटरनेट',
        'फोन नंबर, ईमेल और पिन कोड सही भरने में सतर्कता',
        'पूरी ईमानदारी: कोई भी काल्पनिक प्रविष्टि स्वीकार्य नहीं',
      ],
    },
    isSampleDemo: true,
  },
  {
    id: 'WN-TRS-07',
    title: {
      en: 'Transcription - Audio Interviews to Text (Hindi & Marathi/English)',
      hi: 'ट्रांसक्रिप्शन - ऑडियो साक्षात्कार को टेक्स्ट में बदलना',
    },
    category: 'transcription',
    workType: {
      en: 'Transcription',
      hi: 'ट्रांसक्रिप्शन (ऑडियो से टेक्स्ट)',
    },
    estimatedTime: {
      en: '2 to 3 hours per 30 minutes of clear audio',
      hi: '2 से 3 घंटे प्रति 30 मिनट ऑडियो',
    },
    skillLevel: {
      en: 'Good listening skills & fast regional typing',
      hi: 'सटीक श्रवण क्षमता व द्रुत टाइपिंग',
    },
    paymentMethod: {
      en: 'IMPS Bank Transfer / UPI',
      hi: 'IMPS बैंक ट्रांसफर / UPI',
    },
    rateGuide: {
      en: '₹22 - ₹35 per recorded audio minute',
      hi: '₹22 - ₹35 प्रति रिकॉर्डेड ऑडियो मिनट',
    },
    availability: {
      en: 'Ongoing (5 slots open)',
      hi: 'जारी (5 स्थान उपलब्ध)',
    },
    slotsLeft: 5,
    deliveryType: 'Digital',
    description: {
      en: 'Listen to clear audio recordings of consumer interviews, lectures, or customer feedback and transcribe them into well-punctuated text scripts.',
      hi: 'स्पष्ट ऑडियो बातचीत, साक्षात्कार या व्याख्यानों को सुनकर उन्हें सटीक शब्दों और विराम चिह्नों के साथ टेक्स्ट फाइल में टाइप करना।',
    },
    sampleTask: {
      en: 'Transcribe a 10-minute consumer feedback audio in conversational Hindi.',
      hi: '10 मिनट की उपभोक्ता प्रतिक्रिया ऑडियो को सुनकर लिखित रूप में तैयार करना।',
    },
    requirements: {
      en: [
        'Good earphones or headphones for clear listening',
        'Ability to understand spoken Hindi or English accents',
        'Timestamping of unclear segments when needed',
      ],
      hi: [
        'स्पष्ट सुनने के लिए अच्छे इयरफोन/हेडफोन',
        'स्पष्ट हिंदी या अंग्रेजी समझने की क्षमता',
        'अनुपयुक्त या अस्पष्ट शब्दों को सही तरीके से अंकित करना',
      ],
    },
    isSampleDemo: true,
  },
  {
    id: 'WN-HOM-08',
    title: {
      en: 'Simple Home-Based Assignments - Survey Curation & Feedback',
      hi: 'सरल घरेलू असाइनमेंट - सर्वे समीक्षा व उपभोक्ता फीडबैक',
    },
    category: 'home',
    workType: {
      en: 'Simple Home-Based Assignments',
      hi: 'सरल घरेलू असाइनमेंट',
    },
    estimatedTime: {
      en: '45 to 60 minutes per assignment',
      hi: '45 से 60 मिनट प्रति कार्य',
    },
    skillLevel: {
      en: 'Beginner-Friendly, smartphone or PC',
      hi: 'शुरुआती अनुकूल, स्मार्टफोन या पीसी',
    },
    paymentMethod: {
      en: 'Direct UPI / Bank Transfer',
      hi: 'सीधा UPI / बैंक ट्रांसफर',
    },
    rateGuide: {
      en: '₹80 - ₹150 per completed survey/review batch',
      hi: '₹80 - ₹150 प्रति पूर्ण सर्वे/समीक्षा बैच',
    },
    availability: {
      en: 'Active Daily Batch (20 slots open)',
      hi: 'दैनिक सक्रिय बैच (20 स्थान उपलब्ध)',
    },
    slotsLeft: 20,
    deliveryType: 'Digital / Optional Courier',
    description: {
      en: 'Evaluate household products, review packaging clarity, and provide detailed consumer assessment questionnaires from a homemaker perspective.',
      hi: 'घरेलू उत्पादों की पैकेजिंग, उपयोगिता व निर्देशों की समीक्षा करें और एक गृहिणी के नजरिए से विस्तृत प्रश्नावली भरें।',
    },
    sampleTask: {
      en: 'Review the clarity and readability of 3 FMCG laundry detergent labels and complete the assessment form.',
      hi: '3 डिटर्जेंट लेबल्स की पठनीयता व निर्देशों की समीक्षा कर फीडबैक फॉर्म भरना।',
    },
    requirements: {
      en: [
        'Genuine, thoughtful feedback based on practical experience',
        'No copy-pasting of answers across entries',
        'Smartphone with browser access or computer',
      ],
      hi: [
        'व्यावहारिक अनुभव पर आधारित ईमानदार प्रतिक्रिया',
        'प्रश्नावली में उत्तरों को कॉपी-पेस्ट न करना',
        'ब्राउजर युक्त स्मार्टफोन या कंप्यूटर',
      ],
    },
    isSampleDemo: true,
  },
];

export const sampleCourierRecords: Record<string, CourierTrackingInfo> = {
  'WNM-MUM-8921': {
    trackingId: 'WNM-MUM-8921',
    partner: 'BlueDart Express Mumbai Local',
    recipientName: 'Sunita M. (Homemaker)',
    area: 'Andheri West, Mumbai',
    pincode: '400058',
    status: 'Out for Delivery',
    expectedDelivery: 'Today by 4:30 PM',
    packageType: 'Document Verification & Manuscript Specimen Kit (Physical Batch)',
    events: [
      {
        date: 'Today',
        time: '08:45 AM',
        status: 'Out for delivery with delivery executive (Ramesh K.)',
        location: 'Andheri West Hub, Mumbai',
      },
      {
        date: 'Yesterday',
        time: '07:20 PM',
        status: 'Arrived at Goregaon Central Sorting Facility',
        location: 'Goregaon East, Mumbai',
      },
      {
        date: 'Yesterday',
        time: '11:15 AM',
        status: 'Physical materials verified and dispatched by WorkNest Logistics',
        location: 'Fort Operations Center, Mumbai',
      },
      {
        date: '2 Days Ago',
        time: '04:00 PM',
        status: 'Courier dispatch approved post profile verification',
        location: 'Mumbai Operations Hub',
      },
    ],
  },
  'WNM-THA-4402': {
    trackingId: 'WNM-THA-4402',
    partner: 'Delhivery Surface Logistics',
    recipientName: 'Priya K. (Content Writer)',
    area: 'Majiwada, Thane West',
    pincode: '400601',
    status: 'In Transit',
    expectedDelivery: 'Tomorrow, by 2:00 PM',
    packageType: 'Handicraft Catalog Reference Books & Hardcopy Guidelines',
    events: [
      {
        date: 'Today',
        time: '02:30 PM',
        status: 'Departed Mumbai Central Transshipment Center',
        location: 'Kurla Hub, Mumbai',
      },
      {
        date: 'Today',
        time: '09:00 AM',
        status: 'Package sealed and assigned to courier partner',
        location: 'WorkNest Mumbai Operations, Fort',
      },
      {
        date: 'Yesterday',
        time: '05:30 PM',
        status: 'Courier request generated for hardcopy assignment',
        location: 'System Generated',
      },
    ],
  },
  'WNM-NAV-1189': {
    trackingId: 'WNM-NAV-1189',
    partner: 'DTDC Express Maharashtra',
    recipientName: 'Ananya S. (Proofreader)',
    area: 'Vashi, Navi Mumbai',
    pincode: '400703',
    status: 'Delivered',
    expectedDelivery: 'Delivered on Oct 01, 2026',
    packageType: 'Proofreading Printed Sample Chapters & Style Guide',
    events: [
      {
        date: 'Oct 01, 2026',
        time: '01:15 PM',
        status: 'Delivered to recipient. Signature verified.',
        location: 'Sector 17, Vashi, Navi Mumbai',
      },
      {
        date: 'Oct 01, 2026',
        time: '09:20 AM',
        status: 'Out for delivery in Vashi route',
        location: 'Vashi Sorting Hub',
      },
      {
        date: 'Sep 30, 2026',
        time: '04:10 PM',
        status: 'Dispatched from Mumbai Logistics Facility',
        location: 'Mumbai Central',
      },
    ],
  },
};

export const sampleUserProfile: UserProfile = {
  id: 'WNM-USER-7742',
  name: 'Meera Sharma',
  phone: '+91 98200 XXXXX',
  email: 'meera.sharma.mum@example.com',
  city: 'Mumbai',
  pincode: '400053 (Andheri West)',
  verified: true,
  joinedDate: 'August 14, 2026',
  preferredLanguage: 'Hindi & English',
  skills: ['Hindi Content Writing', 'Proofreading', 'Product Descriptions'],
  bankLinked: true,
  upiId: 'meera.sharma@okaxis',
};

export const samplePayoutRecords: PayoutRecord[] = [
  {
    id: 'TXN-90211',
    assignmentTitle: 'Hindi Content Writing - Home & Kitchen Organizing Tips',
    amount: 950,
    date: 'Sep 28, 2026',
    method: 'UPI (meera.sharma@okaxis)',
    status: 'Completed',
    referenceNo: 'UPI/260928/773291',
  },
  {
    id: 'TXN-90184',
    assignmentTitle: 'Product Descriptions - Mumbai Boutique Saree Catalog (10 items)',
    amount: 1100,
    date: 'Sep 21, 2026',
    method: 'IMPS Bank Transfer',
    status: 'Completed',
    referenceNo: 'IMPS/260921/884912',
  },
  {
    id: 'TXN-90045',
    assignmentTitle: 'Proofreading - Educational Primary Reader Chapters 1-4',
    amount: 800,
    date: 'Sep 12, 2026',
    method: 'UPI (meera.sharma@okaxis)',
    status: 'Completed',
    referenceNo: 'UPI/260912/129845',
  },
  {
    id: 'TXN-90240',
    assignmentTitle: 'Hindi Article - Festive Decor & Cooking Planning',
    amount: 500,
    date: 'Yesterday',
    method: 'UPI (Pending Disbursal)',
    status: 'Processing',
    referenceNo: 'QUEUED-SYS-091',
  },
];

export const sampleUserSubmissions: UserSubmittedWork[] = [
  {
    id: 'SUB-1082',
    assignmentId: 'WN-HIN-01',
    assignmentTitle: 'Hindi Article - Festive Decor & Cooking Planning',
    submittedAt: 'Sep 30, 2026 at 06:15 PM',
    wordCount: 840,
    status: 'Approved',
    feedback: 'Approved with high score. Language flow is natural and meets all formatting guidelines.',
    payoutAmount: 500,
  },
  {
    id: 'SUB-1089',
    assignmentId: 'WN-PRF-05',
    assignmentTitle: 'Proofreading - Chapter 5 Health Booklet',
    submittedAt: 'Today at 11:30 AM',
    wordCount: 1400,
    status: 'Under Quality Review',
    feedback: 'Assigned to senior reviewer. Estimated turnaround 24 business hours.',
    payoutAmount: 380,
  },
];

export const faqList = [
  {
    id: 1,
    question: {
      en: '1. Is this work completely from home?',
      hi: '1. क्या यह काम पूरी तरह से घर बैठे (Work From Home) है?',
    },
    answer: {
      en: 'Yes. All assignments offered on WorkNest Mumbai are designed to be completed 100% from your home or personal study space. You do not need to commute to any physical office, attend in-person interviews, or travel. All submissions and editorial correspondence are handled securely through our digital portal.',
      hi: 'जी हाँ, बिल्कुल। WorkNest Mumbai पर उपलब्ध सभी असाइनमेंट 100% घर बैठे पूरे करने के लिए बनाए गए हैं। आपको किसी भी कार्यालय जाने या मुंबई की भीड़भाड़ में यात्रा करने की आवश्यकता नहीं है। सारा काम और संवाद सुरक्षित रूप से डिजिटल पोर्टल के माध्यम से होता है।',
    },
  },
  {
    id: 2,
    question: {
      en: '2. What type of writing work is available?',
      hi: '2. यहां किस प्रकार के लेखन संबंधी कार्य उपलब्ध हैं?',
    },
    answer: {
      en: 'We specialize in legitimate content and clerical writing tasks, including: Hindi content writing (lifestyle, health, culinary), English educational summaries, boutique product descriptions, catalog proofreading, online directory form filling, transcription, and basic survey assessments. You can select assignments that align with your language fluency and comfort level.',
      hi: 'हम प्रामाणिक कंटेंट और क्लेरिकल लेखन कार्यों में विशेषज्ञता रखते हैं, जैसे: हिंदी सामग्री लेखन (जीवनशैली, स्वास्थ्य, व्यंजन), अंग्रेजी शैक्षिक सारांश, परिधान व उत्पादों का विवरण, प्रूफरीडिंग, ऑनलाइन फॉर्म भरना, ऑडियो ट्रांसक्रिप्शन और बुनियादी सर्वे फीडबैक। आप अपनी सुविधा अनुसार कार्य चुन सकते हैं।',
    },
  },
  {
    id: 3,
    question: {
      en: '3. How do I register?',
      hi: '3. मैं पंजीकरण (Register) कैसे करूँ?',
    },
    answer: {
      en: 'Registration is simple and 100% free: Click "Register Now", enter your name, contact details, city/locality, and your preferred languages and skills. Once submitted, our team guides you through a basic profile verification step (verifying contact details and a short sample writing task). There is zero registration fee.',
      hi: 'पंजीकरण बहुत सरल और पूरी तरह निःशुल्क है: "Register Now" बटन पर क्लिक करें, अपना नाम, संपर्क विवरण, शहर/इलाका और अपनी पसंदीदा भाषा चुनें। इसके बाद सामान्य प्रोफ़ाइल सत्यापन पूरा करें। ध्यान रहे कि पंजीकरण का कोई भी शुल्क नहीं है।',
    },
  },
  {
    id: 4,
    question: {
      en: '4. How are assignments provided?',
      hi: '4. असाइनमेंट कैसे प्रदान किए जाते हैं?',
    },
    answer: {
      en: 'Verified users access our live "Available Work" dashboard. You can review available batches, read the assignment brief, guidelines, deadline, and compensation terms, and accept the task with a single click. The assignment and reference materials are immediately accessible in your portal.',
      hi: 'सत्यापित उपयोगकर्ता हमारे लाइव "Available Work" डैशबोर्ड में उपलब्ध कार्यों को देख सकते हैं। आप कार्य के दिशा-निर्देश, समय सीमा और भुगतान दर पढ़कर अपनी सुविधानुसार कार्य स्वीकार कर सकते हैं। सामग्री तुरंत आपके पोर्टल पर उपलब्ध हो जाती है।',
    },
  },
  {
    id: 5,
    question: {
      en: '5. Can physical work material be delivered by courier?',
      hi: '5. क्या काम की भौतिक सामग्री कूरियर द्वारा भेजी जा सकती है?',
    },
    answer: {
      en: 'Yes, for select assignments that specifically require physical materials—such as hardcopy proofreading manuscripts, printed catalog samples, or packaging specimens. If eligible, materials are dispatched through reputed courier partners (BlueDart, Delhivery, DTDC) with end-to-end tracking. However, courier delivery is only applicable to select tasks and depends on service area pin code eligibility. Most writing tasks remain 100% digital.',
      hi: 'हाँ, केवल उन विशेष कार्यों के लिए जिनमें भौतिक सामग्री की आवश्यकता होती है—जैसे मुद्रित पांडुलिपियों की प्रूफरीडिंग, कैटलॉग नमूने या पैकेजिंग अध्ययन। पात्र उपयोगकर्ताओं को प्रतिष्ठित कूरियर पार्टनर्स के जरिए सामग्री भेजी जाती है और ट्रैकिंग नंबर दिया जाता है। अधिकांश लेखन कार्य पूरी तरह डिजिटल होते हैं।',
    },
  },
  {
    id: 6,
    question: {
      en: '6. How is payment calculated?',
      hi: '6. भुगतान (Payment) की गणना कैसे की जाती है?',
    },
    answer: {
      en: 'Payment is calculated strictly on an assignment basis—for instance, per approved 800-word article, per verified spreadsheet batch, or per reviewed page. Each assignment displays its transparent compensation rate before you accept it. We do not charge commissions or deductions on your approved pay.',
      hi: 'भुगतान की गणना कार्य के आधार पर पूर्व-निर्धारित दरों पर की जाती है—जैसे प्रति 800 शब्द स्वीकृत लेख, प्रति सत्यापित स्प्रेडशीट बैच या प्रति समीक्षित पृष्ठ। कार्य स्वीकार करने से पहले भुगतान दर स्पष्ट रूप से प्रदर्शित होती है।',
    },
  },
  {
    id: 7,
    question: {
      en: '7. When will I receive payment?',
      hi: '7. मुझे भुगतान कब प्राप्त होगा?',
    },
    answer: {
      en: 'Once you submit your completed assignment, our quality assurance team reviews it within 24 to 48 business hours. Upon approval, payment is transferred directly to your registered bank account via NEFT/IMPS or UPI within 3 to 5 business days. Our minimum payout threshold is just ₹300.',
      hi: 'जब आप अपना कार्य जमा करते हैं, तो हमारी टीम 24 से 48 घंटों में उसकी समीक्षा करती है। कार्य स्वीकृत होने के 3 से 5 कार्यदिवसों के भीतर राशि सीधे आपके बैंक खाते (NEFT/IMPS) अथवा UPI में भेज दी जाती है। न्यूनतम निकासी सीमा मात्र ₹300 है।',
    },
  },
  {
    id: 8,
    question: {
      en: '8. What happens if my submitted work is rejected?',
      hi: '8. यदि जमा किया गया काम अस्वीकृत (Reject) हो जाए तो क्या होगा?',
    },
    answer: {
      en: 'We aim to support you! If an assignment does not meet formatting standards, has minor grammatical lapses, or misses instructions, our editors provide specific constructive feedback and grant a revision window (usually 24 hours) for you to correct and re-submit. Plagiarized or copied work from external websites without attribution is permanently rejected without payout.',
      hi: 'हमारा उद्देश्य आपकी सहायता करना है। यदि कार्य में कुछ सामान्य गलतियां या दिशा-निर्देशों की कमी होती है, तो हमारे संपादक स्पष्ट फीडबैक देते हैं और आपको सुधारने के लिए 24 घंटे का समय मिलता है। हालांकि, इंटरनेट से सीधे कॉपी-पेस्ट किया गया कार्य पूर्णतः अस्वीकृत कर दिया जाता है।',
    },
  },
  {
    id: 9,
    question: {
      en: '9. Is there any registration fee?',
      hi: '9. क्या कोई रजिस्ट्रेशन फीस या सुरक्षा जमा राशि है?',
    },
    answer: {
      en: 'NO. Absolutely NOT. WorkNest Mumbai never charges any registration fee, upfront security deposit, software activation fee, or material kit charges. Anyone claiming to represent us and asking for money or UPI transfers is fraudulent and should be reported to official authorities immediately.',
      hi: 'बिल्कुल नहीं! WorkNest Mumbai कभी भी कोई रजिस्ट्रेशन शुल्क, सिक्यूरिटी डिपॉजिट या किट शुल्क नहीं लेता है। यदि कोई व्यक्ति हमारे नाम पर पैसे मांगता है, तो वह पूरी तरह फर्जी है और तुरंत इसकी शिकायत की जानी चाहिए।',
    },
  },
  {
    id: 10,
    question: {
      en: '10. How can I contact support?',
      hi: '10. मैं सहायता टीम (Support) से कैसे संपर्क करूँ?',
    },
    answer: {
      en: 'You can reach our official Mumbai support desk through the Contact section on this website, directly via your logged-in Freelancer Dashboard ticket system, or via our official email, phone, and WhatsApp channels listed in the Contact section. Our team is available Monday to Saturday, 9:30 AM to 6:30 PM IST.',
      hi: 'आप हमारी आधिकारिक मुंबई सहायता टीम से वेबसाइट के संपर्क फॉर्म, यूजर डैशबोर्ड हेल्पडेस्क, या संपर्क अनुभाग में दिए गए आधिकारिक फोन, ईमेल व व्हाट्सएप द्वारा संपर्क कर सकते हैं। हमारी सहायता टीम सोमवार से शनिवार सुबह 9:30 से शाम 6:30 बजे तक उपलब्ध रहती है।',
    },
  },
];
