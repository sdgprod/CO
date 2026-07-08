import React, { useState } from 'react';
import {
  Building2,
  BarChart3,
  Calendar,
  Clock,
  Globe,
  User,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Filter,
  Search,
  Download,
  DollarSign,
  X,
  FileText,
  CreditCard,
  Package
} from 'lucide-react';
import Header from './Header';
import DevNote from './DevNote';

interface DashboardProps {
  onNavigate: (page: 'dashboard' | 'search' | 'results' | 'db-report' | 'order-commercial' | 'kyc6-sanction' | 'credit-rating-calculation' | 'credit-rating' | 'iom' | 'iom-b2b-b1m' | 'analytics' | 'project-doc') => void;
}

interface OnboardingRecord {
  id: string;
  date: string;
  salesPic: string;
  customer: string;
  country: string;
  stage: 'KYC' | 'Order Commercial' | 'Credit Rating' | 'IOM';
  timeElapsed: number; // in days
  status: 'In Progress' | 'Completed' | 'On Hold' | 'Rejected' | 'Done' | 'Under Review';
  segment: 'B2B' | 'BULK' | 'B2C';
  orderValue: string;
  requestedCreditLimit: string;
  requestedPaymentTerm: string;
  incoTerm: string;
  requestor: string;
  notes?: string;
}

