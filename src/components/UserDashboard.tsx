import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  FileCheck, 
  UploadCloud, 
  Truck, 
  CreditCard, 
  LifeBuoy, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Download, 
  Send, 
  FileText,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  IndianRupee
} from 'lucide-react';
import { Language, UserProfile, Assignment } from '../types';
import { translations } from '../translations';
import { mockAssignments, sampleCourierRecords, samplePayoutRecords, sampleUserSubmissions } from '../data/mockData';

interface UserDashboardProps {
  currentLang: Language;
  user: UserProfile;
  onLogout: () => void;
  onReturnToHome: () => void;
  onSelectAssignment: (assignment: Assignment) => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({
  currentLang,
  user,
  onLogout,
  onReturnToHome,
  onSelectAssignment,
}) => {
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'profile' | 'available' | 'assigned' | 'submit' | 'courier' | 'payments' | 'support'
  >('dashboard');

  const [submissions, setSubmissions] = useState(sampleUserSubmissions);
  const [selectedTaskToSubmit, setSelectedTaskToSubmit] = useState(mockAssignments[0].id);
  const [submissionContent, setSubmissionContent] = useState('');
  const [submissionWords, setSubmissionWords] = useState('820');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Support ticket state
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketSent, setTicketSent] = useState(false);

  const t = translations[currentLang];

