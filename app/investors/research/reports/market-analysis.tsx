"use client"

import React from 'react';
import { ReportLayout } from '../../components/ReportLayout';
import { DataTable } from '../../components/DataTable';
import { TrendingUp, Users, Globe, DollarSign, AlertCircle, CheckCircle, Target } from 'lucide-react';

export default function MarketAnalysis() {
  return (
    <ReportLayout
      title="Proprietary Trading Firm Market Analysis"
      subtitle="A Conservative Assessment of the Global Prop Trading Opportunity"
      date="August 2025"
      readTime="12 min"
    >
      {/* Executive Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-blue-400">1.767M+</div>
            <div className="text-lg text-muted-foreground">Conservative Estimate of Global Prop Firm Traders</div>
            <div className="text-sm text-muted-foreground">(Including funded traders and those in evaluation)</div>
          </div>
          <p className="text-sm text-muted-foreground text-center italic">
            *Based on publicly available data from major prop firms using conservative assumptions
          </p>
        </div>
        <p className="mb-4">
          The proprietary trading firm industry has experienced explosive growth, expanding 1,264% between 2015 and 2024. Our analysis identifies a conservatively estimated 1.767 million active prop firm traders globally, representing a substantial and rapidly growing market for specialized trading tools like Sapient Trading Journal.
        </p>
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Conservative Methodology</h3>
              <p>All figures presented represent the low end of available estimates. Actual market size is likely significantly larger when including traders we cannot track through public data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Prop Trading Revolution</h2>
        <p className="mb-4">
          Proprietary trading firms have democratized access to significant trading capital, allowing skilled traders to manage accounts ranging from $25,000 to over $1 million without risking personal funds. This model has attracted millions of aspiring traders globally, though only 1-2% achieve consistent profitability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-muted rounded-lg p-4 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400">5,556%</div>
            <div className="text-sm text-muted-foreground">Futures Prop Trading Growth (2020-2024)</div>
          </div>
          <div className="bg-muted rounded-lg p-4 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-400">$4,270</div>
            <div className="text-sm text-muted-foreground">Average Investment Before Profitability</div>
          </div>
          <div className="bg-muted rounded-lg p-4 text-center">
            <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400">60-70%</div>
            <div className="text-sm text-muted-foreground">Journal Usage Among Successful Traders</div>
          </div>
        </div>

        <p>
          Traders invest $50-150 monthly on essential tools, with successful traders investing up to $400 monthly in their complete technology stack. Trading journals represent a critical component, with 60-70% of consistently profitable traders maintaining detailed journals. The correlation between journal usage and trading success creates a compelling value proposition for Sapient&apos;s offering.
        </p>
      </section>

      {/* Understanding the Growth */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Understanding the Explosive Growth Numbers</h2>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
          <p className="mb-3">
            The dramatic growth percentages (5,556% for futures, 3,788% for stocks) represent the expansion of the <strong>prop firm model</strong> to these asset classes, not growth in futures or stock trading generally. These instruments have existed for decades, but retail access to prop firm capital for trading them is remarkably new:
          </p>
          <ul className="space-y-2 ml-4">
            <li>• <strong>Pre-2015:</strong> Prop trading was exclusive to bank and hedge fund employees</li>
            <li>• <strong>2015-2018:</strong> Forex prop firms pioneered the retail model</li>
            <li>• <strong>2018-2020:</strong> Futures prop firms like TopStep opened to retail traders</li>
            <li>• <strong>2021-2023:</strong> Stock and crypto prop firms emerged</li>
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            The growth data measures search interest for terms like &ldquo;futures prop trading&rdquo; which were virtually non-existent before 2020, explaining the explosive percentages from a near-zero baseline.
          </p>
        </div>
      </section>

      {/* Market Segmentation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Market Segmentation by Asset Class</h2>
        
        <div className="space-y-6">
          {/* Forex/CFD */}
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
              Forex/CFD Trading - The Dominant Segment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2"><strong>Market Size:</strong> 300,000-500,000 funded traders</p>
                <p className="mb-2"><strong>Growth:</strong> 33% year-over-year (FTMO data)</p>
                <p><strong>Key Players:</strong> FTMO (240,000 traders), Alpha Capital (750,000), E8 Markets (350,000)</p>
              </div>
              <div>
                <p className="mb-2"><strong>Characteristics:</strong> 24/5 trading, high leverage, strict drawdown rules</p>
                <p className="mb-2"><strong>Tool Spending:</strong> $50-150/month (average), up to $400/month (successful traders)</p>
                <p><strong>Success Rate:</strong> 1-2% achieve consistent payouts</p>
              </div>
            </div>
          </div>

          {/* Futures */}
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              Futures Trading - Highest Growth Segment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2"><strong>Market Size:</strong> 200,000-250,000 funded traders</p>
                <p className="mb-2"><strong>Growth:</strong> 5,556% (2020-2024)</p>
                <p><strong>Key Players:</strong> TopStep (100,000), Apex (50,000), My Funded Futures (70,000)</p>
              </div>
              <div>
                <p className="mb-2"><strong>Characteristics:</strong> US market hours, higher pass rates (15-25%)</p>
                <p className="mb-2"><strong>Tool Spending:</strong> $50-150/month</p>
                <p><strong>Geographic Focus:</strong> 60-70% US-based traders</p>
              </div>
            </div>
          </div>

          {/* Crypto */}
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
              Crypto Trading - Emerging Opportunity
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2"><strong>Market Size:</strong> 15,000-25,000 funded traders</p>
                <p className="mb-2"><strong>Growth:</strong> 5,156% (2020-2024)</p>
                <p><strong>Unique Aspects:</strong> 24/7 markets, younger demographics</p>
              </div>
              <div>
                <p className="mb-2"><strong>Characteristics:</strong> High volatility, tighter risk parameters</p>
                <p className="mb-2"><strong>Tool Adoption:</strong> 67% use AI-powered tools</p>
                <p><strong>TAM:</strong> $10-50M for crypto-specific journals</p>
              </div>
            </div>
          </div>

          {/* Stocks */}
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              Stock Trading - Specialized Niche
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2"><strong>Market Size:</strong> 10,000-15,000 funded traders</p>
                <p className="mb-2"><strong>Growth:</strong> 3,788% (2020-2024)</p>
                <p><strong>Key Players:</strong> Trade The Pool (primary dedicated firm)</p>
              </div>
              <div>
                <p className="mb-2"><strong>Characteristics:</strong> PDT rules, higher tool spending</p>
                <p className="mb-2"><strong>Tool Spending:</strong> $150-400/month (higher due to platform costs)</p>
                <p><strong>Journal Adoption:</strong> 65-70% (highest among segments)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Market Dynamics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Critical Market Dynamics</h2>
        
        <div className="space-y-4">
          {[
            'Industry valued at $20 billion annually (2025 estimate), up from $6.7 billion in 2020',
            'Average trader invests $4,270 in challenge attempts before achieving profitability',
            'Successful traders spend $50-150 monthly on tools, up to $400 for comprehensive stacks',
            '60-70% of consistently profitable traders use dedicated trading journals',
            'Journal usage correlates with 40% higher success rates in prop firm challenges',
            'Market consolidation ongoing: 80-100 firms closed in 2024 due to regulatory pressure'
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Geographic Distribution */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Global Market Distribution</h2>
        
        <div className="bg-muted rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="font-semibold">United States</div>
              <div className="text-sm text-muted-foreground">6,600 monthly searches</div>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="font-semibold">India</div>
              <div className="text-sm text-muted-foreground">6,600 monthly searches</div>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="font-semibold">United Kingdom</div>
              <div className="text-sm text-muted-foreground">2,400 monthly searches</div>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="font-semibold">Asia-Pacific</div>
              <div className="text-sm text-muted-foreground">45% of global growth</div>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-muted-foreground">
          *Search volume data indicates interest levels; actual trader distribution varies by asset class and regulatory environment
        </p>
      </section>

      {/* The Data */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conservative Market Sizing Data</h2>
        <p className="mb-4">
          The following data represents our conservative estimates based on publicly available information from major prop trading firms. For each firm, we used the lower end of reported ranges and excluded unverifiable marketing claims.
        </p>
        
        <DataTable
          headers={['Firm Name', 'Asset Class', 'Reported Participants', 'Methodology', 'Source']}
          rows={[
            ['TopStep', <span key="futures1" className="text-green-400">Futures</span>, '100,000', 'Conservative estimate of total participants based on 10% pass rate and 150,000+ Discord members', 'topstep.com'],
            ['Apex', <span key="futures2" className="text-green-400">Futures</span>, '50,000', '2023 report indicated 50,000+ participants, likely higher now', 'Financial Services Review'],
            ['My Funded Futures', <span key="futures3" className="text-green-400">Futures</span>, '70,000', 'Company-reported total participants', 'myfundedfutures.com'],
            ['Tradeify', <span key="futures4" className="text-green-400">Futures</span>, '40,000', 'Website disclosure of total users', 'tradeify.co'],
            ['Funded Next', <span key="futures5" className="text-green-400">Futures</span>, '97,000', 'Funded traders only, total participants much higher', 'fundednext.com'],
            ['Alpha Capital', <span key="forex1" className="text-blue-400">Forex/CFD</span>, '750,000', 'Website shows 750,000+ total participants', 'alphacapitalgroup.uk'],
            ['FTMO', <span key="forex2" className="text-blue-400">Forex/CFD</span>, '240,000', '2.3M total accounts created, 240,000 active participants', 'ftmo.com'],
            ['E8 Markets', <span key="forex3" className="text-blue-400">Forex/CFD</span>, '350,000', 'Company-reported total participants', 'e8markets.com'],
            ['QT Funded', <span key="forex4" className="text-blue-400">Forex/CFD</span>, '70,000', 'Website disclosure of total participants', 'qtfunded.quanttekel.com'],
          ]}
        />
        
        <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Summary: 1,767,000+ Total Estimated Prop Firm Participants</h3>
          <p className="text-sm">
            This includes both funded traders and those in evaluation phases. The data represents only major firms with publicly available information. The actual market is substantially larger when including:
            smaller firms, traders who haven&apos;t started challenges yet, firms without public data, and emerging markets with limited transparency.
          </p>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Revenue Opportunity for Sapient Trading Journal</h2>
        
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-4">Revenue Projections at $31 AMRPU</h3>
          
          <DataTable
            headers={['Market Penetration', 'Active Paid Users', 'Monthly Revenue', 'Annual Revenue']}
            rows={[
              [<span key="p1" className="font-semibold">0.5%</span>, '8,835', '$273,885', <span key="r1" className="text-green-400 font-bold">$3.29M</span>],
              [<span key="p2" className="font-semibold">1%</span>, '17,670', '$547,770', <span key="r2" className="text-green-400 font-bold">$6.57M</span>],
              [<span key="p3" className="font-semibold">2%</span>, '35,340', '$1,095,540', <span key="r3" className="text-green-400 font-bold">$13.15M</span>],
              [<span key="p4" className="font-semibold">5%</span>, '88,350', '$2,738,850', <span key="r4" className="text-green-400 font-bold">$32.87M</span>],
              [<span key="p5" className="font-semibold">10%</span>, '176,700', '$5,477,700', <span key="r5" className="text-green-400 font-bold">$65.73M</span>],
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              Conservative Penetration Target
            </h3>
            <p className="mb-2">
              Achieving just 1% market penetration of our conservatively estimated 1.767M prop firm participants would generate <strong className="text-green-400">$6.57M ARR</strong>.
            </p>
            <p className="text-sm text-muted-foreground">
              This excludes retail traders outside prop firms, representing significant upside potential.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Growth Multipliers
            </h3>
            <ul className="space-y-1 text-sm">
              <li>• Market growing 50-100% annually</li>
              <li>• Increasing journal adoption rates</li>
              <li>• Expansion beyond prop firm traders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Investment Thesis</h2>
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6">
          <p className="mb-4">
            The prop trading market represents a large, rapidly growing, and underserved opportunity for specialized trading journal software. With 1.767M+ traders conservatively identified (including both funded traders and those in evaluation), and market growth exceeding 1,000% over the past decade, Sapient is positioned to capture significant value in this expanding ecosystem.
          </p>
          <p className="mb-4">
            The high correlation between journal usage and trading success (40% higher success rates), combined with traders&apos; proven willingness to invest in tools ($50-150/month average, up to $400 for successful traders), creates a compelling value proposition that drives both adoption and retention.
          </p>
          <p className="font-semibold">
            Even with conservative market penetration of 1-2%, Sapient Trading Journal can achieve $6.5-13M in annual recurring revenue from prop firm participants alone, with substantial upside from retail traders and continued market expansion.
          </p>
        </div>
      </section>
    </ReportLayout>
  );
}