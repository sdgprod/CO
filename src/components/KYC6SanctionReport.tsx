import React, { useState } from 'react';
import {
  Building2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowLeft,
  Download,
  User,
  Shield,
  FileText,
  Globe,
  Search,
  Eye,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  Sparkles,
  TrendingUp,
  X,
  Award,
  BarChart3,
  DollarSign
} from 'lucide-react';
import Header from './Header';
import DevNote from './DevNote';
import RightSidebar from './RightSidebar';

interface KYC6SanctionReportProps {
  onBackToSearch: () => void;
  onNavigate: (page: 'dashboard' | 'search' | 'results' | 'db-report' | 'order-commercial' | 'kyc6-sanction' | 'credit-rating-calculation' | 'credit-rating' | 'iom' | 'iom-b2b-b1m' | 'analytics' | 'project-doc') => void;
}

const KYC6SanctionReport: React.FC<KYC6SanctionReportProps> = ({ onBackToSearch, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'company' | 'directors' | 'pep' | 'adverse' | 'banking'>('summary');
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [selectedRecommendation, setSelectedRecommendation] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header currentPage="kyc6-sanction" onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="relative w-full px-4 sm:px-6 lg:px-8 py-8">
        <DevNote
          note="KYC6 Sanction Report screen. Checks customer against global sanctions lists (OFAC, EU, UN, local). Displays: match results, PEP status, adverse media hits. Red flags auto-escalate to compliance team. Green = clear, Amber = manual review needed, Red = blocked. Results must be stored for audit trail (7-year retention)."
          title="KYC6 Sanction Report"
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
                onClick={handleBack}
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Search
              </button>
              <h1 className="text-3xl font-bold text-gray-900">KYC6 & Sanction Report</h1>
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
                  <p className="text-lg font-bold text-green-600">COMPLETE</p>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                <div className="flex flex-col items-center text-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mb-2" />
                  <span className="text-xs font-medium text-red-900 mb-1">Credit Rating</span>
                  <p className="text-lg font-bold text-red-600">PENDING</p>
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
                  <span className="text-gray-600">KYC Verification: Complete</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Sanctions Screening: Complete</span>
                </div>
                <div className="flex items-center justify-end">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">PEP Screening: Complete</span>
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

        {/* Quick Access Tabs */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8 pt-6">
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

          <div className="p-8">
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
              <p className="text-sm font-medium text-gray-900">Report ID: CCR-2025-001236</p>
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
    </div>
  );
};

export default KYC6SanctionReport;