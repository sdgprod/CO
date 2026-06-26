import React, { useState, useEffect } from 'react';
import {
  Building2,
  FileText,
  Globe,
  CreditCard,
  User,
  Hash,
  MapPin,
  Code,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calendar,
  DollarSign,
  Shield,
  Eye,
  Download,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  X,
  MessageSquare,
  Send,
  Award,
  BarChart3,
  StickyNote,
  Trash2
} from 'lucide-react';
import Header from './Header';
import { createClient } from '@supabase/supabase-js';

interface BackgroundSearchResultProps {
  onBackToSearch: () => void;
  onNavigate: (page: 'dashboard' | 'search' | 'results' | 'db-report' | 'order-commercial' | 'kyc6-sanction' | 'credit-rating-calculation' | 'credit-rating' | 'iom' | 'iom-b2b-b1m' | 'analytics' | 'project-doc') => void;
}

interface Note {
  id: string;
  company_name: string;
  author_name: string;
  author_title: string;
  content: string;
  created_at: string;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const BackgroundSearchResult: React.FC<BackgroundSearchResultProps> = ({ onBackToSearch, onNavigate }) => {
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [selectedRecommendation, setSelectedRecommendation] = useState<string | null>(null);
  const [chatMessage, setChatMessage] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorTitle, setAuthorTitle] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);
  const companyName = 'ONBOARD ONE (MALAYSIA) SDN. BHD.';

  const handleBack = () => {
    onBackToSearch();
  };

  const handleDownload = () => {
    // Download report functionality
    console.log('Download report');
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('company_name', companyName)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching notes:', error);
    } else {
      setNotes(data || []);
    }
  };

  const handleAddNote = async () => {
    if (!newNote.trim() || !authorName.trim() || !authorTitle.trim()) {
      alert('Please fill in all fields (Name, Title, and Note)');
      return;
    }

    const { error } = await supabase
      .from('notes')
      .insert([
        {
          company_name: companyName,
          author_name: authorName,
          author_title: authorTitle,
          content: newNote
        }
      ]);

    if (error) {
      console.error('Error adding note:', error);
      alert('Failed to add note. Please try again.');
    } else {
      setNewNote('');
      setIsAddingNote(false);
      fetchNotes();
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    if (!confirm('Are you sure you want to delete this note?')) {
      return;
    }

    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', noteId);

    if (error) {
      console.error('Error deleting note:', error);
      alert('Failed to delete note. Please try again.');
    } else {
      fetchNotes();
    }
  };

  const formatNoteTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return diffMins === 0 ? 'Just now' : `${diffMins}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
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
      <Header currentPage="results" onNavigate={onNavigate} />

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
              <h1 className="text-3xl font-bold text-gray-900">Credit Bureau Search Result</h1>
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

              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                <div className="flex flex-col items-center text-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mb-2" />
                  <span className="text-xs font-medium text-red-900 mb-1">Order Commercial</span>
                  <p className="text-lg font-bold text-red-600">PENDING</p>
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
                  <span className="text-gray-600">Tax Info: Complete</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Banking Info: Complete</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">E-Invoice Info: Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Information Bar */}
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

        {/* Company Information */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Building2 className="w-5 h-5 mr-2 text-blue-600" />
            Company Information
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 mb-2 block">Company Name</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <p className="text-gray-900 font-medium">ONBOARD ONE (MALAYSIA) SDN. BHD.</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 mb-2 block">Registration Number</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <p className="text-gray-900 font-medium">201501012345</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 mb-2 block">Country of Origin</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <p className="text-gray-900 font-medium">Malaysia</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 mb-2 block">Incorporation Date</label>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <p className="text-gray-900 font-medium">January 15, 2015</p>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 mb-2 block">Business Nature</label>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <p className="text-gray-900 font-medium">TRADING OF PALM OIL AND RELATED PRODUCTS.</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 mb-2 block">Registered Address</label>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <p className="text-gray-900">No. 123, Jalan Bukit Bintang, 55100 Kuala Lumpur, Malaysia</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 mb-2 block">Company Website</label>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <p className="text-gray-900">
                  <a href="https://www.onboardone.com.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                    https://www.onboardone.com.my
                  </a>
                </p>
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
                  <span className="text-gray-600">2024:</span>
                  <span className="font-medium text-gray-900">RM 12.5M</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">2023:</span>
                  <span className="font-medium text-gray-900">RM 11.5M</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">2022:</span>
                  <span className="font-medium text-gray-900">RM 10.8M</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">Growth Rate:</span>
                  <span className="font-medium text-green-600">+8.7% YoY</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Profitability</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">Gross Margin:</span>
                  <span className="font-medium text-gray-900">16.2%</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">Operating Margin:</span>
                  <span className="font-medium text-gray-900">11.5%</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">Net Margin:</span>
                  <span className="font-medium text-gray-900">8.2%</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">ROE:</span>
                  <span className="font-medium text-green-600">13.8%</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Financial Position</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">Total Assets:</span>
                  <span className="font-medium text-gray-900">RM 115.2M</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">Total Liabilities:</span>
                  <span className="font-medium text-gray-900">RM 44.7M</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">Shareholders' Equity:</span>
                  <span className="font-medium text-gray-900">RM 70.5M</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-600">Debt-to-Equity:</span>
                  <span className="font-medium text-green-600">0.63</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directors & Key Personnel */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-blue-600" />
            Directors & Key Personnel
          </h2>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Luke Skywalker</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Managing Director</span>
              </div>
              <p className="text-sm text-gray-600">IC: 770519-14-2001</p>
              <p className="text-sm text-gray-600">Appointed: January 15, 2015</p>
              <div className="flex items-center mt-2">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs text-green-600">Background Verified</span>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Princess Leia Organa</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Executive Director</span>
              </div>
              <p className="text-sm text-gray-600">IC: 561019-08-1956</p>
              <p className="text-sm text-gray-600">Appointed: March 10, 2015</p>
              <div className="flex items-center mt-2">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs text-green-600">Background Verified</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Han Solo</h3>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Company Secretary</span>
              </div>
              <p className="text-sm text-gray-600">IC: 420729-10-1942</p>
              <p className="text-sm text-gray-600">Appointed: January 15, 2015</p>
              <div className="flex items-center mt-2">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs text-green-600">Background Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Information */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-blue-600" />
            Tax Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-500 mb-2 block">Tax Residency</label>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <p className="text-gray-900 font-medium">Malaysia</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 mb-2 block">Income Tax Number</label>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <p className="text-gray-900 font-medium">C6857114030</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 mb-2 block">Tax Registration Status</label>
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banking Information */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
              Banking Information
            </h2>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm text-green-600 font-medium">Bank Account Verified</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Primary Bank Account</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Bank Name</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium">Maybank Berhad</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Account Holder</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium">ONBOARD ONE (MALAYSIA) SDN. BHD.</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Account Number</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium">5142-1234-5678</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">SWIFT Code</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium">MBBEMYKL</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Bank Branch Address</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Branch</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900">Maybank Bukit Bintang Branch</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Address</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900">
                      <a href="https://www.onboardone.com.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                        https://www.onboardone.com.my
                      </a>
                      <span>, Malaysia</span>
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">IBAN#</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium">1234567890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* E-Invoice Billing Contact */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-blue-600" />
            E-Invoice Billing Contact
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Primary Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
                <div className="md:col-span-1">
                  <label className="text-sm font-medium text-gray-500 mb-2 block">First Name</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium text-sm">Ahmad</p>
                  </div>
                </div>

                <div className="md:col-span-1">
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Last Name</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium text-sm">Rahman</p>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Designation</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium text-sm">Finance Manager</p>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Email</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <a href="mailto:ahmad.rahman@onboardone.com.my" className="text-blue-600 hover:text-blue-700 underline font-medium break-all text-sm overflow-hidden block">ahmad.rahman@onboardone.com.my</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Secondary Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
                <div className="md:col-span-1">
                  <label className="text-sm font-medium text-gray-500 mb-2 block">First Name</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium text-sm">Siti</p>
                  </div>
                </div>

                <div className="md:col-span-1">
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Last Name</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium text-sm">Nurhaliza</p>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Designation</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-medium text-sm">Accounts Executive</p>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Email</label>
                  <div className="bg-gray-100 px-4 py-3 rounded-lg">
                    <a href="mailto:siti.nurhaliza@onboardone.com.my" className="text-blue-600 hover:text-blue-700 underline font-medium break-all text-sm overflow-hidden block">siti.nurhaliza@onboardone.com.my</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Supporting Documents */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-blue-600" />
            Supporting Documents
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">SSM Certificate</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                  View Document
                </button>
              </div>
              <div className="space-y-3">
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Company Profile</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                  </div>
                  <p className="text-xs text-gray-600">Generated: May 20, 2025</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Directors List</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                  </div>
                  <p className="text-xs text-gray-600">Generated: May 20, 2025</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Annual Returns</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                  </div>
                  <p className="text-xs text-gray-600">Generated: May 20, 2025</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Credit Bureau Malaysia</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                  View Document
                </button>
              </div>
              <div className="space-y-3">
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Credit Report</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                  </div>
                  <p className="text-xs text-gray-600">Generated: May 18, 2025</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Payment History</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                  </div>
                  <p className="text-xs text-gray-600">Generated: May 18, 2025</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Credit Score Analysis</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                  </div>
                  <p className="text-xs text-gray-600">Generated: May 18, 2025</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">MPOB License</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                  View Document
                </button>
              </div>
              <div className="space-y-3">
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">License Certificate</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                  </div>
                  <p className="text-xs text-gray-600">License No: 689465789</p>
                  <p className="text-xs text-gray-600">Valid Until: Dec 31, 2025</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-900">License Type</span>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• Menjual dan mengalih PPO & SPO#</p>
                    <p>• Membeli dan mengalih SPO#</p>
                    <p>• Menyimpan PPO & SPO#</p>
                  </div>
                </div>
              </div>
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
              <p className="text-sm font-medium text-gray-900">Report ID: CCR-2025-001234</p>
              <p className="text-xs text-gray-500">Valid for 90 days from generation date</p>
            </div>
          </div>
        </div>
          </div>

          {/* Right Column - 25% */}
          <div className="w-1/4 space-y-6 mt-[100px]">
            {/* Compliance Status Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                Compliance Status
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium text-gray-900 text-sm">SSM Registration</span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">Active</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium text-gray-900 text-sm">Tax Compliance</span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">Current</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium text-gray-900 text-sm">MPOB License</span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">Valid</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium text-gray-900 text-sm">Third Party Rating Assessment</span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">Available</span>
                </div>
              </div>
            </div>

            {/* Teams Chat Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col h-[600px]">
              <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Team Discussion</h3>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex space-x-3">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
                    alt="Sarah Chen"
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-900">Sarah Chen</p>
                      <p className="text-sm text-gray-700 mt-1">Background check completed. Everything looks good.</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
                    alt="Michael Roberts"
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-900">Michael Roberts</p>
                      <p className="text-sm text-gray-700 mt-1">The compliance status is clear. Should we proceed?</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">10:32 AM</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
                    alt="Emily Wong"
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-900">Emily Wong</p>
                      <p className="text-sm text-gray-700 mt-1">Yes, all directors have been verified. No adverse findings.</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">10:35 AM</p>
                  </div>
                </div>

                <div className="flex space-x-3 flex-row-reverse">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
                    alt="You"
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-blue-600 rounded-lg p-3 ml-auto max-w-[85%]">
                      <p className="text-sm text-white">Perfect. Let's move forward with the credit assessment.</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">10:37 AM</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Notes & Comments Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <StickyNote className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-900">Notes & Comments</h3>
                </div>
                <button
                  onClick={() => setIsAddingNote(!isAddingNote)}
                  className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {isAddingNote ? 'Cancel' : '+ Add Note'}
                </button>
              </div>

              {/* Add Note Form */}
              {isAddingNote && (
                <div className="mb-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Your Name"
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      />
                      <input
                        type="text"
                        value={authorTitle}
                        onChange={(e) => setAuthorTitle(e.target.value)}
                        placeholder="Your Title"
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      />
                    </div>
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Write your note or comment..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm resize-none"
                    />
                    <div className="flex justify-end">
                      <button
                        onClick={handleAddNote}
                        className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Post Note
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notes List */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {notes.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <StickyNote className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">No notes yet. Be the first to add one!</p>
                  </div>
                ) : (
                  notes.map((note) => (
                    <div key={note.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{note.author_name}</p>
                          <p className="text-xs text-gray-500">{note.author_title}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-400">{formatNoteTime(note.created_at)}</span>
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete note"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{note.content}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
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

export default BackgroundSearchResult;