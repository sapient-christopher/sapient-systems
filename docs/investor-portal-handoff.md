# Sapient Investor Portal - Implementation Guide

## 🏗️ Current Architecture

### File Structure
```
app/
├── investors/
│   ├── layout.tsx (theme provider wrapper)
│   ├── page.tsx (main investor landing)
│   ├── components/
│   │   └── ThemeToggle.tsx
│   ├── research/
│   │   ├── page.tsx (report listing - TO CREATE)
│   │   └── reports/
│   │       ├── financial-projection.tsx (TO CREATE)
│   │       └── [other-reports].tsx
│   └── internal/
│       └── page.tsx (internal review - TO CREATE)
├── lib/
│   └── theme-provider.tsx
└── globals.css (theme variables)
```

### Authentication Flow
- **Investor Password**: `sapient2025` → Shows public reports only
- **Team Password**: `wearesapient` → Shows all content including internal

## 📝 Adding New Reports - Step by Step

### 1. Create the Research Page
Create `app/investors/research/page.tsx`:

```tsx
"use client"

import React from 'react';
import { FileText, Calendar, TrendingUp } from 'lucide-react';
import Link from 'next/link';

// Define your reports here
const reports = [
  {
    slug: 'financial-projection',
    title: '5-Year SaaS Financial Projection',
    date: 'January 2025',
    category: 'Financial',
    description: '20% conversion model showing path to $5.9M profit',
    icon: TrendingUp,
    color: 'blue'
  },
  {
    slug: 'market-analysis',
    title: 'Prop Trading Market Analysis',
    date: 'January 2025',
    category: 'Market',
    description: '1.7M+ traders across prop firms, growing market opportunity',
    icon: FileText,
    color: 'purple'
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/investors" className="text-muted-foreground hover:text-foreground mb-4 inline-block">
            ← Back to Portal
          </Link>
          <h1 className="text-3xl font-bold">Research & Reports</h1>
        </div>
      </div>

      {/* Report Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => {
            const Icon = report.icon;
            return (
              <Link key={report.slug} href={`/investors/research/${report.slug}`}>
                <div className="bg-muted/50 rounded-xl p-6 border border-border hover:border-blue-500 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`w-8 h-8 text-${report.color}-500`} />
                    <span className="text-sm text-muted-foreground">{report.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                  <span className={`inline-block px-3 py-1 text-xs rounded-full bg-${report.color}-500/20 text-${report.color}-400`}>
                    {report.category}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```

### 2. Create the Report Router
Create `app/investors/research/[slug]/page.tsx`:

```tsx
import { notFound } from 'next/navigation';
import FinancialProjection from '../reports/financial-projection';
import MarketAnalysis from '../reports/market-analysis';

// Map slugs to components
const reportComponents: Record<string, React.ComponentType> = {
  'financial-projection': FinancialProjection,
  'market-analysis': MarketAnalysis,
};

export default function ReportPage({ params }: { params: { slug: string } }) {
  const ReportComponent = reportComponents[params.slug];
  
  if (!ReportComponent) {
    notFound();
  }
  
  return <ReportComponent />;
}
```

### 3. Create Report Components

#### Create Reusable Components First:

**`app/investors/components/ReportLayout.tsx`**:
```tsx
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
```

**`app/investors/components/DataTable.tsx`**:
```tsx
import React from 'react';

interface DataTableProps {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
  className?: string;
}

export function DataTable({ headers, rows, className = '' }: DataTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            {headers.map((header, i) => (
              <th key={i} className="text-left py-3 px-4 font-semibold text-sm">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="py-3 px-4 text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

#### Example Report Component:

**`app/investors/research/reports/financial-projection.tsx`**:
```tsx
"use client"

