import React from 'react';
import { 
  UserPlus, 
  ShieldCheck, 
  FileText, 
  CheckCircle, 
  Truck, 
  CreditCard,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HowItWorksProps {
  currentLang: Language;
  onRegisterClick: () => void;
  onExploreWorkClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  currentLang,
  onRegisterClick,
  onExploreWorkClick,
}) => {
  const t = translations[currentLang];

  const stepIcons = [
    <UserPlus key="1" className="w-6 h-6 text-indigo-600" />,
    <ShieldCheck key="2" className="w-6 h-6 text-purple-600" />,
    <FileText key="3" className="w-6 h-6 text-blue-600" />,
    <CheckCircle key="4" className="w-6 h-6 text-emerald-600" />,
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            {t.howItWorks.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-base text-slate-600">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Number & Icon header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-indigo-600 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Extra context hints */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 text-xs text-slate-500 font-medium flex items-center gap-1.5">
                {idx === 0 && (
                  <span className="text-indigo-700">
                    {currentLang === 'hi' ? '• ₹0 रजिस्ट्रेशन शुल्क' : '• 100% Free Signup'}
                  </span>
                )}
                {idx === 1 && (
                  <span className="text-purple-700">
                    {currentLang === 'hi' ? '• पहचान व कौशल की सामान्य पुष्टि' : '• Basic Profile Verification'}
                  </span>
                )}
                {idx === 2 && (
                  <span className="text-blue-700 flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5" />
                    {currentLang === 'hi' ? 'डिजिटल या कूरियर डिलीवरी' : 'Digital & Courier Support'}
                  </span>
                )}
                {idx === 3 && (
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CreditCard className="w-3.5 h-3.5" />
                    {currentLang === 'hi' ? '3-5 कार्यदिवस में सीधा ट्रांसफर' : 'NEFT / UPI in 3-5 Days'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="mt-12 p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-slate-900 text-base">
              {currentLang === 'hi'
                ? 'क्या आप पहली बार आवेदन कर रहे हैं?'
                : 'Ready to begin with your first assignment?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              {currentLang === 'hi'
                ? 'निःशुल्क प्रोफ़ाइल बनाएं और मुंबई आधारित सत्यापित कार्यों के लिए आवेदन करें।'
                : 'Set up your profile in under 3 minutes with zero fees and start browsing legitimate tasks.'}
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onRegisterClick}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-indigo-950 text-white font-semibold text-sm rounded-xl shadow-xs transition cursor-pointer text-center"
            >
              {t.hero.registerBtn}
            </button>
            <button
              onClick={onExploreWorkClick}
              className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm rounded-xl border border-slate-200 transition cursor-pointer text-center flex items-center justify-center gap-1"
            >
              <span>{currentLang === 'hi' ? 'कार्य देखें' : 'View Available Work'}</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
