"use client"

import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { reports } from '../data/reports';

export default function ResearchPage() {
  const [userRole, setUserRole] = useState<'investor' | 'team' | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    // Check if user is authenticated
    const savedRole = sessionStorage.getItem('sapientUserRole');
    if (savedRole === 'investor' || savedRole === 'team') {
      setUserRole(savedRole as 'investor' | 'team');
      setLoading(false);
    } else {
      // Redirect to login if not authenticated
      router.push('/investors');
    }
  }, [router]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }
  
  // Filter reports based on user role
  const visibleReports = userRole === 'team' 
    ? reports // Team sees all reports
    : reports.filter(report => !report.isDraft); // Investors only see published
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/investors" className="text-muted-foreground hover:text-foreground mb-4 inline-block">
                ← Back to Portal
              </Link>
              <h1 className="text-3xl font-bold">Research & Reports</h1>
            </div>
            <button
              onClick={() => {
                sessionStorage.removeItem('sapientUserRole');
                router.push('/investors');
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Report Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {userRole === 'team' && (
          <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-yellow-500" />
              <p className="text-sm">
                <strong>Team View:</strong> You&apos;re seeing all reports including drafts. 
                Investors only see published reports.
              </p>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReports.map((report) => {
            const Icon = report.icon;
            return (
              <Link key={report.slug} href={`/investors/research/${report.slug}`}>
                <div className="bg-muted/50 rounded-xl p-6 border border-border hover:border-blue-500 transition-all cursor-pointer group relative">
                  {/* Draft Badge */}
                  {report.isDraft && userRole === 'team' && (
                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      DRAFT
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`w-8 h-8 text-${report.color}-500`} />
                    <span className="text-sm text-muted-foreground">{report.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{report.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                  <span className={`inline-block px-3 py-1 text-xs rounded-full bg-${report.color}-500/20 text-${report.color}-400`}>
                    {report.category}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        
        {visibleReports.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No published reports available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}