import React from 'react';
import { ReportLayout } from '../../components/ReportLayout';
import { DataTable } from '../../components/DataTable';
import { TrendingUp, DollarSign, Users } from 'lucide-react';

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
        <p className="mb-4">
          Unlike typical SaaS freemium models, our free tier is designed as an extended trial 
          with severe limitations that serious traders will quickly outgrow:
        </p>
        
        <div className="space-y-3">
          {[
            'Strategy Limitations: Free users get only 1 strategy/playbook',
            'Account Restrictions: Single trading account only',
            'No Missed Trades Tracking: Critical for improvement',
            'No Cloud Backup: Traders won\'t risk losing data',
            'No AI Analysis: Killer feature reserved for paid tiers'
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue Projections Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Revenue Projections</h2>
        <DataTable
          headers={['Period', 'Users', 'Conversion', 'MRR', 'Status']}
          rows={[
            ['Month 6', '500', '0%', '$0', <span className="text-yellow-400">Beta</span>],
            ['Month 12', '2,000', '20%', '$6,200', <span className="text-blue-400">Launch</span>],
            ['Month 24', '10,000', '20%', '$62,000', <span className="text-green-400">Growth</span>],
            ['Year 3', '30,000', '20%', '$186,000', <span className="text-green-400">Scale</span>],
            ['Year 5', '75,000', '20%', '$465,000', <span className="text-purple-400">Mature</span>],
          ]}
        />
      </section>

      {/* Add more sections as needed */}
    </ReportLayout>
  );
}
```

### 4. Create Internal Review Page

Create `app/investors/internal/page.tsx`:
```tsx
"use client"

import React, { useState } from 'react';
import { Lock } from 'lucide-react';
// Add your internal content here

export default function InternalPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'wearesapient') {
      setAuthenticated(true);
    }
  };

  if (!authenticated) {
    return (
      // Similar login UI but for internal access
      <div>Internal login form...</div>
    );
  }

  return (
    <div>
      {/* Your internal review content */}
    </div>
  );
}
```

## 🎨 Styling Guidelines

### Theme-Aware Colors
Always use these instead of hardcoded colors:
- `bg-background` / `text-foreground` - Main colors
- `bg-muted` / `text-muted-foreground` - Secondary colors  
- `border-border` - All borders
- Gradients: Keep as-is (blue-400 to purple-600)

### Component Patterns
1. **Cards**: `bg-muted/50 rounded-xl p-6 border border-border`
2. **Hover States**: `hover:border-[color]-500 transition-all`
3. **Headers**: Border bottom with `border-b border-border`
4. **Buttons**: Gradient backgrounds with white text

## 📊 Converting Your Markdown Reports

### From Markdown to Component:

1. **Tables** → Use `DataTable` component
2. **Headers** → Use semantic HTML (`<h2>`, `<h3>`)
3. **Key Metrics** → Create highlight cards
4. **Lists** → Use styled checkmarks or bullets
5. **Quotes/Callouts** → Use colored border boxes

### Example Conversion:

**Markdown**:
```markdown
## Revenue Projections
| Month | Users | Revenue |
|-------|-------|---------|
| 12    | 2,000 | $6,200  |
```

**React Component**:
```tsx
<section>
  <h2 className="text-2xl font-bold mb-4">Revenue Projections</h2>
  <DataTable
    headers={['Month', 'Users', 'Revenue']}
    rows={[
      ['12', '2,000', '$6,200']
    ]}
  />
</section>
```

## 🚀 Deployment Checklist

- [ ] Test both password flows
- [ ] Verify theme toggle works
- [ ] Check all responsive breakpoints
- [ ] Test report navigation
- [ ] Verify sign out functionality
- [ ] Add remaining reports
- [ ] Deploy to Vercel

## 📝 Adding Future Features

### PDF Export
```tsx
// Add to report pages
import { Download } from 'lucide-react';

<button className="flex items-center gap-2">
  <Download className="w-4 h-4" />
  Download PDF
</button>
```

### Search Functionality
Add to research page for finding reports quickly

### Report Categories
Expand the category system for better organization

### Analytics
Track which reports get viewed most

---

**Questions?** This structure is designed to scale. Each new report just needs:
1. Entry in the reports array
2. Component file in reports folder
3. Mapping in the [slug] router