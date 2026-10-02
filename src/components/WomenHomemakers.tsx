import React from 'react';
import { 
  Calendar, 
  Home, 
  Award, 
  Heart, 
  Quote, 
  Check, 
  Coffee,
  Sun,
  Moon
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface WomenHomemakersProps {
  currentLang: Language;
  onExploreWorkClick: () => void;
  onRegisterClick: () => void;
}

export const WomenHomemakers: React.FC<WomenHomemakersProps> = ({
  currentLang,
  onExploreWorkClick,
  onRegisterClick,
}) => {
  const t = translations[currentLang];

  const featureCards = [
    {
      icon: <Calendar className="w-6 h-6 text-indigo-600" />,
      title: currentLang === 'hi' ? 'लचीला समय (Flexible Schedule)' : 'Flexible Schedule',
      desc: currentLang === 'hi'
        ? 'घर के कामों, बच्चों के स्कूल या पारिवारिक प्राथमिकताओं के बीच अपने समय अनुसार काम करें। सुबह के शांत समय, दोपहर या रात में कभी भी।'
        : 'Work around your household priorities, children’s school hours, or personal commitments. Choose assignments you can finish comfortably at your own pace.',
      highlight: currentLang === 'hi' ? 'कोई निश्चित 9-से-5 का बंधन नहीं' : 'No rigid 9-to-5 lock-in',
    },
    {
      icon: <Home className="w-6 h-6 text-purple-600" />,
      title: currentLang === 'hi' ? 'घर से काम (Work From Home)' : 'Work From Home',
      desc: currentLang === 'hi'
        ? 'मुंबई की भीड़भाड़ वाली लोकल ट्रेनों, बसों और भारी ट्रैफिक में सफर करने से बचें। अपने सुरक्षित और आरामदायक घर से सम्मानपूर्वक कार्य करें।'
        : 'Eliminate exhausting daily commutes on Mumbai local trains and peak-hour traffic. Earn independently from your own study table or living room desk.',
      highlight: currentLang === 'hi' ? '100% रिमोट व सुरक्षित' : '100% remote desk environment',
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: currentLang === 'hi' ? 'कौशल अनुसार कार्य (Skill-Based Assignments)' : 'Skill-Based Assignments',
      desc: currentLang === 'hi'
        ? 'अपनी सहज भाषा व रुचि के अनुसार असाइनमेंट चुनें—चाहे वह सरल हिंदी लेखन हो, प्रूफरीडिंग हो, अंग्रेजी सारांश हो या कैटलॉग प्रविष्टि।'
        : 'Select assignments matching your strengths—fluent regional language writing, careful manuscript proofreading, simple spreadsheets, or product cataloging.',
      highlight: currentLang === 'hi' ? 'भाषा व रुचि के अनुसार चयन' : 'Match tasks to your proficiency',
    },
  ];

  return (
    <section id="for-women" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-900 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-purple-600" />
            <span>{t.womenHomemakers.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.womenHomemakers.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.womenHomemakers.text}
          </p>
        </div>

        {/* 3 Main Feature Cards required by prompt */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-purple-200"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-950 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-purple-800">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{card.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* How Real Homemakers Balance Their Day - Practical Routine Card */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-indigo-500/10 to-transparent pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-900/60 px-3 py-1 rounded-full border border-indigo-700/50 inline-block">
              {currentLang === 'hi' ? 'दैनिक संतुलन का उदाहरण' : 'Real-Life Schedule Example'}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {currentLang === 'hi'
                ? 'घर की जिम्मेदारियों के साथ आत्मनिर्भरता'
                : 'Balanced Independence That Respects Your Home Life'}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentLang === 'hi'
                ? 'हमारे अधिकांश लेखक और डेटा समीक्षक मुंबई के गृहिणी परिवार हैं। वे दिन में 2 से 3 घंटे निकालकर लेखन कार्य पूरा करते हैं और अपने परिवार को भी पूरा समय देते हैं।'
                : 'Hundreds of women across Mumbai, Navi Mumbai, and Thane use WorkNest to take on 1 or 2 manageable assignments per week. Complete tasks whenever your household routine allows.'}
            </p>

            {/* Daily Schedule Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold mb-1">
                  <Sun className="w-4 h-4" />
                  <span>10:30 AM - 12:30 PM</span>
                </div>
                <div className="text-xs text-white font-medium">
                  {currentLang === 'hi' ? 'शांत दोपहर समय' : 'Quiet Morning Slot'}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  {currentLang === 'hi' ? 'हिंदी सामग्री लेखन या ड्राफ्ट तैयार करना' : 'Drafting 1 article or reviewing proofing pages'}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 text-sky-300 text-xs font-bold mb-1">
                  <Coffee className="w-4 h-4" />
                  <span>03:30 PM - 04:45 PM</span>
                </div>
                <div className="text-xs text-white font-medium">
                  {currentLang === 'hi' ? 'चाय का समय' : 'Afternoon Window'}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  {currentLang === 'hi' ? 'डेटा प्रविष्टि या स्प्रेडशीट मिलान' : 'Completing catalog descriptions or entries'}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 text-purple-300 text-xs font-bold mb-1">
                  <Moon className="w-4 h-4" />
                  <span>08:30 PM - 09:15 PM</span>
                </div>
                <div className="text-xs text-white font-medium">
                  {currentLang === 'hi' ? 'समीक्षा व सबमिशन' : 'Review & Submit'}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  {currentLang === 'hi' ? 'अंतिम व्याकरण जांच व पोर्टल पर अपलोड' : 'Final spell-check and uploading to portal'}
                </div>
              </div>
            </div>

            {/* Bottom Actions inside the card */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onRegisterClick}
                className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm rounded-xl shadow-md transition cursor-pointer"
              >
                {t.hero.registerBtn}
              </button>
              <button
                onClick={onExploreWorkClick}
                className="px-5 py-2.5 bg-indigo-800/80 hover:bg-indigo-800 text-white font-medium text-xs sm:text-sm rounded-xl border border-indigo-600 transition cursor-pointer"
              >
                {currentLang === 'hi' ? 'असाइनमेंट सूची देखें' : 'Browse Assignments'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
