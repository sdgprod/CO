import React from 'react';
import Header from './Header';

interface UserStoriesProps {
  onNavigate: (page: string) => void;
}

const UserStories: React.FC<UserStoriesProps> = ({ onNavigate }) => {
  const modules = [
    {
      name: "Dashboard",
      stories: [
        "As a credit analyst, I want to see an overview of my pending assessments so that I can prioritize my work",
        "As a credit analyst, I want to view recent activity and updates so that I can stay informed about changes",
        "As a credit manager, I want to see key metrics and statistics so that I can monitor overall performance",
        "As a credit manager, I want to view approval workflow status so that I can track pending approvals",
        "As a user, I want to quickly access frequently used modules so that I can navigate efficiently",
        "As a user, I want to see notifications and alerts so that I can respond to time-sensitive items",
        "As a credit manager, I want to view team workload distribution so that I can balance assignments",
        "As a credit analyst, I want to see my recent searches and reports so that I can quickly resume work"
      ]
    },
    {
      name: "Prospect Search",
      stories: [
        "As a credit analyst, I want to search for prospects by company name so that I can find relevant company information quickly",
        "As a credit analyst, I want to view search results with key company details so that I can identify the correct company",
        "As a credit analyst, I want to filter search results by country or industry so that I can narrow down my search"
      ]
    },
    {
      name: "CB (Credit Bureau)",
      stories: [
        "As a credit analyst, I want to view credit bureau reports so that I can assess the creditworthiness of a prospect",
        "As a credit analyst, I want to see credit scores and payment history so that I can make informed credit decisions",
        "As a credit analyst, I want to export credit bureau data so that I can share it with stakeholders"
      ]
    },
    {
      name: "D&B (Dun & Bradstreet)",
      stories: [
        "As a credit analyst, I want to access D&B reports so that I can get comprehensive business intelligence",
        "As a credit analyst, I want to view company financial information so that I can evaluate financial stability",
        "As a credit analyst, I want to see D&B ratings and scores so that I can benchmark against industry standards"
      ]
    },
    {
      name: "OCR (Order Commercial Report)",
      stories: [
        "As a credit analyst, I want to order commercial reports so that I can gather additional company information",
        "As a credit analyst, I want to track report order status so that I know when reports are ready",
        "As a credit analyst, I want to view ordered report history so that I can avoid duplicate orders"
      ]
    },
    {
      name: "KYC (Know Your Customer)",
      stories: [
        "As a compliance officer, I want to verify customer identity so that I can comply with regulations",
        "As a compliance officer, I want to screen against sanctions lists so that I can identify high-risk customers",
        "As a compliance officer, I want to document KYC verification so that I can maintain audit trails"
      ]
    },
    {
      name: "CRC (Credit Rating Calculation)",
      stories: [
        "As a credit analyst, I want to calculate credit ratings based on financial data so that I can standardize credit assessments",
        "As a credit analyst, I want to adjust rating parameters so that I can account for industry-specific factors",
        "As a credit analyst, I want to see rating breakdowns so that I can understand how ratings are determined"
      ]
    },
    {
      name: "CRR (Credit Rating Report)",
      stories: [
        "As a credit manager, I want to generate credit rating reports so that I can present findings to stakeholders",
        "As a credit manager, I want to include risk analysis in reports so that I can highlight key concerns",
        "As a credit manager, I want to export reports in multiple formats so that I can share them easily"
      ]
    },
    {
      name: "IOM Preview",
      stories: [
        "As a credit analyst, I want to preview IOM data before submission so that I can verify accuracy",
        "As a credit analyst, I want to edit IOM fields so that I can correct errors before submission",
        "As a credit analyst, I want to validate IOM data so that I can ensure completeness"
      ]
    },
    {
      name: "IOM B2B B1M",
      stories: [
        "As a credit analyst, I want to submit B2B and B1M forms so that I can process customer applications",
        "As a credit analyst, I want to track submission status so that I know when forms are approved",
        "As a credit analyst, I want to receive submission feedback so that I can address any issues"
      ]
    },
    {
      name: "Analytics",
      stories: [
        "As a credit manager, I want to view dashboard metrics so that I can monitor team performance",
        "As a credit manager, I want to analyze approval rates so that I can identify trends",
        "As a credit manager, I want to generate custom reports so that I can track specific KPIs"
      ]
    },
    {
      name: "Project Documentation",
      stories: [
        "As a developer, I want to access API documentation so that I can integrate with the system",
        "As a developer, I want to view system architecture diagrams so that I can understand the system design",
        "As a project manager, I want to track project milestones so that I can monitor progress"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header currentPage="user-stories" onNavigate={onNavigate} />

      <main className="p-8">
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">User Stories</h1>
              <p className="text-gray-600">Comprehensive list of user stories organized by module</p>
            </div>

            <div className="space-y-6">
              {modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">{module.name}</h2>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      {module.stories.map((story, storyIndex) => (
                        <li key={storyIndex} className="flex items-start space-x-3 group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 group-hover:bg-blue-200 transition-colors">
                            <span className="text-xs font-medium text-blue-700">{storyIndex + 1}</span>
                          </div>
                          <p className="text-gray-700 flex-1 leading-relaxed">{story}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
    </div>
  );
};

export default UserStories;
