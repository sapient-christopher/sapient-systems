import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface ReportLayoutProps {
  title: string;
  subtitle?: string;
  date: string;
  readTime?: string;
  children: React.ReactNode;
}

export function ReportLayout({ title, subtitle, date, readTime, children }: ReportLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/investors/research" className="text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-xl text-muted-foreground mb-4">{subtitle}</p>}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            {readTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {readTime} read
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-20 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2025 Sapient Systems. Confidential and Proprietary.
        </div>
      </div>
    </div>
  );
}