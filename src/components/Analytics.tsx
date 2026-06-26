import React, { useState } from 'react';
import {
  Clock,
  TrendingUp,
  TrendingDown,
  Users,
  AlertCircle,
  CheckCircle,
  XCircle,
  Globe,
  DollarSign,
  Calendar,
  FileText,
  BarChart3,
  Activity,
  PieChart,
  Info
} from 'lucide-react';
import Header from './Header';

interface AnalyticsProps {
  onNavigate: (page: string) => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ onNavigate }) => {
  const [timeFilter, setTimeFilter] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly');

  const avgRequestTime = 3.2;
  const avgApprovalTime = 4.1;
  const targetApprovalTime = 5;

  const approvalCompliance = {
    withinLimit: 78,
    exceededLimit: 22,
    totalCases: 245
  };

  const customerSegmentation = {
    byCountry: [
      { country: 'Malaysia', count: 145, percentage: 59 },
      { country: 'Singapore', count: 45, percentage: 18 },
      { country: 'Indonesia', count: 28, percentage: 11 },
      { country: 'Thailand', count: 18, percentage: 7 },
      { country: 'Others', count: 9, percentage: 5 }
    ],
    byCreditLimit: [
      { range: 'RM 0-5M', requested: 82, approved: 80 },
      { range: 'RM 5-10M', requested: 65, approved: 58 },
      { range: 'RM 10-20M', requested: 54, approved: 45 },
      { range: 'RM 20M+', requested: 44, approved: 28 }
    ],
    byPaymentTerm: [
      { term: '30 days', requested: 98, approved: 95 },
      { term: '45 days', requested: 76, approved: 68 },
      { term: '60 days', requested: 52, approved: 38 },
      { term: '90 days', requested: 19, approved: 10 }
    ],
    reportType: {
      creditBureau: 145,
      dunnBradstreet: 100
    }
  };

  const bottleneckAnalysis = {
    requestProcess: [
      { stage: 'Initial Submission', avgTime: 0.5, percentage: 8 },
      { stage: 'Document Collection', avgTime: 1.8, percentage: 56, isBottleneck: true },
      { stage: 'Data Validation', avgTime: 0.6, percentage: 19 },
      { stage: 'Report Generation', avgTime: 0.3, percentage: 9 }
    ],
    approvalProcess: [
      { stage: 'Credit Assessment', avgTime: 1.2, percentage: 29 },
      { stage: 'Risk Analysis', avgTime: 1.6, percentage: 39, isBottleneck: true },
      { stage: 'Management Review', avgTime: 0.9, percentage: 22 },
      { stage: 'Final Approval', avgTime: 0.4, percentage: 10 }
    ]
  };

  const dataCompleteness = {
    creditBureau: {
      complete: 132,
      partial: 10,
      missing: 3,
      avgCompleteness: 91
    },
    dunnBradstreet: {
      complete: 85,
      partial: 12,
      missing: 3,
      avgCompleteness: 85
    }
  };

  const dropoutAnalysis = {
    requestProcess: {
      total: 312,
      completed: 245,
      dropped: 67,
      dropoutRate: 21
    },
    approvalProcess: {
      total: 245,
      completed: 211,
      dropped: 34,
      dropoutRate: 14
    },
    dropoutReasons: [
      { reason: 'Incomplete Documentation', count: 38, percentage: 38 },
      { reason: 'Customer Withdrew', count: 28, percentage: 28 },
      { reason: 'Failed Credit Check', count: 22, percentage: 22 },
      { reason: 'Timeout/No Response', count: 13, percentage: 13 }
    ]
  };

  const potentialOrderValue = {
    total: 'RM 1.2B',
    approved: 'RM 892M',
    pending: 'RM 245M',
    rejected: 'RM 63M'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} currentPage="analytics" />

      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Analytics</h1>
            <p className="text-gray-500 text-xs">Track your customer onboarding and approval performance</p>
          </div>

          <div className="flex items-center gap-1 bg-white rounded-xl p-0.5 shadow-sm border border-gray-200">
            <button
              onClick={() => setTimeFilter('daily')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                timeFilter === 'daily'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => setTimeFilter('weekly')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                timeFilter === 'weekly'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeFilter('monthly')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                timeFilter === 'monthly'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeFilter('yearly')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                timeFilter === 'yearly'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-teal-50 rounded-xl">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <Info className="w-3 h-3 text-gray-400" />
            </div>
            <p className="text-gray-500 text-xs mb-1">Avg Request Time</p>
            <div className="flex items-end gap-2">
              <p className="text-2xl font-bold text-gray-900">{avgRequestTime}</p>
              <span className="text-gray-500 text-xs mb-0.5">days</span>
            </div>
            <div className="flex items-center mt-2 text-xs">
              <span className="text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md font-medium flex items-center gap-0.5">
                <TrendingDown className="w-3 h-3" />
                12%
              </span>
              <span className="text-gray-500 ml-1.5">vs last period</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 bg-green-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm mb-1">Avg Approval Time</p>
            <div className="flex items-end gap-3">
              <p className="text-3xl font-bold text-gray-900">{avgApprovalTime}</p>
              <span className="text-gray-500 text-sm mb-1">days</span>
            </div>
            <div className="flex items-center mt-3 text-sm">
              <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                8%
              </span>
              <span className="text-gray-500 ml-2">vs last period</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm mb-1">Total Customers</p>
            <div className="flex items-end gap-3">
              <p className="text-3xl font-bold text-gray-900">{approvalCompliance.totalCases}</p>
            </div>
            <div className="flex items-center mt-3 text-sm">
              <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                18%
              </span>
              <span className="text-gray-500 ml-2">vs last period</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-purple-50 rounded-xl">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm mb-1">Total Order Value</p>
            <div className="flex items-end gap-3">
              <p className="text-3xl font-bold text-gray-900">{potentialOrderValue.total}</p>
            </div>
            <div className="flex items-center mt-3 text-sm">
              <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                24%
              </span>
              <span className="text-gray-500 ml-2">vs last period</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Approval Compliance</h3>
              <Info className="w-4 h-4 text-gray-400" />
            </div>

            <div className="relative mb-6">
              <svg className="w-full h-48" viewBox="0 0 200 120">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="20"
                  strokeDasharray="251.2 251.2"
                  strokeDashoffset="62.8"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="20"
                  strokeDasharray="251.2 251.2"
                  strokeDashoffset={62.8 + (251.2 * (100 - approvalCompliance.withinLimit) / 100)}
                  transform="rotate(-90 100 100)"
                  className="transition-all duration-1000"
                />
                <text x="100" y="95" textAnchor="middle" className="text-4xl font-bold fill-gray-900">
                  {approvalCompliance.withinLimit}%
                </text>
                <text x="100" y="115" textAnchor="middle" className="text-sm fill-gray-500">
                  Within 5 Days
                </text>
              </svg>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Within Target</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{Math.round(approvalCompliance.totalCases * approvalCompliance.withinLimit / 100)}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Exceeded</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{Math.round(approvalCompliance.totalCases * approvalCompliance.exceededLimit / 100)}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Customer Dropout</h3>
                <p className="text-sm text-gray-500 mt-1">Overall completion rate across all stages</p>
              </div>
              <Info className="w-4 h-4 text-gray-400" />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">Request Process</p>
                <p className="text-3xl font-bold text-blue-600">{dropoutAnalysis.requestProcess.dropoutRate}%</p>
                <p className="text-xs text-gray-500 mt-1">{dropoutAnalysis.requestProcess.dropped} dropped</p>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">Approval Process</p>
                <p className="text-3xl font-bold text-teal-600">{dropoutAnalysis.approvalProcess.dropoutRate}%</p>
                <p className="text-xs text-gray-500 mt-1">{dropoutAnalysis.approvalProcess.dropped} dropped</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">Completed</p>
                <p className="text-3xl font-bold text-green-600">{Math.round((dropoutAnalysis.approvalProcess.completed / dropoutAnalysis.requestProcess.total) * 100)}%</p>
                <p className="text-xs text-gray-500 mt-1">{dropoutAnalysis.approvalProcess.completed} completed</p>
              </div>
            </div>

            <div className="space-y-3">
              {dropoutAnalysis.dropoutReasons.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.reason}</span>
                    <span className="text-sm font-bold text-gray-900">{item.count} ({item.percentage}%)</span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Top Countries</h3>
                <p className="text-sm text-gray-500 mt-1">Customer distribution by region</p>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">{customerSegmentation.byCountry.reduce((acc, item) => acc + item.count, 0)} total</span>
              </div>
            </div>

            <div className="space-y-4">
              {customerSegmentation.byCountry.map((item, index) => (
                <div key={index} className="group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold text-gray-400">{index + 1}</span>
                      <span className="text-sm font-medium text-gray-900">{item.country}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">{item.count}</p>
                      <p className="text-xs text-gray-500">{item.percentage}%</p>
                    </div>
                  </div>
                  <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Report Types</h3>
                <p className="text-sm text-gray-500 mt-1">Distribution of credit reports</p>
              </div>
              <FileText className="w-4 h-4 text-gray-400" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-3 shadow-sm">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-green-700 mb-1">{customerSegmentation.reportType.creditBureau}</p>
                <p className="text-sm font-medium text-green-800">Credit Bureau</p>
                <p className="text-xs text-green-600 mt-1">Malaysian customers</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-3 shadow-sm">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-blue-700 mb-1">{customerSegmentation.reportType.dunnBradstreet}</p>
                <p className="text-sm font-medium text-blue-800">Dun & Bradstreet</p>
                <p className="text-xs text-blue-600 mt-1">Foreign customers</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">CB Completeness</span>
                  <span className="text-xs font-bold text-gray-900">{dataCompleteness.creditBureau.avgCompleteness}%</span>
                </div>
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-green-600 rounded-full"
                    style={{ width: `${dataCompleteness.creditBureau.avgCompleteness}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">D&B Completeness</span>
                  <span className="text-xs font-bold text-gray-900">{dataCompleteness.dunnBradstreet.avgCompleteness}%</span>
                </div>
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                    style={{ width: `${dataCompleteness.dunnBradstreet.avgCompleteness}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Credit Limit Analysis</h3>
                <p className="text-sm text-gray-500 mt-1">Requested vs Approved comparison</p>
              </div>
              <DollarSign className="w-4 h-4 text-gray-400" />
            </div>

            <div className="space-y-5">
              {customerSegmentation.byCreditLimit.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-900">{item.range}</span>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                      {Math.round((item.approved / item.requested) * 100)}% approved
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-500">Requested</span>
                        <span className="text-xs font-bold text-gray-700">{item.requested}</span>
                      </div>
                      <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-teal-400 rounded-full"
                          style={{ width: `${(item.requested / 100) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-500">Approved</span>
                        <span className="text-xs font-bold text-gray-700">{item.approved}</span>
                      </div>
                      <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                          style={{ width: `${(item.approved / 100) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Payment Terms</h3>
                <p className="text-sm text-gray-500 mt-1">Requested vs Approved comparison</p>
              </div>
              <Calendar className="w-4 h-4 text-gray-400" />
            </div>

            <div className="space-y-5">
              {customerSegmentation.byPaymentTerm.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-900">{item.term}</span>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                      {Math.round((item.approved / item.requested) * 100)}% approved
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-500">Requested</span>
                        <span className="text-xs font-bold text-gray-700">{item.requested}</span>
                      </div>
                      <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-teal-400 rounded-full"
                          style={{ width: `${(item.requested / 100) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-500">Approved</span>
                        <span className="text-xs font-bold text-gray-700">{item.approved}</span>
                      </div>
                      <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                          style={{ width: `${(item.approved / 100) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Request Process Bottlenecks</h3>
                <p className="text-sm text-gray-500 mt-1">Identify delays in the request workflow</p>
              </div>
              <Activity className="w-4 h-4 text-gray-400" />
            </div>

            <div className="space-y-4">
              {bottleneckAnalysis.requestProcess.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    item.isBottleneck
                      ? 'bg-red-50 border-red-200 shadow-sm'
                      : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-900">{item.stage}</span>
                    {item.isBottleneck && (
                      <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        BOTTLENECK
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span>Avg Time: {item.avgTime} days</span>
                    <span className="font-semibold">{item.percentage}% of total time</span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
                        item.isBottleneck ? 'bg-red-500' : 'bg-teal-400'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Approval Process Bottlenecks</h3>
                <p className="text-sm text-gray-500 mt-1">Identify delays in the approval workflow</p>
              </div>
              <Activity className="w-4 h-4 text-gray-400" />
            </div>

            <div className="space-y-4">
              {bottleneckAnalysis.approvalProcess.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    item.isBottleneck
                      ? 'bg-red-50 border-red-200 shadow-sm'
                      : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-900">{item.stage}</span>
                    {item.isBottleneck && (
                      <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        BOTTLENECK
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span>Avg Time: {item.avgTime} days</span>
                    <span className="font-semibold">{item.percentage}% of total time</span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
                        item.isBottleneck ? 'bg-red-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
