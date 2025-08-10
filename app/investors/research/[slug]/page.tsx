import { notFound } from 'next/navigation';
import { reports } from '@/app/investors/data/reports';
import FinancialProjection from '../reports/financial-projection';
import MarketAnalysis from '../reports/market-analysis';
import ReportPlaceholder from '../report-placeholder';
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
  
  // Check if this is a valid report slug
  const reportData = reports.find(r => r.slug === slug);
  if (!reportData) {
    notFound(); // Show 404 for completely unknown slugs
  }
  
  // Check if we have a component for this report
  const ReportComponent = reportComponents[slug];
  
  if (!ReportComponent) {
    // Use the global placeholder for reports without components
    return (
      <ReportPlaceholder
        title={reportData.title}
        subtitle={reportData.description}
        description={`The ${reportData.title} is currently being prepared. This ${reportData.category.toLowerCase()} analysis will provide comprehensive insights and strategic recommendations for Sapient Systems.`}
      />
    );
  }
  
  return <ReportComponent />;
}