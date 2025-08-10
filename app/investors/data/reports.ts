// app/investors/data/reports.ts

import { TrendingUp, PieChart, Users, Target, Zap } from 'lucide-react';

export const reports = [
  {
    slug: 'financial-projection',
    title: '5-Year SaaS Financial Projection',
    date: 'January 2025',
    category: 'Financial',
    description: '20% conversion model showing path to $5.9M profit',
    icon: TrendingUp,
    color: 'blue',
    isDraft: true  // Published
  },
  {
    slug: 'market-analysis',
    title: 'Prop Trading Market Analysis',
    date: 'January 2025',
    category: 'Market',
    description: '1.7M+ traders across prop firms, growing market opportunity',
    icon: PieChart,
    color: 'purple',
    isDraft: true  // Draft - only visible to team
  },
  {
    slug: 'competitive-landscape',
    title: 'Competitive Landscape Review',
    date: 'January 2025',
    category: 'Market',
    description: 'Analysis of TradeZella, Tradersync, and market positioning',
    icon: Users,
    color: 'green',
    isDraft: true  // Draft
  },
  {
    slug: 'product-roadmap',
    title: 'Product Development Roadmap',
    date: 'January 2025',
    category: 'Product',
    description: 'AI integration timeline and feature development strategy',
    icon: Target,
    color: 'orange',
    isDraft: true  // Draft
  },
  {
    slug: 'series-a-pitch',
    title: 'Series A Pitch Deck',
    date: 'January 2025',
    category: 'Financial',
    description: 'Investment deck for Series A fundraising round',
    icon: Zap,
    color: 'yellow',
    isDraft: true  // Draft
  }
];