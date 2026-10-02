import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const t = translations[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-indigo-600" />
            <span>{t.contact.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>

          <p className="text-base text-slate-600">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Two Columns: Official Info & Contact Form */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Card as strictly specified by prompt */}
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    {t.contact.officeLocationTitle}
                  </h3>
                  <p className="text-lg font-bold text-slate-900 mt-0.5">
                    {t.contact.officeLocation}
                  </p>
                </div>
              </div>

              {/* Exact requirement: Note explaining demo version display */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-500 leading-relaxed">
                <AlertCircle className="w-3.5 h-3.5 text-slate-400 inline mr-1" />
                {t.contact.demoAddressNotice}
              </div>

              {/* Official Coordinates placeholders as strictly instructed */}
              <div className="space-y-3 pt-3 border-t border-slate-200 text-xs">
                
                {/* Phone */}
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">{t.contact.phoneLabel}</span>
                    <span className="font-mono font-bold text-slate-800 text-xs">{t.contact.phoneValue}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">{t.contact.emailLabel}</span>
                    <span className="font-mono font-bold text-slate-800 text-xs">{t.contact.emailValue}</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">{t.contact.whatsappLabel}</span>
                    <span className="font-mono font-bold text-slate-800 text-xs">{t.contact.whatsappValue}</span>
                  </div>
                </div>

              </div>

              {/* Support Timings */}
              <div className="flex items-center gap-2 pt-2 text-xs text-slate-500 font-medium">
                <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Working Hours: Mon - Sat, 09:30 AM to 06:30 PM IST</span>
              </div>
            </div>

            {/* Anti-Scam Verification Reminder */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong>Caution:</strong> Official WorkNest Mumbai representatives will NEVER call asking for OTPs, bank passwords, or payment for assignments. Always verify official correspondence.
            </div>

          </div>

          {/* Right Column: Interactive Message / Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {currentLang === 'hi'
                ? 'यदि आपके पास कोई प्रश्न है, तो नीचे दिए गए फॉर्म के माध्यम से हमें लिखें।'
                : 'Have a question about profile verification, sample tasks, or payment schedules? Reach out below.'}
            </p>

            {formSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">{t.contact.successMsg}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {currentLang === 'hi' ? 'नाम *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {currentLang === 'hi' ? 'ईमेल पता *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {currentLang === 'hi' ? 'मोबाइल नंबर (वैकल्पिक)' : 'Phone / WhatsApp'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {currentLang === 'hi' ? 'विषय' : 'Topic / Inquiry Type'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.contact.subjectPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {currentLang === 'hi' ? 'आपका संदेश *' : 'Message Details *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full p-3.5 bg-white text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-indigo-950 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-indigo-300" />
                <span>{t.contact.submitBtn}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
