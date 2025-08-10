# Sapient Investor Portal - Report Conversion Guide

## Overview
This guide helps convert any report (MD, PDF, HTML, CSV, etc.) into a TSX component for the Sapient investor portal.

## Portal Structure
```
app/investors/
├── data/
│   └── reports.ts              # Central report registry
├── components/
│   ├── ReportLayout.tsx        # Consistent report layout
│   └── DataTable.tsx           # Reusable table component
├── research/
│   ├── page.tsx                # Report listing page
│   ├── [slug]/
│   │   └── page.tsx           # Dynamic router
│   └── reports/
│       └── [report-name].tsx   # Individual report components
```

## Step-by-Step Conversion Process

### 1. Initial Report Analysis
When provided with a report file, first analyze:

**Questions to ask the user:**
- What should the URL slug be? (e.g., `market-analysis` for `/investors/research/market-analysis`)
- What's the report title and category?
- Any sections to exclude or emphasize?
- Should this be published immediately or remain as draft?
- Target reading time estimate?

### 2. Content Analysis Checklist
Review the report for:
- [ ] Executive summary or key takeaways
- [ ] Data tables that need conversion
- [ ] Key metrics to highlight
- [ ] Charts/visualizations needed
- [ ] Important quotes or callouts
- [ ] Risk factors or warnings
- [ ] Section hierarchy and flow

### 3. Create the Report Component

**Basic template structure:**
```tsx
"use client"

import React from 'react';
import { ReportLayout } from '../../components/ReportLayout';
import { DataTable } from '../../components/DataTable';
import { TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export default function ReportName() {
  return (
    <ReportLayout
      title="Full Report Title"
      subtitle="Optional Subtitle"
      date="January 2025"
      readTime="X min"
    >
      {/* Executive Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
        {/* Content */}
      </section>

      {/* Additional sections */}
    </ReportLayout>
  );
}
```

### 4. Content Conversion Patterns

#### Tables → DataTable Component
```tsx
<DataTable
  headers={['Column 1', 'Column 2', 'Column 3']}
  rows={[
    ['Data 1', 'Data 2', <span key="unique" className="text-green-400">Data 3</span>],
  ]}
/>
```

#### Key Metrics → Highlight Cards
```tsx
<div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="text-center">
      <div className="text-3xl font-bold text-blue-400">$5.9M</div>
      <div className="text-sm text-muted-foreground">Metric Label</div>
    </div>
  </div>
</div>
```

#### Important Points → Checklist
```tsx
<div className="space-y-3">
  {[
    'Point 1',
    'Point 2'
  ].map((point, i) => (
    <div key={i} className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
      <span>{point}</span>
    </div>
  ))}
</div>
```

#### Warnings → Alert Box
```tsx
<div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
  <div className="flex items-start gap-3">
    <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
    <div>
      <h3 className="font-semibold mb-2">Warning Title</h3>
      <p>Warning content...</p>
    </div>
  </div>
</div>
```

### 5. Files to Update

#### A. Add to reports registry (`app/investors/data/reports.ts`):
```tsx
{
  slug: 'report-slug',
  title: 'Report Title',
  date: 'January 2025',
  category: 'Financial|Market|Product|Legal',
  description: 'Brief description for the card',
  icon: TrendingUp,  // Import from lucide-react
  color: 'blue',     // blue|purple|green|orange|yellow|red
  isDraft: true      // Set to false when ready to publish
}
```

#### B. Update router (`app/investors/research/[slug]/page.tsx`):
```tsx
import ReportName from '../reports/report-name';

const reportComponents: Record<string, React.ComponentType> = {
  // ... existing reports
  'report-slug': ReportName,
};
```

### 6. Style Guidelines
- **Theme-aware colors**: Use `text-muted-foreground`, `bg-muted`, `border-border`
- **Spacing**: Sections use `mb-12`, subsections use `mb-6`
- **Typography**: `text-2xl font-bold` for h2, `text-lg font-semibold` for h3
- **Interactive elements**: Add `hover:` states and `transition-all`

### 7. Common Pitfalls to Avoid
- ❌ Don't use hardcoded colors like `text-gray-500`
- ❌ Don't forget `key` props in mapped elements
- ❌ Don't use unescaped quotes or apostrophes
- ❌ Don't import icons that aren't used
- ✅ Do use `&apos;`, `&quot;`, `&ldquo;`, `&rdquo;` for quotes
- ✅ Do add unique keys to React elements in arrays

### 8. Final Checklist
- [ ] Component created in `app/investors/research/reports/[name].tsx`
- [ ] Entry added to `app/investors/data/reports.ts`
- [ ] Import added to router in `[slug]/page.tsx`
- [ ] All tables converted to DataTable components
- [ ] Key metrics highlighted appropriately
- [ ] No ESLint errors (unused imports, missing keys, etc.)
- [ ] Draft status set correctly

## Example Conversion Request Format

"I have a [file type] report about [topic]. Please convert it to a TSX component for the investor portal.

- **Slug**: market-analysis
- **Category**: Market
- **Emphasize**: Growth projections and TAM
- **Exclude**: Detailed competitor pricing
- **Status**: Keep as draft for now"

## Response Format

The assistant should:
1. Review the uploaded report
2. Ask clarifying questions if needed
3. Create the TSX component
4. Provide exact code changes needed for:
   - `app/investors/data/reports.ts`
   - `app/investors/research/[slug]/page.tsx`
5. Include git commit message

---

**Note**: Always test locally before deploying to Vercel to catch any ESLint errors!