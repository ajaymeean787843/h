import React from 'react';
import { 
  X, 
  Clock, 
  Award, 
  CreditCard, 
  Truck, 
  CheckCircle2, 
  FileText, 
  AlertCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Assignment, Language } from '../types';

interface AssignmentModalProps {
  assignment: Assignment | null;
  currentLang: Language;
  onClose: () => void;
  onApply: (assignment: Assignment) => void;
}

export const AssignmentModal: React.FC<AssignmentModalProps> = ({
  assignment,
  currentLang,
  onClose,
  onApply,
}) => {
  if (!assignment) return null;

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

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
            {assignment.workType[currentLang]}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
            ID: {assignment.id}
          </span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
            {assignment.slotsLeft} slots available
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
          {assignment.title[currentLang]}
        </h2>

        {/* Prototype Demo Disclaimer Banner */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 mb-5 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
          <span>
            Prototype Sample: This assignment card illustrates typical editorial guidelines, word counts, and compensation standards for Mumbai freelancers.
          </span>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Estimated Time</span>
            <span className="font-semibold text-slate-800">{assignment.estimatedTime[currentLang]}</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Skill Requirement</span>
            <span className="font-semibold text-slate-800">{assignment.skillLevel[currentLang]}</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Delivery Mode</span>
            <span className="font-semibold text-slate-800">{assignment.deliveryType}</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Rate Benchmark</span>
            <span className="font-bold text-emerald-700">{assignment.rateGuide[currentLang]}</span>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-4 mb-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div>
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">
              Assignment Overview:
            </h4>
            <p>{assignment.description[currentLang]}</p>
          </div>

          {/* Sample Task Prompt */}
          <div className="p-3.5 bg-indigo-50/60 rounded-xl border border-indigo-100">
            <h4 className="font-bold text-indigo-950 text-xs flex items-center gap-1.5 mb-1">
              <FileText className="w-4 h-4 text-indigo-600" />
              <span>Sample Assignment Prompt:</span>
            </h4>
            <p className="text-indigo-900 text-xs italic">
              {assignment.sampleTask[currentLang]}
            </p>
          </div>

          {/* Editorial Requirements Checklist */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2">
              Submission Guidelines & Quality Criteria:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {assignment.requirements[currentLang].map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Payment Caveat */}
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
            <ShieldCheck className="w-4 h-4 text-amber-700 inline mr-1" />
            <strong>Quality Review Notice:</strong> Payment for this assignment is released within 3-5 days after submitted work passes originality and grammatical review. No guaranteed returns.
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onApply(assignment);
              onClose();
            }}
            className="px-6 py-2.5 bg-slate-900 hover:bg-indigo-950 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition cursor-pointer flex items-center gap-2"
          >
            <span>Apply for this Assignment</span>
            <ArrowRight className="w-4 h-4 text-indigo-300" />
          </button>
        </div>

      </div>
    </div>
  );
};
