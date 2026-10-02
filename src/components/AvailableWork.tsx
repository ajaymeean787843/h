import React, { useState } from 'react';
import { 
  Clock, 
  Award, 
  CreditCard, 
  Users, 
  Truck, 
  Search, 
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Assignment, Language } from '../types';
import { mockAssignments } from '../data/mockData';
import { translations } from '../translations';

interface AvailableWorkProps {
  currentLang: Language;
  onSelectAssignment: (assignment: Assignment) => void;
  onApplyDirectly: (assignment: Assignment) => void;
}

export const AvailableWork: React.FC<AvailableWorkProps> = ({
  currentLang,
  onSelectAssignment,
  onApplyDirectly,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const t = translations[currentLang];

  const filteredAssignments = mockAssignments.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'content' && item.category === 'content') ||
      (selectedCategory === 'data' && item.category === 'data') ||
      (selectedCategory === 'other' && (item.category === 'transcription' || item.category === 'home'));

    const searchLower = searchQuery.toLowerCase();
    const titleMatch =
      item.title.en.toLowerCase().includes(searchLower) ||
      item.title.hi.toLowerCase().includes(searchLower);
    const typeMatch =
      item.workType.en.toLowerCase().includes(searchLower) ||
      item.workType.hi.toLowerCase().includes(searchLower);

    return matchesCategory && (titleMatch || typeMatch);
  });

  return (
    <section id="available-work" className="py-16 sm:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>{t.availableWork.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.availableWork.title}
          </h2>
          <p className="text-base text-slate-600">
            {t.availableWork.subtitle}
          </p>

          {/* Prototype / Sample Label Banner as instructed */}
          <div className="inline-flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 text-left mt-2">
            <AlertCircle className="w-4 h-4 text-blue-700 shrink-0" />
            <span>{t.availableWork.prototypeNotice}</span>
          </div>
        </div>

        {/* Filters & Search Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t.availableWork.filterAll}
            </button>
            <button
              onClick={() => setSelectedCategory('content')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                selectedCategory === 'content'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t.availableWork.filterContent}
            </button>
            <button
              onClick={() => setSelectedCategory('data')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                selectedCategory === 'data'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t.availableWork.filterData}
            </button>
            <button
              onClick={() => setSelectedCategory('other')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                selectedCategory === 'other'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t.availableWork.filterAudio}
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'hi' ? 'कार्य खोजें...' : 'Search assignments...'}
              className="w-full pl-9 pr-4 py-2 bg-white text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
            />
          </div>
        </div>

        {/* 8 Assignment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-indigo-200"
            >
              <div>
                {/* Top Tags: Category + Sample Demo Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {assignment.workType[currentLang]}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    Sample / Demo
                  </span>
                </div>

                {/* Assignment Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-indigo-900 transition-colors line-clamp-2">
                  {assignment.title[currentLang]}
                </h3>

                {/* Short Brief */}
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                  {assignment.description[currentLang]}
                </p>

                {/* Structured Metadata Fields required by prompt */}
                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  {/* Estimated Time */}
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <div className="text-slate-700">
                      <span className="text-slate-400 text-[11px] block">{t.availableWork.estimatedTime}</span>
                      <span className="font-medium">{assignment.estimatedTime[currentLang]}</span>
                    </div>
                  </div>

                  {/* Skill Level */}
                  <div className="flex items-start gap-2">
                    <Award className="w-3.5 h-3.5 text-purple-500 mt-0.5 shrink-0" />
                    <div className="text-slate-700">
                      <span className="text-slate-400 text-[11px] block">{t.availableWork.skillLevel}</span>
                      <span className="font-medium">{assignment.skillLevel[currentLang]}</span>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="flex items-start gap-2">
                    <CreditCard className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <div className="text-slate-700">
                      <span className="text-slate-400 text-[11px] block">{t.availableWork.paymentMethod}</span>
                      <span className="font-medium text-emerald-800">{assignment.paymentMethod[currentLang]}</span>
                    </div>
                  </div>

                  {/* Rate Guide */}
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-150">
                    <span className="text-slate-400 text-[10px] block uppercase font-bold tracking-wider">
                      {currentLang === 'hi' ? 'पारिश्रमिक दर (अनुमानित)' : 'Indicative Compensation'}
                    </span>
                    <span className="font-bold text-slate-900 text-xs">
                      {assignment.rateGuide[currentLang]}
                    </span>
                  </div>

                  {/* Assignment Availability */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <Users className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{assignment.availability[currentLang]}</span>
                    </div>
                    {assignment.deliveryType.includes('Courier') && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        <Truck className="w-3 h-3 text-amber-700" />
                        Courier
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectAssignment(assignment)}
                  className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition cursor-pointer text-center flex items-center justify-center gap-1"
                >
                  <span>{t.availableWork.viewDetails}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </button>
                <button
                  onClick={() => onApplyDirectly(assignment)}
                  className="py-2 px-3 bg-slate-900 hover:bg-indigo-950 text-white rounded-xl text-xs font-semibold transition cursor-pointer shadow-2xs"
                  title="Quick Apply"
                >
                  {currentLang === 'hi' ? 'आवेदन' : 'Apply'}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredAssignments.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 className="font-bold text-slate-800">
              {currentLang === 'hi' ? 'कोई असाइनमेंट नहीं मिला' : 'No matching assignments found'}
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              {currentLang === 'hi'
                ? 'कृपया अन्य खोज शब्द अथवा "सभी श्रेणियां" का चयन करें।'
                : 'Try adjusting your search keyword or switch back to All Categories.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-xs font-semibold rounded-lg text-slate-700"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Quality Guarantee Note */}
        <div className="mt-12 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {currentLang === 'hi' ? 'प्रामाणिक व निष्पक्ष मूल्यांकन' : 'Fair Quality Standards & Guidelines Provided'}
              </h4>
              <p className="text-xs text-slate-500">
                {currentLang === 'hi'
                  ? 'प्रत्येक असाइनमेंट के साथ स्पष्ट निर्देश दिए जाते हैं ताकि आप पहली बार में ही गुणवत्ता अनुमोदन प्राप्त कर सकें।'
                  : 'Every assignment includes step-by-step editorial guidelines, sample formats, and reference templates.'}
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg shrink-0">
            Mumbai Publishing Desk
          </span>
        </div>

      </div>
    </section>
  );
};