interface ApprovalRecord {
  id: string;
  date: string;
  salesPic: string;
  customer: string;
  country: string;
  orderValue: string;
  requestedCreditLimit: string;
  requestedPaymentTerm: string;
  incoTerm: string;
  requestor: string;
  stage: 'HBU & HBS' | 'Credit Committee' | 'Group Managing Director';
  timeElapsed: number; // in days
  status: 'Approved' | 'Under Review' | 'On Hold' | 'Rejected';
  segment: 'B2B' | 'BULK' | 'B2C';
  notes?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStage, setFilterStage] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [selectedRecord, setSelectedRecord] = useState<OnboardingRecord | null>(null);
  const [selectedApprovalRecord, setSelectedApprovalRecord] = useState<ApprovalRecord | null>(null);

  // Sample data for Request Table
  const onboardingData: OnboardingRecord[] = [
    {
      id: '1',
      date: '2025-05-15',
      salesPic: 'Ahmad Rahman',
      customer: 'ONBOARD ONE (MALAYSIA) SDN. BHD.',
      country: 'Malaysia',
      stage: 'IOM',
      timeElapsed: 5,
      status: 'Done',
      segment: 'B2B',
      orderValue: 'RM 15,000,000',
      requestedCreditLimit: 'RM 12,500,000',
      requestedPaymentTerm: '60 days',
      incoTerm: 'FOB',
      requestor: 'Ahmad Rahman',
      notes: 'IOM submitted for approval. Request process completed and ready for approval workflow'
    },
    {
      id: '2',
      date: '2025-05-18',
      salesPic: 'Sarah Lim',
      customer: 'GLOBAL TRADING ENTERPRISES PTE LTD',
      country: 'Singapore',
      stage: 'Credit Rating',
      timeElapsed: 2,
      status: 'In Progress',
      segment: 'BULK',
      orderValue: 'USD 10,000,000',
      requestedCreditLimit: 'RM 8,750,000',
      requestedPaymentTerm: '45 days',
      incoTerm: 'CIF',
      requestor: 'Sarah Lim',
      notes: 'New customer, requires thorough credit assessment'
    },
    {
      id: '3',
      date: '2025-05-12',
      salesPic: 'David Tan',
      customer: 'PACIFIC PALM OIL CORPORATION',
      country: 'Indonesia',
      stage: 'Order Commercial',
      timeElapsed: 8,
      status: 'On Hold',
      segment: 'B2C',
      orderValue: 'IDR 95,000,000,000',
      requestedCreditLimit: 'RM 5,200,000',
      requestedPaymentTerm: '90 days',
      incoTerm: 'CFR',
      requestor: 'David Tan',
      notes: 'Pending additional documentation from customer'
    },
    {
      id: '4',
      date: '2025-05-10',
      salesPic: 'Lisa Wong',
      customer: 'ASIAN COMMODITIES LIMITED',
      country: 'Thailand',
      stage: 'IOM',
      timeElapsed: 10,
      status: 'Under Review',
      segment: 'B2B',
      orderValue: 'THB 225,000,000',
      requestedCreditLimit: 'RM 6,800,000',
      requestedPaymentTerm: '30 days',
      incoTerm: 'FOB',
      requestor: 'Lisa Wong',
      notes: 'IOM under review. Q&A in progress with processors regarding content'
    },
    {
      id: '5',
      date: '2025-05-20',
      salesPic: 'Michael Chen',
      customer: 'EURO PALM TRADING GMBH',
      country: 'Germany',
      stage: 'KYC',
      timeElapsed: 0,
      status: 'In Progress',
      segment: 'BULK',
      orderValue: 'EUR 6,200,000',
      requestedCreditLimit: 'RM 4,500,000',
      requestedPaymentTerm: '60 days',
      incoTerm: 'CIF',
      requestor: 'Michael Chen',
      notes: 'Initial KYC documentation submitted'
    },
    {
      id: '6',
      date: '2025-05-08',
      salesPic: 'Jennifer Lee',
      customer: 'MIDDLE EAST OILS LLC',
      country: 'UAE',
      stage: 'Credit Rating',
      timeElapsed: 12,
      status: 'Rejected',
      segment: 'B2C',
      orderValue: 'AED 28,500,000',
      requestedCreditLimit: 'RM 7,200,000',
      requestedPaymentTerm: '120 days',
      incoTerm: 'CFR',
      requestor: 'Jennifer Lee',
      notes: 'Insufficient credit history and financial documentation'
    }
  ];

  // Sample data for Approval Table
  const approvalData: ApprovalRecord[] = [
    {
      id: '1',
      date: '2025-05-15',
      salesPic: 'Ahmad Rahman',
      customer: 'ONBOARD ONE (MALAYSIA) SDN. BHD.',
      country: 'Malaysia',
      orderValue: 'RM 15,000,000',
      requestedCreditLimit: 'RM 12,500,000',
      requestedPaymentTerm: '60 days',
      incoTerm: 'FOB',
      requestor: 'Ahmad Rahman',
      stage: 'HBU & HBS',
      timeElapsed: 3,
      status: 'Under Review',
      segment: 'B2B',
      notes: 'Awaiting HBU & HBS approval for credit limit and payment terms'
    },
    {
      id: '2',
      date: '2025-05-18',
      salesPic: 'Kevin Lim',
      customer: 'SINGAPORE PALM TRADERS PTE LTD',
      country: 'Singapore',
      orderValue: 'SGD 15,200,000',
      requestedCreditLimit: 'RM 11,200,000',
      requestedPaymentTerm: '45 days',
      incoTerm: 'CIF',
      requestor: 'Kevin Lim',
      stage: 'Group Managing Director',
      timeElapsed: 1,
      status: 'Approved',
      segment: 'BULK',
      notes: 'Approved by GMD with standard terms'
    },
    {
      id: '3',
      date: '2025-05-16',
      salesPic: 'Rachel Tan',
      customer: 'MAURITIUS COMMODITIES LTD',
      country: 'Mauritius',
      orderValue: 'USD 9,800,000',
      requestedCreditLimit: 'RM 8,500,000',
      requestedPaymentTerm: '90 days',
      incoTerm: 'FOB',
      requestor: 'Rachel Tan',
      stage: 'Credit Committee',
      timeElapsed: 4,
      status: 'Under Review',
      segment: 'B2C',
      notes: 'Under review by credit committee for extended payment terms'
    },
    {
      id: '4',
      date: '2025-05-14',
      salesPic: 'Peter Wong',
      customer: 'NORDIC OILS SWEDEN AB',
      country: 'Sweden',
      orderValue: 'SEK 85,500,000',
      requestedCreditLimit: 'RM 18,500,000',
      requestedPaymentTerm: '120 days',
      incoTerm: 'CFR',
      requestor: 'Peter Wong',
      stage: 'HBU & HBS',
      timeElapsed: 6,
      status: 'On Hold',
      segment: 'B2B',
      notes: 'On hold pending additional financial documentation'
    },
    {
      id: '5',
      date: '2025-05-19',
      salesPic: 'Maria Santos',
      customer: 'BRASIL PALM INDUSTRIA LTDA',
      country: 'Brazil',
      orderValue: 'BRL 45,200,000',
      requestedCreditLimit: 'RM 9,800,000',
      requestedPaymentTerm: '60 days',
      incoTerm: 'FOB',
      requestor: 'Maria Santos',
      stage: 'Credit Committee',
      timeElapsed: 2,
      status: 'Under Review',
      segment: 'BULK',
      notes: 'Credit committee reviewing bulk order terms'
    },
    {
      id: '6',
      date: '2025-05-13',
      salesPic: 'James Mitchell',
      customer: 'SOUTH AFRICAN OILS PTY LTD',
      country: 'South Africa',
      orderValue: 'ZAR 185,000,000',
      requestedCreditLimit: 'RM 15,200,000',
      requestedPaymentTerm: '75 days',
      incoTerm: 'CIF',
      requestor: 'James Mitchell',
      stage: 'Group Managing Director',
      timeElapsed: 8,
      status: 'Approved',
      segment: 'B2C',
      notes: 'GMD approved with negotiated payment terms'
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'KYC': return 'bg-blue-100 text-blue-800';
      case 'Order Commercial': return 'bg-yellow-100 text-yellow-800';
      case 'Credit Rating': return 'bg-purple-100 text-purple-800';
      case 'IOM': return 'bg-green-100 text-green-800';
      case 'HBU & HBS': return 'bg-blue-100 text-blue-800';
      case 'Credit Committee': return 'bg-purple-100 text-purple-800';
      case 'Group Managing Director': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'Approved': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'In Progress':
      case 'Under Review':
      case 'Done': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'On Hold': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'Rejected': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'Approved': return 'text-green-600';
      case 'In Progress':
      case 'Under Review':
      case 'Done': return 'text-green-600';
      case 'On Hold': return 'text-yellow-600';
      case 'Rejected': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const filteredData = onboardingData.filter(record => {
    const matchesSearch = record.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = filterStage === '' || record.stage === filterStage;
    const matchesStatus = filterStatus === '' || record.status === filterStatus;
    
    return matchesSearch && matchesStage && matchesStatus;
  });

  const handleDownload = () => {
    console.log('Download dashboard report');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header currentPage="dashboard" onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="w-full px-3 sm:px-4 lg:px-6 py-6">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1 flex items-center">
                <BarChart3 className="w-7 h-7 mr-2 text-blue-600" />
                Customer Onboarding Dashboard
              </h1>
              <p className="text-sm text-gray-600">Track and monitor customer onboarding application progress</p>
            </div>

            <div className="flex items-center space-x-4">
            </div>
          </div>

          {/* Summary Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <DevNote
              note="Summary cards show real-time KPIs. Data should come from aggregated query on onboarding_requests table. Total = all records, Completed = status='Done', In Progress = status='In Progress', Avg Time = AVG(time_elapsed) for completed records."
              title="Summary Cards"
              position="top-right"
            />
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">Total Applications</p>
                  <p className="text-xl font-bold text-gray-900">188</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">Completed</p>
                  <p className="text-xl font-bold text-gray-900">147</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">In Progress</p>
                  <p className="text-xl font-bold text-gray-900">47</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">Avg. Approval Time</p>
                  <p className="text-xl font-bold text-gray-900">3.8 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers or countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <select
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Stages</option>
                <option value="KYC">KYC</option>
                <option value="Order Commercial">Order Commercial</option>
                <option value="Credit Rating">Credit Rating</option>
                <option value="IOM">IOM</option>
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
                <option value="Under Review">Under Review</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
                <option value="Rejected">Rejected</option>
              </select>

              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Request Table */}
        <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 mb-6">
          <DevNote
            note="Request Table tracks the onboarding pipeline from initial request to IOM submission. Each row = one customer application. Stages progress: KYC -> Order Commercial -> Credit Rating -> IOM. Time column shows days since request started. Clicking a row should open detail modal with full info."
            title="Request Table"
            position="top-right"
          />
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
              Request Table
            </h2>
            <p className="text-xs text-gray-600 mt-1">Track completion time from initial request to IOM stage</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    Start Date
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <User className="w-3 h-3 inline mr-1" />
                    Sales PIC
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Building2 className="w-3 h-3 inline mr-1" />
                    Segment
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Building2 className="w-3 h-3 inline mr-1" />
                    Customer
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Globe className="w-3 h-3 inline mr-1" />
                    Country
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <CreditCard className="w-3 h-3 inline mr-1" />
                    Req Credit Limit (RM)
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Filter className="w-3 h-3 inline mr-1" />
                    Stage
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Clock className="w-3 h-3 inline mr-1" />
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((record) => (
                  <tr
                    key={record.id}
                    onClick={() => setSelectedRecord(record)}
                    className="hover:bg-blue-50 cursor-pointer transition-colors"
                  >
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                      {new Date(record.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                      {record.salesPic}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                        record.segment === 'B2B' ? 'bg-blue-100 text-blue-800' :
                        record.segment === 'BULK' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {record.segment}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-900 max-w-xs truncate">
                      {record.customer}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                      {record.country}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs font-medium text-gray-900">
                      {record.requestedCreditLimit}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${getStageColor(record.stage)}`}>
                        {record.stage}
                      </span>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(record.status)}
                        <span className={`ml-1 text-xs font-medium ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {record.timeElapsed} days
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Approval Table */}
        <div className="relative bg-white rounded-xl shadow-lg border border-gray-200">
          <DevNote
            note="Approval Table tracks post-IOM approval workflow. 3 approval stages: HBU & HBS -> Credit Committee -> Group Managing Director. Each approval level has its own SLA. Records move here after IOM is submitted. Status reflects current approver's decision."
            title="Approval Table"
            position="top-right"
          />
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Approval Table
            </h2>
            <p className="text-xs text-gray-600 mt-1">Track approval process from IOM completion to final approval</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    Submitted Date
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <User className="w-3 h-3 inline mr-1" />
                    Sales PIC
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Building2 className="w-3 h-3 inline mr-1" />
                    Segment
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Building2 className="w-3 h-3 inline mr-1" />
                    Customer
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Globe className="w-3 h-3 inline mr-1" />
                    Country
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <DollarSign className="w-3 h-3 inline mr-1" />
                    Req Credit Limit (RM)
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Filter className="w-3 h-3 inline mr-1" />
                    Stage
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    <Clock className="w-3 h-3 inline mr-1" />
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {approvalData.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedApprovalRecord(record)}>
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                      {new Date(record.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                      {record.salesPic}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                        record.segment === 'B2B' ? 'bg-blue-100 text-blue-800' :
                        record.segment === 'BULK' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {record.segment}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-900 max-w-xs truncate">
                      {record.customer}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                      {record.country}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs font-medium text-gray-900">
                      {record.requestedCreditLimit}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${getStageColor(record.stage)}`}>
                        {record.stage}
                      </span>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(record.status)}
                        <span className={`ml-1 text-xs font-medium ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {record.timeElapsed} days
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Request Details Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Request Details</h3>
              </div>
              <button
                onClick={() => setSelectedRecord(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {/* Customer Information */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">Customer Information</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Customer Name</label>
                    <p className="text-sm font-medium text-gray-900">{selectedRecord.customer}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Country</label>
                    <p className="text-sm font-medium text-gray-900">{selectedRecord.country}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Segment</label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      selectedRecord.segment === 'B2B' ? 'bg-blue-100 text-blue-800' :
                      selectedRecord.segment === 'BULK' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {selectedRecord.segment}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Request Date</label>
                    <p className="text-sm font-medium text-gray-900">
                      {new Date(selectedRecord.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Financial Details */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">Financial Details</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <label className="text-xs font-medium text-green-700 uppercase mb-1 block">Order Value</label>
                    <p className="text-lg font-bold text-green-900">{selectedRecord.orderValue}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <label className="text-xs font-medium text-blue-700 uppercase mb-1 block">Requested Credit Limit</label>
                    <p className="text-lg font-bold text-blue-900">{selectedRecord.requestedCreditLimit}</p>
                  </div>
                </div>
              </div>

              {/* Trade Terms */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Package className="w-5 h-5 text-purple-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">Trade Terms</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Requested Payment Term</label>
                    <p className="text-sm font-medium text-gray-900">{selectedRecord.requestedPaymentTerm}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Inco Term</label>
                    <p className="text-sm font-medium text-gray-900">{selectedRecord.incoTerm}</p>
                  </div>
                </div>
              </div>

              {/* Process Status */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-5 h-5 text-orange-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">Process Status</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Current Stage</label>
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStageColor(selectedRecord.stage)}`}>
                      {selectedRecord.stage}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Status</label>
                    <div className="flex items-center">
                      {getStatusIcon(selectedRecord.status)}
                      <span className={`ml-2 text-sm font-medium ${getStatusColor(selectedRecord.status)}`}>
                        {selectedRecord.status}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Sales PIC</label>
                    <p className="text-sm font-medium text-gray-900">{selectedRecord.salesPic}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Time Elapsed</label>
                    <p className="text-sm font-medium text-gray-900">{selectedRecord.timeElapsed} days</p>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              {selectedRecord.notes && (
                <div>
                  <div className="flex items-center mb-4">
                    <FileText className="w-5 h-5 text-gray-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Additional Notes</h4>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">{selectedRecord.notes}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Approval Details Modal */}
      {selectedApprovalRecord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Approval Details</h3>
              </div>
              <button
                onClick={() => setSelectedApprovalRecord(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {/* Customer Information */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">Customer Information</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Customer Name</label>
                    <p className="text-sm font-medium text-gray-900">{selectedApprovalRecord.customer}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Country</label>
                    <p className="text-sm font-medium text-gray-900">{selectedApprovalRecord.country}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Segment</label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      selectedApprovalRecord.segment === 'B2B' ? 'bg-blue-100 text-blue-800' :
                      selectedApprovalRecord.segment === 'BULK' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {selectedApprovalRecord.segment}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Request Date</label>
                    <p className="text-sm font-medium text-gray-900">
                      {new Date(selectedApprovalRecord.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Commercial Details */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">Commercial Details</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Order Value</label>
                    <p className="text-sm font-semibold text-gray-900">{selectedApprovalRecord.orderValue}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Requested Credit Limit</label>
                    <p className="text-sm font-semibold text-gray-900">{selectedApprovalRecord.requestedCreditLimit}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Payment Terms</label>
                    <p className="text-sm font-medium text-gray-900">{selectedApprovalRecord.requestedPaymentTerm}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Incoterm</label>
                    <p className="text-sm font-medium text-gray-900">{selectedApprovalRecord.incoTerm}</p>
                  </div>
                </div>
              </div>

              {/* Request Information */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <User className="w-5 h-5 text-purple-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">Request Information</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Sales PIC</label>
                    <p className="text-sm font-medium text-gray-900">{selectedApprovalRecord.salesPic}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Requestor</label>
                    <p className="text-sm font-medium text-gray-900">{selectedApprovalRecord.requestor}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Approval Stage</label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStageColor(selectedApprovalRecord.stage)}`}>
                      {selectedApprovalRecord.stage}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Status</label>
                    <div className="flex items-center">
                      {getStatusIcon(selectedApprovalRecord.status)}
                      <span className={`ml-2 text-sm font-medium ${getStatusColor(selectedApprovalRecord.status)}`}>
                        {selectedApprovalRecord.status}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Time Elapsed</label>
                    <p className="text-sm font-medium text-gray-900">{selectedApprovalRecord.timeElapsed} days</p>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              {selectedApprovalRecord.notes && (
                <div>
                  <div className="flex items-center mb-4">
                    <FileText className="w-5 h-5 text-gray-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Additional Notes</h4>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">{selectedApprovalRecord.notes}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;