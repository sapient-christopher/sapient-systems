"use client"
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Lock, TrendingUp, Users, Shield, Calendar, Mail, Download, ChevronRight, Target, Zap, Award, Globe } from 'lucide-react';

const InvestorPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Market growth data
  const marketData = [
    { year: '2023', value: 1.2 },
    { year: '2024', value: 1.8 },
    { year: '2025', value: 2.7 },
    { year: '2026', value: 4.1 },
    { year: '2027', value: 6.2 },
    { year: '2028', value: 9.3 }
  ];

  // Revenue projection data
  const revenueData = [
    { month: 'Launch', users: 100, revenue: 5 },
    { month: 'M+3', users: 500, revenue: 25 },
    { month: 'M+6', users: 1500, revenue: 75 },
    { month: 'M+9', users: 3000, revenue: 150 },
    { month: 'M+12', users: 5000, revenue: 250 }
  ];

  const handleLogin = () => {
    // Simple password check - in production, this would be server-side
    if (password === 'sapient2025') {
      setAuthenticated(true);
    } else {
      alert('Invalid password. Please contact christopher@sapient-systems.com for access.');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold">Investor Access</h1>
            </div>
            
            <p className="text-gray-400 mb-6">
              This area is restricted to accredited investors and partners. Please enter your access code to continue.
            </p>
            
            <div>
              <input
                type="password"
                placeholder="Enter access code"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              />
              
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Access Investor Portal
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6 text-center">
              Need access? Contact{' '}
              <a href="mailto:christopher@sapient-systems.com" className="text-blue-400 hover:text-blue-300">
                christopher@sapient-systems.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <nav className="bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Sapient Systems - Investor Portal
          </h1>
          <button
            onClick={() => setAuthenticated(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Sign Out
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                The Future of Trading Performance
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sapient Trading Journal is positioned to capture the massive shift towards AI-enhanced trading tools
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-blue-400">$5.2B</div>
              <p className="text-gray-400 mt-2">Trading Software TAM</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-cyan-400">15M+</div>
              <p className="text-gray-400 mt-2">Active Retail Traders (US)</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-purple-400">$50-200</div>
              <p className="text-gray-400 mt-2">Monthly Price Point</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-green-400">67%</div>
              <p className="text-gray-400 mt-2">Want AI Trading Tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Investment Opportunity</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">The Problem</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>90% of day traders fail due to poor emotional control and lack of systematic improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Current trading journals are complex, time-consuming, and provide no actionable insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Traders want AI analysis but their data isn't structured for it</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4 text-purple-400 mt-8">Our Solution</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>First trading journal built specifically for AI analysis from day one</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Seamless workflow that doesn't interrupt trading</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Complete performance picture: trades + emotions + health</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Patent-pending approach (filed July 2025)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Market Growth Projection</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                    labelStyle={{ color: '#D1D5DB' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-gray-400 mt-2">AI Trading Tools Market Size ($B)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Competitive Advantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <Target className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">First Mover Advantage</h3>
              <p className="text-gray-400">First trading journal built specifically for AI integration. Competitors would need to rebuild from scratch.</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <Shield className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">IP Protection</h3>
              <p className="text-gray-400">Patent pending on our unique approach to behavioral data capture and AI-ready structuring.</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <Award className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Trader-Built Authenticity</h3>
              <p className="text-gray-400">Created by an active trader who uses it daily. Deep understanding of real trader needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Revenue Model & Projections</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">SaaS Subscription Model</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Starter Plan</span>
                    <span className="text-cyan-400">$49/month</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Core features, 1 account</p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Professional</span>
                    <span className="text-purple-400">$99/month</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Advanced AI features, multiple accounts</p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Team/Prop Firm</span>
                    <span className="text-green-400">$199+/month</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Team features, compliance tools</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-sm">
                  <strong>Target:</strong> 5,000 paying users by Month 12<br />
                  <strong>ARR Goal:</strong> $3M+ within first year<br />
                  <strong>LTV:CAC:</strong> 3:1 projected
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">User Growth Projection</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                    labelStyle={{ color: '#D1D5DB' }}
                  />
                  <Bar dataKey="users" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-gray-400 mt-2">Projected User Growth (First Year)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Product Roadmap</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-sm text-gray-500">Q3 2025</div>
              </div>
              <div className="flex-grow bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-2 text-blue-400">Beta Launch</h3>
                <p className="text-gray-400">Core functionality complete, beta testing with 100 traders</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-sm text-gray-500">Q4 2025</div>
              </div>
              <div className="flex-grow bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">Public Launch</h3>
                <p className="text-gray-400">SaaS platform live, marketing campaign, first 1000 users</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-sm text-gray-500">Q1 2026</div>
              </div>
              <div className="flex-grow bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-2 text-purple-400">AI Enhancement</h3>
                <p className="text-gray-400">Advanced pattern recognition, automated coaching, predictive analytics</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-sm text-gray-500">Q2 2026</div>
              </div>
              <div className="flex-grow bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-2 text-green-400">Enterprise Features</h3>
                <p className="text-gray-400">Team collaboration, prop firm tools, compliance features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Team</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 max-w-2xl">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                CM
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Christopher Mayer (Campbell)</h3>
                <p className="text-cyan-400 mb-4">Founder & CEO</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Active day trader with 5+ years experience</li>
                  <li>• Software engineering background</li>
                  <li>• Deep understanding of trader psychology and needs</li>
                  <li>• Using Sapient Trading Journal daily in own trading</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 max-w-2xl">
            <h3 className="text-xl font-bold mb-2">Looking For</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Strategic investors with fintech/trading industry experience</li>
              <li>• Advisors with SaaS scaling expertise</li>
              <li>• Potential partnerships with trading education platforms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Discuss the Opportunity</h2>
          <p className="text-xl text-gray-400 mb-8">
            I'd love to show you a live demo and discuss how Sapient can transform trading performance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:christopher@sapient-systems.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Schedule a Demo
            </a>
            
            <button className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Pitch Deck
            </button>
          </div>
          
          <div className="mt-12 text-gray-500">
            <p>Christopher Mayer • christopher@sapient-systems.com • Discord: @campbell2165</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorPage;