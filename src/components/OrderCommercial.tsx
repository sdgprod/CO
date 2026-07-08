import React from 'react';
import { useState } from 'react';
import {
  Building2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowLeft,
  Download,
  Package,
  Truck,
  Calculator,
  FileText,
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

interface OrderCommercialProps {
  onBackToSearch: () => void;
  onNavigate: (page: 'dashboard' | 'search' | 'results' | 'db-report' | 'order-commercial' | 'kyc6-sanction' | 'credit-rating-calculation' | 'credit-rating' | 'iom' | 'iom-b2b-b1m' | 'analytics' | 'project-doc') => void;
}

const OrderCommercial: React.FC<OrderCommercialProps> = ({ onBackToSearch, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'product' | 'shipping' | 'costing' | 'notes'>('product');
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [selectedRecommendation, setSelectedRecommendation] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    tradingCurrency: 'MYR',
    refinery: '',
    productName: '',
    productPacking: '',
    productRequirement: '',
    productApplication: '',
    volume: '',
    spotMonth: '',
    forwardMonth: '',
    volumeCapped: '',
    incoterm: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product Information submitted:', formData);
  };

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
      <Header currentPage="order-commercial" onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="relative w-full px-4 sm:px-6 lg:px-8 py-8">
        <DevNote
          note="Order Commercial Review (OCR) screen. Sales PIC enters order details: product type, volume, pricing, incoterms, payment terms, credit limit requested. System validates against company risk profile. Approver can accept/reject/modify terms. All changes audit-logged."
          title="Order Commercial Review"
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
              <h1 className="text-3xl font-bold text-gray-900">Order Commercial Report</h1>
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

              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                <div className="flex flex-col items-center text-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mb-2" />
                  <span className="text-xs font-medium text-red-900 mb-1">Sanctions Check</span>
                  <p className="text-lg font-bold text-red-600">PENDING</p>
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
                  <span className="text-gray-600">Product Information: Complete</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Shipping Information: Complete</span>
                </div>
                <div className="flex items-center justify-end">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Product Costing: Complete</span>
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

        {/* Order Commercial Form with Tabs */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8 pt-6">
              <button
                onClick={() => setActiveTab('product')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'product'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Package className="w-4 h-4 inline mr-2" />
                Product Information
              </button>
              <button
                onClick={() => setActiveTab('shipping')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'shipping'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Truck className="w-4 h-4 inline mr-2" />
                Shipping Information
              </button>
              <button
                onClick={() => setActiveTab('costing')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'costing'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Calculator className="w-4 h-4 inline mr-2" />
                Product Costing
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'notes'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                Additional Notes
              </button>
            </nav>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Product Information Tab */}
              {activeTab === 'product' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Information</h2>
                  
                  {/* Trading Currency */}
                  <div>
                    <label htmlFor="tradingCurrency" className="block text-sm font-semibold text-gray-700 mb-2">
                      Trading Currency
                    </label>
                    <select
                      id="tradingCurrency"
                      name="tradingCurrency"
                      value={formData.tradingCurrency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                      required
                    >
                      <option value="MYR">MYR - Malaysian Ringgit</option>
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="JPY">JPY - Japanese Yen</option>
                      <option value="CNY">CNY - Chinese Yuan</option>
                    </select>
                  </div>

                  {/* Select Refinery */}
                  <div>
                    <label htmlFor="refinery" className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Refinery
                    </label>
                    <select
                      id="refinery"
                      name="refinery"
                      value={formData.refinery}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select Refinery</option>
                      <option value="Langat Refinery">Langat Refinery</option>
                      <option value="Pasir Gudang Refinery">Pasir Gudang Refinery</option>
                    </select>
                  </div>

                  {/* Product Name */}
                  <div>
                    <label htmlFor="productName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Name
                    </label>
                    <select
                      id="productName"
                      name="productName"
                      value={formData.productName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select Product Code</option>
                      <option value="PPO-001">PPO-001 - Premium Palm Oil</option>
                      <option value="SPO-002">SPO-002 - Standard Palm Oil</option>
                      <option value="RBD-003">RBD-003 - Refined Bleached Deodorized Palm Oil</option>
                      <option value="PKO-004">PKO-004 - Palm Kernel Oil</option>
                      <option value="PFAD-005">PFAD-005 - Palm Fatty Acid Distillate</option>
                      <option value="POME-006">POME-006 - Palm Oil Mill Effluent</option>
                    </select>
                  </div>

                  {/* Product Packing */}
                  <div>
                    <label htmlFor="productPacking" className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Packing
                    </label>
                    <select
                      id="productPacking"
                      name="productPacking"
                      value={formData.productPacking}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                      required
                    >
                      <option value="">Product Packing Type</option>
                      <option value="Bulk Tanker">Bulk Tanker</option>
                      <option value="Flexi Tank">Flexi Tank</option>
                      <option value="ISO Tank">ISO Tank</option>
                      <option value="Drums">Drums (200L)</option>
                      <option value="IBC">IBC (1000L)</option>
                      <option value="Jerry Cans">Jerry Cans (25L)</option>
                    </select>
                  </div>

                  {/* Product Requirement */}
                  <div>
                    <label htmlFor="productRequirement" className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Requirement
                    </label>
                    <textarea
                      id="productRequirement"
                      name="productRequirement"
                      value={formData.productRequirement}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 resize-vertical"
                      placeholder="Enter specific product requirements, quality standards, certifications needed, etc."
                      required
                    />
                  </div>

                  {/* Product Application */}
                  <div>
                    <label htmlFor="productApplication" className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Application
                    </label>
                    <textarea
                      id="productApplication"
                      name="productApplication"
                      value={formData.productApplication}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 resize-vertical"
                      placeholder="Describe the intended application or use case for this product..."
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Volume (MT) */}
                    <div>
                      <label htmlFor="volume" className="block text-sm font-semibold text-gray-700 mb-2">
                        Volume (MT)
                      </label>
                      <input
                        type="text"
                        id="volume"
                        name="volume"
                        value={formData.volume}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Enter volume in metric tons"
                        required
                      />
                    </div>

                    {/* Spot Month */}
                    <div>
                      <label htmlFor="spotMonth" className="block text-sm font-semibold text-gray-700 mb-2">
                        Spot Month
                      </label>
                      <input
                        type="text"
                        id="spotMonth"
                        name="spotMonth"
                        value={formData.spotMonth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Enter spot month"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Forward Month */}
                    <div>
                      <label htmlFor="forwardMonth" className="block text-sm font-semibold text-gray-700 mb-2">
                        Forward Month
                      </label>
                      <input
                        type="text"
                        id="forwardMonth"
                        name="forwardMonth"
                        value={formData.forwardMonth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Enter forward month"
                        required
                      />
                    </div>

                    {/* Volume Capped */}
                    <div>
                      <label htmlFor="volumeCapped" className="block text-sm font-semibold text-gray-700 mb-2">
                        Volume Capped
                      </label>
                      <input
                        type="text"
                        id="volumeCapped"
                        name="volumeCapped"
                        value={formData.volumeCapped}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Enter volume capped"
                        required
                      />
                    </div>
                  </div>

                  {/* Incoterm */}
                  <div>
                    <label htmlFor="incoterm" className="block text-sm font-semibold text-gray-700 mb-2">
                      Incoterm
                    </label>
                    <select
                      id="incoterm"
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select Incoterm</option>
                      <option value="BY">BY - By Land</option>
                      <option value="CFR">CFR - Costs & Freight</option>
                      <option value="CIF">CIF - Costs, Insurance & Freight</option>
                      <option value="CIP">CIP - Carriage & Insurance Paid to</option>
                      <option value="COD">COD - Cash on Delivery</option>
                      <option value="CPT">CPT - Carriage Paid to</option>
                      <option value="DAF">DAF - Deliver at Frontier</option>
                      <option value="DAP">DAP - Deliver at Place</option>
                      <option value="DAT">DAT - Delivered at Terminal</option>
                      <option value="DDP">DDP - Delivered Duty Paid</option>
                      <option value="DDU">DDU - Delivered Duty Unpaid</option>
                      <option value="DEQ">DEQ - Delivered Ex Quay (Duty Paid)</option>
                      <option value="DES">DES - Delivered Ex Ship</option>
                      <option value="DLD">DLD - Delivered</option>
                      <option value="EXF">EXF - Ex Factory</option>
                      <option value="EXW">EXW - Ex Works</option>
                      <option value="FAS">FAS - Free Alongside Ship</option>
                      <option value="FCA">FCA - Free Carrier</option>
                      <option value="FH">FH - Free House</option>
                      <option value="FOB">FOB - Free on Board</option>
                      <option value="UN">UN - Not Free</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Shipping Information Tab */}
              {activeTab === 'shipping' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                  
                  {/* Destination */}
                  <div>
                    <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                      Destination
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter destination"
                      required
                    />
                  </div>

                  {/* Supplier's Country */}
                  <div>
                    <label htmlFor="suppliersCountry" className="block text-sm font-semibold text-gray-700 mb-2">
                      Supplier's Country
                    </label>
                    <input
                      type="text"
                      id="suppliersCountry"
                      name="suppliersCountry"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter supplier's country"
                      required
                    />
                  </div>

                  {/* Port of Destination */}
                  <div>
                    <label htmlFor="portOfDestination" className="block text-sm font-semibold text-gray-700 mb-2">
                      Port of Destination
                    </label>
                    <input
                      type="text"
                      id="portOfDestination"
                      name="portOfDestination"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter port of destination"
                      required
                    />
                  </div>

                  {/* Ship to Party Name */}
                  <div>
                    <label htmlFor="shipToPartyName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ship to Party Name
                    </label>
                    <input
                      type="text"
                      id="shipToPartyName"
                      name="shipToPartyName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter ship to party name"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Product Costing Tab */}
              {activeTab === 'costing' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Costing</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* First Column */}
                    <div className="space-y-6">
                      {/* Raw Material Cost */}
                      <div>
                        <label htmlFor="rawMaterialCost" className="block text-sm font-semibold text-gray-700 mb-2">
                          Raw Material Cost (MYR)
                        </label>
                        <input
                          type="text"
                          id="rawMaterialCost"
                          name="rawMaterialCost"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter raw material cost in MYR"
                          required
                        />
                      </div>

                      {/* Processing & Others */}
                      <div>
                        <label htmlFor="processingOthers" className="block text-sm font-semibold text-gray-700 mb-2">
                          Processing & Others (MYR)
                        </label>
                        <input
                          type="text"
                          id="processingOthers"
                          name="processingOthers"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter processing and other costs in MYR"
                          required
                        />
                      </div>

                      {/* Margin */}
                      <div>
                        <label htmlFor="margin" className="block text-sm font-semibold text-gray-700 mb-2">
                          Margin (MYR)
                        </label>
                        <input
                          type="text"
                          id="margin"
                          name="margin"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter margin in MYR"
                          required
                        />
                      </div>

                      {/* Financing Cost */}
                      <div>
                        <label htmlFor="financingCost" className="block text-sm font-semibold text-gray-700 mb-2">
                          Financing Cost (MYR)
                        </label>
                        <input
                          type="text"
                          id="financingCost"
                          name="financingCost"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter financing cost in MYR"
                          required
                        />
                      </div>

                      {/* Selling Cost */}
                      <div>
                        <label htmlFor="sellingCost" className="block text-sm font-semibold text-gray-700 mb-2">
                          Selling Cost (MYR)
                        </label>
                        <input
                          type="text"
                          id="sellingCost"
                          name="sellingCost"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter selling cost in MYR"
                          required
                        />
                      </div>
                    </div>

                    {/* Second Column */}
                    <div className="space-y-6">
                      {/* % of Finance Cost vs Price */}
                      <div>
                        <label htmlFor="financeVsPrice" className="block text-sm font-semibold text-gray-700 mb-2">
                          % of Finance Cost vs Price (MYR)
                        </label>
                        <input
                          type="text"
                          id="financeVsPrice"
                          name="financeVsPrice"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter percentage of finance cost vs price"
                          required
                        />
                      </div>

                      {/* Interest Rate */}
                      <div>
                        <label htmlFor="interestRate" className="block text-sm font-semibold text-gray-700 mb-2">
                          Interest Rate (%)
                        </label>
                        <input
                          type="text"
                          id="interestRate"
                          name="interestRate"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter interest rate percentage"
                          required
                        />
                      </div>

                      {/* Credit Limit Calculation */}
                      <div>
                        <label htmlFor="creditLimitCalculation" className="block text-sm font-semibold text-gray-700 mb-2">
                          Credit Limit Calculation (MYR)
                        </label>
                        <input
                          type="text"
                          id="creditLimitCalculation"
                          name="creditLimitCalculation"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter credit limit calculation in MYR"
                          required
                        />
                      </div>

                      {/* Proposed Credit Limit */}
                      <div>
                        <label htmlFor="proposedCreditLimit" className="block text-sm font-semibold text-gray-700 mb-2">
                          Proposed Credit Limit (MYR)
                        </label>
                        <input
                          type="text"
                          id="proposedCreditLimit"
                          name="proposedCreditLimit"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter proposed credit limit in MYR"
                          required
                        />
                      </div>

                      {/* Proposed Payment Term */}
                      <div>
                        <label htmlFor="proposedPaymentTerm" className="block text-sm font-semibold text-gray-700 mb-2">
                          Proposed Payment Term
                        </label>
                        <select
                          id="proposedPaymentTerm"
                          name="proposedPaymentTerm"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                          required
                        >
                          <option value="">Select Payment Term</option>
                          <option value="cod">Cash on Delivery (COD)</option>
                          <option value="net7">Net 7 Days</option>
                          <option value="net15">Net 15 Days</option>
                          <option value="net30">Net 30 Days</option>
                          <option value="net45">Net 45 Days</option>
                          <option value="net60">Net 60 Days</option>
                          <option value="net90">Net 90 Days</option>
                          <option value="2-10-net30">2/10 Net 30</option>
                          <option value="advance">Advance Payment</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Selling Price Section */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Selling Price</h3>

                    {/* Selling Price Per Metric Ton */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Selling Price Per Metric Ton</p>
                          <div className="flex items-baseline">
                            <span className="text-4xl font-bold text-blue-600">RM 3,894</span>
                            <span className="text-lg text-gray-600 ml-2">per MT</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-2 italic">
                            Calculation: Selling Cost (RM 3,694) + Margin (RM 200) = RM 3,894 per MT
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-1">Profit Margin</p>
                          <p className="text-3xl font-bold text-blue-600">5.4%</p>
                          <p className="text-xs text-gray-500 mt-1">(RM 200 / RM 3,694)</p>
                        </div>
                      </div>
                    </div>

                    {/* Total Selling Price to Customer */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <p className="text-sm text-gray-600 mb-2">Total Selling Price to Customer</p>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-5xl font-bold text-green-600">RM 19,470,000</p>
                          <p className="text-xs text-gray-500 mt-2 italic">
                            Calculation: RM 3,894 per MT × 5,000 MT = RM 19,470,000
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6 ml-8">
                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <p className="text-xs text-gray-600 mb-1">Order Volume</p>
                            <p className="text-2xl font-bold text-gray-900">5,000 MT</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <p className="text-xs text-gray-600 mb-1">Total Profit</p>
                            <p className="text-2xl font-bold text-green-600">RM 1,000,000</p>
                            <p className="text-xs text-gray-500 mt-1">(RM 200 × 5,000 MT)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Notes Tab */}
              {activeTab === 'notes' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Notes / Justification</h2>
                  
                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Notes / Justification (Max 300 words)
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={8}
                      maxLength={2000}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 resize-vertical"
                      placeholder="Enter any additional notes, justifications, special requirements, or comments regarding this order..."
                    />
                    <p className="text-xs text-gray-500 mt-2">Maximum 300 words (approximately 2000 characters)</p>
                  </div>
                </div>
              )}

              {/* Submit Button - Always visible */}
              <div className="pt-8 border-t border-gray-200 mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center text-lg"
                >
                  Submit Product Information
                </button>
              </div>
            </form>
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

export default OrderCommercial;