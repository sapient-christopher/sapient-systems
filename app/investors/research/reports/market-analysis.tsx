"use client"

import React from 'react';
import { ReportLayout } from '../../components/ReportLayout';
import { AlertCircle } from 'lucide-react';

export default function MarketAnalysis() {
  return (
    <ReportLayout
      title="Prop Trading Market Analysis"
      subtitle="Market Size and Growth Opportunities"
      date="January 2025"
      readTime="10 min"
    >
      {/* Draft Notice */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-8 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-yellow-500 mb-1">Draft Report</h3>
          <p className="text-sm text-muted-foreground">
            This report is still being finalized and is not yet available to investors.
          </p>
        </div>
      </div>

      {/* Placeholder Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
        <p className="mb-4">
          This report analyzes the prop trading market opportunity, including market size, 
          growth trends, and key player analysis.
        </p>
        
        <div className="bg-muted/50 rounded-lg p-6 border border-border">
          <p className="text-center text-muted-foreground">
            [Report content will be added here]
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
        <p className="text-muted-foreground">
          Content coming soon...
        </p>
      </section>
    </ReportLayout>
  );
}