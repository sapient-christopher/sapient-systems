"use client"

import React from 'react';
import { ReportLayout } from '../components/ReportLayout';
import { Clock } from 'lucide-react';

interface ReportPlaceholderProps {
  title: string;
  subtitle?: string;
  description: string;
}

export default function ReportPlaceholder({ title, subtitle, description }: ReportPlaceholderProps) {
  return (
    <ReportLayout
      title={title}
      subtitle={subtitle || description}
      date="Coming Soon"
      readTime="TBD"
    >
      <section className="mb-12">
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-8">
          <div className="flex flex-col items-center text-center">
            <Clock className="w-12 h-12 text-orange-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Report in Development</h2>
            <p className="text-muted-foreground max-w-2xl mb-6">
              {description}
            </p>
            <p className="text-sm text-muted-foreground">
              This report is currently being prepared by our team and will be available soon. 
              Check back later for the complete analysis.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-orange-500">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Draft in Progress
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center text-muted-foreground">
          <p>For questions about this report, please contact the Sapient team.</p>
        </div>
      </section>
    </ReportLayout>
  );
}