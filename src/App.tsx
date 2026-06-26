import React from 'react';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import ProspectSearch from './components/ProspectSearch';
import BackgroundSearchResult from './components/BackgroundSearchResult';
import DBReport from './components/DBReport';
import OrderCommercial from './components/OrderCommercial';
import KYC6SanctionReport from './components/KYC6SanctionReport';
import CreditRatingCalculation from './components/CreditRatingCalculation';
import CreditRatingReport from './components/CreditRatingReport';
import IOM_Preview from './components/IOM_Preview';
import IOM_B2B_B1M from './components/IOM_B2B_B1M';
import Analytics from './components/Analytics';
import ProjectDoc from './components/ProjectDoc';
import UserStories from './components/UserStories';

function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'search' | 'results' | 'db-report' | 'order-commercial' | 'kyc6-sanction' | 'credit-rating-calculation' | 'credit-rating' | 'iom' | 'iom-b2b-b1m' | 'analytics' | 'project-doc' | 'user-stories'>('dashboard');

  const handleSearch = () => {
    setCurrentPage('results');
  };

  const handleBackToSearch = () => {
    setCurrentPage('search');
  };

  const handleOrderCommercial = () => {
    setCurrentPage('order-commercial');
  };

  const handleKYC6Sanction = () => {
    setCurrentPage('kyc6-sanction');
  };

  const handleCreditRatingCalculation = () => {
    setCurrentPage('credit-rating-calculation');
  };

  const handleCreditRating = () => {
    setCurrentPage('credit-rating');
  };

  const handleIOM = () => {
    setCurrentPage('iom');
  };

  const handleIOMB2BB1M = () => {
    setCurrentPage('iom-b2b-b1m');
  };

  return (
    <>
      {currentPage === 'dashboard' && <Dashboard onNavigate={setCurrentPage} />}
      {currentPage === 'search' && <ProspectSearch onSearch={handleSearch} onNavigate={setCurrentPage} />}
      {currentPage === 'results' && <BackgroundSearchResult onBackToSearch={handleBackToSearch} onNavigate={setCurrentPage} />}
      {currentPage === 'db-report' && <DBReport onBackToSearch={handleBackToSearch} onNavigate={setCurrentPage} />}
      {currentPage === 'order-commercial' && <OrderCommercial onBackToSearch={handleBackToSearch} onNavigate={setCurrentPage} />}
      {currentPage === 'kyc6-sanction' && <KYC6SanctionReport onBackToSearch={handleBackToSearch} onNavigate={setCurrentPage} />}
      {currentPage === 'credit-rating-calculation' && <CreditRatingCalculation onBackToSearch={handleBackToSearch} onNavigate={setCurrentPage} />}
      {currentPage === 'credit-rating' && <CreditRatingReport onBackToSearch={handleBackToSearch} onNavigate={setCurrentPage} />}
      {currentPage === 'iom' && <IOM_Preview onBackToSearch={handleBackToSearch} onNavigate={setCurrentPage} />}
      {currentPage === 'iom-b2b-b1m' && <IOM_B2B_B1M onBackToSearch={handleBackToSearch} onNavigate={setCurrentPage} />}
      {currentPage === 'analytics' && <Analytics onNavigate={setCurrentPage} />}
      {currentPage === 'project-doc' && <ProjectDoc onNavigate={setCurrentPage} />}
      {currentPage === 'user-stories' && <UserStories onNavigate={setCurrentPage} />}
    </>
  );
}

export default App;