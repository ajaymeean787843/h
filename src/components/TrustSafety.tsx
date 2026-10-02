import React from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Lock, 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  Info,
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface TrustSafetyProps {
  currentLang: Language;
}

export const TrustSafety: React.FC<TrustSafetyProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="trust-safety" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            <span>{t.trust.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.trust.title}
          </h2>

          {/* Explicit highlighted prompt sentence: "Please read the assignment terms carefully before accepting any work." */}
          <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-300 text-amber-950 font-bold text-sm sm:text-base max-w-2xl mx-auto shadow-2xs">
            &ldquo;{t.trust.highlight}&rdquo;
          </div>
        </div>

        {/* 6 Key Pillars Required by User Prompt */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.trust.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-slate-300 hover:bg-white transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                  {idx === 0 && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                  {idx === 1 && <AlertTriangle className="w-5 h-5 text-amber-600" />}
                  {idx === 2 && <Info className="w-5 h-5 text-blue-600" />}
                  {idx === 3 && <ShieldCheck className="w-5 h-5 text-purple-600" />}
                  {idx === 4 && <XCircle className="w-5 h-5 text-rose-600" />}
                  {idx === 5 && <HelpCircle className="w-5 h-5 text-indigo-600" />}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pt.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-500">
                {currentLang === 'hi' ? 'आधिकारिक मुंबई नीति' : 'Official Policy Benchmark'}
              </div>
            </div>
          ))}
        </div>

        {/* Fraud Prevention Red Flag vs Green Flag Quick Reference Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <ShieldAlert className="w-6 h-6 text-rose-400" />
            <h3 className="text-lg sm:text-xl font-bold">
              {currentLang === 'hi' ? 'सुरक्षा दिशानिर्देश: क्या करें और क्या न करें' : 'Safety Check: What We Do vs. What Fraudsters Do'}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
            {/* Green Flag column */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-emerald-900/60 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                WorkNest Mumbai Official Standard
              </span>
              <ul className="space-y-2 text-slate-300 text-xs">
                <li>• ₹0 fee forever. Zero security deposits or joining charges.</li>
                <li>• Clear written guidelines for each assignment before you start.</li>
                <li>• Direct payment to your verified bank or UPI only after quality review.</li>
                <li>• Official communications through our portal and verified support.</li>
              </ul>
            </div>

            {/* Red Flag column */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-rose-900/60 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" />
                Warning Signs of Unofficial Scammers
              </span>
              <ul className="space-y-2 text-slate-300 text-xs">
                <li>• Asking for &ldquo;registration fees&rdquo;, &ldquo;courier kit deposits&rdquo;, or &ldquo;software keys&rdquo;.</li>
                <li>• Promising unrealistic &ldquo;₹5,000 daily guaranteed without work&rdquo;.</li>
                <li>• Demanding money transfer to personal UPI handles or Telegram groups.</li>
                <li>• Refusing to provide written assignment briefs or editorial standards.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
