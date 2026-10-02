import React from 'react';
import { X, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { Language } from '../types';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'refund' | 'about' | null;
  currentLang: Language;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  currentLang,
  onClose,
}) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'terms' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-2 text-indigo-700 font-bold uppercase text-xs">
              <FileText className="w-4 h-4" />
              <span>Official Document</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Terms & Conditions of Assignment</h2>
            <p className="text-slate-500 text-xs">Effective: October 2026 • WorkNest Mumbai</p>

            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-800">1. Nature of Engagement</h4>
              <p>
                WorkNest Mumbai provides assignment-based freelance opportunities for independent content creators, proofreaders, and clerical assistants. Registrants are independent contractors and not permanent corporate employees.
              </p>

              <h4 className="font-bold text-slate-800">2. No Guaranteed Income</h4>
              <p>
                Platform participation does not guarantee a minimum number of assignments or fixed monthly income. Earnings are exclusively tied to accepted assignments that meet verified editorial quality criteria.
              </p>

              <h4 className="font-bold text-slate-800">3. Zero Upfront Fees</h4>
              <p>
                WorkNest Mumbai will never request onboarding fees, registration payments, or security deposits. Any demand for payment under our brand name constitutes fraudulent impersonation.
              </p>

              <h4 className="font-bold text-slate-800">4. Quality & Plagiarism Policy</h4>
              <p>
                Submissions must be 100% original. Copied or machine-generated content without human editorial oversight will result in assignment cancellation without compensation.
              </p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-2 text-indigo-700 font-bold uppercase text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Data Protection</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Privacy Policy</h2>
            <p className="text-slate-500 text-xs">Last updated: October 2026</p>

            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-800">1. Information We Collect</h4>
              <p>
                We collect personal information necessary for identification, assignment allocation, and direct bank/UPI disbursements (e.g. Name, Phone number, City/Pincode, Bank IFSC or UPI ID).
              </p>

              <h4 className="font-bold text-slate-800">2. Usage of Your Data</h4>
              <p>
                Your contact and payment coordinates are used solely to disburse remuneration and communicate assignment guidelines. We do not sell, rent, or distribute contributor contact information to third-party telemarketers.
              </p>

              <h4 className="font-bold text-slate-800">3. Secure Communications</h4>
              <p>
                Official inquiries are maintained on encrypted servers based in India.
              </p>
            </div>
          </div>
        )}

        {type === 'refund' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-2 text-indigo-700 font-bold uppercase text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>Payment & Refund Guidelines</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Refund & Remuneration Policy</h2>
            <p className="text-slate-500 text-xs">Fair Treatment & Zero-Fee Principle</p>

            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-800">1. Zero Registration Charge Policy</h4>
              <p>
                Because WorkNest Mumbai charges <strong>₹0.00</strong> to register, create profiles, or view assignments, there are no registration fees to refund. Contributor onboarding is entirely free of charge.
              </p>

              <h4 className="font-bold text-slate-800">2. Payout Disbursals</h4>
              <p>
                Approved assignment compensation is disbursed via UPI or direct NEFT within 3 to 5 business days post quality acceptance. In the rare event of a failed bank transfer due to incorrect IFSC codes, the payout is re-queued immediately upon profile correction.
              </p>

              <h4 className="font-bold text-slate-800">3. Revision Requests</h4>
              <p>
                If a submitted task exhibits minor grammatical slips or formatting issues, contributors are provided a 24-hour revision window to rectify the work before final rejection.
              </p>
            </div>
          </div>
        )}

        {type === 'about' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-2 text-indigo-700 font-bold uppercase text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>About Us</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">About WorkNest Mumbai</h2>
            <p className="text-slate-500 text-xs">Empowering home-based talent across Mumbai and Maharashtra</p>

            <div className="space-y-3 pt-2">
              <p>
                WorkNest Mumbai was founded with a singular, respectful mission: to create a genuine, dignified, and professional digital work bridge for women, homemakers, and remote contributors across Mumbai, Navi Mumbai, and Thane.
              </p>
              <p>
                In a digital landscape filled with deceptive get-rich-quick scams and fake data-entry frauds that demand upfront kit fees, WorkNest operates with rigorous corporate integrity. We offer authentic writing, content structuring, catalog proofreading, and clerical tasks with transparent compensation and zero upfront costs.
              </p>
              <p>
                Our editorial support desk operates out of Mumbai, Maharashtra, ensuring reliable local support and accountable payment processing.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
