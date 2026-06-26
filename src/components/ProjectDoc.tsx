import React from 'react';
import { FileText, Code, TrendingUp, CheckCircle, Clock, AlertCircle, ChevronRight } from 'lucide-react';
import Header from './Header';

interface ProjectDocProps {
  onNavigate: (page: 'dashboard' | 'search' | 'results' | 'db-report' | 'order-commercial' | 'kyc6-sanction' | 'credit-rating-calculation' | 'credit-rating' | 'iom' | 'iom-b2b-b1m' | 'analytics' | 'project-doc') => void;
}

const ProjectDoc: React.FC<ProjectDocProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header currentPage="project-doc" onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6">
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Project Documentation</h1>
          </div>
          <p className="text-gray-600">Comprehensive overview of the Customer Onboarding System</p>
        </div>

        <div className="space-y-6">
          {/* Project Requirements Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">1. Project Requirements</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  A comprehensive customer onboarding and credit risk assessment system designed for SD Guthrie International.
                  The platform streamlines the onboarding process, integrates credit bureau checks, financial assessments,
                  and manages multi-level approval workflows.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FeatureCard
                    title="Dashboard"
                    description="Central hub showing onboarding requests and approval workflows with filtering, search, and status tracking"
                    status="done"
                  />
                  <FeatureCard
                    title="Prospect Search"
                    description="Company search and background verification interface for initiating new customer onboarding"
                    status="done"
                  />
                  <FeatureCard
                    title="Credit Bureau Integration"
                    description="Background search results displaying company information and credit bureau data"
                    status="done"
                  />
                  <FeatureCard
                    title="D&B Report"
                    description="Dun & Bradstreet report viewer showing detailed business information, financial data, and risk indicators"
                    status="done"
                  />
                  <FeatureCard
                    title="Order Commercial Report"
                    description="Commercial order details including product specifications, quantities, payment terms, and shipment information"
                    status="done"
                  />
                  <FeatureCard
                    title="KYC6 Sanction Report"
                    description="Know Your Customer and sanction screening report with compliance checks and risk assessment"
                    status="done"
                  />
                  <FeatureCard
                    title="Credit Rating Calculation"
                    description="Interactive credit rating calculator with multiple financial metrics and risk parameters"
                    status="done"
                  />
                  <FeatureCard
                    title="Credit Rating Report"
                    description="Comprehensive credit rating report with final scores, recommendations, and detailed analysis"
                    status="done"
                  />
                  <FeatureCard
                    title="IOM Preview"
                    description="Internal Order Memo preview showing all collected information before final submission"
                    status="done"
                  />
                  <FeatureCard
                    title="IOM B2B B1M"
                    description="Detailed IOM form for B2B and B1M segment customers with customer info, credit analysis, and approval workflow"
                    status="done"
                  />
                  <FeatureCard
                    title="Analytics Dashboard"
                    description="Business intelligence dashboard with KPIs, trends, and performance metrics"
                    status="done"
                  />
                  <FeatureCard
                    title="Notes System"
                    description="Collaborative commenting system for process chain with database persistence"
                    status="done"
                  />
                  <FeatureCard
                    title="Approval Workflow"
                    description="Multi-stage approval system with credit committee, sequential approvers, and status tracking"
                    status="done"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Segments</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-medium text-sm">B2B (Business to Business)</span>
                  <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-medium text-sm">BULK (Bulk Orders)</span>
                  <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg font-medium text-sm">B2C (Business to Consumer)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Requirements Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">2. Technical Requirements</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TechCard
                    category="Frontend Framework"
                    items={[
                      { name: 'React', version: '18.3.1', description: 'UI library for building component-based interfaces' },
                      { name: 'TypeScript', version: '5.5.3', description: 'Type-safe JavaScript superset' }
                    ]}
                  />
                  <TechCard
                    category="Build Tool & Dev Server"
                    items={[
                      { name: 'Vite', version: '5.4.2', description: 'Fast build tool and development server' }
                    ]}
                  />
                  <TechCard
                    category="Styling"
                    items={[
                      { name: 'Tailwind CSS', version: '3.4.1', description: 'Utility-first CSS framework' },
                      { name: 'PostCSS', version: '8.4.35', description: 'CSS transformation tool' },
                      { name: 'Autoprefixer', version: '10.4.18', description: 'CSS vendor prefix automation' }
                    ]}
                  />
                  <TechCard
                    category="Backend & Database"
                    items={[
                      { name: 'Supabase', version: '2.86.0', description: 'PostgreSQL database with real-time capabilities and authentication' }
                    ]}
                  />
                  <TechCard
                    category="UI Components & Icons"
                    items={[
                      { name: 'Lucide React', version: '0.344.0', description: 'Beautiful, consistent icon library' }
                    ]}
                  />
                  <TechCard
                    category="Code Quality"
                    items={[
                      { name: 'ESLint', version: '9.9.1', description: 'JavaScript/TypeScript linting' },
                      { name: 'TypeScript ESLint', version: '8.3.0', description: 'TypeScript-specific linting rules' }
                    ]}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Database Schema</h3>
                <div className="space-y-3">
                  <DatabaseTable
                    tableName="notes"
                    description="Stores user comments and notes for each customer onboarding process"
                    columns={[
                      'id (uuid, primary key)',
                      'company_name (text)',
                      'author_name (text)',
                      'author_title (text)',
                      'content (text)',
                      'created_at (timestamptz)',
                      'updated_at (timestamptz)'
                    ]}
                  />
                  <DatabaseTable
                    tableName="approval_applications"
                    description="Main approval workflow applications"
                    columns={[
                      'id (uuid, primary key)',
                      'customer_name (text)',
                      'segment (text)',
                      'requested_credit_limit (numeric)',
                      'requested_by (text)',
                      'start_date (date)',
                      'refinery (text)',
                      'status (text)',
                      'current_stage (text)',
                      'created_at (timestamptz)',
                      'updated_at (timestamptz)'
                    ]}
                  />
                  <DatabaseTable
                    tableName="approval_stages"
                    description="Individual stages in the approval workflow"
                    columns={[
                      'id (uuid, primary key)',
                      'application_id (uuid, FK)',
                      'stage_name (text)',
                      'stage_order (integer)',
                      'approver_role (text)',
                      'approver_name (text)',
                      'status (text)',
                      'comments (text)',
                      'approved_at (timestamptz)',
                      'created_at (timestamptz)'
                    ]}
                  />
                  <DatabaseTable
                    tableName="credit_committee_approvals"
                    description="Credit committee member approvals for multi-member stages"
                    columns={[
                      'id (uuid, primary key)',
                      'application_id (uuid, FK)',
                      'stage_id (uuid, FK)',
                      'committee_member_name (text)',
                      'member_position (text)',
                      'status (text)',
                      'comments (text)',
                      'approved_at (timestamptz)',
                      'created_at (timestamptz)'
                    ]}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Architecture Highlights</h3>
                <ul className="space-y-1.5">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700"><strong>Component-Based Architecture:</strong> Modular React components for reusability and maintainability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700"><strong>Type Safety:</strong> Full TypeScript implementation for compile-time error detection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700"><strong>Responsive Design:</strong> Mobile-first approach with Tailwind CSS breakpoints</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700"><strong>Database Security:</strong> Row Level Security (RLS) enabled on all tables with authenticated user policies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700"><strong>Real-time Capabilities:</strong> Supabase provides real-time subscriptions for live data updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Build Roadmap Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-900">3. Build Roadmap</h2>
            </div>

            <div className="space-y-3">
              <RoadmapItem
                phase="Phase 1: Foundation"
                status="done"
                items={[
                  { task: 'Project setup with React, TypeScript, and Vite', status: 'done', notes: 'Initial project scaffolding completed' },
                  { task: 'Tailwind CSS configuration and design system setup', status: 'done', notes: 'Established color palette and component patterns' },
                  { task: 'Header and navigation structure', status: 'done', notes: 'Responsive sidebar navigation with mobile support' },
                  { task: 'Dashboard page with data tables', status: 'done', notes: 'Dual-table layout for onboarding and approval tracking' }
                ]}
              />

              <RoadmapItem
                phase="Phase 2: Core Features"
                status="done"
                items={[
                  { task: 'Prospect Search functionality', status: 'done', notes: 'Company search with real-time filtering' },
                  { task: 'Background Search Results page', status: 'done', notes: 'Credit bureau data display with company details' },
                  { task: 'D&B Report integration', status: 'done', notes: 'Comprehensive business information display' },
                  { task: 'Order Commercial Report', status: 'done', notes: 'Detailed order specifications and terms' },
                  { task: 'KYC6 Sanction Report', status: 'done', notes: 'Compliance and risk screening results' }
                ]}
              />

              <RoadmapItem
                phase="Phase 3: Credit Assessment"
                status="done"
                items={[
                  { task: 'Credit Rating Calculation tool', status: 'done', notes: 'Interactive calculator with multiple financial metrics' },
                  { task: 'Credit Rating Report generation', status: 'done', notes: 'Comprehensive report with recommendations and analysis' },
                  { task: 'Risk scoring algorithms', status: 'done', notes: 'Multi-factor risk assessment with weighted scoring' }
                ]}
              />

              <RoadmapItem
                phase="Phase 4: IOM System"
                status="done"
                items={[
                  { task: 'IOM Preview interface', status: 'done', notes: 'Summary view of all collected data before submission' },
                  { task: 'IOM B2B B1M detailed form', status: 'done', notes: 'Comprehensive IOM with customer info, credit analysis, and approval sections' },
                  { task: 'Added Requested Credit Limit and Payment Terms fields', status: 'done', notes: 'Enhanced customer information section with key financial fields' }
                ]}
              />

              <RoadmapItem
                phase="Phase 5: Database & Backend"
                status="done"
                items={[
                  { task: 'Supabase setup and configuration', status: 'done', notes: 'PostgreSQL database with RLS enabled' },
                  { task: 'Notes table and CRUD operations', status: 'done', notes: 'Collaborative commenting system with author tracking' },
                  { task: 'Approval workflow tables', status: 'done', notes: 'Multi-stage approval with credit committee support' },
                  { task: 'Row Level Security policies', status: 'done', notes: 'Secure data access for authenticated users' },
                  { task: 'Database indexes for performance', status: 'done', notes: 'Optimized queries for common access patterns' }
                ]}
              />

              <RoadmapItem
                phase="Phase 6: Analytics & Reporting"
                status="done"
                items={[
                  { task: 'Analytics Dashboard', status: 'done', notes: 'KPIs, trends, and performance metrics visualization' },
                  { task: 'Business intelligence metrics', status: 'done', notes: 'Segment analysis, conversion rates, and approval tracking' }
                ]}
              />

              <RoadmapItem
                phase="Phase 7: Documentation"
                status="done"
                items={[
                  { task: 'Project Documentation page', status: 'done', notes: 'Comprehensive technical and functional documentation' }
                ]}
              />

              <RoadmapItem
                phase="Future Enhancements"
                status="in_progress"
                items={[
                  { task: 'Email notifications for approval stages', status: 'pending', notes: 'Automated alerts for approvers and requestors' },
                  { task: 'Document upload and management', status: 'pending', notes: 'Supporting documents for credit applications' },
                  { task: 'Advanced reporting and export features', status: 'pending', notes: 'PDF generation and Excel exports' },
                  { task: 'User authentication and role-based access', status: 'pending', notes: 'Supabase Auth integration with role management' },
                  { task: 'Audit trail and activity logging', status: 'pending', notes: 'Complete audit history for compliance' },
                  { task: 'Integration with external credit bureaus', status: 'pending', notes: 'Real-time credit bureau API integration' },
                  { task: 'Mobile app development', status: 'pending', notes: 'Native mobile experience for approvers on the go' }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  status: 'done' | 'in_progress' | 'pending';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, status }) => {
  const statusConfig = {
    done: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
    in_progress: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    pending: { icon: AlertCircle, color: 'text-gray-400', bg: 'bg-gray-50' }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-1.5">
        <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
        <StatusIcon className={`w-4 h-4 ${config.color} flex-shrink-0`} />
      </div>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
};

interface TechCardProps {
  category: string;
  items: Array<{ name: string; version: string; description: string }>;
}

const TechCard: React.FC<TechCardProps> = ({ category, items }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h4 className="font-semibold text-gray-900 mb-2 text-sm">{category}</h4>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="border-l-2 border-blue-400 pl-2">
            <div className="flex items-baseline space-x-1.5 mb-0.5">
              <span className="font-medium text-gray-900 text-sm">{item.name}</span>
              <span className="text-xs text-blue-600 font-mono">{item.version}</span>
            </div>
            <p className="text-xs text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface DatabaseTableProps {
  tableName: string;
  description: string;
  columns: string[];
}

const DatabaseTable: React.FC<DatabaseTableProps> = ({ tableName, description, columns }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-1.5">
        <code className="text-base font-semibold text-blue-600">{tableName}</code>
      </div>
      <p className="text-xs text-gray-700 mb-2">{description}</p>
      <div className="bg-gray-50 rounded p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {columns.map((column, index) => (
            <code key={index} className="text-xs text-gray-700">{column}</code>
          ))}
        </div>
      </div>
    </div>
  );
};

interface RoadmapItemProps {
  phase: string;
  status: 'done' | 'in_progress' | 'pending';
  items: Array<{ task: string; status: 'done' | 'in_progress' | 'pending'; notes: string }>;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ phase, status, items }) => {
  const statusConfig = {
    done: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
    in_progress: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
    pending: { icon: AlertCircle, color: 'text-gray-400', bg: 'bg-gray-50', border: 'border-gray-200' }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div className={`border-2 ${config.border} rounded-xl p-4 ${config.bg}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-bold text-gray-900">{phase}</h3>
        <div className="flex items-center space-x-1.5">
          <StatusIcon className={`w-5 h-5 ${config.color}`} />
          <span className={`text-xs font-medium ${config.color} uppercase`}>{status.replace('_', ' ')}</span>
        </div>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => {
          const itemConfig = statusConfig[item.status];
          const ItemStatusIcon = itemConfig.icon;

          return (
            <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-start space-x-2">
                <ItemStatusIcon className={`w-4 h-4 ${itemConfig.color} mt-0.5 flex-shrink-0`} />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 mb-0.5 text-sm">{item.task}</p>
                  <p className="text-xs text-gray-600 italic">{item.notes}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDoc;
