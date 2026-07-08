import React, { useState } from 'react';
import { BarChart3, TrendingUp, CheckCircle, Shield, Building2, User, Eye, AlertTriangle, CreditCard, X, FileText, Sparkles, ArrowLeft, Award, DollarSign } from 'lucide-react';
import Header from './Header';
import DevNote from './DevNote';
import RightSidebar from './RightSidebar';

interface IOM_PreviewProps {
  onBackToSearch: () => void;
  onNavigate: (page: 'dashboard' | 'search' | 'results' | 'db-report' | 'order-commercial' | 'kyc6-sanction' | 'credit-rating-calculation' | 'credit-rating' | 'iom' | 'iom-b2b-b1m' | 'analytics' | 'project-doc') => void;
}

const IOM_Preview: React.FC<IOM_PreviewProps> = ({ onBackToSearch, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'company' | 'directors' | 'pep' | 'adverse' | 'banking'>('summary');
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [selectedRecommendation, setSelectedRecommendation] = useState<string | null>(null);
  const [selectedBuStrength, setSelectedBuStrength] = useState<string | null>(null);
  const [selectedBuRisk, setSelectedBuRisk] = useState<string | null>(null);
  const [selectedBuRecommendation, setSelectedBuRecommendation] = useState<string | null>(null);

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
      <Header currentPage="iom" onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="relative w-full px-4 sm:px-6 lg:px-8 py-8">
        <DevNote
          note="IOM Preview screen. Internal Order Memo consolidates all assessment data into one approval document. Sections: Customer Profile, Order Details, Credit Assessment Summary, Risk Factors, Recommendation. This is a read-only preview before formal submission to approval workflow."
          title="IOM Preview"
          position="top-right"
        />
        <div className="flex gap-6">
          {/* Left Column - 75% */}
          <div className="w-3/4">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <button
                onClick={onBackToSearch}
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Search
              </button>
              <h1 className="text-3xl font-bold text-gray-900">IOM Preview</h1>
            </div>
          </div>

          {/* Status Card */}
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

          {/* Status Boxes */}
          <div className="grid grid-cols-6 gap-3">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                <span className="text-xs font-medium text-green-900 mb-1">Third Party Search</span>
                <p className="text-lg font-bold text-green-600">COMPLETE</p>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
              <div className="flex flex-col items-center text-center">
                <Shield className="w-5 h-5 text-blue-600 mb-2" />
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
                <Shield className="w-5 h-5 text-green-600 mb-2" />
                <span className="text-xs font-medium text-green-900 mb-1">Sanctions Check</span>
                <p className="text-lg font-bold text-green-600">CLEAR</p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
              <div className="flex flex-col items-center text-center">
                <BarChart3 className="w-5 h-5 text-green-600 mb-2" />
                <span className="text-xs font-medium text-green-900 mb-1">Credit Rating</span>
                <p className="text-lg font-bold text-green-600">COMPLETE</p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
              <div className="flex flex-col items-center text-center">
                <FileText className="w-5 h-5 text-green-600 mb-2" />
                <span className="text-xs font-medium text-green-900 mb-1">IOM</span>
                <p className="text-lg font-bold text-green-600">COMPLETE</p>
              </div>
            </div>
          </div>

          {/* Information Availability Progress */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Information Availability</span>
              <span className="text-sm font-bold text-blue-600">100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Financial Data: Complete</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Credit Analysis: Complete</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Risk Assessment: Complete</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Requester Information */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Requester Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Requested By</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <span className="text-gray-900 font-medium">Bruce Lee</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Start Date</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <span className="text-gray-900 font-medium">2025-11-05</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Segment</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <span className="text-gray-900 font-medium">B2B</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Refinery</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <span className="text-gray-900 font-medium">Langat Refinery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Customer</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <span className="text-gray-900 font-medium">ONBOARD ONE (MALAYSIA) SDN. BHD.</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Country</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <span className="text-gray-900 font-medium">Malaysia</span>
                  </div>
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
            {/* Strengths */}
            <div className="bg-green-50 p-4 rounded-xl">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-green-600">Strengths</h3>
                <div className="ml-2 text-xs text-gray-500">(Click to view supporting data)</div>
              </div>
              <div className="space-y-3">
                {strengthsData.map((strength) => (
                  <button
                    key={strength.id}
                    onClick={() => setSelectedStrength(strength.id)}
                    className="w-full flex items-start text-left p-3 rounded-lg hover:bg-green-50 transition-colors group cursor-pointer border border-transparent hover:border-green-200"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">{strength.text}</span>
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
            <div className="bg-red-50 p-4 rounded-xl">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-red-600">Risks</h3>
                <div className="ml-2 text-xs text-gray-500">(Click to view supporting data)</div>
              </div>
              <div className="space-y-3">
                {risksData.map((risk) => (
                  <button
                    key={risk.id}
                    onClick={() => setSelectedRisk(risk.id)}
                    className="w-full flex items-start text-left p-3 rounded-lg hover:bg-red-50 transition-colors group cursor-pointer border border-transparent hover:border-red-200"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">{risk.text}</span>
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
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-blue-600">Recommendations</h3>
                <div className="ml-2 text-xs text-gray-500">(Click to view policy basis)</div>
              </div>
              <div className="space-y-3">
                {recommendationsData.map((recommendation) => (
                  <button
                    key={recommendation.id}
                    onClick={() => setSelectedRecommendation(recommendation.id)}
                    className="w-full flex items-start text-left p-3 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer border border-transparent hover:border-blue-200"
                  >
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">{recommendation.text}</span>
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

        {/* BU Finance Credit Rating Summary */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">BU Finance Credit Rating</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Credit Rating */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <Award className="w-6 h-6 text-blue-600" />
                <span className="text-xs font-medium text-blue-700">Credit Rating</span>
              </div>
              <div className="flex items-center justify-center my-6">
                <div className="w-24 h-24 rounded-full border-8 border-blue-200 bg-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">B</div>
                    <div className="text-xs text-blue-700">Rating</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-center text-gray-700 font-medium">Good creditworthiness with moderate default risk</p>
            </div>

            {/* Credit Score */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="flex items-center justify-between mb-3">
                <BarChart3 className="w-6 h-6 text-green-600" />
                <span className="text-xs font-medium text-green-700">Credit Score</span>
              </div>
              <div className="flex items-center justify-center my-6">
                <div className="w-24 h-24 rounded-full border-8 border-green-200 bg-green-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">66</div>
                    <div className="text-xs text-green-700">Score</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-center text-gray-700 font-medium">Good credit score from evaluation matrix assessment</p>
            </div>

            {/* Risk Assessment */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-center justify-between mb-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <span className="text-xs font-medium text-yellow-700">Risk Level</span>
              </div>
              <div className="flex items-center justify-center my-6">
                <div className="w-24 h-24 rounded-full border-8 border-yellow-200 bg-yellow-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">MOD</div>
                    <div className="text-xs text-yellow-700">Risk</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-center text-gray-700 font-medium">Moderate risk level based on financial evaluation</p>
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

        {/* Credit Request Details */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Credit Request Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Requested Credit Limit</label>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <span className="text-gray-900 font-medium">RM 15,000,000</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Requested Payment Terms</label>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <span className="text-gray-900 font-medium">30 Days</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Recommended Credit Limit</label>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <span className="text-gray-900 font-medium">RM 20,000,000</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Recommended Payment Terms</label>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <span className="text-gray-900 font-medium">30 Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
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

        {/* Supporting Data Modal */}
        {selectedStrength && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Supporting Data</h3>
                </div>
                <button
                  onClick={() => setSelectedStrength(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-6">
                {strengthsData.find(s => s.id === selectedStrength) && (() => {
                  const data = strengthsData.find(s => s.id === selectedStrength)!;
                  return (
                    <>
                      <div className="mb-6">
                        <div className="flex items-start mb-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-lg text-gray-900 font-medium">{data.text}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-blue-900">{data.supportingData.reportType}</h4>
                            <p className="text-sm text-blue-700 mt-1">Source: {data.supportingData.verifiedBy}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-blue-600">Report Date</p>
                            <p className="text-sm font-medium text-blue-900">{data.supportingData.reportDate}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-4">Detailed Metrics</h4>
                        {data.supportingData.dataPoints.map((point, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-600">{point.label}</p>
                                <p className="text-lg font-semibold text-gray-900 mt-1">{point.value}</p>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                point.status === 'Excellent' || point.status === 'Strong' || point.status === 'Clear' || point.status === 'Verified'
                                  ? 'bg-green-100 text-green-700'
                                  : point.status === 'Good' || point.status === 'Healthy' || point.status === 'Growing' || point.status === 'Active'
                                  ? 'bg-blue-100 text-blue-700'
                                  : point.status === 'Low Risk' || point.status === 'Manageable' || point.status === 'Historical'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}>
                                {point.status}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-xs text-gray-600">
                          <strong>Note:</strong> This data is sourced from third-party credit reporting agencies and reflects the customer's
                          financial standing at the time of report generation. This customer is being onboarded for the first time and has
                          no prior transaction history with our organization.
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Risk Data Modal */}
        {selectedRisk && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Risk Analysis Data</h3>
                </div>
                <button
                  onClick={() => setSelectedRisk(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-6">
                {risksData.find(r => r.id === selectedRisk) && (() => {
                  const data = risksData.find(r => r.id === selectedRisk)!;
                  return (
                    <>
                      <div className="mb-6">
                        <div className="flex items-start mb-3">
                          <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-lg text-gray-900 font-medium">{data.text}</p>
                        </div>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-red-900">{data.supportingData.reportType}</h4>
                            <p className="text-sm text-red-700 mt-1">Source: {data.supportingData.verifiedBy}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-red-600">Report Date</p>
                            <p className="text-sm font-medium text-red-900">{data.supportingData.reportDate}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-4">Risk Indicators</h4>
                        {data.supportingData.dataPoints.map((point, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-600">{point.label}</p>
                                <p className="text-lg font-semibold text-gray-900 mt-1">{point.value}</p>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                point.status === 'Risk' || point.status === 'Warning' || point.status === 'Concern' || point.status === 'Significant Decline'
                                  ? 'bg-red-100 text-red-700'
                                  : point.status === 'Moderate Risk' || point.status === 'Monitor' || point.status === 'Below Average' || point.status === 'Risk Factor'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : point.status === 'Historical' || point.status === 'Declined' || point.status === 'Contracting'
                                  ? 'bg-gray-100 text-gray-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}>
                                {point.status}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                        <p className="text-xs text-red-900">
                          <strong>Risk Notice:</strong> This data is sourced from third-party credit reporting agencies and highlights
                          potential areas of concern. These risk factors should be carefully evaluated in conjunction with strengths
                          and overall business relationship considerations before making credit decisions.
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Recommendation Policy Modal */}
        {selectedRecommendation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Credit Policy Basis</h3>
                </div>
                <button
                  onClick={() => setSelectedRecommendation(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-6">
                {recommendationsData.find(r => r.id === selectedRecommendation) && (() => {
                  const data = recommendationsData.find(r => r.id === selectedRecommendation)!;
                  return (
                    <>
                      <div className="mb-6">
                        <div className="flex items-start mb-3">
                          <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-lg text-gray-900 font-medium">{data.text}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-blue-900">{data.supportingData.policySource}</h4>
                            <p className="text-sm text-blue-700 mt-1">Reference: {data.policyReference}</p>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 mt-3">
                          <p className="text-xs font-semibold text-gray-600 mb-2">Policy Extract:</p>
                          <p className="text-sm text-gray-800 italic">{data.supportingData.policyExtract}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Rationale</h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{data.supportingData.rationale}</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Supporting Metrics</h4>
                        {data.supportingData.details.map((detail, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-600">{detail.label}</p>
                                <p className="text-lg font-semibold text-gray-900 mt-1">{detail.value}</p>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                detail.status === 'Excellent' || detail.status === 'Favorable' || detail.status === 'Approved' || detail.status === 'Strategic' || detail.status === 'High Priority'
                                  ? 'bg-green-100 text-green-700'
                                  : detail.status === 'Meets Threshold' || detail.status === 'Standard' || detail.status === 'Within LOA' || detail.status === 'Compliant' || detail.status === 'High Volume' || detail.status === 'Recommended' || detail.status === 'Within Authority'
                                  ? 'bg-blue-100 text-blue-700'
                                  : detail.status === 'Mandatory' || detail.status === 'Required' || detail.status === 'Scheduled' || detail.status === 'Ongoing'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}>
                                {detail.status}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-xs font-semibold text-green-800 mb-2">Implementation Notes:</p>
                        <p className="text-sm text-green-700">{data.supportingData.additionalNotes}</p>
                      </div>

                      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-xs text-gray-600">
                          <strong>Note:</strong> All recommendations are generated based on SDPB Credit Policies and Procedures (Version 3, December 2021)
                          and current credit evaluation scoring matrix. This is a new customer onboarding with no prior transaction history with our organization.
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Request Notes */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Request Notes</h2>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Additional Notes / Comments</label>
            <div className="bg-gray-100 px-4 py-3 rounded-lg">
              <p className="text-gray-900 leading-relaxed">
                Customer has been trading palm oil products for over 8 years with consistent growth in revenue. 
                They have established relationships with major refineries in Southeast Asia and maintain strong 
                distribution networks across Malaysia and Singapore. The company has demonstrated reliable payment 
                history with previous suppliers and shows strong financial fundamentals. 
                <br /><br />
                Recommended to approve the credit facility given their solid track record, growing market presence, 
                and the strategic importance of palm oil trading in the region. The requested credit limit aligns 
                with their projected monthly trading volumes and seasonal fluctuations in the commodity market.
                <br /><br />
                Risk mitigation: Regular quarterly reviews recommended due to commodity price volatility. 
                Consider implementing automated credit monitoring for early warning of any financial stress indicators.
              </p>
            </div>
          </div>
        </div>

        {/* Credit Rating Calculation Details */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Credit Rating Calculation Details</h2>
          
          {/* AI Analysis Summary */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold text-sm">AI</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">AI Analysis Summary</h3>
            </div>
            
            <p className="text-gray-600 mb-8">
              Based on the company's financial data, our AI engine has calculated the following metrics. Use these as reference values when performing your manual calculations below.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* AI Profitability Analysis */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 text-green-600 mr-2">📈</div>
                  <h4 className="text-lg font-semibold text-green-800">1. AI Profitability Analysis</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Profit Before Tax (RM)</label>
                    <div className="bg-white px-4 py-3 rounded-lg border mt-1">
                      <span className="font-medium text-gray-900">1,850,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Turnover (RM)</label>
                    <div className="bg-white px-4 py-3 rounded-lg border mt-1">
                      <span className="font-medium text-gray-900">12,500,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-green-700">Assessment (%):</span>
                    <span className="text-lg font-bold text-green-800">14.80%</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-green-700">Score:</span>
                    <span className="text-2xl font-bold text-green-800">80</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <p className="text-xs text-green-600 mt-2 italic">Formula: (Profit Before Tax ÷ Turnover) × 100</p>
                </div>
              </div>

              {/* AI Current Ratio Analysis */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 text-blue-600 mr-2">📊</div>
                  <h4 className="text-lg font-semibold text-blue-800">2. AI Current Ratio Analysis</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Current Assets (RM)</label>
                    <div className="bg-white px-4 py-3 rounded-lg border mt-1">
                      <span className="font-medium text-gray-900">8,750,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Current Liabilities (RM)</label>
                    <div className="bg-white px-4 py-3 rounded-lg border mt-1">
                      <span className="font-medium text-gray-900">4,200,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-700">Assessment (Ratio):</span>
                    <span className="text-lg font-bold text-blue-800">2.08</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-blue-700">Score:</span>
                    <span className="text-2xl font-bold text-blue-800">90</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <p className="text-xs text-blue-600 mt-2 italic">Formula: Current Assets ÷ Current Liabilities</p>
                </div>
              </div>

              {/* AI Gearing Analysis */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 text-purple-600 mr-2">📈</div>
                  <h4 className="text-lg font-semibold text-purple-800">3. AI Gearing Analysis</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Total Liability (RM)</label>
                    <div className="bg-white px-4 py-3 rounded-lg border mt-1">
                      <span className="font-medium text-gray-900">24,673,558</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Shareholder's Fund (RM)</label>
                    <div className="bg-white px-4 py-3 rounded-lg border mt-1">
                      <span className="font-medium text-gray-900">70,496,442</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Intangible Assets (RM)</label>
                    <div className="bg-white px-4 py-3 rounded-lg border mt-1">
                      <span className="font-medium text-gray-900">0</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-purple-700">Assessment (Ratio):</span>
                    <span className="text-lg font-bold text-purple-800">0.35</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-purple-700">Score:</span>
                    <span className="text-2xl font-bold text-purple-800">90</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <p className="text-xs text-purple-600 mt-2 italic">Formula: Total Liability ÷ (Shareholder's Fund - Intangible Assets)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Manual Calculation */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold text-sm">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Manual Calculation</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Manual Profitability Analysis */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 text-green-600 mr-2">📈</div>
                  <h4 className="text-lg font-semibold text-green-800">1. Profitability Analysis</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Profit Before Tax (RM)</label>
                    <input
                      type="text"
                      defaultValue="1,850,000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mt-1"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Turnover (RM)</label>
                    <input
                      type="text"
                      defaultValue="12,500,000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mt-1"
                    />
                  </div>
                </div>

                <div className="bg-green-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-green-700">Profitability Ratio:</span>
                    <span className="text-lg font-bold text-green-800">14.80%</span>
                  </div>
                  <p className="text-xs text-green-600 italic">Formula: (PBT ÷ Turnover) × 100</p>
                </div>
              </div>

              {/* Manual Current Ratio Analysis */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 text-blue-600 mr-2">📊</div>
                  <h4 className="text-lg font-semibold text-blue-800">2. Current Ratio Analysis</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Current Assets (RM)</label>
                    <input
                      type="text"
                      defaultValue="8,750,000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Current Liabilities (RM)</label>
                    <input
                      type="text"
                      defaultValue="4,200,000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1"
                    />
                  </div>
                </div>

                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-700">Current Ratio:</span>
                    <span className="text-lg font-bold text-blue-800">2.08</span>
                  </div>
                  <p className="text-xs text-blue-600 italic">Formula: Current Assets ÷ Current Liabilities</p>
                </div>
              </div>

              {/* Manual Gearing Analysis */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 text-purple-600 mr-2">📈</div>
                  <h4 className="text-lg font-semibold text-purple-800">3. Gearing Analysis</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Total Liability (RM)</label>
                    <input
                      type="text"
                      defaultValue="24,673,558"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mt-1"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Shareholders' Fund (RM)</label>
                    <input
                      type="text"
                      defaultValue="70,496,442"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mt-1"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Intangible Assets (RM)</label>
                    <input
                      type="text"
                      defaultValue="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mt-1"
                    />
                  </div>
                </div>

                <div className="bg-purple-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-purple-700">Gearing Ratio:</span>
                    <span className="text-lg font-bold text-purple-800">0.35</span>
                  </div>
                  <p className="text-xs text-purple-600 italic">Formula: Total Liability ÷ Net Tangible Worth</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Evaluation Score Matrix */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Credit Evaluation Score Matrix</h2>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">Evaluation Date: May 23, 2025</div>
              <div className="text-2xl font-bold text-blue-600">Total Score: 66</div>
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
                  <th className="border border-gray-300 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Criteria</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scoring Criteria</th>
                  <th className="border border-gray-300 px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="border border-gray-300 px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Max Score</th>
                  <th className="border border-gray-300 px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Assessment</th>
                  <th className="border border-gray-300 px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Score Achieved</th>
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
                    <div>Sole Proprietor & Partnership: 2</div>
                    <div className="bg-yellow-100 px-1 rounded">Private Ltd: 4</div>
                    <div>Sub. Of Public Ltd & Private Ltd: 4</div>
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

          {/* Signature Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Evaluated By</h4>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Name</label>
                  <p className="text-sm font-semibold text-gray-900">Adrian Low Mun Han</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Designation</label>
                  <p className="text-sm text-gray-900">Manager, Finance & Purchasing</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Department</label>
                  <p className="text-sm text-gray-900">CONSUMER SALES (B2C)</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Evaluated On</label>
                  <p className="text-sm text-gray-900">May 23, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KYC & Sanctions Report Card */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                KYC6 & Sanction Report
              </h1>
              <p className="text-gray-600">ONBOARD ONE (MALAYSIA) SDN. BHD.</p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-green-600 mb-2">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">Verified</span>
              </div>
              <p className="text-sm text-gray-500">Report Generated: May 20, 2025</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('summary')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'summary'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Shield className="w-4 h-4 inline mr-2" />
                Summary
              </button>
              <button
                onClick={() => setActiveTab('company')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'company'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Building2 className="w-4 h-4 inline mr-2" />
                Company
              </button>
              <button
                onClick={() => setActiveTab('directors')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'directors'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <User className="w-4 h-4 inline mr-2" />
                Directors
              </button>
              <button
                onClick={() => setActiveTab('pep')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'pep'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Eye className="w-4 h-4 inline mr-2" />
                PEP
              </button>
              <button
                onClick={() => setActiveTab('adverse')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'adverse'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                Adverse Media
              </button>
              <button
                onClick={() => setActiveTab('banking')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'banking'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <CreditCard className="w-4 h-4 inline mr-2" />
                Banking
              </button>
            </nav>
          </div>

          {/* Summary Tab */}
          {activeTab === 'summary' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sanctions Screening Results</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-green-800">Company Screening</h4>
                    <p className="text-sm text-green-600">ONBOARD ONE (MALAYSIA) SDN. BHD.</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">OFAC SDN List:</span>
                    <span className="text-green-600 font-medium">Clear</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">UN Sanctions List:</span>
                    <span className="text-green-600 font-medium">Clear</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">EU Sanctions List:</span>
                    <span className="text-green-600 font-medium">Clear</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">UK Sanctions List:</span>
                    <span className="text-green-600 font-medium">Clear</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-green-800">Directors Screening</h4>
                    <p className="text-sm text-green-600">All Key Personnel</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Luke Skywalker</span>
                    <span className="text-green-600 font-medium">Clear</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Princess Leia Organa</span>
                    <span className="text-green-600 font-medium">Clear</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Han Solo</span>
                    <span className="text-green-600 font-medium">Clear</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Screening Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-blue-700">Lists Screened</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-green-700">Matches Found</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4</div>
                  <div className="text-blue-700">Entities Screened</div>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Company Tab */}
          {activeTab === 'company' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Company Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Company Name</label>
                    <p className="text-gray-900 font-medium">ONBOARD ONE (MALAYSIA) SDN. BHD.</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Registration Number</label>
                    <p className="text-gray-900 font-medium">201501012345</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Country of Origin</label>
                    <p className="text-gray-900 font-medium">Malaysia</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Incorporation Date</label>
                    <p className="text-gray-900 font-medium">January 15, 2015</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Business Nature</label>
                    <p className="text-gray-900 font-medium">TRADING OF PALM OIL AND RELATED PRODUCTS.</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Registered Address</label>
                    <p className="text-gray-900">No. 123, Jalan Bukit Bintang, 55100 Kuala Lumpur, Malaysia</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Company Website</label>
                    <p className="text-gray-900">
                      <a href="https://www.onboardone.com.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                        https://www.onboardone.com.my
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <div>
                    <h4 className="font-semibold text-green-800">Company Verification Status</h4>
                    <p className="text-sm text-green-700">All company information has been verified and is current as of May 20, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Directors Tab */}
          {activeTab === 'directors' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Directors & Key Personnel</h3>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <User className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Luke Skywalker</h4>
                        <p className="text-sm text-blue-600 font-medium">Managing Director</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-green-600 font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <label className="font-medium text-gray-500">IC Number</label>
                      <p className="text-gray-900">770519-14-2001</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Appointed Date</label>
                      <p className="text-gray-900">January 15, 2015</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Status</label>
                      <p className="text-green-600 font-medium">Active</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-green-700">Background verification completed - No adverse findings</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <User className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Princess Leia Organa</h4>
                        <p className="text-sm text-purple-600 font-medium">Executive Director</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-green-600 font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <label className="font-medium text-gray-500">IC Number</label>
                      <p className="text-gray-900">561019-08-1956</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Appointed Date</label>
                      <p className="text-gray-900">March 10, 2015</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Status</label>
                      <p className="text-green-600 font-medium">Active</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-green-700">Background verification completed - No adverse findings</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        <User className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Han Solo</h4>
                        <p className="text-sm text-gray-600 font-medium">Company Secretary</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-green-600 font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <label className="font-medium text-gray-500">IC Number</label>
                      <p className="text-gray-900">420729-10-1942</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Appointed Date</label>
                      <p className="text-gray-900">January 15, 2015</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Status</label>
                      <p className="text-green-600 font-medium">Active</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-green-700">Background verification completed - No adverse findings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PEP Tab */}
          {activeTab === 'pep' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Politically Exposed Persons (PEP) Screening</h3>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-green-800">PEP Screening Results</h4>
                    <p className="text-sm text-green-600">All directors and key personnel cleared</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-gray-900">Luke Skywalker</h5>
                      <p className="text-sm text-gray-600">Managing Director</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-green-600 font-medium">Not PEP</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-gray-900">Princess Leia Organa</h5>
                      <p className="text-sm text-gray-600">Executive Director</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-green-600 font-medium">Not PEP</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-gray-900">Han Solo</h5>
                      <p className="text-sm text-gray-600">Company Secretary</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-green-600 font-medium">Not PEP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Adverse Media Tab */}
          {activeTab === 'adverse' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adverse Media Screening</h3>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-green-800">Media Screening Results</h4>
                    <p className="text-sm text-green-600">No adverse media coverage found</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-blue-700">Sources Monitored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">0</div>
                    <div className="text-green-700">Adverse Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">30</div>
                    <div className="text-blue-700">Days Coverage</div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Search Categories</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Financial Crime</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Corruption</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Money Laundering</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Fraud</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Tax Evasion</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Regulatory Issues</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Legal Proceedings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Sanctions Violations</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Banking Tab */}
          {activeTab === 'banking' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Banking Information Verification</h3>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-green-800">Bank Account Verification</h4>
                    <p className="text-sm text-green-600">All banking information verified and sanctions cleared</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Primary Bank Account</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Bank Name</label>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-900 font-medium">Maybank Berhad</p>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Account Holder</label>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-900 font-medium">ONBOARD ONE (MALAYSIA) SDN. BHD.</p>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Account Number</label>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-900 font-medium">5142-1234-5678</p>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-xs text-green-600">Active</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">SWIFT Code</label>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-900 font-medium">MBBEMYKL</p>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-xs text-green-600">Valid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Bank Branch Information</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Branch Name</label>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-900">Maybank Bukit Bintang Branch</p>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Branch Address</label>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-900">No. 123, Jalan Bukit Bintang, 55100 Kuala Lumpur, Malaysia</p>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">IBAN</label>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-900 font-medium">1234567890</p>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-xs text-green-600">Valid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Banking Sanctions Screening</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Bank Sanctions Check</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Maybank Berhad:</span>
                        <span className="text-green-600 font-medium">Clear</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">SWIFT Network:</span>
                        <span className="text-green-600 font-medium">Clear</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Correspondent Banks:</span>
                        <span className="text-green-600 font-medium">Clear</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Account Sanctions Check</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Holder:</span>
                        <span className="text-green-600 font-medium">Clear</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Status:</span>
                        <span className="text-green-600 font-medium">Active</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Regulatory Status:</span>
                        <span className="text-green-600 font-medium">Compliant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Banking Compliance Summary</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Account Verified</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Bank Cleared</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">SWIFT Valid</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">No Sanctions</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Signature Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Verified By</h4>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Name</label>
                  <p className="text-sm font-semibold text-gray-900">Murali Rajo</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Designation</label>
                  <p className="text-sm text-gray-900">Sr. Mgr, Industrial Support Svcs</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Department</label>
                  <p className="text-sm text-gray-900">INDUSTRIAL SALES (B2B)</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Verified On</label>
                  <p className="text-sm text-gray-900">May 20, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Information */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Order Information</h2>

          {/* Product Information */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Product Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Trading Currency</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">MYR</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Refinery</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">Langat Refinery</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Product Name</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">RBD Palm Oil</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Product Packing</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">Bulk Tanker</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Volume (MT)</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">5,000</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Spot Month</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">June 2025</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Forward Month</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">July 2025</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Volume Capped</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">10,000 MT</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Incoterm</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">FOB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Shipping Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Destination</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">Port Klang, Malaysia</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Supplier's Country</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">Malaysia</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Port of Destination</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">Port Klang</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Ship to Party Name</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">Sunrise Foods Malaysia Sdn Bhd</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Costing */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Product Costing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Raw Material Cost</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">RM 3,200 per MT</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Finance Cost %</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">4.5%</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Processing & Others</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">RM 150 per MT</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Interest Rate</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">5.25%</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Margin</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">RM 200 per MT</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Credit Limit Calculation</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">RM 17,750,000</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Financing Cost</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">RM 144 per MT</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Proposed Credit Limit</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">RM 20,000,000</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Proposed Payment Term</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select Payment Term</option>
                  <option value="cod">Cash on Delivery (COD)</option>
                  <option value="net7">Net 7 Days</option>
                  <option value="net15">Net 15 Days</option>
                  <option value="net30" selected>Net 30 Days</option>
                  <option value="net45">Net 45 Days</option>
                  <option value="net60">Net 60 Days</option>
                  <option value="net90">Net 90 Days</option>
                  <option value="2-10-net30">2/10 Net 30</option>
                  <option value="advance">Advance Payment</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Selling Cost</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-gray-900 font-medium">RM 3,694 per MT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Selling Price */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Selling Price</h3>

            {/* Price Per MT */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Selling Price Per Metric Ton</label>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-blue-700">RM 3,894</span>
                    <span className="text-xl font-medium text-gray-600 ml-2">per MT</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 italic">
                    Calculation: Selling Cost (RM 3,694) + Margin (RM 200) = RM 3,894 per MT
                  </p>
                </div>
                <div className="text-right">
                  <div className="bg-white rounded-lg px-6 py-4 shadow-sm border border-blue-200">
                    <p className="text-xs text-gray-500 mb-1">Profit Margin</p>
                    <p className="text-2xl font-bold text-blue-600">5.4%</p>
                    <p className="text-xs text-gray-500 mt-1">(RM 200 / RM 3,694)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Price */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-xl p-6">
              <label className="block text-sm font-medium text-gray-600 mb-3">Total Selling Price to Customer</label>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-green-700">RM 19,470,000</span>
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    Calculation: RM 3,894 per MT × 5,000 MT = RM 19,470,000
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg px-4 py-3 shadow-sm border border-green-200">
                    <p className="text-xs text-gray-500 mb-1">Order Volume</p>
                    <p className="text-xl font-bold text-gray-900">5,000 MT</p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-3 shadow-sm border border-green-200">
                    <p className="text-xs text-gray-500 mb-1">Total Profit</p>
                    <p className="text-xl font-bold text-green-600">RM 1,000,000</p>
                    <p className="text-xs text-gray-500 mt-0.5">(RM 200 × 5,000 MT)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Signature Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Prepared By</h4>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Name</label>
                  <p className="text-sm font-semibold text-gray-900">Bruce Lee</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Designation</label>
                  <p className="text-sm text-gray-900">Acting Sales Director, Malaysia & SE Asia</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Department</label>
                  <p className="text-sm text-gray-900">INDUSTRIAL SALES (B2B)</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Prepared On</label>
                  <p className="text-sm text-gray-900">May 20, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Application Button */}
          <div className="mt-8 mb-8 flex justify-center">
            <button
              onClick={() => alert('Application submitted successfully!')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
            >
              <CheckCircle className="w-6 h-6 mr-3" />
              Submit Application
            </button>
          </div>
        </div>
          </div>

          {/* Right Column - 25% */}
          <div className="w-1/4 mt-[100px]">
            <RightSidebar companyName="ONBOARD ONE (MALAYSIA) SDN. BHD." />
          </div>
        </div>
      </main>

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

export default IOM_Preview;