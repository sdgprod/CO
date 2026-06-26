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
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  FileText,
  Shield,
  Award,
  BarChart3,
  Sparkles,
  X,
  MessageSquare,
  Send,
  CreditCard
} from 'lucide-react';
import Header from './Header';
import RightSidebar from './RightSidebar';

interface DBReportProps {
  onBackToSearch: () => void;
  onNavigate: (page: 'dashboard' | 'search' | 'results' | 'db-report' | 'order-commercial' | 'kyc6-sanction' | 'credit-rating-calculation' | 'credit-rating' | 'iom' | 'iom-b2b-b1m' | 'analytics' | 'project-doc') => void;
}

const DBReport: React.FC<DBReportProps> = ({ onBackToSearch, onNavigate }) => {
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [selectedRecommendation, setSelectedRecommendation] = useState<string | null>(null);
  const [chatMessage, setChatMessage] = useState('');

  const handleBack = () => {
    onBackToSearch();
  };

  const handleDownload = () => {
    console.log('Download report');
  };

  const strengthsData = [
    {
      id: 'db-rating',
      text: 'Strong D&B Rating of A2 with low credit risk indicator',
      source: 'Dun & Bradstreet Report',
      supportingData: {
        reportType: 'D&B European Comprehensive Report',
        dataPoints: [
          { label: 'D&B Rating', value: 'A2', status: 'Strong' },
          { label: 'Financial Strength', value: 'Tangible Net Worth of €964,870', status: 'Solid' },
          { label: 'Risk Indicator', value: '2 - Low credit risk', status: 'Good' },
          { label: 'Credit Assessment', value: 'Low credit risk', status: 'Favorable' },
        ],
        reportDate: '03 Feb 2025',
        verifiedBy: 'Dun & Bradstreet'
      }
    },
    {
      id: 'payment-performance',
      text: 'Excellent payment behavior with Paydex score of 80 - pays within terms',
      source: 'Dun & Bradstreet Report',
      supportingData: {
        reportType: 'D&B European Comprehensive Report',
        dataPoints: [
          { label: 'Paydex Score', value: '80 out of 100', status: 'Good' },
          { label: 'Days Beyond Terms', value: '0 days', status: 'Excellent' },
          { label: 'Payment Trend', value: 'Paying bills without delay', status: 'Consistent' },
          { label: 'Payment Experiences', value: '100% paid within terms', status: 'Strong' },
        ],
        reportDate: '03 Feb 2025',
        verifiedBy: 'Dun & Bradstreet'
      }
    },
    {
      id: 'failure-score',
      text: 'Failure score of 73 indicates lower risk than industry average',
      source: 'Dun & Bradstreet Report',
      supportingData: {
        reportType: 'D&B European Comprehensive Report',
        dataPoints: [
          { label: 'D&B Failure Score', value: '73 out of 100', status: 'Good' },
          { label: 'Risk Percentile', value: '27% of businesses have lower risk', status: 'Above Average' },
          { label: 'Industry Comparison', value: 'Lower risk than industry average (55)', status: 'Favorable' },
          { label: 'Continuity', value: 'High expectations established since 1926', status: 'Excellent' },
        ],
        reportDate: '03 Feb 2025',
        verifiedBy: 'Dun & Bradstreet'
      }
    },
    {
      id: 'financial-position',
      text: 'Stable financial position with positive working capital and increasing net worth trend',
      source: 'Dun & Bradstreet Report',
      supportingData: {
        reportType: 'D&B European Comprehensive Report',
        dataPoints: [
          { label: 'Total Assets', value: '€2.3M', status: 'Adequate' },
          { label: 'Tangible Net Worth', value: '€964,870', status: 'Stable' },
          { label: 'Working Capital', value: '€1.4M', status: 'Positive' },
          { label: 'Net Worth Trend', value: 'Flat or increasing', status: 'Stable' },
        ],
        reportDate: '03 Feb 2025',
        verifiedBy: 'Dun & Bradstreet'
      }
    },
  ];

  const risksData = [
    {
      id: 'modest-credit-limit',
      text: 'Modest maximum credit recommendation of €400,000 based on financial capacity',
      source: 'Dun & Bradstreet Report',
      supportingData: {
        reportType: 'D&B European Comprehensive Report',
        dataPoints: [
          { label: 'D&B Maximum Credit', value: '€400,000', status: 'Conservative' },
          { label: 'Relative to Net Worth', value: '41% of tangible net worth', status: 'Moderate' },
          { label: 'Credit Terms', value: 'Monthly open credit terms', status: 'Standard' },
          { label: 'Recommendation', value: 'Continue delivery', status: 'Approved' },
        ],
        reportDate: '03 Feb 2025',
        verifiedBy: 'Dun & Bradstreet'
      }
    },
    {
      id: 'address-change',
      text: 'Company had an address change in the last 12 months - monitor stability',
      source: 'Dun & Bradstreet Report',
      supportingData: {
        reportType: 'D&B European Comprehensive Report',
        dataPoints: [
          { label: 'Recent Change', value: 'Address change within 12 months', status: 'Note' },
          { label: 'New Address', value: 'Oostzeedijk 236, Rotterdam', status: 'Updated' },
          { label: 'Stability Factor', value: 'Monitor for operational continuity', status: 'Watch' },
          { label: 'Business Impact', value: 'No negative indicators', status: 'Stable' },
        ],
        reportDate: '03 Feb 2025',
        verifiedBy: 'Dun & Bradstreet'
      }
    },
  ];

  const recommendationsData = [
    {
      id: 'credit-approval',
      text: 'Approved for standard credit terms with €400K maximum limit',
      policyReference: 'D&B Rating A2 + Paydex 80',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Good D&B rating (A2) with strong payment performance and low credit risk',
        details: [
          { label: 'D&B Rating', value: 'A2', status: 'Good' },
          { label: 'Paydex Score', value: '80', status: 'Within Terms' },
          { label: 'Credit Limit', value: '€400,000', status: 'Approved' },
          { label: 'Payment Terms', value: '30 days', status: 'Standard' },
        ],
        policyExtract: 'Companies with D&B Rating A2 and Paydex scores of 80 or above qualify for standard credit terms with limits based on financial capacity and tangible net worth.',
        additionalNotes: 'Credit metrics support approval. D&B analysis confirms low credit risk with payment behavior within terms. Continue delivery recommended.'
      }
    },
    {
      id: 'monitor-stability',
      text: 'Monitor business stability following recent address change',
      policyReference: 'Risk Management Section 4.2',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Address change within 12 months warrants continued monitoring for operational stability',
        details: [
          { label: 'Change Type', value: 'Address relocation', status: 'Recent' },
          { label: 'Review Frequency', value: 'Semi-annual', status: 'Recommended' },
          { label: 'Key Indicators', value: 'Payment patterns, financial trends', status: 'Track' },
          { label: 'Current Status', value: 'No negative impact observed', status: 'Stable' },
        ],
        policyExtract: 'Section 4.2: Recent business changes including address relocations should be monitored to ensure continued operational and financial stability.',
        additionalNotes: 'Company has been operating since 1926 with established continuity. Address change appears routine with no adverse indicators.'
      }
    },
    {
      id: 'payment-monitoring',
      text: 'Continue monitoring payment performance to maintain Paydex 80 standard',
      policyReference: 'Payment Terms Section 6.1',
      supportingData: {
        policySource: 'SDPB Credit Policies and Procedures 2021',
        rationale: 'Maintain current good payment performance with 0 days beyond terms',
        details: [
          { label: 'Current Paydex', value: '80', status: 'Good' },
          { label: 'Target', value: 'Maintain 80+', status: 'Monitor' },
          { label: 'Days Beyond Terms', value: '0 days', status: 'Excellent' },
          { label: 'Payment Trend', value: 'Consistent within terms', status: 'Stable' },
        ],
        policyExtract: 'Section 6.1: Payment performance must be monitored continuously. Any deterioration below Paydex 80 triggers immediate review and potential credit adjustment.',
        additionalNotes: 'Customer demonstrates reliable payment behavior with all invoices paid within terms. 100% of payment experiences show no delays.'
      }
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header currentPage="db-report" onNavigate={onNavigate} />

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
                  <h1 className="text-3xl font-bold text-gray-900">D&B Report Result</h1>
                </div>
              </div>

              {/* Company Header Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dragon Oil Global</h1>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-2">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                      <span className="font-semibold text-green-600">Active</span>
                    </div>
                    <p className="text-sm text-gray-500">Report Generated: 03 Feb 2025</p>
                  </div>
                </div>

                {/* Risk Assessment Summary */}
                <div className="grid grid-cols-6 gap-3 mb-6">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                    <div className="flex flex-col items-center text-center">
                      <Shield className="w-5 h-5 text-green-600 mb-2" />
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

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
                    <div className="flex flex-col items-center text-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mb-2" />
                      <span className="text-xs font-medium text-blue-900 mb-1">Order Commercial</span>
                      <p className="text-lg font-bold text-blue-600">APPROVED</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
                    <div className="flex flex-col items-center text-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mb-2" />
                      <span className="text-xs font-medium text-blue-900 mb-1">Sanctions Check</span>
                      <p className="text-lg font-bold text-blue-600">CLEAR</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
                    <div className="flex flex-col items-center text-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mb-2" />
                      <span className="text-xs font-medium text-blue-900 mb-1">Credit Rating</span>
                      <p className="text-lg font-bold text-blue-600">COMPLETE</p>
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

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Company Info: Complete</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Financial Info: Complete</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Credit Rating: Complete</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Risk Analysis: Complete</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Payment History: Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Information Bar */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">D&B Report Summary</h2>
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-800">D&B Rating</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">A2</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-800">Failure Score</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">73</p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm font-medium text-purple-800">Credit Limit</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-600">€400K</p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <BarChart3 className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-sm font-medium text-orange-800">Paydex</span>
                  </div>
                  <p className="text-2xl font-bold text-orange-600">80</p>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Building2 className="w-5 h-5 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-indigo-800">Assets</span>
                  </div>
                  <p className="text-2xl font-bold text-indigo-600">€2.3M</p>
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

            {/* Company Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                  Company Overview
                </h2>

                <div className="space-y-4">
                  <div className="bg-gray-50 px-4 py-3 rounded-lg">
                    <label className="text-sm font-medium text-gray-500 mb-2 block">Legal Name</label>
                    <p className="text-gray-900 font-medium">Dragon Oil Global Pte Ltd</p>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 rounded-lg">
                    <label className="text-sm font-medium text-gray-500 mb-2 block">Trading Style</label>
                    <p className="text-gray-900 font-medium">Dragon Oil Global</p>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 rounded-lg">
                    <label className="text-sm font-medium text-gray-500 mb-2 block">Business Type</label>
                    <p className="text-gray-900 font-medium">Private Limited Company</p>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 rounded-lg">
                    <label className="text-sm font-medium text-gray-500 mb-2 block">Date Started</label>
                    <p className="text-gray-900 font-medium">29 June 1926</p>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 rounded-lg">
                    <label className="text-sm font-medium text-gray-500 mb-2 block">Industry</label>
                    <p className="text-gray-900 font-medium">Feathers, hides and pelts (SIC 5159)</p>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 rounded-lg">
                    <label className="text-sm font-medium text-gray-500 mb-2 block">Employees</label>
                    <p className="text-gray-900 font-medium">13 (Registered Office)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="bg-gray-50 px-4 py-3 rounded-lg">
                    <label className="text-sm font-medium text-gray-500 mb-2 block">Registered Address</label>
                    <p className="text-gray-900">
                      Oostzeedijk 236<br />
                      3063 BP Rotterdam<br />
                      NETHERLANDS
                    </p>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 rounded-lg">
                    <label className="text-sm font-medium text-gray-500 mb-2 block">D-U-N-S Number</label>
                    <p className="text-gray-900">40-217-3306</p>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 rounded-lg flex items-center">
                    <Phone className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-900">+31 010-2800000</span>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 rounded-lg flex items-center">
                    <Mail className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-900">argolanda6@gmail.com</span>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 rounded-lg flex items-center">
                    <Globe className="w-4 h-4 text-gray-400 mr-2" />
                    <a href="https://www.argolanda.nl" className="text-blue-600 hover:text-blue-700 underline">
                      www.argolanda.nl
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                Financial Summary
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Revenue Trends</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Latest Accounts:</span>
                      <span className="font-medium text-gray-900">31 Dec 2023</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Total Assets:</span>
                      <span className="font-medium text-gray-900">€2.3M</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Current Assets:</span>
                      <span className="font-medium text-gray-900">€2.29M</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Fixed Assets:</span>
                      <span className="font-medium text-gray-900">€8,077</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Liquidity & Capital</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Working Capital:</span>
                      <span className="font-medium text-gray-900">€1.38M</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Current Ratio:</span>
                      <span className="font-medium text-gray-900">2.5x</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Acid Test:</span>
                      <span className="font-medium text-gray-900">1.8x</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Cash at Bank:</span>
                      <span className="font-medium text-green-600">€4,470</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Financial Position</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Tangible Net Worth:</span>
                      <span className="font-medium text-gray-900">€964,870</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Current Liabilities:</span>
                      <span className="font-medium text-gray-900">€916,150</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Long Term Liabilities:</span>
                      <span className="font-medium text-gray-900">€400,000</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600">Indebtedness:</span>
                      <span className="font-medium text-green-600">58.1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Information */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Tax Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Tax Residency</label>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-900 font-medium">Netherlands</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">VAT Number</label>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-900 font-medium">NL 001836936B01</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Tax Registration Status</label>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <p className="text-green-600 font-semibold">Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banking Information */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">Banking Information</h2>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-600 font-semibold">Bank Account Verified</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Primary Bank Account */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Primary Bank Account</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Bank Name</label>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-900 font-medium">ING Bank Netherlands</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Account Holder</label>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-900 font-medium">Dragon Oil Global</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Account Number</label>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-900 font-medium">NL29INGB0001234567</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">SWIFT Code</label>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-900 font-medium">INGBNL2A</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Bank Branch Address */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Bank Branch Address</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Branch</label>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-900 font-medium">ING Bank Rotterdam Branch</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Address</label>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-900 font-medium">Rotterdam, Netherlands</p>
                        <a href="https://www.ing.nl" className="text-blue-600 hover:text-blue-700 mt-1 block">
                          https://www.ing.nl
                        </a>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">IBAN#</label>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-900 font-medium">NL29INGB0001234567</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Management Team */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Management Team
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold text-lg">JC</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">James Chen</h3>
                      <p className="text-sm text-blue-600">Chief Executive Officer</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    15+ years experience in oil & gas trading. Previously VP at Shell Trading.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-semibold text-lg">ML</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Maria Lopez</h3>
                      <p className="text-sm text-purple-600">Chief Financial Officer</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    CPA with 12+ years in energy finance. Former CFO at Petronas Trading.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-semibold text-lg">RK</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Raj Kumar</h3>
                      <p className="text-sm text-green-600">Chief Operating Officer</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Operations expert with 18+ years in commodity trading and logistics.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-600 font-semibold text-lg">ST</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sarah Thompson</h3>
                      <p className="text-sm text-orange-600">Head of Risk Management</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Risk management specialist with expertise in commodity derivatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Report Footer */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    Report generated on <strong>03 Feb 2025</strong> by D&B European Comprehensive Report
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    This report is confidential and intended for authorized personnel only.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">D-U-N-S® Number: 40-217-3306</p>
                  <p className="text-xs text-gray-500">Report valid for 90 days from generation date</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 25% */}
          <div className="w-1/4 mt-[100px]">
            <RightSidebar companyName="Dragon Oil Global" pageType="db-report" />
          </div>
        </div>
      </main>

      {/* Supporting Data Modal for Strengths */}
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
                            <div>
                              <p className="text-sm font-medium text-gray-900">{point.label}</p>
                              <p className="text-lg font-semibold text-gray-900 mt-1">{point.value}</p>
                            </div>
                            <div>
                              <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                                {point.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Supporting Data Modal for Risks */}
      {selectedRisk && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Risk Assessment Data</h3>
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
                            <div>
                              <p className="text-sm font-medium text-gray-900">{point.label}</p>
                              <p className="text-lg font-semibold text-gray-900 mt-1">{point.value}</p>
                            </div>
                            <div>
                              <span className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                                {point.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Policy Basis Modal for Recommendations */}
      {selectedRecommendation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Policy Basis</h3>
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
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-blue-900">{data.supportingData.policySource}</h4>
                          <p className="text-sm text-blue-700 mt-1">Reference: {data.policyReference}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Rationale</h4>
                      <p className="text-gray-700">{data.supportingData.rationale}</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Supporting Details</h4>
                      {data.supportingData.details.map((detail, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">{detail.label}</p>
                              <p className="text-lg font-semibold text-gray-900 mt-1">{detail.value}</p>
                            </div>
                            <div>
                              <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                                {detail.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Policy Extract</h4>
                      <p className="text-sm text-gray-700 italic">{data.supportingData.policyExtract}</p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Additional Notes</h4>
                      <p className="text-sm text-blue-800">{data.supportingData.additionalNotes}</p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DBReport;
