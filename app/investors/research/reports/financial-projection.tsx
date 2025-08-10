"use client"

import React from 'react';
import { ReportLayout } from '../../components/ReportLayout';
import { DataTable } from '../../components/DataTable';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function FinancialProjection() {
  return (
    <ReportLayout
      title="5-Year SaaS Financial Projection"
      subtitle="Optimized 20% Conversion Model"
      date="January 2025"
      readTime="8 min"
    >
      {/* Executive Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6">
          <p className="text-lg mb-4">
            Our optimized model projects <strong>breakeven in Month 14</strong> with only ~$190K required capital, 
            compared to Month 34 and $383K in the base case scenario.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">$5.9M</div>
              <div className="text-sm text-muted-foreground">Year 5 Cumulative Profit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">20%</div>
              <div className="text-sm text-muted-foreground">Target Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">Month 14</div>
              <div className="text-sm text-muted-foreground">Breakeven Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why 20% Conversion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why 20% Conversion Rate is Realistic</h2>
        <p className="mb-6">
          Unlike typical SaaS freemium models, our free tier is designed as an extended trial 
          with severe limitations that serious traders will quickly outgrow:
        </p>
        
        <div className="space-y-3 mb-6">
          {[
            'Strategy Limitations: Free users get only 1 strategy/playbook (vs unlimited)',
            'Account Restrictions: Single trading account only - most active traders have multiple',
            'No Missed Trades Tracking: Critical for improvement - traders NEED to analyze what they didn\'t take',
            'Minimal Customization: Limited health metrics, pre-trading routines',
            'No Cloud Backup: Traders won\'t risk losing their journal data',
            'No AI Analysis: The killer feature reserved for Ultra tier',
            'Basic Analytics Only: Advanced statistics and reports require Premium+'
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <p className="text-sm">
            <strong>Market Validation:</strong> TradeZella achieved 20K+ users with NO free tier, 
            proving traders will pay for quality tools. Our generous &ldquo;free trial&rdquo; approach should 
            convert at least 20% of users who are serious enough to download and try the software.
          </p>
        </div>
      </section>

      {/* User Growth & Revenue Projections */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">User Growth & Revenue Projections</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Key Metrics Timeline</h3>
          <DataTable
            headers={['Period', 'Total Users', 'Conversion', 'Premium Users', 'Ultra Users', 'MRR']}
            rows={[
              ['Beta (Mo 1-6)', '500', '0%', '0', '0', '$0'],
              ['Launch (Mo 7-12)', '2,000', '20%', '320', '80', <span key="mrr1" className="text-green-400">$6,200</span>],
              ['Growth (Mo 13-24)', '10,000', '20%', '1,600', '400', <span key="mrr2" className="text-green-400">$62,000</span>],
              ['Scale (Year 3)', '30,000', '20%', '4,800', '1,200', <span key="mrr3" className="text-green-400">$186,000</span>],
              ['Mature (Year 5)', '75,000', '20%', '12,000', '3,000', <span key="mrr4" className="text-green-400">$465,000</span>],
            ]}
          />
        </div>

        <div className="bg-muted/50 rounded-lg p-4 mb-6">
          <p className="text-sm">
            <strong>Launch Pricing Strategy:</strong> 50% discount months 7-9 ($12.50/$27.50), 
            25% discount months 10-12 ($18.75/$41.25), then full pricing ($24.99/$54.99)
          </p>
        </div>
      </section>

      {/* Financial Projections Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Financial Performance vs Base Case</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-red-400">Base Case (4-6% Conversion)</h3>
            <ul className="space-y-2 text-sm">
              <li>Breakeven: Month 34</li>
              <li>Capital Required: $383K</li>
              <li>Year 5 MRR: $135K</li>
              <li>Cash Positive: Year 3</li>
            </ul>
          </div>
          
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-green-400">Optimized (20% Conversion)</h3>
            <ul className="space-y-2 text-sm">
              <li>Breakeven: <strong>Month 14</strong></li>
              <li>Capital Required: <strong>$190K</strong></li>
              <li>Year 5 MRR: <strong>$465K</strong></li>
              <li>Cash Positive: <strong>Year 2</strong></li>
            </ul>
          </div>
        </div>

        <DataTable
          headers={['Metric', 'Base Case', 'Optimized', 'Improvement']}
          rows={[
            ['Time to Breakeven', '34 months', '14 months', <span key="imp1" className="text-green-400">20 months faster</span>],
            ['Capital Required', '$383,000', '$190,000', <span key="imp2" className="text-green-400">50% less</span>],
            ['Month 12 Revenue', '$1,240', '$6,200', <span key="imp3" className="text-green-400">5x</span>],
            ['Year 3 Revenue', '$51,000', '$186,000', <span key="imp4" className="text-green-400">3.6x</span>],
            ['Year 5 Revenue', '$135,000', '$465,000', <span key="imp5" className="text-green-400">3.4x</span>],
            ['Year 5 Profit', '$1.7M', '$5.9M', <span key="imp6" className="text-green-400">3.5x</span>],
          ]}
        />
      </section>

      {/* Cost Structure Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Cost Structure Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2 text-blue-400">Personnel Costs</h3>
            <p className="text-2xl font-bold">$13K → $119K</p>
            <p className="text-xs text-muted-foreground">Monthly (Y1 → Y5)</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2 text-purple-400">Marketing Spend</h3>
            <p className="text-2xl font-bold">$400 → $68K</p>
            <p className="text-xs text-muted-foreground">Monthly (Y1 → Y5)</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2 text-green-400">Infrastructure</h3>
            <p className="text-2xl font-bold">$1K → $41K</p>
            <p className="text-xs text-muted-foreground">Monthly (Y1 → Y5)</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Detailed cost breakdown includes founder salaries, marketing team, support staff, 
          developers, sales team, advertising, infrastructure, and payment processing (4% of revenue).
        </p>
      </section>

      {/* Critical Success Factors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Critical Success Factors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Feature Gates Must Be Strategic",
              description: "The 20% conversion depends on free tier being genuinely limiting for serious traders"
            },
            {
              title: "Onboarding Excellence",
              description: "Must quickly demonstrate value and hit limitation points"
            },
            {
              title: "Premium Features Must Deliver",
              description: "Cloud backup, multi-account, AI analysis need to be killer features"
            },
            {
              title: "Support Quality",
              description: "With 20% paying users, support quality becomes critical for retention"
            }
          ].map((factor, i) => (
            <div key={i} className="bg-muted/50 rounded-lg p-4 border border-border">
              <h3 className="font-semibold mb-2">{factor.title}</h3>
              <p className="text-sm text-muted-foreground">{factor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Risk Mitigation</h2>
        
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Conversion Rate Sensitivity</h3>
              <div className="space-y-2 text-sm">
                <p>• If conversion is only 15%: Still breakeven by month 18</p>
                <p>• If conversion is only 10%: Breakeven by month 24 (still better than base case)</p>
                <p>• Can always adjust feature gates based on early data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Investment Highlights</h2>
        
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-3">Key Advantages</h3>
              <ul className="space-y-2 text-sm">
                <li>• 50% less capital required to reach profitability</li>
                <li>• Profitable in Year 2 instead of Year 3</li>
                <li>• $5.9M cumulative profit by Year 5</li>
                <li>• Strong unit economics from day one</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Market Position</h3>
              <ul className="space-y-2 text-sm">
                <li>• Proven market demand (TradeZella validation)</li>
                <li>• Clear monetization strategy</li>
                <li>• Scalable SaaS model</li>
                <li>• AI-driven competitive advantage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ReportLayout>
  );
}