import { notFound } from 'next/navigation';
import FinancialProjection from '../reports/financial-projection';
import MarketAnalysis from '../reports/market-analysis';
// Import other report components as you create them
// import CompetitiveLandscape from '../reports/competitive-landscape';
// import ProductRoadmap from '../reports/product-roadmap';
// import SeriesAPitch from '../reports/series-a-pitch';

// Map slugs to components
const reportComponents: Record<string, React.ComponentType> = {
  'financial-projection': FinancialProjection,
  'market-analysis': MarketAnalysis,
  // Add other report mappings as you create them:
  // 'competitive-landscape': CompetitiveLandscape,
  // 'product-roadmap': ProductRoadmap,
  // 'series-a-pitch': SeriesAPitch,
};

// Note: Access control happens at the research page level
// If someone has the direct URL, they can view any report
// This is intentional for sharing draft links internally

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ReportComponent = reportComponents[slug];
  
  if (!ReportComponent) {
    notFound();
  }
  
  return <ReportComponent />;
}