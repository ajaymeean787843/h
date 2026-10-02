import React, { useState } from 'react';
import { Language, UserProfile, Assignment } from './types';
import { sampleUserProfile, mockAssignments } from './data/mockData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { AvailableWork } from './components/AvailableWork';
import { WomenHomemakers } from './components/WomenHomemakers';
import { CourierDelivery } from './components/CourierDelivery';
import { PaymentInfo } from './components/PaymentInfo';
import { TrustSafety } from './components/TrustSafety';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { UserDashboard } from './components/UserDashboard';
import { AuthModals } from './components/AuthModals';
import { AssignmentModal } from './components/AssignmentModal';
import { LegalModal } from './components/LegalModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(sampleUserProfile);
  const [activeView, setActiveView] = useState<'landing' | 'dashboard'>('landing');

  // Modals state
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'refund' | 'about' | null>(null);

  // Application toast banner
  const [applicationToast, setApplicationToast] = useState<string | null>(null);

  const handleApplyAssignment = (assignment: Assignment) => {
    if (!currentUser) {
      setRegisterOpen(true);
      return;
    }

    setApplicationToast(
      currentLang === 'hi'
        ? `असाइनमेंट "${assignment.title.hi}" के लिए आपका आवेदन स्वीकार किया गया है!`
        : `Application for "${assignment.title.en}" accepted! Added to your Assigned Work.`
    );
    setTimeout(() => setApplicationToast(null), 5000);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveView('landing');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Toast Notification */}
      {applicationToast && (
        <div className="fixed top-20 right-4 z-50 p-4 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-top duration-200 max-w-md">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{applicationToast}</span>
        </div>
      )}

      {/* Main App Navigation Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        currentUser={currentUser}
        onOpenLogin={() => setLoginOpen(true)}
        onOpenRegister={() => setRegisterOpen(true)}
        onLogout={() => {
          setCurrentUser(null);
          setActiveView('landing');
        }}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Main Content Router */}
      {activeView === 'dashboard' && currentUser ? (
        <UserDashboard
          currentLang={currentLang}
          user={currentUser}
          onLogout={() => {
            setCurrentUser(null);
            setActiveView('landing');
          }}
          onReturnToHome={() => setActiveView('landing')}
          onSelectAssignment={setSelectedAssignment}
        />
      ) : (
        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            currentLang={currentLang}
            onFindWorkClick={() => handleNavClick('available-work')}
            onRegisterClick={() => setRegisterOpen(true)}
            onOpenDashboardClick={() => setActiveView('dashboard')}
            isLoggedIn={!!currentUser}
          />

          {/* How It Works Section (4 Steps) */}
          <HowItWorks
            currentLang={currentLang}
            onRegisterClick={() => setRegisterOpen(true)}
            onExploreWorkClick={() => handleNavClick('available-work')}
          />

          {/* Available Work Section (8 Cards) */}
          <AvailableWork
            currentLang={currentLang}
            onSelectAssignment={setSelectedAssignment}
            onApplyDirectly={handleApplyAssignment}
          />

          {/* For Women & Homemakers Section */}
          <WomenHomemakers
            currentLang={currentLang}
            onExploreWorkClick={() => handleNavClick('available-work')}
            onRegisterClick={() => setRegisterOpen(true)}
          />

          {/* Work Material Delivery / Courier Section */}
          <CourierDelivery currentLang={currentLang} />

          {/* Payment Information Section */}
          <PaymentInfo currentLang={currentLang} />

          {/* Trust & Safety Section */}
          <TrustSafety currentLang={currentLang} />

          {/* FAQ Section (10 Questions) */}
          <FAQSection
            currentLang={currentLang}
            onContactSupportClick={() => handleNavClick('contact')}
          />

          {/* Contact Section */}
          <ContactSection currentLang={currentLang} />
        </main>
      )}

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenLegal={setLegalModalType}
        onNavClick={handleNavClick}
        onLanguageChange={setCurrentLang}
      />

      {/* Auth Modals: Login & Register */}
      <AuthModals
        currentLang={currentLang}
        loginOpen={loginOpen}
        registerOpen={registerOpen}
        onCloseLogin={() => setLoginOpen(false)}
        onCloseRegister={() => setRegisterOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          setActiveView('dashboard');
        }}
        onSwitchToRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
        onSwitchToLogin={() => {
          setRegisterOpen(false);
          setLoginOpen(true);
        }}
      />

      {/* Detailed Assignment Modal */}
      <AssignmentModal
        assignment={selectedAssignment}
        currentLang={currentLang}
        onClose={() => setSelectedAssignment(null)}
        onApply={handleApplyAssignment}
      />

      {/* Legal & Policy Modals */}
      <LegalModal
        type={legalModalType}
        currentLang={currentLang}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
