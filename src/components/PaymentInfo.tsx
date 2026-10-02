import React, { useState } from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  Calculator, 
  Building2, 
  Smartphone, 
  BadgePercent
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface PaymentInfoProps {
  currentLang: Language;
}

export const PaymentInfo: React.FC<PaymentInfoProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  // Interactive sample calculator state
  const [calcType, setCalcType] = useState<'hindi' | 'english' | 'catalog' | 'data'>('hindi');
  const [units, setUnits] = useState<number>(3);

  const calculateEstimate = () => {
    switch (calcType) {
      case 'hindi':
        return { rate: '₹400 per 800 words', total: units * 400, unitLabel: currentLang === 'hi' ? 'लेख (Articles)' : 'Articles (800 words)' };
      case 'english':
        return { rate: '₹550 per 1,000 words', total: units * 550, unitLabel: currentLang === 'hi' ? 'लेख (Articles)' : 'Educational Articles' };
      case 'catalog':
        return { rate: '₹90 per product', total: units * 90, unitLabel: currentLang === 'hi' ? 'उत्पाद विवरण' : 'Product Descriptions' };
      case 'data':
        return { rate: '₹8 per verified entry', total: units * 8, unitLabel: currentLang === 'hi' ? 'सत्यापित पंक्तियां' : 'Verified Rows' };
    }
  };

  const estimate = calculateEstimate();

  return (
    <section id="payment-info" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.payment.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.payment.title}
          </h2>

          <p className="text-base text-slate-600">
            {t.payment.subtitle}
          </p>

          {/* Strict Regulatory Anti-Scam Disclaimer as explicitly specified */}
          <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-3 text-xs sm:text-sm text-amber-950 text-left max-w-2xl mx-auto shadow-2xs mt-4">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-amber-900 mb-0.5">
                {currentLang === 'hi' ? 'महत्वपूर्ण पारदर्शी नीति' : 'Explicit Policy Notice'}
              </span>
              <p className="text-amber-900/90 leading-relaxed">
                {t.payment.warning}
              </p>
            </div>
          </div>
        </div>

        {/* 5 Core Pillars of Transparent Compensation */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {t.payment.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods & Payout Breakdown */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Supported Payment Channels & Quality Criteria */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>{currentLang === 'hi' ? 'भुगतान के स्वीकृत माध्यम' : 'Supported Payment Methods'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Instant UPI</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Google Pay, PhonePe, Paytm, BHIM to verified VPA ID.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Direct Bank NEFT / IMPS</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Direct credit to any Indian nationalized or private bank account.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Checklist */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {currentLang === 'hi' ? 'गुणवत्ता समीक्षा के मानदंड' : 'Quality Evaluation Standards'}
                </h4>
                
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Originality:</strong> 100% human-composed, zero plagiarism or unattributed copy-pasting.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Grammar & Formatting:</strong> Accurate spelling, clean paragraphing, proper punctuation.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Timeline Compliance:</strong> Submissions completed within agreed 24-48 hr assignment windows.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimum Payout Badge */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 text-indigo-700">
                <Clock className="w-4 h-4" />
                {currentLang === 'hi' ? 'निकासी समय: 3 से 5 कार्यदिवस' : 'Payout Timeline: 3 to 5 business days'}
              </span>
              <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
                {currentLang === 'hi' ? 'न्यूनतम पे-आउट: मात्र ₹300' : 'Minimum Payout: ₹300'}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Payout Calculator */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  {t.payment.calculatorTitle}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                {t.payment.calculatorDesc}
              </p>

              {/* Assignment Category Selector */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {currentLang === 'hi' ? 'कार्य का प्रकार चुनें:' : 'Select Assignment Category:'}
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => { setCalcType('hindi'); setUnits(3); }}
                      className={`py-2 px-3 rounded-xl border text-left font-medium transition cursor-pointer ${
                        calcType === 'hindi' ? 'bg-indigo-50 border-indigo-500 text-indigo-900' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      Hindi Content Writing
                    </button>
                    <button
                      type="button"
                      onClick={() => { setCalcType('english'); setUnits(2); }}
                      className={`py-2 px-3 rounded-xl border text-left font-medium transition cursor-pointer ${
                        calcType === 'english' ? 'bg-indigo-50 border-indigo-500 text-indigo-900' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      English Summaries
                    </button>
                    <button
                      type="button"
                      onClick={() => { setCalcType('catalog'); setUnits(10); }}
                      className={`py-2 px-3 rounded-xl border text-left font-medium transition cursor-pointer ${
                        calcType === 'catalog' ? 'bg-indigo-50 border-indigo-500 text-indigo-900' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      Product Descriptions
                    </button>
                    <button
                      type="button"
                      onClick={() => { setCalcType('data'); setUnits(40); }}
                      className={`py-2 px-3 rounded-xl border text-left font-medium transition cursor-pointer ${
                        calcType === 'data' ? 'bg-indigo-50 border-indigo-500 text-indigo-900' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      Catalog Data Entry
                    </button>
                  </div>
                </div>

                {/* Volume Slider / Counter */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>{currentLang === 'hi' ? 'पूर्ण किए गए कार्यों की संख्या:' : 'Completed & Approved Volume:'}</span>
                    <span className="text-indigo-600 font-bold">{units} {estimate.unitLabel}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={calcType === 'data' ? 100 : 20}
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1</span>
                    <span>{calcType === 'data' ? '50' : '10'}</span>
                    <span>{calcType === 'data' ? '100' : '20'}</span>
                  </div>
                </div>

                {/* Calculated Result Display Card */}
                <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2 mt-4">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Standard Published Rate:</span>
                    <span className="font-mono text-indigo-300">{estimate.rate}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <span className="text-sm font-medium text-slate-200">
                      {currentLang === 'hi' ? 'अनुमानित कुल पारिश्रमिक:' : 'Estimated Remuneration:'}
                    </span>
                    <span className="text-2xl font-black text-emerald-400 font-mono">
                      ₹{estimate.total.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1 leading-snug">
                    *Sample simulation. Final payout is strictly released after editorial review approval.
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent assurance footer */}
            <div className="mt-4 text-[11px] text-slate-500 flex items-center gap-1.5">
              <BadgePercent className="w-3.5 h-3.5 text-indigo-500" />
              <span>Zero agency commission deducted. 100% of approved amount is transferred.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
