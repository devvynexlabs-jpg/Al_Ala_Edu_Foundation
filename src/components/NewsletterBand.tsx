import React, { useState } from 'react';
import { PageView } from '../types';
import { Mail, Heart, CheckCircle } from 'lucide-react';

interface NewsletterBandProps {
  setCurrentView: (view: PageView) => void;
}

export const NewsletterBand: React.FC<NewsletterBandProps> = ({ setCurrentView }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-[#008CD3] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-200">
              STAY CONNECTED WITH AL-ALA FOUNDATION
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold leading-tight">
              Join us in empowering communities — sign up for updates.
            </h2>
            <p className="text-amber-100 text-sm max-w-xl font-sans">
              Receive quarterly welfare progress reports, stories of student impact, and invitations to our community bake sales and health camps.
            </p>
          </div>

          {/* Right Input Form or Thank You */}
          <div className="lg:col-span-5">
            {isSubmitted ? (
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-2 animate-in fade-in">
                <CheckCircle className="w-8 h-8 text-amber-300 mx-auto" />
                <h4 className="font-sans font-bold text-base">JazakAllah Khair!</h4>
                <p className="text-xs text-amber-100">
                  You have been subscribed to Al-Ala Education Foundation quarterly newsletter updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-lg bg-white text-[#0D3B82] placeholder:text-stone-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0D3B82] hover:bg-[#1A4E9E] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-amber-100 pt-1">
                  <span>Zero spam • Unsubscribe anytime</span>
                  <button
                    type="button"
                    onClick={() => setCurrentView('donate')}
                    className="underline hover:text-white font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Heart className="w-3 h-3 fill-amber-300 text-amber-300" />
                    <span>Or Make a Donation Directly</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
