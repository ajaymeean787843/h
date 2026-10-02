import React from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  MapPin, 
  Heart,
  Globe
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  currentLang: Language;
  onOpenLegal: (type: 'terms' | 'privacy' | 'refund' | 'about') => void;
  onNavClick: (id: string) => void;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenLegal,
  onNavClick,
  onLanguageChange,
}) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-700 to-indigo-500 flex items-center justify-center text-white font-bold">
                <Briefcase className="w-5 h-5 text-indigo-100" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">WorkNest</span>{' '}
                <span className="text-xs font-bold bg-indigo-900/80 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-700/50">
                  Mumbai
                </span>
                <p className="text-[11px] text-slate-400 font-medium italic mt-0.5">
                  &ldquo;{t.footer.tagline}&rdquo;
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {t.footer.summary}
            </p>

            <div className="flex items-center gap-2 text-slate-300 text-xs font-medium">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>Mumbai, Maharashtra, India</span>
            </div>

            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'hi' : 'en')}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer text-xs"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>Language: {currentLang === 'en' ? 'हिंदी (Switch to Hindi)' : 'English'}</span>
            </button>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.linksTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('available-work')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.footer.workFromHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('how-it-works')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.nav.howItWorks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('courier-delivery')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.nav.delivery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('payment-info')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.nav.paymentInfo}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('faq')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.footer.faq}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('contact')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.footer.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Policies as specified by prompt */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenLegal('about')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  {t.footer.aboutUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  {t.footer.terms}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('refund')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  {t.footer.refund}
                </button>
              </li>
            </ul>
          </div>

          {/* Trust Seal & Mumbai Desk Note */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Integrity Commitment
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2 text-[11px] leading-relaxed">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Fee Guarantee</span>
              </div>
              <p className="text-slate-400">
                WorkNest Mumbai never charges onboarding fees or security deposits. Work safely and independently from home.
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer Text */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>{t.footer.disclaimerText}</p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-slate-400">
            {/* Exact Copyright line required: Copyright © 2026 Wor from home Mumbai */}
            <p className="font-medium">
              Copyright © 2026 Wor from home Mumbai. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-[11px]">
              Empowering women and homemakers in Mumbai with dignity <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
