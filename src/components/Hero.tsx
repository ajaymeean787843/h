import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Info,
  Award,
  Users
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import heroImage from '../assets/images/woman_working_laptop_1790920132010.jpg';

interface HeroProps {
  currentLang: Language;
  onFindWorkClick: () => void;
  onRegisterClick: () => void;
  onOpenDashboardClick?: () => void;
  isLoggedIn?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onFindWorkClick,
  onRegisterClick,
  onOpenDashboardClick,
  isLoggedIn,
}) => {
  const t = translations[currentLang];

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-indigo-50/30">
      {/* Decorative background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#1e1b4b 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-900 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              {t.hero.headline}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {t.hero.subheading}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onFindWorkClick}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-900 hover:bg-indigo-950 active:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 group"
              >
                <span>{t.hero.findWorkBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {isLoggedIn ? (
                <button
                  onClick={onOpenDashboardClick}
                  className="px-6 py-3.5 text-sm sm:text-base font-semibold text-indigo-950 bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-300 rounded-xl transition duration-200 cursor-pointer border border-indigo-200"
                >
                  {t.hero.viewDashboardBtn}
                </button>
              ) : (
                <button
                  onClick={onRegisterClick}
                  className="px-6 py-3.5 text-sm sm:text-base font-semibold text-indigo-950 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-xl shadow-xs transition duration-200 cursor-pointer border border-slate-300"
                >
                  {t.hero.registerBtn}
                </button>
              )}
            </div>

            {/* Strict Regulatory / Trustworthy Earnings Disclaimer */}
            <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-3 text-xs sm:text-sm text-amber-950 mt-4 shadow-2xs">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-semibold text-amber-900 block">
                  {currentLang === 'hi' ? 'महत्वपूर्ण पारदर्शी नियम:' : 'Transparent Remuneration Notice:'}
                </span>
                <p className="text-amber-900/90 text-xs leading-relaxed">
                  {t.hero.earningsDisclaimer}
                </p>
              </div>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.hero.stats.noFees}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{currentLang === 'hi' ? 'सत्यापित पोर्टल' : 'Verified Portal'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{currentLang === 'hi' ? 'लचीला समय' : 'Flexible Timings'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Award className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{currentLang === 'hi' ? 'गुणवत्ता आधारित' : 'Quality-Reviewed'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Generated Image & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with soft shadows and rounded corners */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-16/11 group">
                <img
                  src={heroImage}
                  alt="Professional woman working from home on a laptop in Mumbai"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <p className="font-semibold text-white drop-shadow-sm">
                    {currentLang === 'hi'
                      ? 'सुविधाजनक एवं सम्मानजनक घर बैठे कार्य'
                      : 'Home-based writing assignments tailored for your daily routine'}
                  </p>
                  <p className="text-[11px] text-slate-200 drop-shadow-xs">
                    Mumbai, Maharashtra • Verified Contributor Community
                  </p>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {currentLang === 'hi' ? '100% सुरक्षित भुगतान' : '100% Secure Payouts'}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {currentLang === 'hi' ? 'सीधा बैंक / UPI ट्रांसफर' : 'Direct IMPS / UPI to Bank'}
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card: Community Stats */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[260px]">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {t.hero.stats.verifiedMembers}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {currentLang === 'hi' ? 'मुंबई व आसपास के क्षेत्रों से' : 'Active across Mumbai & MMR'}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
