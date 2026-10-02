import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { faqList } from '../data/mockData';
import { translations } from '../translations';

interface FAQSectionProps {
  currentLang: Language;
  onContactSupportClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  currentLang,
  onContactSupportClick,
}) => {
  const [openIds, setOpenIds] = useState<number[]>([1, 2, 5, 9]); // default expand key questions
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[currentLang];

  const toggleAccordion = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = faqList.filter((item) => {
    const q = item.question[currentLang].toLowerCase();
    const a = item.answer[currentLang].toLowerCase();
    const s = searchQuery.toLowerCase();
    return q.includes(s) || a.includes(s);
  });

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span>{t.faq.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.faq.title}
          </h2>

          <p className="text-base text-slate-600">
            {t.faq.subtitle}
          </p>

          {/* Quick FAQ Search Bar */}
          <div className="relative max-w-md mx-auto pt-3">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-6" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'hi' ? 'प्रश्नों में खोजें...' : 'Search questions or keywords...'}
              className="w-full pl-9 pr-4 py-2.5 bg-white text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-2xs"
            />
          </div>
        </div>

        {/* 10 FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question[currentLang]}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-indigo-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer[currentLang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 bg-white rounded-2xl border border-slate-200 p-6 text-slate-500 text-xs">
            No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another keyword.
          </div>
        )}

        {/* Need more clarification footer note */}
        <div className="mt-10 p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {currentLang === 'hi' ? 'क्या आपका कोई अन्य प्रश्न है?' : 'Have a specific question not covered here?'}
              </h4>
              <p className="text-xs text-slate-500">
                {currentLang === 'hi' ? 'हमारी मुंबई सहायता टीम आपकी मदद के लिए सदैव उपलब्ध है।' : 'Our Mumbai support desk responds to queries within 24 business hours.'}
              </p>
            </div>
          </div>
          <button
            onClick={onContactSupportClick}
            className="px-5 py-2.5 bg-slate-900 hover:bg-indigo-950 text-white font-semibold text-xs rounded-xl shadow-xs transition cursor-pointer shrink-0"
          >
            {currentLang === 'hi' ? 'सपोर्ट से संपर्क करें' : 'Contact Support Desk'}
          </button>
        </div>

      </div>
    </section>
  );
};
