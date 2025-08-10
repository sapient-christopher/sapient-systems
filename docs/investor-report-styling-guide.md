# Investor Report Styling Guide

## Overview
This guide documents the styling conventions for Sapient Systems' investor reports. The reports use a sophisticated color system that displays as monochrome in light mode (professional financial look) and colored in dark mode (better readability).

## Technical Stack
- **Tailwind CSS v4** (using `@tailwindcss/postcss`)
- **Next.js 15.4.5**
- **React Components** with TypeScript

## Color System Architecture

### 1. CSS Variables (in `globals.css`)

```css
:root {
  /* Regular semantic colors - always colored */
  --color-positive: #16a34a;    /* green-600 */
  --color-negative: #dc2626;    /* red-600 */
  --color-primary: #2563eb;     /* blue-600 */
  --color-secondary: #7c3aed;   /* purple-600 */
  --color-warning: #d97706;     /* amber-600 */
  
  /* Report-specific colors - monochrome in light mode */
  --color-report-positive: #171717;    /* Same as foreground */
  --color-report-negative: #171717;    
  --color-report-primary: #171717;     
  --color-report-secondary: #171717;   
  --color-report-warning: #171717;     
}

.dark {
  /* Report colors become colored in dark mode */
  --color-report-positive: #4ade80;    /* green-400 */
  --color-report-negative: #f87171;    /* red-400 */
  --color-report-primary: #60a5fa;     /* blue-400 */
  --color-report-secondary: #a78bfa;   /* purple-400 */
  --color-report-warning: #fb923c;     /* orange-400 */
}
```

### 2. Tailwind v4 Configuration

Since Tailwind v4 doesn't use `tailwind.config.js` for custom colors, we use the `@theme` directive in `globals.css`:

```css
@theme {
  --color-report-positive: var(--color-report-positive);
  --color-report-negative: var(--color-report-negative);
  --color-report-primary: var(--color-report-primary);
  --color-report-secondary: var(--color-report-secondary);
  --color-report-warning: var(--color-report-warning);
  --color-report-info: var(--color-report-info);
}
```

## Usage in Reports

### Text Colors
```tsx
// In financial reports - use report-specific classes
<span className="text-report-positive">Growth metric</span>  // Black in light, green in dark
<span className="text-report-negative">Loss metric</span>    // Black in light, red in dark
<span className="text-report-primary">Key figure</span>      // Black in light, blue in dark

// Elsewhere in the app - use regular semantic classes
<span className="text-positive">Always green</span>
<span className="text-negative">Always red</span>
```

### Background Colors
```tsx
// Backgrounds use regular semantic colors for subtle tinting
<div className="bg-primary/10 border border-primary/30">
  // Content
</div>

// Icons in reports should use report colors
<CheckCircle className="w-5 h-5 text-report-positive" />
<AlertCircle className="w-6 h-6 text-report-warning" />
```

## Component Structure

### Report Layout
```tsx
import { ReportLayout } from '../../components/ReportLayout';
import { DataTable } from '../../components/DataTable';

export default function MyReport() {
  return (
    <ReportLayout
      title="Report Title"
      subtitle="Report Subtitle"
      date="August 2025"
      readTime="8 min"
    >
      {/* Report sections */}
    </ReportLayout>
  );
}
```

### Data Tables
```tsx
<DataTable
  headers={['Column 1', 'Column 2', 'Column 3']}
  rows={[
    ['Data', 'More Data', <span key="unique" className="text-report-positive">$100K</span>],
  ]}
/>
```

## Common Patterns

### Highlight Cards
```tsx
<div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="text-center">
      <div className="text-3xl font-bold text-report-primary">$5.9M</div>
      <div className="text-sm text-muted-foreground">Metric Label</div>
    </div>
  </div>
</div>
```

### Warning/Alert Boxes
```tsx
<div className="bg-warning/10 border border-warning/30 rounded-lg p-6">
  <div className="flex items-start gap-3">
    <AlertCircle className="w-6 h-6 text-report-warning flex-shrink-0" />
    <div>
      <h3 className="font-semibold mb-2">Warning Title</h3>
      <p>Warning content...</p>
    </div>
  </div>
</div>
```

### Comparison Cards
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-negative/10 border border-negative/30 rounded-lg p-6">
    <h3 className="text-lg font-semibold mb-3 text-report-negative">Worst Case</h3>
    {/* Content */}
  </div>
  <div className="bg-positive/10 border border-positive/30 rounded-lg p-6">
    <h3 className="text-lg font-semibold mb-3 text-report-positive">Best Case</h3>
    {/* Content */}
  </div>
</div>
```

## Key Principles

1. **Professional in Light Mode**: All text in reports appears black/monochrome for a traditional financial document aesthetic
2. **Readable in Dark Mode**: Colors appear to improve scannability and highlight important metrics
3. **Semantic Naming**: Use `positive` for growth/success, `negative` for losses/warnings, `primary` for key metrics
4. **Consistent Patterns**: Reuse the same card layouts, table structures, and visual hierarchy across all reports

## File Locations
- Reports: `/app/investors/research/reports/[report-name].tsx`
- Components: `/app/investors/components/`
- Styles: `/app/globals.css`
- Config: `/tailwind.config.js` (not used for colors in v4)

## Notes for Future Development
- When creating new reports, always use `text-report-*` classes for colored text
- Background colors can use regular semantic colors with opacity (e.g., `bg-primary/10`)
- Test both light and dark modes to ensure proper contrast
- The `@theme` directive may show VS Code warnings but works correctly