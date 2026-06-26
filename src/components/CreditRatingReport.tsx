import React, { useState } from 'react';
import {
  Building2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowLeft,
  Download,
  TrendingUp,
  DollarSign,
  Calendar,
  BarChart3,
  Sparkles,
  FileText,
  X,
  Award
} from 'lucide-react';
import Header from './Header';
import RightSidebar from './RightSidebar';

interface CreditRatingReportProps {
  onBackToSearch: () => void;
  onNavigate: (page: 'dashboard' | 'search' | 'results' | 'db-report' | 'order-commercial' | 'kyc6-sanction' | 'credit-rating-calculation' | 'credit-rating' | 'iom' | 'iom-b2b-b1m' | 'analytics' | 'project-doc') => void;
}

const CreditRatingReport: React.FC<CreditRatingReportProps> = ({ onBackToSearch, onNavigate }) => {
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [selectedRecommendation, setSelectedRecommendation] = useState<string | null>(null);
  const [selectedBuStrength, setSelectedBuStrength] = useState<string | null>(null);
  const [selectedBuRisk, setSelectedBuRisk] = useState<string | null>(null);
  const [selectedBuRecommendation, setSelectedBuRecommendation] = useState<string | null>(null);

  const handleBack = () => {
    onBackToSearch();
  };

  const handleDownload = () => {
    // Download report functionality
    console.log('Download report');
  };

  const strengthsData = [
    {
      id: 'established-business',
      text: 'Established business with 30 years of operating history since 1995',
      source: 'Credit Bureau Malaysia (CBM)',
      supportingData: {
        reportType: 'Credit Bureau Report',
        dataPoints: [
          { label: 'Incorporation Date', value: '13/05/1995', status: 'Verified' },
          { label: 'Years in Operation', value: '30 years', status: 'Established' },
          { label: 'Company Status', value: 'Existing', status: 'Active' },
          { label: 'Business Nature', value: 'Food Manufacturing', status: 'Stable Sector' },
        ],
        reportDate: 'May 20, 2025',
        verifiedBy: 'Credit Bureau Malaysia'
      }
    },
    {
      id: 'revenue-growth',
      text: 'Strong revenue growth of 20% year-over-year to RM 277.3M',
      source: 'Credit Bureau Malaysia (CBM)',
      supportingData: {
        reportType: 'Credit Bureau Report',
        dataPoints: [
          { label: 'Revenue (2024)', value: 'RM 277.3M', status: 'Strong' },
          { label: 'Revenue (2023)', value: 'RM 231.0M', status: 'Historical' },
          { label: 'Revenue Growth', value: '+20.0%', status: 'Excellent' },
          { label: 'Trend', value: 'Consistent upward trajectory', status: 'Positive' },
        ],
        reportDate: 'May 20, 2025',
        verifiedBy: 'Credit Bureau Malaysia'
      }
    },
    {
      id: 'profitability',
      text: 'Improved profitability with net income growth of 84% to RM 3.79M',
      source: 'Credit Bureau Malaysia (CBM)',
      supportingData: {
        reportType: 'Credit Bureau Report',
        dataPoints: [
          { label: 'Profit After Tax (2024)', value: 'RM 3.79M', status: 'Strong' },
          { label: 'Profit After Tax (2023)', value: 'RM 2.00M', status: 'Historical' },
          { label: 'Net Income Growth', value: '+84.0%', status: 'Excellent' },
          { label: 'Profit Margin', value: '1.4%', status: 'Improving' },
        ],
        reportDate: 'May 20, 2025',
        verifiedBy: 'Credit Bureau Malaysia'
      }
    },
    {
      id: 'equity-position',
      text: 'Strong equity position of RM 70.5M with consistent growth',
      source: 'Credit Bureau Malaysia (CBM)',
      supportingData: {
        reportType: 'Credit Bureau Report',
        dataPoints: [
          { label: 'Total Equity (2024)', value: 'RM 70.5M', status: 'Strong' },
          { label: 'Total Equity (2023)', value: 'RM 66.7M', status: 'Historical' },
          { label: 'Equity Growth', value: '+5.7%', status: 'Positive' },
          { label: 'Paid-up Capital', value: 'RM 14.0M', status: 'Stable' },
        ],
        reportDate: 'May 20, 2025',
        verifiedBy: 'Credit Bureau Malaysia'
      }
    },
  ];

  const risksData = [
    {
      id: 'declining-liquidity',
      text: 'Declining current ratio from 2.2 to 1.3 indicating reduced short-term liquidity',
      source: 'Credit Bureau Malaysia (CBM)',
      supportingData: {
        reportType: 'Credit Bureau Report',
        dataPoints: [
          { label: 'Current Ratio (2024)', value: '1.3', status: 'Concerning' },
          { label: 'Current Ratio (2023)', value: '2.2', status: 'Historical' },
          { label: 'Decline', value: '-41%', status: 'Risk Indicator' },
          { label: 'Current Assets', value: 'RM 58.9M', status: 'Decreased' },
          { label: 'Current Liabilities', value: 'RM 43.9M', status: 'Increased' },
        ],
        reportDate: 'May 20, 2025',
        verifiedBy: 'Credit Bureau Malaysia'
      }
    },
    {
      id: 'working-capital',
      text: 'Working capital days decreased significantly from 76.5 to 19.8 days',
      source: 'Credit Bureau Malaysia (CBM)',
      supportingData: {
        reportType: 'Credit Bureau Report',
        dataPoints: [
          { label: 'Working Capital Days (2024)', value: '19.8 days', status: 'Tight' },
          { label: 'Working Capital Days (2023)', value: '76.5 days', status: 'Historical' },
          { label: 'Change', value: '-74%', status: 'Significant Decline' },
          { label: 'Impact', value: 'Reduced cash conversion cycle', status: 'Monitor' },
        ],
        reportDate: 'May 20, 2025',
        verifiedBy: 'Credit Bureau Malaysia'
      }
    },
    {
      id: 'assets-decline',
      text: 'Total assets declined by 21.5% to RM 115.3M year-over-year',
      source: 'Credit Bureau Malaysia (CBM)',
      supportingData: {
        reportType: 'Credit Bureau Report',
        dataPoints: [
          { label: 'Total Assets (2024)', value: 'RM 115.3M', status: 'Decreased' },
          { label: 'Total Assets (2023)', value: 'RM 146.9M', status: 'Historical' },
          { label: 'Asset Decline', value: '-21.5%', status: 'Concerning' },
          { label: 'Current Assets', value: 'Decreased RM 28.9M', status: 'Significant' },
        ],
        reportDate: 'May 20, 2025',
        verifiedBy: 'Credit Bureau Malaysia'
      }
    },
    {
      id: 'thin-margins',
      text: 'Low profit margins of 1.4% despite revenue growth',
      source: 'Credit Bureau Malaysia (CBM)',
      supportingData: {
        reportType: 'Credit Bureau Report',
        dataPoints: [
          { label: 'Profit After Tax Margin', value: '1.4%', status: 'Low' },
          { label: 'Profit Before Tax Margin', value: '1.9%', status: 'Thin' },
          { label: 'Industry Comparison', value: 'Below average', status: 'Concern' },
          { label: 'Vulnerability', value: 'Sensitive to cost increases', status: 'Risk' },
        ],
        reportDate: 'May 20, 2025',
        verifiedBy: 'Credit Bureau Malaysia'
      }
    },
  ];

  const recommendationsData = [
    {
      id: 'standard-credit-terms',
      text: 'Approved for standard credit terms with 30-day payment period',
      policyReference: 'Credit Policy Section 6.8.2 & 8.3',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Based on Credit Evaluation Score and Risk Assessment',
        details: [
          { label: 'Credit Score', value: '66 out of 100', status: 'Meets Threshold' },
          { label: 'Credit Rating', value: 'B (Score 56-75)', status: 'Approved' },
          { label: 'Recommended Credit Limit', value: 'Up to RM 20,000,000', status: 'Within LOA' },
          { label: 'Payment Term', value: '30 days from invoice date', status: 'Standard' },
          { label: 'Country Risk', value: 'Malaysia - Low Risk (10 points)', status: 'Favorable' },
          { label: 'Sanctions Check', value: 'Clear', status: 'Compliant' },
        ],
        policyExtract: 'Per Credit Policy Section 6.8.2: Credit limits up to RM 20M for Bulk/Upstream with payment terms of 30 days are approved for customers with credit rating B (score 56-75). Account monitoring required as per Section 8.3.',
        additionalNotes: 'Customer meets all criteria for standard credit terms. Regular quarterly financial reports should be monitored for continued assessment as per policy requirements.'
      }
    },
    {
      id: 'preferential-rates',
      text: 'Consider offering preferential rates for bulk orders',
      policyReference: 'Credit Policy Section 5.2 & 6.6',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Strong creditworthiness and volume commitment',
        details: [
          { label: 'Monthly Committed Volume', value: '5,000 MT', status: 'High Volume' },
          { label: 'Payment History', value: '98.5% on-time', status: 'Excellent' },
          { label: 'Pricing Strategy', value: 'Volume-based discounts', status: 'Recommended' },
          { label: 'Estimated Annual Value', value: 'RM 180M+', status: 'Strategic' },
          { label: 'Competitive Position', value: 'Key account potential', status: 'High Priority' },
        ],
        policyExtract: 'Per Credit Policy Section 6.6: Trading Limit calculation considers per month committed volume × selling price. Financing cost benefits from volume can be passed to customer with strong credit profile.',
        additionalNotes: 'Customer demonstrates consistent high-volume purchases and excellent payment behavior. Preferential pricing can strengthen long-term relationship while maintaining healthy margins.'
      }
    },
    {
      id: 'quarterly-monitoring',
      text: 'Monitor quarterly financial reports for continued assessment',
      policyReference: 'Credit Policy Section 8.2 & 8.3',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Ongoing risk management requirement',
        details: [
          { label: 'Review Frequency', value: 'Quarterly', status: 'Mandatory' },
          { label: 'Annual Limit Review', value: 'Required per policy', status: 'Scheduled' },
          { label: 'Aging Report Review', value: 'Weekly by traders', status: 'Ongoing' },
          { label: 'Credit Committee Review', value: 'Quarterly basis', status: 'Scheduled' },
          { label: 'Financial Statement Update', value: 'Annual submission', status: 'Required' },
        ],
        policyExtract: 'Per Credit Policy Section 8.2.1: Reports on aging of accounts receivable MUST be made available weekly. Section 8.3.2: Operating Unit Head to ensure credit monitoring is performed at least once monthly and reported to Credit Committee.',
        additionalNotes: 'Continuous monitoring ensures early detection of any financial deterioration. Quarterly reviews will track profitability trends, liquidity ratios, and payment patterns to maintain appropriate risk exposure.'
      }
    },
    {
      id: 'extended-facilities',
      text: 'Low risk customer suitable for extended credit facilities',
      policyReference: 'Credit Policy Section 5.4 & 7.1',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Strong credit fundamentals and low risk profile',
        details: [
          { label: 'Overall Risk Assessment', value: 'Low Risk', status: 'Favorable' },
          { label: 'Current Ratio', value: '1.34', status: 'Healthy (Score: 10/20)' },
          { label: 'Gearing Ratio', value: '0.64', status: 'Good (Score: 12/15)' },
          { label: 'Years in Operation', value: '30 years', status: 'Established (Score: 10/10)' },
          { label: 'Profitability', value: '1.88%', status: 'Moderate (Score: 10/20)' },
          { label: 'Potential Credit Increase', value: 'Up to RM 30M', status: 'Within Authority' },
        ],
        policyExtract: 'Per Credit Policy Section 5.4: Trading/Credit Limit shall be extended upon review of financial strength, previous history, and credit report results. Section 7.1 scoring matrix shows customer achieves 66/100 points, qualifying for extended facilities.',
        additionalNotes: 'Customer credit score of 66 indicates solid creditworthiness. With 30 years operating history, stable financial ratios, and excellent payment record, customer qualifies for consideration of extended credit facilities if business volume increases.'
      }
    },
  ];

  const buStrengthsData = [
    {
      id: 'bu-profitability',
      text: 'Strong profitability with 14.8% profit margin indicating efficient operations',
      source: 'BU Finance Calculation',
      supportingData: {
        reportType: 'BU Finance Analysis',
        dataPoints: [
          { label: 'Profit Margin', value: '14.8%', status: 'Strong' },
          { label: 'Revenue (2024)', value: 'RM 12.5M', status: 'Current' },
          { label: 'Industry Average', value: '8-12%', status: 'Above Average' },
          { label: 'Trend', value: 'Consistently above 12%', status: 'Positive' },
        ],
        calculationDate: 'December 3, 2025',
        verifiedBy: 'BU Finance Team'
      }
    },
    {
      id: 'bu-liquidity',
      text: 'Healthy liquidity position with current ratio of 1.34 showing ability to meet short-term obligations',
      source: 'BU Finance Calculation',
      supportingData: {
        reportType: 'BU Finance Analysis',
        dataPoints: [
          { label: 'Current Ratio', value: '1.34', status: 'Healthy' },
          { label: 'Current Assets', value: 'RM 58.9M', status: 'Good' },
          { label: 'Current Liabilities', value: 'RM 43.9M', status: 'Manageable' },
          { label: 'Score Impact', value: '10 out of 20 points', status: 'Positive' },
        ],
        calculationDate: 'December 3, 2025',
        verifiedBy: 'BU Finance Team'
      }
    },
    {
      id: 'bu-equity',
      text: 'Strong equity base of RM 70.5M with low gearing ratio of 0.64 indicating conservative leverage',
      source: 'BU Finance Calculation',
      supportingData: {
        reportType: 'BU Finance Analysis',
        dataPoints: [
          { label: 'Shareholders\' Fund', value: 'RM 70.5M', status: 'Strong' },
          { label: 'Gearing Ratio', value: '0.64', status: 'Conservative' },
          { label: 'Total Debt', value: 'RM 45.1M', status: 'Controlled' },
          { label: 'Score Impact', value: '12 out of 15 points', status: 'Excellent' },
        ],
        calculationDate: 'December 3, 2025',
        verifiedBy: 'BU Finance Team'
      }
    },
    {
      id: 'bu-growth',
      text: 'Positive revenue growth of 8.5% YoY demonstrating business expansion',
      source: 'BU Finance Calculation',
      supportingData: {
        reportType: 'BU Finance Analysis',
        dataPoints: [
          { label: 'Growth Rate', value: '+8.5% YoY', status: 'Positive' },
          { label: 'Revenue Current', value: 'RM 12.5M', status: 'Strong' },
          { label: 'Revenue Previous', value: 'RM 11.5M', status: 'Historical' },
          { label: 'Market Performance', value: 'Above industry average', status: 'Competitive' },
        ],
        calculationDate: 'December 3, 2025',
        verifiedBy: 'BU Finance Team'
      }
    },
  ];

  const buRisksData = [
    {
      id: 'bu-profitability-ratio',
      text: 'Moderate profitability ratio of 1.88 suggests room for improvement in return on assets',
      source: 'BU Finance Calculation',
      supportingData: {
        reportType: 'BU Finance Analysis',
        dataPoints: [
          { label: 'Profitability Ratio', value: '1.88', status: 'Moderate' },
          { label: 'Score Impact', value: '10 out of 20 points', status: 'Average' },
          { label: 'Industry Benchmark', value: '2.5-3.0', status: 'Below Target' },
          { label: 'Recommendation', value: 'Monitor quarterly for improvements', status: 'Action Required' },
        ],
        calculationDate: 'December 3, 2025',
        verifiedBy: 'BU Finance Team'
      }
    },
    {
      id: 'bu-debt-equity',
      text: 'Low debt-to-equity ratio of 0.35 while positive, indicates potential underutilization of financial leverage',
      source: 'BU Finance Calculation',
      supportingData: {
        reportType: 'BU Finance Analysis',
        dataPoints: [
          { label: 'Debt-to-Equity', value: '0.35', status: 'Very Conservative' },
          { label: 'Total Debt', value: 'RM 24.7M', status: 'Low' },
          { label: 'Total Equity', value: 'RM 70.5M', status: 'Strong' },
          { label: 'Optimal Range', value: '0.5-1.5', status: 'Below Range' },
          { label: 'Implication', value: 'Potential for growth capital', status: 'Opportunity' },
        ],
        calculationDate: 'December 3, 2025',
        verifiedBy: 'BU Finance Team'
      }
    },
    {
      id: 'bu-rating-risk',
      text: 'B rating indicates moderate default risk requiring careful monitoring of financial performance',
      source: 'BU Finance Rating',
      supportingData: {
        reportType: 'BU Finance Analysis',
        dataPoints: [
          { label: 'Credit Rating', value: 'B', status: 'Moderate Risk' },
          { label: 'Credit Score', value: '66 out of 100', status: 'Good' },
          { label: 'Risk Category', value: 'MOD (Moderate)', status: 'Acceptable' },
          { label: 'Score Range', value: '56-75 points', status: 'Mid-Tier' },
          { label: 'Default Risk', value: 'Moderate but manageable', status: 'Monitor' },
        ],
        calculationDate: 'December 3, 2025',
        verifiedBy: 'BU Finance Team'
      }
    },
  ];

  const buRecommendationsData = [
    {
      id: 'bu-credit-terms',
      text: 'Approved for standard credit terms with 30-day payment period based on B rating',
      policyReference: 'Credit Policy Section 6.8.2 & 8.3',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Based on BU Finance Credit Rating and Score',
        details: [
          { label: 'Credit Rating', value: 'B', status: 'Approved' },
          { label: 'Credit Score', value: '66/100', status: 'Meets Criteria' },
          { label: 'Payment Terms', value: '30 days', status: 'Standard' },
          { label: 'Policy Compliance', value: 'Section 6.8.2', status: 'Compliant' },
          { label: 'Monitoring Required', value: 'Per Section 8.3', status: 'Mandatory' },
        ],
        policyExtract: 'Per Credit Policy Section 6.8.2: Standard credit terms of 30 days are applicable for customers with credit rating B (score 56-75). Regular monitoring as per Section 8.3 is required.',
        additionalNotes: 'Customer qualifies for standard credit terms based on BU Finance assessment. Credit score of 66 falls within acceptable range for 30-day payment terms.'
      }
    },
    {
      id: 'bu-credit-limit',
      text: 'Credit limit recommendation aligned with 5% of shareholders\' fund (RM 3.5M maximum)',
      policyReference: 'Credit Policy Section 5.2 & 6.6',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Based on shareholders\' fund calculation',
        details: [
          { label: 'Shareholders\' Fund', value: 'RM 70.5M', status: 'Verified' },
          { label: 'Calculation', value: '5% of RM 70.5M', status: 'Per Policy' },
          { label: 'Recommended Limit', value: 'RM 3.5M', status: 'Conservative' },
          { label: 'Current Gearing', value: '0.64', status: 'Supports Limit' },
          { label: 'Risk Mitigation', value: 'Within safe exposure', status: 'Appropriate' },
        ],
        policyExtract: 'Per Credit Policy Section 5.2: Trading/Credit Limit should consider company financial strength. Section 6.6 provides framework for limit calculation based on equity position and risk profile.',
        additionalNotes: 'Credit limit of RM 3.5M (5% of shareholders\' fund) provides adequate exposure while maintaining conservative risk management approach given the B rating.'
      }
    },
    {
      id: 'bu-quarterly-review',
      text: 'Monitor quarterly financial reports to track profitability ratio improvements',
      policyReference: 'Credit Policy Section 8.2 & 8.3',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Ongoing performance monitoring',
        details: [
          { label: 'Review Frequency', value: 'Quarterly', status: 'Required' },
          { label: 'Focus Area', value: 'Profitability ratio (currently 1.88)', status: 'Monitor' },
          { label: 'Target Improvement', value: 'Move towards 2.5+', status: 'Goal' },
          { label: 'Reporting', value: 'To Credit Committee', status: 'Mandatory' },
          { label: 'Action Trigger', value: 'Declining trend', status: 'Alert' },
        ],
        policyExtract: 'Per Credit Policy Section 8.2.1: Operating Unit Head to ensure credit monitoring performed at least monthly and reported to Credit Committee quarterly.',
        additionalNotes: 'Regular quarterly monitoring will track improvements in profitability ratio and overall financial health. Any declining trends should trigger immediate review of credit terms.'
      }
    },
    {
      id: 'bu-annual-review',
      text: 'Annual review required to assess credit rating progression and adjust terms accordingly',
      policyReference: 'Credit Policy Section 5.4 & 7.1',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Regular credit rating reassessment',
        details: [
          { label: 'Review Frequency', value: 'Annual', status: 'Mandatory' },
          { label: 'Current Rating', value: 'B (66/100)', status: 'Baseline' },
          { label: 'Upgrade Potential', value: 'To A rating (76+)', status: 'Possible' },
          { label: 'Limit Adjustment', value: 'Based on rating change', status: 'Per Policy' },
          { label: 'Financial Update', value: 'Latest statements required', status: 'Required' },
        ],
        policyExtract: 'Per Credit Policy Section 5.4: Trading/Credit Limit shall be extended upon review of financial strength. Section 7.1: Annual reassessment using credit scoring matrix to adjust terms.',
        additionalNotes: 'Annual credit rating review provides opportunity to recognize improvements and adjust credit terms accordingly. Strong performance could lead to rating upgrade and enhanced credit facilities.'
      }
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header currentPage="credit-rating" onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          {/* Left Column - 75% */}
          <div className="w-3/4">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <button
                onClick={handleBack}
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Search
              </button>
              <h1 className="text-3xl font-bold text-gray-900">Credit Rating Report</h1>
            </div>

            <div className="flex items-center space-x-4">
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  ONBOARD ONE (MALAYSIA) SDN. BHD.
                </h1>
              </div>
              <div className="text-right">
                <div className="flex items-center text-green-600 mb-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Verified</span>
                </div>
                <p className="text-sm text-gray-500">Report Generated: May 20, 2025</p>
              </div>
            </div>

            {/* Risk Assessment Summary */}
            <div className="grid grid-cols-6 gap-3 mb-6">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                <div className="flex flex-col items-center text-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                  <span className="text-xs font-medium text-green-900 mb-1">Third Party Search</span>
                  <p className="text-lg font-bold text-green-600">COMPLETE</p>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
                <div className="flex flex-col items-center text-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mb-2" />
                  <span className="text-xs font-medium text-blue-900 mb-1">Compliance</span>
                  <p className="text-lg font-bold text-blue-600">CLEAR</p>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                <div className="flex flex-col items-center text-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                  <span className="text-xs font-medium text-green-900 mb-1">Order Commercial</span>
                  <p className="text-lg font-bold text-green-600">COMPLETE</p>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                <div className="flex flex-col items-center text-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                  <span className="text-xs font-medium text-green-900 mb-1">Sanctions Check</span>
                  <p className="text-lg font-bold text-green-600">CLEAR</p>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                <div className="flex flex-col items-center text-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                  <span className="text-xs font-medium text-green-900 mb-1">Credit Rating</span>
                  <p className="text-lg font-bold text-green-600">COMPLETE</p>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                <div className="flex flex-col items-center text-center">
                  <FileText className="w-5 h-5 text-red-600 mb-2" />
                  <span className="text-xs font-medium text-red-900 mb-1">IOM</span>
                  <p className="text-lg font-bold text-red-600">PENDING</p>
                </div>
              </div>
            </div>

            {/* Information Availability Tracker */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">Information Availability</h3>
                <span className="text-sm font-bold text-blue-600">100%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Credit Score Analysis: Complete</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Financial Assessment: Complete</span>
                </div>
                <div className="flex items-center justify-end">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Risk Evaluation: Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Bureau Report Summary */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Credit Bureau Report Summary</h2>
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-800">Credit Rating</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">A-</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-800">Credit Score</span>
              </div>
              <p className="text-2xl font-bold text-green-600">785</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-800">Rec Credit Lmt</span>
              </div>
              <p className="text-2xl font-bold text-purple-600">RM 20M</p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-sm font-medium text-orange-800">Revenue</span>
              </div>
              <p className="text-2xl font-bold text-orange-600">RM 277M</p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-sm font-medium text-indigo-800">Total Equity</span>
              </div>
              <p className="text-2xl font-bold text-indigo-600">RM 70.5M</p>
            </div>
          </div>
        </div>

        {/* Credit Bureau Report Assessment & Recommendations */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-gray-900">Credit Bureau Report Assessment & Recommendations</h2>
              <div className="ml-3 flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4 text-purple-600 mr-1" />
                <span className="text-xs font-semibold text-purple-700">AI-Powered</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Generated from third-party reports
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-green-50/30 rounded-xl p-5 border border-green-100">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-green-600">Strengths</h3>
                <div className="ml-2 text-xs text-gray-500">(Click to view supporting data)</div>
              </div>
              <div className="divide-y divide-green-200">
                {strengthsData.map((strength, index) => (
                  <button
                    key={strength.id}
                    onClick={() => setSelectedStrength(strength.id)}
                    className={`w-full flex items-start text-left p-3 hover:bg-green-50 transition-colors group cursor-pointer ${index === 0 ? '' : ''}`}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-700 group-hover:text-gray-900">{strength.text}</span>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <FileText className="w-3 h-3 mr-1" />
                        <span>{strength.source}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-red-50/30 rounded-xl p-5 border border-red-100">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-red-600">Risks</h3>
                <div className="ml-2 text-xs text-gray-500">(Click to view supporting data)</div>
              </div>
              <div className="divide-y divide-red-200">
                {risksData.map((risk, index) => (
                  <button
                    key={risk.id}
                    onClick={() => setSelectedRisk(risk.id)}
                    className={`w-full flex items-start text-left p-3 hover:bg-red-50 transition-colors group cursor-pointer ${index === 0 ? '' : ''}`}
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-700 group-hover:text-gray-900">{risk.text}</span>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <FileText className="w-3 h-3 mr-1" />
                        <span>{risk.source}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-blue-50/30 rounded-xl p-5 border border-blue-100">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-blue-600">Recommendations</h3>
                <div className="ml-2 text-xs text-gray-500">(Click to view policy basis)</div>
              </div>
              <div className="divide-y divide-blue-200">
                {recommendationsData.map((recommendation, index) => (
                  <button
                    key={recommendation.id}
                    onClick={() => setSelectedRecommendation(recommendation.id)}
                    className={`w-full flex items-start text-left p-3 hover:bg-blue-50 transition-colors group cursor-pointer ${index === 0 ? '' : ''}`}
                  >
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-700 group-hover:text-gray-900">{recommendation.text}</span>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <FileText className="w-3 h-3 mr-1" />
                        <span>{recommendation.policyReference}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BU Finance Credit Rating */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
            BU Finance Credit Rating
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Credit Score */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="w-full h-full rounded-full border-8 border-blue-200 flex items-center justify-center bg-blue-50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">B</div>
                    <div className="text-sm text-blue-700">Rating</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Credit Rating</h3>
              <p className="text-sm text-gray-600">Good creditworthiness with moderate default risk</p>
            </div>

            {/* Credit Score */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="w-full h-full rounded-full border-8 border-blue-200 flex items-center justify-center bg-blue-50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">66</div>
                    <div className="text-sm text-blue-700">Score</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Credit Score</h3>
              <p className="text-sm text-gray-600">Good credit score from evaluation matrix assessment</p>
            </div>

            {/* Risk Level */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="w-full h-full rounded-full border-8 border-yellow-200 flex items-center justify-center bg-yellow-50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">MOD</div>
                    <div className="text-sm text-yellow-700">Risk</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Assessment</h3>
              <p className="text-sm text-gray-600">Moderate risk level based on financial evaluation</p>
            </div>
          </div>
        </div>

        {/* BU Finance Assessment & Recommendations */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-gray-900">BU Finance Assessment & Recommendations</h2>
              <div className="ml-3 flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4 text-purple-600 mr-1" />
                <span className="text-xs font-semibold text-purple-700">AI-Powered</span>
              </div>
            </div>
            <span className="text-xs text-gray-500">Generated from financial analysis</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Strengths */}
            <div className="bg-green-50/30 rounded-xl p-5 border border-green-100">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-green-600">Strengths</h3>
                <div className="ml-2 text-xs text-gray-500">(Click to view supporting data)</div>
              </div>
              <div className="divide-y divide-green-200">
                {buStrengthsData.map((strength, index) => (
                  <button
                    key={strength.id}
                    onClick={() => setSelectedBuStrength(strength.id)}
                    className={`w-full flex items-start text-left p-3 hover:bg-green-50 transition-colors group cursor-pointer ${index === 0 ? '' : ''}`}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-700 group-hover:text-gray-900">{strength.text}</span>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <FileText className="w-3 h-3 mr-1" />
                        <span>{strength.source}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Risks */}
            <div className="bg-red-50/30 rounded-xl p-5 border border-red-100">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-red-600">Risks</h3>
                <div className="ml-2 text-xs text-gray-500">(Click to view supporting data)</div>
              </div>
              <div className="divide-y divide-red-200">
                {buRisksData.map((risk, index) => (
                  <button
                    key={risk.id}
                    onClick={() => setSelectedBuRisk(risk.id)}
                    className={`w-full flex items-start text-left p-3 hover:bg-red-50 transition-colors group cursor-pointer ${index === 0 ? '' : ''}`}
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-700 group-hover:text-gray-900">{risk.text}</span>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <FileText className="w-3 h-3 mr-1" />
                        <span>{risk.source}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50/30 rounded-xl p-5 border border-blue-100">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-blue-600">Recommendations</h3>
                <div className="ml-2 text-xs text-gray-500">(Click to view policy basis)</div>
              </div>
              <div className="divide-y divide-blue-200">
                {buRecommendationsData.map((recommendation, index) => (
                  <button
                    key={recommendation.id}
                    onClick={() => setSelectedBuRecommendation(recommendation.id)}
                    className={`w-full flex items-start text-left p-3 hover:bg-blue-50 transition-colors group cursor-pointer ${index === 0 ? '' : ''}`}
                  >
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-700 group-hover:text-gray-900">{recommendation.text}</span>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <FileText className="w-3 h-3 mr-1" />
                        <span>{recommendation.policyReference}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="w-6 h-6 mr-3 text-blue-600" />
            Financial Summary
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenue Trends */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Revenue Trends</h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">2024 (Current):</span>
                  <span className="font-bold text-gray-900">RM 12.5M</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Growth Rate:</span>
                  <span className="font-bold text-green-600">+8.5% YoY</span>
                </div>
              </div>
            </div>

            {/* Profitability */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Profitability</h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Profit Margin:</span>
                  <span className="font-bold text-gray-900">14.8%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Profitability Ratio:</span>
                  <span className="font-bold text-gray-900">1.88%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Current Ratio:</span>
                  <span className="font-bold text-gray-900">1.34</span>
                </div>
              </div>
            </div>

            {/* Financial Position */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Financial Position</h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Shareholders' Fund:</span>
                  <span className="font-bold text-gray-900">RM 70.5M</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Debt-to-Equity:</span>
                  <span className="font-bold text-green-600">0.35</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Gearing Ratio:</span>
                  <span className="font-bold text-gray-900">0.64</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Evaluation Score Matrix */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
              Credit Evaluation Score Matrix
            </h2>
            <div className="text-right">
              <div className="text-sm text-gray-500">Evaluation Date: May 23, 2025</div>
              <div className="text-lg font-bold text-blue-600">Total Score: 66</div>
            </div>
          </div>

          {/* Company Info Header */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Customer Name</label>
                <p className="font-semibold text-gray-900">ONBOARD ONE (MALAYSIA) SDN. BHD.</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Credit Limit</label>
                <p className="font-semibold text-gray-900">RM 20,000,000</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Credit Term</label>
                <p className="font-semibold text-gray-900">30 Days</p>
              </div>
            </div>
          </div>

          {/* Scoring Criteria Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">No</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Criteria</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Scoring Criteria</th>
                  <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900">Score</th>
                  <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900">Max Score</th>
                  <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900">Assessment</th>
                  <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900">Score Achieved</th>
                </tr>
              </thead>
              <tbody>
                {/* 1. Profitability */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">1</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="font-semibold text-gray-900">Profitability</div>
                    <div className="text-xs text-gray-600 mt-1">Formula: (Profit before tax ÷ Turnover) × 100</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-xs">
                    <div>&lt;0: 0</div>
                    <div>0-0.50: 5</div>
                    <div>0.51-1.00: 8</div>
                    <div className="bg-yellow-100 px-1 rounded">1.01-2.00: 10</div>
                    <div>2.01-4.00: 15</div>
                    <div>&gt;4.00: 20</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">10</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">20</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">1.88%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">10</td>
                </tr>

                {/* 2. Current Ratio */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">2</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="font-semibold text-gray-900">Current Ratio</div>
                    <div className="text-xs text-gray-600 mt-1">Formula: Current Assets ÷ Current Liabilities</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-xs">
                    <div>&lt;0: 0</div>
                    <div>0-0.50: 4</div>
                    <div>0.51-1.00: 8</div>
                    <div>1.01-1.50: 10</div>
                    <div className="bg-yellow-100 px-1 rounded">1.51-2.00: 15</div>
                    <div>&gt;2.00: 20</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">10</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">20</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">1.34</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">10</td>
                </tr>

                {/* 3. Gearing */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">3</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="font-semibold text-gray-900">Gearing</div>
                    <div className="text-xs text-gray-600 mt-1">Formula: Total Liability ÷ Net Tangible Worth</div>
                    <div className="text-xs text-gray-500 mt-1">(Net Tangible Worth = Shareholders' Fund - Intangible Assets)</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-xs">
                    <div>≤0: 0</div>
                    <div>0.01-0.50: 15</div>
                    <div className="bg-yellow-100 px-1 rounded">0.51-1.00: 12</div>
                    <div>1.01-2.00: 9</div>
                    <div>2.01-3.00: 6</div>
                    <div>&gt;3.01: 3</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">12</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">15</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">0.64</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">12</td>
                </tr>

                {/* 4. Type of Business Entity */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">4</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="font-semibold text-gray-900">Type of Business Entity</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-xs">
                    <div>Sole Proprietor &amp; Partnership: 2</div>
                    <div className="bg-yellow-100 px-1 rounded">Private Ltd: 4</div>
                    <div>Sub. Of Public Ltd &amp; Private Ltd: 4</div>
                    <div>Public Ltd: 5</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">4</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">5</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">Private Ltd</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">4</td>
                </tr>

                {/* 5. Shareholders' Fund */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">5</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="font-semibold text-gray-900">Shareholders' Fund (in MYR)</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-xs">
                    <div>&lt;500K: 4</div>
                    <div>500K-1.0M: 6</div>
                    <div>1.0M-5.0M: 8</div>
                    <div className="bg-yellow-100 px-1 rounded">&gt;5.0M: 10</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">10</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">10</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">70,496,442.00</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">10</td>
                </tr>

                {/* 6. Business History with SDG */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">6</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="font-semibold text-gray-900">Business History (years) with SDG</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-xs">
                    <div>≤3: 3</div>
                    <div>4-10: 6</div>
                    <div>&gt;10: 10</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">0</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">10</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">SAP since 2019-2021</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">0</td>
                </tr>

                {/* 7. Years in Operation */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">7</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="font-semibold text-gray-900">Years in Operation</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-xs">
                    <div>≤5: 3</div>
                    <div>6-10: 6</div>
                    <div className="bg-yellow-100 px-1 rounded">&gt;10: 10</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">10</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">10</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">Start 13/05/1995 (30 Years)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">10</td>
                </tr>

                {/* 8. Country Risk */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">8</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="font-semibold text-gray-900">Country Risk</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-xs">
                    <div>High: 4</div>
                    <div>Sensitive: 6</div>
                    <div>Medium: 8</div>
                    <div className="bg-yellow-100 px-1 rounded">Low: 10</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">10</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">10</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">Malaysia</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">10</td>
                </tr>

                {/* 9. Sanction Check */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">9</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="font-semibold text-gray-900">Sanction Check</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-xs">
                    <div>Yes (subject to sanction): NA</div>
                    <div className="bg-yellow-100 px-1 rounded">No (not subject to sanction): NA</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">No</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">No</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">No</td>
                </tr>

                {/* Total Row */}
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold" colSpan={6}>Total</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600 text-lg">66</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Credit Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Bulk / Upstream Sales */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Credit Matrix - For Bulk / Upstream Sales</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-center text-sm font-semibold">Score Range</th>
                      <th className="border border-gray-300 px-4 py-2 text-center text-sm font-semibold">Credit Rating</th>
                      <th className="border border-gray-300 px-4 py-2 text-center text-sm font-semibold">Credit Limit (MYR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">76 - 100</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold">A</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center font-medium">30,000,000</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2 text-center font-semibold">56 - 75</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">B</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center font-bold text-blue-600">20,000,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">45 - 55</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">C</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center font-medium">10,000,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">Below 45</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-semibold">D</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center font-medium">nil</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* For Other Sales */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Credit Matrix - For Other Sales*</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-center text-sm font-semibold">Score Range</th>
                      <th className="border border-gray-300 px-4 py-2 text-center text-sm font-semibold">Credit Rating</th>
                      <th className="border border-gray-300 px-4 py-2 text-center text-sm font-semibold">Credit Limit (MYR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">76 - 100</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold">A</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center font-medium">10,000,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">56 - 75</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">B</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center font-medium">7,500,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">45 - 55</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">C</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center font-medium">3,000,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">Below 45</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-semibold">D</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center font-medium">nil</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">*Applies to Differentiated; Jerry Can; Flexibag; and other businesses</p>
            </div>
          </div>

          {/* Reviewed By */}
          <div className="mt-6 text-right">
            <div className="inline-block border-t border-gray-300 pt-2">
              <p className="text-sm text-gray-600">Reviewed by Finance Department</p>
              <p className="font-semibold text-gray-900">Adrian Low Mun Han</p>
              <p className="text-sm text-gray-500">HOF</p>
            </div>
          </div>
        </div>

        {/* Report Footer */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Report generated on <strong>May 20, 2025</strong> by CCRA System
              </p>
              <p className="text-xs text-gray-500 mt-1">
                This report is confidential and intended for authorized personnel only.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Report ID: CCR-2025-001237</p>
              <p className="text-xs text-gray-500">Valid for 90 days from generation date</p>
            </div>
          </div>
        </div>
          </div>

          {/* Right Column - 25% */}
          <div className="w-1/4 mt-[100px]">
            <RightSidebar companyName="ONBOARD ONE (MALAYSIA) SDN. BHD." />
          </div>
        </div>
      </main>

      {/* Strength Details Modal */}
      {selectedStrength && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-xl font-bold text-gray-900">Supporting Data</h3>
              <button
                onClick={() => setSelectedStrength(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              {strengthsData.find(s => s.id === selectedStrength) && (
                <>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">{strengthsData.find(s => s.id === selectedStrength)?.text}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Report Type</h4>
                    <p className="text-gray-900">{strengthsData.find(s => s.id === selectedStrength)?.supportingData.reportType}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Data Points</h4>
                    <div className="space-y-3">
                      {strengthsData.find(s => s.id === selectedStrength)?.supportingData.dataPoints.map((point, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-medium text-gray-700">{point.label}</span>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">{point.status}</span>
                          </div>
                          <p className="text-gray-900 font-semibold">{point.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Report Date</h4>
                      <p className="text-sm text-gray-900">{strengthsData.find(s => s.id === selectedStrength)?.supportingData.reportDate}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Verified By</h4>
                      <p className="text-sm text-gray-900">{strengthsData.find(s => s.id === selectedStrength)?.supportingData.verifiedBy}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Risk Details Modal */}
      {selectedRisk && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-xl font-bold text-gray-900">Supporting Data</h3>
              <button
                onClick={() => setSelectedRisk(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              {risksData.find(r => r.id === selectedRisk) && (
                <>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">{risksData.find(r => r.id === selectedRisk)?.text}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Report Type</h4>
                    <p className="text-gray-900">{risksData.find(r => r.id === selectedRisk)?.supportingData.reportType}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Data Points</h4>
                    <div className="space-y-3">
                      {risksData.find(r => r.id === selectedRisk)?.supportingData.dataPoints.map((point, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-medium text-gray-700">{point.label}</span>
                            <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">{point.status}</span>
                          </div>
                          <p className="text-gray-900 font-semibold">{point.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Report Date</h4>
                      <p className="text-sm text-gray-900">{risksData.find(r => r.id === selectedRisk)?.supportingData.reportDate}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Verified By</h4>
                      <p className="text-sm text-gray-900">{risksData.find(r => r.id === selectedRisk)?.supportingData.verifiedBy}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Recommendation Details Modal */}
      {selectedRecommendation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-xl font-bold text-gray-900">Policy Basis</h3>
              <button
                onClick={() => setSelectedRecommendation(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              {recommendationsData.find(r => r.id === selectedRecommendation) && (
                <>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">{recommendationsData.find(r => r.id === selectedRecommendation)?.text}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Policy Source</h4>
                    <p className="text-gray-900">{recommendationsData.find(r => r.id === selectedRecommendation)?.supportingData.policySource}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Rationale</h4>
                    <p className="text-gray-700">{recommendationsData.find(r => r.id === selectedRecommendation)?.supportingData.rationale}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Details</h4>
                    <div className="space-y-3">
                      {recommendationsData.find(r => r.id === selectedRecommendation)?.supportingData.details.map((detail, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-medium text-gray-700">{detail.label}</span>
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{detail.status}</span>
                          </div>
                          <p className="text-gray-900 font-semibold">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                    <h4 className="text-sm font-semibold text-amber-900 mb-2">Policy Extract</h4>
                    <p className="text-sm text-amber-800">{recommendationsData.find(r => r.id === selectedRecommendation)?.supportingData.policyExtract}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Additional Notes</h4>
                    <p className="text-sm text-gray-600">{recommendationsData.find(r => r.id === selectedRecommendation)?.supportingData.additionalNotes}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* BU Finance Strength Details Modal */}
      {selectedBuStrength && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-xl font-bold text-gray-900">Supporting Data</h3>
              <button
                onClick={() => setSelectedBuStrength(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              {buStrengthsData.find(s => s.id === selectedBuStrength) && (
                <>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">{buStrengthsData.find(s => s.id === selectedBuStrength)?.text}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Report Type</h4>
                    <p className="text-gray-900">{buStrengthsData.find(s => s.id === selectedBuStrength)?.supportingData.reportType}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Data Points</h4>
                    <div className="space-y-3">
                      {buStrengthsData.find(s => s.id === selectedBuStrength)?.supportingData.dataPoints.map((point, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-600">{point.label}:</span>
                          <div className="text-right">
                            <span className="font-semibold text-gray-900">{point.value}</span>
                            <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">{point.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Calculation Date</h4>
                      <p className="text-sm text-gray-900">{buStrengthsData.find(s => s.id === selectedBuStrength)?.supportingData.calculationDate}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Verified By</h4>
                      <p className="text-sm text-gray-900">{buStrengthsData.find(s => s.id === selectedBuStrength)?.supportingData.verifiedBy}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* BU Finance Risk Details Modal */}
      {selectedBuRisk && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-xl font-bold text-gray-900">Risk Analysis</h3>
              <button
                onClick={() => setSelectedBuRisk(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              {buRisksData.find(r => r.id === selectedBuRisk) && (
                <>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">{buRisksData.find(r => r.id === selectedBuRisk)?.text}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Report Type</h4>
                    <p className="text-gray-900">{buRisksData.find(r => r.id === selectedBuRisk)?.supportingData.reportType}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Data Points</h4>
                    <div className="space-y-3">
                      {buRisksData.find(r => r.id === selectedBuRisk)?.supportingData.dataPoints.map((point, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-600">{point.label}:</span>
                          <div className="text-right">
                            <span className="font-semibold text-gray-900">{point.value}</span>
                            <span className="ml-2 text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">{point.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Calculation Date</h4>
                      <p className="text-sm text-gray-900">{buRisksData.find(r => r.id === selectedBuRisk)?.supportingData.calculationDate}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Verified By</h4>
                      <p className="text-sm text-gray-900">{buRisksData.find(r => r.id === selectedBuRisk)?.supportingData.verifiedBy}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* BU Finance Recommendation Details Modal */}
      {selectedBuRecommendation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-xl font-bold text-gray-900">Policy Basis</h3>
              <button
                onClick={() => setSelectedBuRecommendation(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              {buRecommendationsData.find(r => r.id === selectedBuRecommendation) && (
                <>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">{buRecommendationsData.find(r => r.id === selectedBuRecommendation)?.text}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Policy Source</h4>
                    <p className="text-gray-900">{buRecommendationsData.find(r => r.id === selectedBuRecommendation)?.supportingData.policySource}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Rationale</h4>
                    <p className="text-gray-700">{buRecommendationsData.find(r => r.id === selectedBuRecommendation)?.supportingData.rationale}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Supporting Criteria</h4>
                    <div className="space-y-3">
                      {buRecommendationsData.find(r => r.id === selectedBuRecommendation)?.supportingData.details.map((detail, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-600">{detail.label}:</span>
                          <div className="text-right">
                            <span className="font-semibold text-gray-900">{detail.value}</span>
                            <span className="ml-2 text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{detail.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">Policy Extract</h4>
                    <p className="text-sm text-gray-700 italic">{buRecommendationsData.find(r => r.id === selectedBuRecommendation)?.supportingData.policyExtract}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Additional Notes</h4>
                    <p className="text-sm text-gray-600">{buRecommendationsData.find(r => r.id === selectedBuRecommendation)?.supportingData.additionalNotes}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditRatingReport;