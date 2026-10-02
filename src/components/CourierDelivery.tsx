import React, { useState } from 'react';
import { 
  Truck, 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Package, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { Language, CourierTrackingInfo } from '../types';
import { sampleCourierRecords } from '../data/mockData';
import { translations } from '../translations';

interface CourierDeliveryProps {
  currentLang: Language;
}

export const CourierDelivery: React.FC<CourierDeliveryProps> = ({ currentLang }) => {
  const [trackingInput, setTrackingInput] = useState('WNM-MUM-8921');
  const [activeTrackingData, setActiveTrackingData] = useState<CourierTrackingInfo | null>(
    sampleCourierRecords['WNM-MUM-8921']
  );
  const [trackingError, setTrackingError] = useState('');

  // Pin Code checker state
  const [testPincode, setTestPincode] = useState('');
  const [pinResult, setPinResult] = useState<{ serviceable: boolean; message: string } | null>(null);

  const t = translations[currentLang];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = trackingInput.trim().toUpperCase();
    if (sampleCourierRecords[cleanId]) {
      setActiveTrackingData(sampleCourierRecords[cleanId]);
      setTrackingError('');
    } else {
      setTrackingError(
        currentLang === 'hi'
          ? 'ट्रैकिंग आईडी नहीं मिली। कृपया नीचे दिए गए डेमो आईडी का परीक्षण करें।'
          : 'Tracking ID not found in demo system. Please try one of the sample tracking IDs below.'
      );
    }
  };

  const handleQuickSelect = (id: string) => {
    setTrackingInput(id);
    setActiveTrackingData(sampleCourierRecords[id]);
    setTrackingError('');
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    const pin = testPincode.trim();
    if (!pin || pin.length !== 6 || isNaN(Number(pin))) {
      setPinResult({
        serviceable: false,
        message: currentLang === 'hi' ? 'कृपया 6 अंकों का वैध भारतीय पिन कोड दर्ज करें' : 'Please enter a valid 6-digit postal pincode',
      });
      return;
    }

    if (pin.startsWith('400') || pin.startsWith('401') || pin.startsWith('410')) {
      setPinResult({
        serviceable: true,
        message: currentLang === 'hi' 
          ? `पिन कोड ${pin} (मुंबई / एमएमआर रीजन) में ब्लू डार्ट एवं डेल्हीवरी कूरियर सेवाएं उपलब्ध हैं।`
          : `Pincode ${pin} (Mumbai MMR Region) is fully serviceable via BlueDart and Delhivery surface courier.`,
      });
    } else {
      setPinResult({
        serviceable: true,
        message: currentLang === 'hi'
          ? `पिन कोड ${pin} में राष्ट्रीय स्पीड पोस्ट व डीटीडीसी कूरियर कनेक्टिविटी सक्रिय है।`
          : `Pincode ${pin} is serviceable through standard DTDC Express / India Post logistics.`,
      });
    }
  };

  return (
    <section id="courier-delivery" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.courier.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.courier.title}
          </h2>

          {/* Exact required explanation from user prompt */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-slate-800 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto shadow-2xs">
            &ldquo;{t.courier.description}&rdquo;
          </div>

          {/* Crucial Disclaimer: Do NOT promise courier delivery to every user */}
          <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-950 text-left max-w-2xl mx-auto">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>{t.courier.disclaimer}</p>
          </div>
        </div>

        {/* Two-Column Interactive Layout: Tracking Widget + Pincode/Details */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Courier Tracking Card */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {t.courier.trackerTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.courier.trackerDesc}
                </p>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800">
                Live Status Demo
              </span>
            </div>

            {/* Tracking Search Input Form */}
            <form onSubmit={handleTrack} className="mb-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    placeholder={t.courier.inputPlaceholder}
                    className="w-full pl-9 pr-4 py-2.5 bg-white text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-indigo-950 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition cursor-pointer"
                >
                  {t.courier.trackBtn}
                </button>
              </div>
            </form>

            {/* Quick Demo Tracking Buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
              <span className="text-slate-500 font-medium">{t.courier.sampleButtonsTitle}</span>
              {Object.keys(sampleCourierRecords).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleQuickSelect(id)}
                  className={`px-2.5 py-1 rounded-lg border font-mono transition cursor-pointer ${
                    activeTrackingData?.trackingId === id
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {id}
                </button>
              ))}
            </div>

            {trackingError && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 mb-4">
                {trackingError}
              </div>
            )}

            {/* Rendered Tracking Details Card as requested by prompt */}
            {activeTrackingData && (
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-5">
                {/* 4 Essential Fields highlighted in the prompt: Courier Status, Tracking Number, Delivery Status, Expected Delivery */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-150 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                      {t.courier.courierPartner}
                    </span>
                    <span className="font-bold text-slate-900">
                      {activeTrackingData.partner}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                      {t.courier.trackingNumber}
                    </span>
                    <span className="font-mono font-bold text-indigo-700">
                      {activeTrackingData.trackingId}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                      {t.courier.deliveryStatus}
                    </span>
                    <span className={`inline-flex items-center gap-1 font-bold ${
                      activeTrackingData.status === 'Delivered'
                        ? 'text-emerald-700'
                        : activeTrackingData.status === 'Out for Delivery'
                        ? 'text-amber-700'
                        : 'text-blue-700'
                    }`}>
                      {activeTrackingData.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                      {t.courier.expectedDelivery}
                    </span>
                    <span className="font-bold text-slate-900">
                      {activeTrackingData.expectedDelivery}
                    </span>
                  </div>
                </div>

                {/* Additional Package Details */}
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Package className="w-3.5 h-3.5 text-slate-400" />
                    <span><strong>Consignment:</strong> {activeTrackingData.packageType}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span><strong>Destination:</strong> {activeTrackingData.area} - {activeTrackingData.pincode} ({activeTrackingData.recipientName})</span>
                  </div>
                </div>

                {/* Step-by-Step Delivery Progress Timeline */}
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                    {t.courier.timeline}
                  </h4>
                  <div className="space-y-3 relative pl-4 border-l-2 border-slate-200">
                    {activeTrackingData.events.map((evt, idx) => (
                      <div key={idx} className="relative text-xs">
                        <div className={`absolute -left-[21px] top-0.5 w-3 h-3 rounded-full border-2 border-white ${
                          idx === 0 ? 'bg-indigo-600 ring-2 ring-indigo-200' : 'bg-slate-300'
                        }`} />
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-500 text-[11px] mb-0.5">
                          <span className="font-semibold text-slate-800">{evt.date} • {evt.time}</span>
                          <span>{evt.location}</span>
                        </div>
                        <p className="text-slate-700 font-medium">
                          {evt.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Right Column: Courier Policy & Service Area Checker */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Pincode Serviceability Tool */}
            <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">
                  {currentLang === 'hi' ? 'पिन कोड सेवा जांचें' : 'Check Service Area Pin Code'}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                {currentLang === 'hi'
                  ? 'अपनी मुंबई अथवा महाराष्ट्र पिन कोड दर्ज करें और जानें कि क्या आपके क्षेत्र में कूरियर डिलीवरी उपलब्ध है।'
                  : 'Enter your 6-digit postal code to verify courier partner reach in your locality.'}
              </p>

              <form onSubmit={handleCheckPincode} className="flex gap-2 mb-3">
                <input
                  type="text"
                  maxLength={6}
                  value={testPincode}
                  onChange={(e) => setTestPincode(e.target.value)}
                  placeholder="e.g. 400058"
                  className="w-full px-3 py-2 bg-white text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl cursor-pointer shrink-0"
                >
                  {currentLang === 'hi' ? 'जांचें' : 'Check'}
                </button>
              </form>

              {pinResult && (
                <div className={`p-3 rounded-xl text-xs font-medium ${
                  pinResult.serviceable
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  {pinResult.message}
                </div>
              )}
            </div>

            {/* Courier Rules & Transparency Points */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                {currentLang === 'hi' ? 'कूरियर सामग्री संबंधी नियम' : 'Courier Eligibility Rules'}
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{currentLang === 'hi' ? 'कोई कूरियर शुल्क नहीं:' : 'No Courier Charges:'}</strong>{' '}
                    {currentLang === 'hi'
                      ? 'पात्र कार्य सामग्री भेजने के लिए हम आपसे कोई भी डाक या कूरियर शुल्क नहीं मांगते।'
                      : 'We cover all shipping and reverse-pickup expenses for verified assignments.'}
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{currentLang === 'hi' ? 'सुरक्षित पैकेजिंग:' : 'Tamper-Evident Kits:'}</strong>{' '}
                    {currentLang === 'hi'
                      ? 'हस्तलिखित पांडुलिपियां और संदर्भ सामग्री सीलबंद वाटरप्रूफ पैकेज में भेजी जाती हैं।'
                      : 'All manuscripts and reference catalogs are dispatched in sealed, insured envelopes.'}
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{currentLang === 'hi' ? 'डिजिटल विकल्प प्राथमिकता:' : 'Digital Delivery Preferred:'}</strong>{' '}
                    {currentLang === 'hi'
                      ? '90% से अधिक कार्य डिजिटल डॉक्स में होते हैं, जिससे कूरियर प्रतीक्षा की आवश्यकता ही नहीं होती।'
                      : 'Over 90% of content assignments are 100% digital, eliminating physical courier wait times.'}
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
