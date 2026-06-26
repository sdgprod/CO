import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'dashboard' | 'search' | 'results' | 'db-report' | 'order-commercial' | 'kyc6-sanction' | 'credit-rating-calculation' | 'credit-rating' | 'iom' | 'iom-b2b-b1m' | 'analytics' | 'project-doc' | 'user-stories') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'search', label: 'Search' },
    { id: 'results', label: 'CB' },
    { id: 'db-report', label: 'D&B' },
    { id: 'order-commercial', label: 'OCR' },
    { id: 'kyc6-sanction', label: 'KYC' },
    { id: 'credit-rating-calculation', label: 'CRC' },
    { id: 'credit-rating', label: 'CRR' },
    { id: 'iom', label: 'IOM_Preview' },
    { id: 'iom-b2b-b1m', label: 'IOM B2B B1M' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'project-doc', label: 'Project Doc' },
    { id: 'user-stories', label: 'User Stories' }
  ];

  const handleNavigation = (page: any) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>

              <div className="flex items-center space-x-2">
                <img src="/SDGI-Logo-new.png" alt="SD Guthrie International" className="h-8 w-auto" />
                <span className="text-lg font-bold text-gray-900">Customer Onboarding</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors cursor-pointer">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-sm font-medium text-gray-900">Sarah Chen</div>
                <div className="text-xs text-gray-500">ID: 4827682</div>
              </div>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Navigation</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Header;
