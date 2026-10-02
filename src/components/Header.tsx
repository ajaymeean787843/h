import React, { useState } from 'react';
import { 
  Briefcase, 
  Menu, 
  X, 
  Globe, 
  UserCheck, 
  ShieldCheck, 
  LayoutDashboard, 
  LogOut,
  MapPin
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentUser: UserProfile | null;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onLogout: () => void;
  activeView: 'landing' | 'dashboard';
  setActiveView: (view: 'landing' | 'dashboard') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  currentUser,
  onOpenLogin,
  onOpenRegister,
  onLogout,
  activeView,
  setActiveView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const handleNavClick = (sectionId: string) => {
    setActiveView('landing');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top Banner for Mumbai Location and Trust Guarantee */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-200 font-medium">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              Mumbai, Maharashtra, India
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">
              {currentLang === 'hi'
                ? 'प्रामाणिक वर्क फ्रॉम होम • कोई रजिस्ट्रेशन फीस नहीं'
                : 'Legitimate Home-Based Assignments • Zero Upfront Fees'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              {currentLang === 'hi' ? 'सत्यापित पारदर्शी भुगतान' : 'Quality-Reviewed Bank/UPI Payouts'}
            </span>
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-indigo-200 px-2.5 py-0.5 rounded-full transition text-xs font-semibold cursor-pointer border border-slate-700"
            >
              <Globe className="w-3 h-3 text-indigo-400" />
              {currentLang === 'en' ? 'हिंदी में बदलें (Hindi)' : 'Switch to English'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div 
            onClick={() => {
              setActiveView('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-900 via-indigo-900 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-900/20 group-hover:scale-105 transition-transform">
              <Briefcase className="w-5 h-5 text-indigo-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  WorkNest
                </span>
                <span className="text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded">
                  Mumbai
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight">
                {currentLang === 'hi' ? 'घर बैठे प्रामाणिक कार्य मंच' : 'Home-Based Content & Writing Platform'}
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleNavClick('home')}
              className="px-3 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition cursor-pointer"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick('available-work')}
              className="px-3 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition cursor-pointer"
            >
              {t.nav.jobs}
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="px-3 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition cursor-pointer"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => handleNavClick('for-women')}
              className="px-3 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition cursor-pointer"
            >
              {currentLang === 'hi' ? 'महिला व गृहिणी' : 'For Women'}
            </button>
            <button
              onClick={() => handleNavClick('courier-delivery')}
              className="px-3 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition cursor-pointer"
            >
              {t.nav.delivery}
            </button>
            <button
              onClick={() => handleNavClick('payment-info')}
              className="px-3 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition cursor-pointer"
            >
              {t.nav.paymentInfo}
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="px-3 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition cursor-pointer"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle in Header */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition border border-slate-200 cursor-pointer"
              title="Toggle Hindi/English"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span>{currentLang === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            {currentUser ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveView(activeView === 'dashboard' ? 'landing' : 'dashboard')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                    activeView === 'dashboard'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-indigo-50 text-indigo-900 hover:bg-indigo-100'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>{activeView === 'dashboard' ? 'Public Site' : t.nav.dashboard}</span>
                </button>
                <button
                  onClick={onLogout}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenLogin}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                >
                  {t.nav.login}
                </button>
                <button
                  onClick={onOpenRegister}
                  className="px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-indigo-950 active:bg-slate-800 rounded-lg shadow-sm hover:shadow transition cursor-pointer flex items-center gap-1.5"
                >
                  <UserCheck className="w-4 h-4 text-indigo-300" />
                  <span>{t.nav.register}</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'hi' : 'en')}
              className="px-2 py-1 text-xs font-semibold text-slate-700 bg-slate-100 rounded-md border border-slate-200"
            >
              {currentLang === 'en' ? 'हिंदी' : 'Eng'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-100"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick('available-work')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-100"
            >
              {t.nav.jobs}
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-100"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => handleNavClick('for-women')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-100"
            >
              {currentLang === 'hi' ? 'महिला व गृहिणी' : 'For Women & Homemakers'}
            </button>
            <button
              onClick={() => handleNavClick('courier-delivery')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-100"
            >
              {t.nav.delivery}
            </button>
            <button
              onClick={() => handleNavClick('payment-info')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-100"
            >
              {t.nav.paymentInfo}
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-100"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-100"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200 mt-3 space-y-2">
            {currentUser ? (
              <>
                <button
                  onClick={() => {
                    setActiveView(activeView === 'dashboard' ? 'landing' : 'dashboard');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-600 text-white font-medium rounded-lg"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  {activeView === 'dashboard' ? 'Switch to Landing Page' : 'Open User Dashboard'}
                </button>
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-center text-sm font-medium text-rose-600 bg-rose-50 rounded-lg"
                >
                  {t.nav.logout}
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onOpenLogin();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-center font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm"
                >
                  {t.nav.login}
                </button>
                <button
                  onClick={() => {
                    onOpenRegister();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-center font-medium text-white bg-slate-900 hover:bg-indigo-950 rounded-lg text-sm"
                >
                  {t.nav.register}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
