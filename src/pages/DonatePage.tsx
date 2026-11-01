import React, { useState } from 'react';
import { DONATION_CAUSES, BANK_DETAILS, FOUNDATION_META } from '../data/foundationData';
import { Heart, Calculator, Building, CreditCard, ShieldCheck, CheckCircle2, Copy, Sparkles } from 'lucide-react';

interface DonatePageProps {
  openZakatModal: () => void;
  presetZakatAmount?: number;
}

export const DonatePage: React.FC<DonatePageProps> = ({ openZakatModal, presetZakatAmount }) => {
  const [selectedCauseId, setSelectedCauseId] = useState<string>('orphan-education');
  const [donationCategory, setDonationCategory] = useState<'sadaqah' | 'zakat' | 'general'>('zakat');
  const [customAmount, setCustomAmount] = useState<number>(presetZakatAmount || 15000);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form State
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'easypaisa' | 'card'>('bank');
  const [isPledged, setIsPledged] = useState(false);

  const selectedCause = DONATION_CAUSES.find((c) => c.id === selectedCauseId) || DONATION_CAUSES[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (donorName && donorEmail) {
      setIsPledged(true);
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC] pb-24 font-sans">
      
      {/* Header Banner */}
      <section className="relative bg-[#0D3B82] text-white py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1A4E9E] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-overlay"
          style={{ backgroundImage: "url('/assets/img_-022.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B82] via-[#0D3B82]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008CD3]/30 border border-[#008CD3]/50 text-amber-300 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-[#008CD3] fill-current" />
            <span>SUPPORT OUR MISSION • SADAQAH & ZAKAT</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight">
            Support Al-Ala Education Foundation
          </h1>
          <p className="text-stone-300 text-base max-w-3xl leading-relaxed">
            Your generous Zakat and Sadaqah directly funds orphan education, chemotherapy aid for cancer patients, Ramadan family rations, and emergency disaster relief.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Cause & Donation Configurator (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Zakat Calculator Callout Box */}
            <div className="p-5 bg-[#F4F7FA] rounded-2xl border border-[#E6EEF5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#008CD3] text-white shrink-0 mt-0.5">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[#0D3B82] text-base">
                    Calculating Your Zakat Obligation?
                  </h4>
                  <p className="text-xs text-stone-600">
                    Use our instant Zakat & Sadaqah calculator tool calibrated to Pakistani gold, silver, and cash Nisab rates.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={openZakatModal}
                className="bg-[#0D3B82] hover:bg-[#008CD3] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                Open Calculator
              </button>
            </div>

            {/* Step 1: Select Donation Category */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0D3B82] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#008CD3] text-white flex items-center justify-center font-mono text-[10px]">1</span>
                <span>Select Donation Intent:</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setDonationCategory('zakat')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    donationCategory === 'zakat'
                      ? 'bg-[#0D3B82] text-white border-[#0D3B82] shadow-md'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <div className="font-sans font-bold text-sm">Zakat</div>
                  <div className={`text-[11px] ${donationCategory === 'zakat' ? 'text-amber-300' : 'text-stone-500'}`}>
                    100% Eligible Causes
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDonationCategory('sadaqah')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    donationCategory === 'sadaqah'
                      ? 'bg-[#0D3B82] text-white border-[#0D3B82] shadow-md'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <div className="font-sans font-bold text-sm">Sadaqah Jariyah</div>
                  <div className={`text-[11px] ${donationCategory === 'sadaqah' ? 'text-amber-300' : 'text-stone-500'}`}>
                    Continuous Charity
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDonationCategory('general')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    donationCategory === 'general'
                      ? 'bg-[#0D3B82] text-white border-[#0D3B82] shadow-md'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <div className="font-sans font-bold text-sm">General Fund</div>
                  <div className={`text-[11px] ${donationCategory === 'general' ? 'text-amber-300' : 'text-stone-500'}`}>
                    School Infrastructure
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Choose Specific Welfare Cause */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0D3B82] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#008CD3] text-white flex items-center justify-center font-mono text-[10px]">2</span>
                <span>Choose Welfare Cause / Sponsorship:</span>
              </label>

              <div className="space-y-3">
                {DONATION_CAUSES.map((cause) => (
                  <div
                    key={cause.id}
                    onClick={() => {
                      setSelectedCauseId(cause.id);
                      setCustomAmount(cause.recommendedAmountPKR);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                      selectedCauseId === cause.id
                        ? 'bg-white border-[#008CD3] shadow-md ring-1 ring-[#008CD3]'
                        : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <img
                      src={cause.imageUrl}
                      alt={cause.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-sans font-bold text-sm text-[#0D3B82] truncate">
                          {cause.title}
                        </h4>
                        <span className="text-xs font-bold text-[#008CD3] shrink-0 ml-2">
                          PKR {cause.recommendedAmountPKR.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 line-clamp-2 mt-0.5">
                        {cause.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Amount Configurator */}
            <div className="p-6 bg-[#F4F7FA] rounded-2xl border border-[#E6EEF5] space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0D3B82] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#008CD3] text-white flex items-center justify-center font-mono text-[10px]">3</span>
                <span>Donation Amount in Pakistani Rupees (PKR):</span>
              </label>

              <div className="flex flex-wrap gap-2">
                {[5000, 10000, 15000, 25000, 50000, 100000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setCustomAmount(amt)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      customAmount === amt
                        ? 'bg-[#008CD3] text-white'
                        : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                    }`}
                  >
                    PKR {amt.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500 font-bold text-xs">
                  PKR
                </span>
                <input
                  type="number"
                  min="100"
                  value={customAmount || ''}
                  onChange={(e) => setCustomAmount(Number(e.target.value))}
                  placeholder="Enter custom amount"
                  className="w-full pl-14 pr-4 py-3 rounded-lg bg-white border border-stone-300 font-bold text-lg text-[#0D3B82] focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Bank Details & Pledge Form (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bank Transfer Details Box */}
            <div className="p-6 bg-[#0D3B82] text-white rounded-2xl shadow-xl space-y-4 border border-[#1A4E9E]">
              <div className="flex items-center gap-2 pb-3 border-b border-[#1A4E9E]">
                <Building className="w-5 h-5 text-[#008CD3]" />
                <h3 className="font-sans font-bold text-base text-white">
                  Direct Bank Transfer (Pakistan)
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                
                <div className="flex justify-between items-center p-2.5 rounded bg-[#1A4E9E]/70">
                  <div>
                    <span className="text-stone-400 block text-[10px]">BANK NAME</span>
                    <strong className="text-white text-sm">{BANK_DETAILS.bankName}</strong>
                  </div>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded bg-[#1A4E9E]/70">
                  <div>
                    <span className="text-stone-400 block text-[10px]">ACCOUNT TITLE</span>
                    <strong className="text-amber-300 text-sm">{BANK_DETAILS.accountTitle}</strong>
                  </div>
                  <button
                    onClick={() => handleCopy(BANK_DETAILS.accountTitle, 'title')}
                    className="p-1.5 text-stone-300 hover:text-white cursor-pointer"
                    title="Copy Title"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded bg-[#1A4E9E]/70">
                  <div>
                    <span className="text-stone-400 block text-[10px]">ACCOUNT NUMBER</span>
                    <strong className="text-white text-sm font-mono">{BANK_DETAILS.accountNumber}</strong>
                  </div>
                  <button
                    onClick={() => handleCopy(BANK_DETAILS.accountNumber, 'acc')}
                    className="p-1.5 text-stone-300 hover:text-white cursor-pointer"
                    title="Copy Account Number"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded bg-[#1A4E9E]/70">
                  <div>
                    <span className="text-stone-400 block text-[10px]">IBAN</span>
                    <strong className="text-white text-xs font-mono">{BANK_DETAILS.iban}</strong>
                  </div>
                  <button
                    onClick={() => handleCopy(BANK_DETAILS.iban, 'iban')}
                    className="p-1.5 text-stone-300 hover:text-white cursor-pointer"
                    title="Copy IBAN"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {copiedField && (
                  <div className="p-2 bg-emerald-900/80 text-emerald-200 text-[11px] rounded text-center animate-in fade-in">
                    ✓ Copied {copiedField} to clipboard!
                  </div>
                )}

              </div>

              <div className="pt-2 text-[11px] text-stone-300 space-y-1">
                <div>Mobile Wallet Options:</div>
                <div className="flex items-center justify-between font-mono bg-[#1A4E9E] p-2 rounded">
                  <span>EasyPaisa / JazzCash:</span>
                  <strong className="text-amber-300">{BANK_DETAILS.easypaisa}</strong>
                </div>
              </div>
            </div>

            {/* Donation Pledge Form */}
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-stone-200 space-y-4">
              <h3 className="font-sans font-bold text-base text-[#0D3B82] border-b border-stone-200 pb-2">
                Pledge / Donation Notification
              </h3>

              {isPledged ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-sans font-bold text-base text-emerald-900">
                    JazakAllah Khair, {donorName}!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed font-sans">
                    Your pledge of <strong className="font-bold">PKR {customAmount.toLocaleString()}</strong> for <strong className="font-bold">{selectedCause.title}</strong> ({donationCategory.toUpperCase()}) has been logged.
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    Our team will email bank confirmation instructions to <strong>{donorEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setIsPledged(false)}
                    className="text-xs font-bold text-[#008CD3] underline cursor-pointer pt-2"
                  >
                    Submit Another Pledge
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePledgeSubmit} className="space-y-3">
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0D3B82]">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mahmood"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0D3B82]">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="tariq@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0D3B82]">WhatsApp / Phone (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-sm py-3.5 rounded-lg shadow transition-colors cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <Heart className="w-4 h-4 fill-white/20" />
                    <span>Confirm Pledge (PKR {customAmount.toLocaleString()})</span>
                  </button>

                  <div className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Official Tax Exempt Trust Reg. No. 1999/LHR</span>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
