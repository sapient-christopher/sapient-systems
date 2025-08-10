"use client"

import React, { useState, useEffect } from 'react';
import { Lock, FileText, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import { reports } from './data/reports';

const InvestorPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState<'investor' | 'team' | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const savedRole = sessionStorage.getItem('sapientUserRole');
    if (savedRole === 'investor' || savedRole === 'team') {
      setAuthenticated(true);
      setUserRole(savedRole as 'investor' | 'team');
    }
  }, []);

  const handleLogin = () => {
    if (password === 'sapient2025') {
      setAuthenticated(true);
      setUserRole('investor');
      sessionStorage.setItem('sapientUserRole', 'investor');
    } else if (password === 'wearesapient') {
      setAuthenticated(true);
      setUserRole('team');
      sessionStorage.setItem('sapientUserRole', 'team');
    } else {
      alert('Invalid password. Please contact christopher@sapient-systems.com for access.');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold">Investor Access</h1>
            </div>
            
            <p className="text-muted-foreground mb-6">
              This area is restricted to accredited investors and partners.
            </p>
            
            <input
              type="password"
              placeholder="Enter access code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
            />
            
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold text-white transition-all"
            >
              Access Investor Portal
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Sapient Systems - Investor Portal
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-4">
                {userRole === 'team' ? 'Team Access' : 'Investor Access'}
              </span>
              <button
                onClick={() => {
                  setAuthenticated(false);
                  setUserRole(null);
                  setPassword('');
                  sessionStorage.removeItem('sapientUserRole');
                }}
                className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {userRole === 'team' 
              ? 'Sapient Team Dashboard' 
              : 'Welcome to the Sapient Investor Portal'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {userRole === 'team'
              ? 'Access all reports, drafts, and internal analysis'
              : 'Access financial projections, market analysis, and strategic reports'}
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/investors/research" className="group">
            <div className="bg-muted/50 rounded-xl p-6 border border-border hover:border-blue-500 transition-all">
              <FileText className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Research & Reports</h3>
              <p className="text-muted-foreground">
                {userRole === 'team' 
                  ? 'All reports including drafts and internal documents'
                  : 'Financial projections, market analysis, and strategic insights'}
              </p>
              {userRole === 'team' && (
                <p className="text-sm text-yellow-500 mt-2">
                  Includes draft reports
                </p>
              )}
            </div>
          </Link>

          <div className="bg-muted/50 rounded-xl p-6 border border-border opacity-50">
            <TrendingUp className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Investment Terms</h3>
            <p className="text-muted-foreground">Coming soon</p>
          </div>

          <div className="bg-muted/50 rounded-xl p-6 border border-border opacity-50">
            <Users className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Team Updates</h3>
            <p className="text-muted-foreground">Coming soon</p>
          </div>
        </div>

        {/* Team-only quick stats */}
        {userRole === 'team' && (
          <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
            <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {reports.filter(r => !r.isDraft).length}
                </div>
                <div className="text-sm text-muted-foreground">Published Reports</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {reports.filter(r => r.isDraft).length}
                </div>
                <div className="text-sm text-muted-foreground">Draft Reports</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {reports.length}
                </div>
                <div className="text-sm text-muted-foreground">Total Reports</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">
                  January 2025
                </div>
                <div className="text-sm text-muted-foreground">Last Updated</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestorPage;