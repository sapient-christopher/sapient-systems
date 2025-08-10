"use client"
/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase'
// Add these imports to your existing imports in app/page.tsx
import { 
  X, 
  Menu, 
  Shield, 
  Clock, 
  Brain, 
  Heart, 
  ArrowRight, 
  Check, 
  Zap, 
  FileText, 
  Sparkles, 
  Lock, 
  TrendingUp, 
  Users 
} from 'lucide-react';
const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);
      
      if (error) throw error;
      
      setSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error('Waitlist error:', err);  // Add this line to use 'err'
      alert('Error joining waitlist. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Auto-rotate workflow steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWorkflowStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const workflowSteps = [
    {
      title: "Pre-Market Prep",
      color: "from-blue-500 to-blue-600",
      description: "Customizable checklists, health metrics, economic calendar",
      detail: "Everything to prepare for success"
    },
    {
      title: "Live Trading",
      color: "from-cyan-500 to-cyan-600",
      description: "Minimal interface, quick notes, emotional tracking",
      detail: "Capture what matters without leaving your charts"
    },
    {
      title: "Post-Session Review",
      color: "from-purple-500 to-purple-600",
      description: "Smart trade matching, customizable prompts, One-click AI export",
      detail: "Turn experience into improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-950/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Sapient Systems
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#workflow" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#ai-export" className="text-gray-300 hover:text-white transition-colors">AI Integration</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-lg transition-all transform hover:scale-105">
                Coming Soon
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">Features</a>
              <a href="#workflow" className="block px-3 py-2 text-gray-300 hover:text-white">How It Works</a>
              <a href="#ai-export" className="block px-3 py-2 text-gray-300 hover:text-white">AI Integration</a>
              <button className="w-full text-left px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                Coming Soon
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Patent Pending • July 2025
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Sapient Trading Journal
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-200">
              The First AI-Focused Trading Journal
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Transform your trading data into actual results. Built and used by traders who are serious about systematic improvement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {!submitted ? (
                <>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                    required
                  />
                  <button onClick={handleWaitlist} disabled={loading || !email} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                    {loading ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </>
              ) : (
                <p className="text-green-400 text-lg">✅ You're on the list! We'll be in touch soon.</p>
              )}
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">100%</div>
              <p className="text-gray-400 mt-2">Complete performance data including emotions & health</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">1-Click</div>
              <p className="text-gray-400 mt-2">AI export with structured markdown & embedded charts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zero</div>
              <p className="text-gray-400 mt-2">Servers or installations - runs 100% locally & privately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Current Trading Journals Are Data Graveyards
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            They collect endless data but provide zero actionable insights
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all">
              <Clock className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Too Complex & Time-Consuming</h3>
              <p className="text-gray-400">Existing solutions interrupt your trading flow with cumbersome interfaces and endless forms that take forever to fill out</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all">
              <Brain className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Limited AI Integration</h3>
              <p className="text-gray-400">Your data either sits completely idle or is restricted to limited AI analysis capabilities</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all">
              <Heart className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Missing Psychology</h3>
              <p className="text-gray-400">They track trades but completely ignore the emotional and physical factors that impact performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Built for How Day Traders 
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> Actually Work</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            A seamless three-phase system that fits your natural trading flow
          </p>

          {/* Workflow Visual */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={() => setActiveWorkflowStep(index)}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all transform ${
                    activeWorkflowStep === index 
                      ? 'scale-110 shadow-2xl' 
                      : 'scale-100 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-xl`} />
                  <span className="relative text-white">{step.title}</span>
                </button>
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="hidden md:block w-8 h-8 text-gray-600" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Workflow Details */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${workflowSteps[activeWorkflowStep].color} bg-clip-text text-transparent`}>
                {workflowSteps[activeWorkflowStep].title}
              </h3>
              <p className="text-lg text-gray-300 mb-2">{workflowSteps[activeWorkflowStep].description}</p>
              <p className="text-gray-400 italic">{workflowSteps[activeWorkflowStep].detail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            The Complete 
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> Performance Picture</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Track Your Emotional Journey</h3>
              <p className="text-gray-400 mb-6">
                Finally understand the psychology behind your P&L. Sapient Trading Journal captures your complete emotional arc throughout each trading session.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Pre-trade emotional state with timestamp tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Unlimited during-trade observations and notes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Post-trade reflection with structured lessons learned</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">AI correlates emotions with performance patterns</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-sm text-gray-400">09:30 AM</span>
                  <span className="text-green-400">Confident, Well-rested</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="text-sm text-gray-400">10:15 AM</span>
                  <span className="text-yellow-400">Anxious, Second-guessing</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="text-sm text-gray-400">11:00 AM</span>
                  <span className="text-red-400">Frustrated, Revenge trading</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <span className="text-sm text-gray-400">02:30 PM</span>
                  <span className="text-blue-400">Calm, Following plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Export Section */}
      <section id="ai-export" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            From Journal to 
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"> AI Insights </span>
            in Seconds
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Your data is perfectly structured for AI analysis from day one
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all">
              <Zap className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">One-Click Export</h3>
              <p className="text-gray-400">Structured markdown with embedded images, perfectly formatted for Claude, ChatGPT, or any AI assistant</p>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all">
              <FileText className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Custom Prompts</h3>
              <p className="text-gray-400">Tailor your AI analysis with customizable questions focused on your specific improvement areas</p>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-pink-500/50 transition-all">
              <Sparkles className="w-12 h-12 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Pattern Discovery</h3>
              <p className="text-gray-400">Uncover hidden correlations between emotions, health metrics, and trading performance</p>
            </div>
          </div>

          {/* AI Export Example */}
          <div className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold mb-4">Excerpts from AI-Ready Export</h3>
            <pre className="text-sm text-gray-400 overflow-x-auto">
              <code>{`# Trading Analysis - 2025-07-29

## Pre-Trading Information
### Personal Preparation & Context:
- Pre-Trading Feelings: I feel good. Slept well. Seeing things pretty clearly even though I haven't meditated.
- Recovery Score: 58%
- Sleep Score: 83%

### Pre-Market Analysis:
#### General Commentary: 
I might anticipate more bear action early and then see what happens.

...

## Live Trading Data
### Economic Releases
- 08:30 ET - Goods Trade Balance (Expected: -$98.4B) → Actual: -$85.99B 
- 10:00 ET - JOLTs Job Openings (Expected: 7.55M) → Actual: 7.437M

### Mid-Trading Observations:
- [09:30 ET] Trade: Couple of pre-equity open trades presented that I was not read for
- [09:36 ET] Market: MNQ Pops early after the equity open.

### Trades Executed:

#### Trade 1 - Jul 29 10:04 AM
##### Execution Details
- Symbol: MNQ
- Direction: Short
- Contracts: 5
...

##### Commentary
###### Pre-Trade
- Pre-Entry Emotion: C risk, against M05 LQ, but confident in higher timeframe read.

###### During Trade
- [10:23:33 AM ET] Idea is holding on but price is failing to continue lower.
- [10:26:21 AM ET] I move my stop loss a little when the price breaks lower.

###### Reflections
- Lessons: Good trade. Better entry was the sweep of internal highs.

## Post-Trading Summary
- Good trading. Curious to see how AI helps me find lessons!`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Built with 
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Trust & Privacy </span>
            in Mind
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">100% Local</h3>
              <p className="text-gray-400">Your data never leaves your device. Complete privacy guaranteed.</p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Patent Pending</h3>
              <p className="text-gray-400">Innovative approach protected by provisional patent filed July 2025</p>
            </div>

            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Trader-Built</h3>
              <p className="text-gray-400">Created by active day traders who uses the tool daily</p>
            </div>

            <div className="text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Community-Driven</h3>
              <p className="text-gray-400">Built with feedback from professional traders</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the waitlist to be among the first to experience the future of trading journals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!submitted ? (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
                <button onClick={handleWaitlist} disabled={loading || !email} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </>
            ) : (
              <p className="text-green-400 text-lg">✅ You're on the list! We'll be in touch soon.</p>
            )}
          </div>
          
          <p className="text-gray-500 mt-8">
            Coming soon • Become Sapient
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Sapient Systems
              </h3>
              {/* <p className="text-gray-500 mt-1">Transforming data into trading success</p> */}
            </div>
            
            <div className="flex gap-6 text-sm text-gray-500">
              <h3 className="text-l font-bold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
                Transforming data into trading success
              </h3>
              {/* <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
              <a href="/investors" className="hover:text-gray-300 transition-colors">Investors</a> */}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 Sapient Systems. All rights reserved. Patent Pending.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;