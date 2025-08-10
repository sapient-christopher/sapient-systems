# Sapient Investor Portal - Report Update Guide

## Overview
This guide helps update existing reports in the Sapient investor portal, whether they're drafts or published.

## Types of Updates

### 1. Content Updates
- Adding/removing sections
- Updating data or figures
- Correcting information
- Adding new tables or visualizations

### 2. Design Updates
- Changing layout or styling
- Adding visual elements (icons, charts)
- Improving data presentation
- Enhancing mobile responsiveness

### 3. Status Updates
- Publishing a draft (isDraft: false)
- Reverting to draft (isDraft: true)
- Updating metadata (date, category, description)

## Update Request Format

### Essential Information to Provide:

```markdown
**Report to Update**: [exact slug or title]
**Current Status**: [draft/published]
**Update Type**: [content/design/status/mixed]

**Changes Requested**:
1. [Specific change 1]
2. [Specific change 2]
...

**Additional Context**:
- [Any new data to include]
- [Sections to emphasize differently]
- [Design preferences]
```

## Example Update Scenarios

### Scenario 1: Publishing a Draft
```
Please update the financial-projection report:
- Change status from draft to published
- Update the date to February 2025
- Add a "Latest Update" callout box at the top mentioning our Series A close
```

### Scenario 2: Content Refresh
```
Please update the market-analysis report with the attached new data:
- Replace the TAM section with new market sizing (see attached)
- Update all 2024 figures to 2025
- Add a new section on "Regulatory Changes" after market overview
- Keep as draft for now
```

### Scenario 3: Design Enhancement
```
Please update the competitive-landscape report design:
- Convert the competitor comparison text to a visual table
- Add icons for each competitor
- Create a strengths/weaknesses grid
- Make the key differentiators more prominent with highlight boxes
```

### Scenario 4: Quick Data Update
```
Update financial-projection report:
- Change breakeven from Month 14 to Month 12
- Update Year 5 profit from $5.9M to $6.2M
- Add footnote about updated conversion assumptions
```

## Providing Update Information

### For Content Changes:
- **Specific text**: Provide exact wording
- **Data updates**: Include old → new values
- **New sections**: Provide full content
- **Deletions**: Clearly mark what to remove

### For Design Changes:
- **Visual references**: "Like the blue highlight box in financial-projection"
- **Layout preferences**: "Two-column grid on desktop"
- **Color emphasis**: "Make negative values red"
- **Icons needed**: "Add a warning icon next to risks"

### For Complex Updates:
Attach files with:
- New data (CSV, Excel)
- Marked up PDFs showing changes
- Updated markdown content
- Reference screenshots

## Update Response Format

The assistant should provide:

### 1. Summary of Changes
```
I'll update the [report-name] report with the following changes:
✓ [Change 1]
✓ [Change 2]
✓ [Change 3]
```

### 2. File Updates Required

**For content/design changes:**
- Full updated TSX component or specific line changes

**For status changes:**
```tsx
// In app/investors/data/reports.ts
// Change:
isDraft: true
// To:
isDraft: false
```

**For metadata updates:**
```tsx
// In app/investors/data/reports.ts
{
  slug: 'financial-projection',
  title: 'Updated Title Here',
  date: 'February 2025',  // Updated
  description: 'New description',  // Updated
  // ... rest remains the same
}
```

### 3. Git Commit Message
```bash
git commit -m "update: [Report name] - [Brief summary of changes]

- [Detailed change 1]
- [Detailed change 2]
- [Status change if applicable]"
```

## Common Update Patterns

### Adding an Update Notice
```tsx
{/* Add after the title */}
<div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
  <p className="text-sm">
    <strong>Updated February 2025:</strong> Revised projections following Series A funding.
  </p>
</div>
```

### Updating Data Tables
```tsx
// Identify the table by its headers
// Original:
<DataTable
  headers={['Period', 'Revenue', 'Profit']}
  rows={[
    ['Year 1', '$100K', '-$50K'],
  ]}
/>

// Updated:
<DataTable
  headers={['Period', 'Revenue', 'Profit']}
  rows={[
    ['Year 1', '$120K', '-$30K'],  // Updated values
  ]}
/>
```

### Adding New Sections
```tsx
{/* Add after [specific section] */}
<section className="mb-12">
  <h2 className="text-2xl font-bold mb-4">New Section Title</h2>
  {/* New content */}
</section>
```

## Quick Reference Prompts

### Status Change Only:
```
Please publish the [report-slug] report (change isDraft to false)
```

### Simple Data Update:
```
Update [report-slug]: Change [old value] to [new value] in the [section name]
```

### Add Update Notice:
```
Add an update notice to [report-slug] stating: [update message]
Date the update as [date]
```

### Major Revision:
```
Major update to [report-slug] - see attached revised content.
Keep same design but update all data and add new [section].
Maintain draft status.
```

## Best Practices

1. **Be Specific**: Instead of "update the numbers", say "change Year 3 revenue from $186K to $210K"
2. **Maintain Version History**: Consider adding update notices for major changes
3. **Test Locally**: Always test updates locally before deploying
4. **Preserve Styling**: Unless requested, maintain existing design patterns
5. **Check Dependencies**: Some updates might affect related reports

## Troubleshooting

**If the assistant needs clarification:**
- Specify exact section names or headers
- Provide line numbers if referencing specific content
- Include screenshot of the current state
- Clarify whether design should change or just content

**Common issues:**
- Forgetting to update the date in reports.ts
- Not updating related data (e.g., totals when changing individual values)
- Breaking responsive layouts with new content

---

**Remember**: Always provide the current report status (draft/published) to ensure proper visibility handling!