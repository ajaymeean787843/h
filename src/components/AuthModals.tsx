import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Lock, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { sampleUserProfile } from '../data/mockData';

interface AuthModalsProps {
  currentLang: Language;
  loginOpen: boolean;
  registerOpen: boolean;
  onCloseLogin: () => void;
  onCloseRegister: () => void;
  onLoginSuccess: (user: UserProfile) => void;
  onSwitchToRegister: () => void;
  onSwitchToLogin: () => void;
}

export const AuthModals: React.FC<AuthModalsProps> = ({
  currentLang,
  loginOpen,
  registerOpen,
  onCloseLogin,
  onCloseRegister,
  onLoginSuccess,
  onSwitchToRegister,
  onSwitchToLogin,
}) => {
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  // Register form state
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regCity, setRegCity] = useState('Mumbai');
  const [regPincode, setRegPincode] = useState('400058');
  const [regSkills, setRegSkills] = useState<string[]>(['Hindi Content Writing']);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  const toggleSkill = (skill: string) => {
    if (regSkills.includes(skill)) {
      setRegSkills(regSkills.filter((s) => s !== skill));
    } else {
      setRegSkills([...regSkills, skill]);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(sampleUserProfile);
    onCloseLogin();
  };

  const handleDemoLogin = () => {
    onLoginSuccess(sampleUserProfile);
    onCloseLogin();
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regPhone || !agreeTerms) return;

    const newUser: UserProfile = {
      id: `WNM-USER-${Math.floor(1000 + Math.random() * 9000)}`,
      name: regName,
      phone: regPhone,
      email: regEmail || `${regName.toLowerCase().replace(/\s+/g, '')}@example.com`,
      city: regCity,
      pincode: regPincode,
      verified: true,
      joinedDate: 'October 2026',
      preferredLanguage: currentLang === 'hi' ? 'Hindi & English' : 'English & Regional',
      skills: regSkills.length > 0 ? regSkills : ['Hindi Content Writing'],
      bankLinked: true,
      upiId: `${regPhone.slice(-4)}@upi`,
    };

    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      onLoginSuccess(newUser);
      onCloseRegister();
    }, 1500);
  };

  return (
    <>
      {/* LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={onCloseLogin}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                Contributor Portal
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                {currentLang === 'hi' ? 'लॉगिन करें' : 'Sign In to WorkNest'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {currentLang === 'hi'
                  ? 'अपने असाइनमेंट, सबमिशन और भुगतान स्थिति देखने के लिए लॉगिन करें।'
                  : 'Access your assigned tasks, submit draft work, and view payout status.'}
              </p>
            </div>

            {/* Quick Demo One-Click Login Button */}
            <div className="mb-5 p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="text-xs">
                  <span className="font-bold text-indigo-950 block">Quick Demo Login</span>
                  <span className="text-indigo-800 text-[11px]">Instant sign-in as verified Mumbai freelancer</span>
                </div>
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer"
                >
                  One-Click Login
                </button>
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email or Registered Mobile Number
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="e.g. meera.sharma@example.com"
                    className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    value={loginPass}
                    onChange={(e) => setLoginPass(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-indigo-950 text-white font-bold text-sm rounded-xl shadow-xs transition cursor-pointer"
              >
                {currentLang === 'hi' ? 'लॉगिन करें' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
              {currentLang === 'hi' ? 'अभी तक खाता नहीं है?' : "Don't have an account yet?"}{' '}
              <button
                onClick={onSwitchToRegister}
                className="font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer ml-1"
              >
                {currentLang === 'hi' ? 'निःशुल्क पंजीकरण करें' : 'Register Free'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REGISTER MODAL */}
      {registerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150 my-8">
            <button
              onClick={onCloseRegister}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                100% Free Registration • Zero Fees
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                {currentLang === 'hi' ? 'नया खाता बनाएं (Register)' : 'Join WorkNest Mumbai'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {currentLang === 'hi'
                  ? 'अपनी बुनियादी जानकारी भरें और घर से काम करने वाले प्रामाणिक कार्यों से जुड़ें।'
                  : 'Create your profile to receive home-based writing and data assignments.'}
              </p>
            </div>

            {regSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {currentLang === 'hi' ? 'पंजीकरण सफल रहा!' : 'Registration Successful!'}
                </h4>
                <p className="text-xs text-slate-600">
                  {currentLang === 'hi'
                    ? 'आपकी प्रोफ़ाइल सत्यापित हो गई है। डैशबोर्ड खोला जा रहा है...'
                    : 'Your initial profile is verified. Redirecting to your contributor dashboard...'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="e.g. Sunita Kulkarni"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      placeholder="+91 98200 XXXXX"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      City / Region *
                    </label>
                    <input
                      type="text"
                      required
                      value={regCity}
                      onChange={(e) => setRegCity(e.target.value)}
                      placeholder="Mumbai, Thane, or Navi Mumbai"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Postal Pincode *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      required
                      value={regPincode}
                      onChange={(e) => setRegPincode(e.target.value)}
                      placeholder="e.g. 400058"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Select Your Preferred Writing / Work Skills:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      'Hindi Content Writing',
                      'English Writing',
                      'Product Descriptions',
                      'Manuscript Proofreading',
                      'Catalog Data Entry',
                      'Audio Transcription',
                    ].map((skill) => (
                      <button
                        type="button"
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`py-1.5 px-2.5 rounded-lg border text-left font-medium transition cursor-pointer ${
                          regSkills.includes(skill)
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-900 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Anti-Scam Acknowledgment Checkbox */}
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-0.5 accent-indigo-600"
                    />
                    <span className="text-[11px] leading-tight">
                      I understand that WorkNest Mumbai charges <strong>₹0 registration fee</strong>. I understand that earnings depend strictly on accepted assignments, quality approval, and completed work, with no guaranteed income promises.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agreeTerms}
                  className={`w-full py-3 text-white font-bold text-sm rounded-xl shadow-xs transition cursor-pointer flex items-center justify-center gap-2 ${
                    agreeTerms
                      ? 'bg-slate-900 hover:bg-indigo-950'
                      : 'bg-slate-400 cursor-not-allowed'
                  }`}
                >
                  <UserCheck className="w-4 h-4 text-indigo-300" />
                  <span>{currentLang === 'hi' ? 'पंजीकरण पूरा करें' : 'Complete Free Registration'}</span>
                </button>
              </form>
            )}

            <div className="mt-5 pt-3 border-t border-slate-100 text-center text-xs text-slate-500">
              {currentLang === 'hi' ? 'पहले से खाता है?' : 'Already have a contributor profile?'}{' '}
              <button
                onClick={onSwitchToLogin}
                className="font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer ml-1"
              >
                {currentLang === 'hi' ? 'लॉगिन करें' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