  const handleSubmitWork = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submissionContent.trim()) return;

    const task = mockAssignments.find((a) => a.id === selectedTaskToSubmit);
    const newSubmission = {
      id: `SUB-${Math.floor(1000 + Math.random() * 9000)}`,
      assignmentId: selectedTaskToSubmit,
      assignmentTitle: task ? task.title[currentLang] : 'Submitted Content',
      submittedAt: 'Just now',
      wordCount: parseInt(submissionWords) || 800,
      status: 'Under Quality Review' as const,
      feedback: 'Received successfully. Sent to Mumbai QA editorial queue.',
      payoutAmount: 450,
    };

    setSubmissions([newSubmission, ...submissions]);
    setSubmitSuccess(true);
    setSubmissionContent('');
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleSupportTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject.trim() || !ticketMessage.trim()) return;
    setTicketSent(true);
    setTicketSubject('');
    setTicketMessage('');
    setTimeout(() => setTicketSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div 
                onClick={onReturnToHome}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                  W
                </div>
                <div className="hidden sm:block">
                  <span className="font-bold text-base text-white tracking-tight">WorkNest Mumbai</span>
                  <span className="text-[10px] text-indigo-300 block -mt-1 font-mono">Contributor Portal</span>
                </div>
              </div>
            </div>

            {/* Profile pill & public site link */}
            <div className="flex items-center gap-3">
              <button
                onClick={onReturnToHome}
                className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition cursor-pointer flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{currentLang === 'hi' ? 'वेबसाइट देखें' : 'Public Site'}</span>
              </button>

              <div className="flex items-center gap-2 pl-2 border-l border-slate-700">
                <div className="w-8 h-8 rounded-full bg-indigo-700 text-indigo-100 flex items-center justify-center font-bold text-xs">
                  {user.name.charAt(0)}
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>{user.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {user.id} • {user.city}
                  </div>
                </div>
              </div>

              <button
                onClick={onLogout}
                className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition cursor-pointer"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-4">
            
            {/* User Mini Profile Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-900 to-indigo-700 text-white flex items-center justify-center text-lg font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{user.name}</h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Contributor
                  </span>
                </div>
              </div>
              <div className="space-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{user.pincode}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Member since Aug 2026</span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs List as required by prompt */}
            <nav className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs space-y-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer text-left ${
                  activeTab === 'dashboard'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer text-left ${
                  activeTab === 'profile'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <User className="w-4 h-4" />
                <span>My Profile</span>
              </button>

              <button
                onClick={() => setActiveTab('available')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer text-left ${
                  activeTab === 'available'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span className="flex-1">Available Assignments</span>
                <span className="bg-indigo-100 text-indigo-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  8
                </span>
              </button>

              <button
                onClick={() => setActiveTab('assigned')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer text-left ${
                  activeTab === 'assigned'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <FileCheck className="w-4 h-4" />
                <span className="flex-1">Assigned Work</span>
                <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  2
                </span>
              </button>

              <button
                onClick={() => setActiveTab('submit')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer text-left ${
                  activeTab === 'submit'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <UploadCloud className="w-4 h-4" />
                <span>Submit Work</span>
              </button>

              <button
                onClick={() => setActiveTab('courier')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer text-left ${
                  activeTab === 'courier'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>Courier Tracking</span>
              </button>

              <button
                onClick={() => setActiveTab('payments')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer text-left ${
                  activeTab === 'payments'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Payment History</span>
              </button>

              <button
                onClick={() => setActiveTab('support')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer text-left ${
                  activeTab === 'support'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <LifeBuoy className="w-4 h-4" />
                <span>Support</span>
              </button>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition cursor-pointer text-left"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </nav>

            {/* Quality Support Notice */}
            <div className="p-4 rounded-xl bg-slate-900 text-white text-xs space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-indigo-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Mumbai Desk Support</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Direct phone and WhatsApp assistance is available Mon-Sat, 9:30 AM to 6:30 PM.
              </p>
            </div>
          </aside>

          {/* Right Main Content Area */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* VIEW 1: DASHBOARD OVERVIEW */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                
                {/* Welcome Card */}
                <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 rounded-2xl p-6 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      {t.dashboard.welcome}, {user.name}!
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Contributor ID: <span className="font-mono text-indigo-200">{user.id}</span> • Mumbai Verified
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('submit')}
                    className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>Submit Completed Work</span>
                  </button>
                </div>

                {/* Dashboard Cards required by prompt: Available Assignments, Active Assignments, Completed Assignments */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Card 1: Available Assignments */}
                  <div 
                    onClick={() => setActiveTab('available')}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Available Assignments
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <Briefcase className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-3xl font-black text-slate-900">
                      8
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 group-hover:text-indigo-600">
                      <span>Browse new tasks</span>
                      <ChevronRight className="w-3 h-3" />
                    </p>
                  </div>

                  {/* Card 2: Active Assignments */}
                  <div 
                    onClick={() => setActiveTab('assigned')}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Active Assignments
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-3xl font-black text-slate-900">
                      2
                    </div>
                    <p className="text-[11px] text-amber-700 font-medium mt-1">
                      Due in 24 to 48 hours
                    </p>
                  </div>

                  {/* Card 3: Completed Assignments */}
                  <div 
                    onClick={() => setActiveTab('payments')}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Completed Assignments
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-3xl font-black text-slate-900">
                      14
                    </div>
                    <p className="text-[11px] text-emerald-700 font-medium mt-1">
                      100% Quality Approval Score
                    </p>
                  </div>
                </div>

                {/* Submissions & Quality Review Status */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        Recent Submissions & Quality Reviews
                      </h3>
                      <p className="text-xs text-slate-500">
                        Track progress of your submitted files through our editorial team.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab('submit')}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      + New Submission
                    </button>
                  </div>

                  <div className="space-y-3">
                    {submissions.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-slate-400 font-bold">{sub.id}</span>
                            <span className="font-bold text-slate-900 text-sm">{sub.assignmentTitle}</span>
                          </div>
                          <p className="text-slate-500 text-[11px]">
                            Submitted: {sub.submittedAt} • Word Count: {sub.wordCount} words
                          </p>
                          {sub.feedback && (
                            <p className="text-slate-600 text-xs italic bg-white p-2 rounded-lg border border-slate-200">
                              Reviewer Note: {sub.feedback}
                            </p>
                          )}
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                          <span className={`px-2.5 py-1 rounded-full font-bold text-[11px] ${
                            sub.status === 'Approved'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {sub.status}
                          </span>
                          {sub.payoutAmount && (
                            <span className="font-bold text-slate-900 text-sm font-mono">
                              ₹{sub.payoutAmount}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Working Guidelines Reminder */}
                <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-start gap-3 text-xs text-indigo-950">
                  <ShieldCheck className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Contributor Honor Code</span>
                    <p className="leading-relaxed text-indigo-900">
                      WorkNest Mumbai verifies all submitted content with grammatical and originality checks. Please review instructions before uploading your files. Need assistance? Reach out to support anytime.
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 2: AVAILABLE ASSIGNMENTS TAB */}
            {activeTab === 'available' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Available Assignments Catalog</h2>
                    <p className="text-xs text-slate-500">Pick any assignment that matches your skills and time window.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {mockAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                            {assignment.workType[currentLang]}
                          </span>
                          <span className="text-xs font-semibold text-emerald-700">
                            {assignment.slotsLeft} slots open
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                          {assignment.title[currentLang]}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                          {assignment.description[currentLang]}
                        </p>
                        <div className="p-2.5 bg-slate-50 rounded-xl text-xs space-y-1 mb-3">
                          <div className="text-slate-600"><strong>Est. Time:</strong> {assignment.estimatedTime[currentLang]}</div>
                          <div className="text-slate-600"><strong>Rate:</strong> {assignment.rateGuide[currentLang]}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                        <button
                          onClick={() => onSelectAssignment(assignment)}
                          className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl text-center cursor-pointer"
                        >
                          View Full Brief
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('assigned');
                          }}
                          className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                        >
                          Accept Task
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 3: ASSIGNED WORK */}
            {activeTab === 'assigned' && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Assigned Work in Progress</h2>
                  <p className="text-xs text-slate-500">Currently allocated assignments requiring your completion.</p>
                </div>

                <div className="space-y-4">
                  {/* Active Task 1 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
                          Assignment ID: WN-HIN-01
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-0.5">
                          Hindi Content Writing - Lifestyle & Home Organization
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 shrink-0 self-start">
                        Due in 28 Hours
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 space-y-2">
                      <p>
                        <strong>Assigned Topic:</strong> &ldquo;मानसून में घर की नमी और दुर्गंध दूर रखने के 5 आसान घरेलू उपाय&rdquo;
                      </p>
                      <p>
                        <strong>Target Word Count:</strong> 700 to 850 words in clear, polite Hindi with bullet points.
                      </p>
                      <p>
                        <strong>Agreed Rate:</strong> ₹450 on quality approval.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => {
                          setSelectedTaskToSubmit('WN-HIN-01');
                          setActiveTab('submit');
                        }}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                      >
                        Submit This Task Now
                      </button>
                      <button
                        onClick={() => onSelectAssignment(mockAssignments[0])}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-xl cursor-pointer"
                      >
                        View Assignment Brief
                      </button>
                    </div>
                  </div>

                  {/* Active Task 2 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
                          Assignment ID: WN-PRF-05
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-0.5">
                          Proofreading - Primary School Hindi & English Reader
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 shrink-0 self-start">
                        Due in 44 Hours
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 space-y-2">
                      <p>
                        <strong>Pages:</strong> 12 pages (Chapters 5 and 6).
                      </p>
                      <p>
                        <strong>Instructions:</strong> Use Track Changes to correct punctuation, spelling, and paragraph breaks.
                      </p>
                      <p>
                        <strong>Agreed Rate:</strong> ₹380 on quality approval.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => {
                          setSelectedTaskToSubmit('WN-PRF-05');
                          setActiveTab('submit');
                        }}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                      >
                        Submit This Task Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: SUBMIT WORK */}
            {activeTab === 'submit' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Submit Completed Work</h2>
                  <p className="text-xs text-slate-500">
                    Upload your completed article, sheet, or text draft for editorial quality review.
                  </p>
                </div>

                {submitSuccess && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold block">Submission Received!</span>
                      <span>Your work has been queued for editorial review. Review timeline is 24 to 48 hours.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmitWork} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Select Assigned Task:
                    </label>
                    <select
                      value={selectedTaskToSubmit}
                      onChange={(e) => setSelectedTaskToSubmit(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    >
                      {mockAssignments.map((a) => (
                        <option key={a.id} value={a.id}>
                          {a.title.en} ({a.id})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Completed Word Count / Record Count:
                      </label>
                      <input
                        type="number"
                        value={submissionWords}
                        onChange={(e) => setSubmissionWords(e.target.value)}
                        placeholder="e.g. 820"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Attach File (Optional Doc / PDF / Sheet):
                      </label>
                      <input
                        type="file"
                        className="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Paste Written Content or Submission Notes:
                    </label>
                    <textarea
                      rows={6}
                      value={submissionContent}
                      onChange={(e) => setSubmissionContent(e.target.value)}
                      placeholder="Paste your completed article text or provide links to your Google Doc/Sheet here..."
                      required
                      className="w-full p-3.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 border border-slate-200">
                    <span className="font-semibold text-slate-700 block mb-0.5">Submission Reminder:</span>
                    Please ensure that the text is 100% human-composed without unauthorized copy-pasting. Our plagiarism system automatically reviews all submitted drafts.
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-slate-900 hover:bg-indigo-950 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition cursor-pointer flex items-center gap-2"
                  >
                    <UploadCloud className="w-4 h-4 text-indigo-300" />
                    <span>Submit for Quality Review</span>
                  </button>
                </form>
              </div>
            )}

            {/* VIEW 5: COURIER TRACKING IN DASHBOARD */}
            {activeTab === 'courier' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Your Dispatched Physical Kits</h2>
                  <p className="text-xs text-slate-500">
                    Track reference books, printed chapters, or inspection materials shipped to your Mumbai address.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-[11px] font-bold text-indigo-700 uppercase">
                        BlueDart Express • WNM-MUM-8921
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        Document Verification & Manuscript Specimen Kit
                      </h4>
                    </div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full self-start">
                      Out for Delivery
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Destination:</span>
                      <span className="font-medium text-slate-800">Andheri West, Mumbai (400058)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Expected Arrival:</span>
                      <span className="font-medium text-slate-800">Today by 4:30 PM</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Courier Executive:</span>
                      <span className="font-medium text-slate-800">Ramesh K. (BlueDart)</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <strong>Notice:</strong> Physical courier kits are only dispatched for specialized offline tasks. Most tasks on WorkNest are delivered 100% digitally through your browser.
                </div>
              </div>
            )}

            {/* VIEW 6: PAYMENT HISTORY */}
            {activeTab === 'payments' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Payment & Remuneration History</h2>
                    <p className="text-xs text-slate-500">
                      Record of all approved assignments and direct bank/UPI transfers.
                    </p>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-right">
                    <span className="text-[10px] uppercase font-bold text-emerald-700 block">Total Payout Received</span>
                    <span className="text-xl font-black text-emerald-800 font-mono">₹2,850</span>
                  </div>
                </div>

                {/* Table of Transactions */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider text-[10px]">
                        <th className="py-3 px-3">Date</th>
                        <th className="py-3 px-3">Assignment</th>
                        <th className="py-3 px-3">Reference / Method</th>
                        <th className="py-3 px-3">Amount</th>
                        <th className="py-3 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {samplePayoutRecords.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50">
                          <td className="py-3 px-3 text-slate-500 whitespace-nowrap">{item.date}</td>
                          <td className="py-3 px-3 font-medium text-slate-900 max-w-xs">{item.assignmentTitle}</td>
                          <td className="py-3 px-3 text-slate-500 font-mono text-[11px] whitespace-nowrap">
                            {item.referenceNo}<br />
                            <span className="text-slate-400 text-[10px]">{item.method}</span>
                          </td>
                          <td className="py-3 px-3 font-bold text-slate-900 font-mono text-sm">
                            ₹{item.amount}
                          </td>
                          <td className="py-3 px-3 whitespace-nowrap">
                            <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                              item.status === 'Completed'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-500 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">Direct Bank Account Linked:</span>
                  HDFC Bank (A/C: •••• 4492) • Primary UPI: <code className="font-mono text-indigo-700">meera.sharma@okaxis</code>.
                  Minimum withdrawal threshold: ₹300.
                </div>
              </div>
            )}

            {/* VIEW 7: MY PROFILE */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">My Contributor Profile</h2>
                  <p className="text-xs text-slate-500">Your verified credentials, contact details, and payout settings.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Full Name</span>
                    <span className="font-bold text-slate-900 text-sm">{user.name}</span>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Contributor ID</span>
                    <span className="font-mono font-bold text-indigo-700 text-sm">{user.id}</span>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Registered Mobile</span>
                    <span className="font-bold text-slate-900">{user.phone}</span>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Email Address</span>
                    <span className="font-bold text-slate-900">{user.email}</span>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">City & Region</span>
                    <span className="font-bold text-slate-900">{user.city}, Maharashtra</span>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Postal Area Pin</span>
                    <span className="font-bold text-slate-900">{user.pincode}</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Verified Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-800 rounded-lg text-xs font-medium border border-indigo-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Status */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-900">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <div>
                      <span className="font-bold block">Profile Status: Verified Freelancer</span>
                      <span>Identity and sample test verified by Mumbai Editorial Team on August 16, 2026.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 8: SUPPORT HELPDESK */}
            {activeTab === 'support' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Mumbai Desk Support & Help</h2>
                  <p className="text-xs text-slate-500">
                    Open an inquiry regarding assignment instructions, quality feedback, or payout disbursals.
                  </p>
                </div>

                {ticketSent && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Support ticket submitted! Ticket #TKT-8910 created. Response within 24 hours.</span>
                  </div>
                )}

                <form onSubmit={handleSupportTicket} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject:
                    </label>
                    <input
                      type="text"
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      placeholder="e.g. Question regarding WN-HIN-01 assignment formatting"
                      required
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Describe your query:
                    </label>
                    <textarea
                      rows={5}
                      value={ticketMessage}
                      onChange={(e) => setTicketMessage(e.target.value)}
                      placeholder="Please include assignment ID or transaction reference if applicable..."
                      required
                      className="w-full p-3.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-slate-900 hover:bg-indigo-950 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition cursor-pointer flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Help Ticket</span>
                  </button>
                </form>
              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  );
};
