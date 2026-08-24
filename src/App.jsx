import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';
import BottomNav from './components/layout/BottomNav';
import DashboardView from './components/dashboard/DashboardView';
import MyFarmsView from './components/farms/MyFarmsView';
import NewAnalysisWizard from './components/analysis/NewAnalysisWizard';
import ImageAnalysisView from './components/analysis/ImageAnalysisView';
import ClimateView from './components/climate/ClimateView';
import YieldPredictionView from './components/yield/YieldPredictionView';
import RecommendationsView from './components/recommendations/RecommendationsView';
import HistoryView from './components/history/HistoryView';
import ResearchView from './components/research/ResearchView';
import HelpSupportView from './components/help/HelpSupportView';
import SettingsView from './components/settings/SettingsView';
import NotificationsView from './components/notifications/NotificationsView';

import { MOCK_FARMS } from './services/mockFarmService';
import { SAMPLE_BUD_IMAGES } from './services/mockImageAnalysisService';
import { CURRENT_WEATHER, FORECAST_15_DAYS } from './services/mockClimateService';
import { MOCK_RECOMMENDATIONS } from './services/mockRecommendationService';
import { MOCK_HISTORY_RECORDS } from './services/mockHistoryService';
import { mockPredictionService } from './services/mockPredictionService';

export default function App() {
  // Navigation & View State
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Farm Selection State
  const [farms, setFarms] = useState(MOCK_FARMS);
  const [selectedFarm, setSelectedFarm] = useState('farm-1');
  const [selectedPlot, setSelectedPlot] = useState('plot-a');

  // Core Data State
  const [weather, setWeather] = useState(CURRENT_WEATHER);
  const [forecast, setForecast] = useState(FORECAST_15_DAYS);
  const [history, setHistory] = useState(MOCK_HISTORY_RECORDS);
  const [recommendations, setRecommendations] = useState(MOCK_RECOMMENDATIONS);
  const [analysisImages, setAnalysisImages] = useState(SAMPLE_BUD_IMAGES);
  const [predictionData, setPredictionData] = useState(null);

  useEffect(() => {
    mockPredictionService.getLatestPrediction(selectedPlot).then(res => {
      setPredictionData(res);
    });
  }, [selectedPlot]);

  // Handle Analysis Completed from Wizard
  const handleAnalysisCompleted = (data) => {
    if (data?.result?.images) {
      setAnalysisImages(data.result.images);
    }
    setActiveTab('image-analysis');
  };

  // Select a plot from Farms view
  const handleSelectPlotForAnalysis = (fId, pId) => {
    setSelectedFarm(fId);
    setSelectedPlot(pId);
    setActiveTab('new-analysis');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] flex flex-col md:flex-row text-slate-800 antialiased font-sans overflow-x-hidden">
      {/* Desktop Left Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex animate-in fade-in duration-150">
          <div className="w-72 bg-white h-full p-4 flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200/60">
                    <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                      <path d="M16 5C11.5 5 6 8.5 6 16C6 24.5 13.5 29 16 29C18.5 29 26 24.5 26 16C26 8.5 20.5 5 16 5Z" fill="#F59E0B" />
                      <path d="M17.5 5C17.5 3 16 1.8 14.5 2" stroke="#15803D" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M17 5C20.5 3.5 24 4.5 25 7C22 7.5 18.5 7 17 5Z" fill="#16A34A" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-base text-slate-900 font-display">MangoSense</div>
                    <div className="text-[11px] text-slate-500">Mango Yield Prediction</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Nav items */}
              <nav className="mt-4 space-y-1">
                {[
                  { id: 'dashboard', label: 'Dashboard' },
                  { id: 'farms', label: 'My Farms' },
                  { id: 'new-analysis', label: 'New Analysis' },
                  { id: 'image-analysis', label: 'Bud Classification' },
                  { id: 'climate', label: 'Climate & Forecast' },
                  { id: 'yield', label: 'Yield Prediction' },
                  { id: 'recommendations', label: 'Recommendations' },
                  { id: 'history', label: 'History' },
                  { id: 'research', label: 'Research & ML Status' },
                  { id: 'notifications', label: 'Notifications' },
                  { id: 'help', label: 'Help & Support' },
                  { id: 'settings', label: 'Settings' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                      activeTab === item.id 
                        ? 'bg-[#155e34] text-white font-bold' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="text-center text-xs text-slate-400 pt-4 border-t border-slate-100">
              MangoSense v1.0 • Prototype
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen pb-28 md:pb-8">
        {/* Sticky Top Header Bar */}
        <TopBar
          farms={farms}
          selectedFarm={selectedFarm}
          setSelectedFarm={setSelectedFarm}
          selectedPlot={selectedPlot}
          setSelectedPlot={setSelectedPlot}
          weather={weather}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          onStartNewAnalysis={() => setActiveTab('new-analysis')}
        />

        {/* View Router Container */}
        <main className="flex-1 px-3.5 sm:px-5 lg:px-8 py-4 sm:py-6 max-w-7xl w-full mx-auto min-w-0">
          {activeTab === 'dashboard' && (
            <DashboardView
              farms={farms}
              selectedFarm={selectedFarm}
              selectedPlot={selectedPlot}
              weather={weather}
              forecast={forecast}
              history={history}
              recommendations={recommendations}
              onNavigate={(tab) => setActiveTab(tab)}
              onOpenResearchModal={() => setActiveTab('research')}
            />
          )}

          {activeTab === 'farms' && (
            <MyFarmsView
              onSelectPlotForAnalysis={handleSelectPlotForAnalysis}
              onStartNewAnalysis={() => setActiveTab('new-analysis')}
            />
          )}

          {activeTab === 'new-analysis' && (
            <NewAnalysisWizard
              farms={farms}
              selectedFarm={selectedFarm}
              selectedPlot={selectedPlot}
              onAnalysisCompleted={handleAnalysisCompleted}
              onCancel={() => setActiveTab('dashboard')}
            />
          )}

          {activeTab === 'image-analysis' && (
            <ImageAnalysisView
              images={analysisImages}
              onContinueToYield={() => setActiveTab('yield')}
              onStartNewAnalysis={() => setActiveTab('new-analysis')}
            />
          )}

          {activeTab === 'climate' && (
            <ClimateView
              weather={weather}
              forecast={forecast}
              onNavigateToYield={() => setActiveTab('yield')}
            />
          )}

          {activeTab === 'yield' && (
            <YieldPredictionView
              predictionData={predictionData}
              onNavigateToRecommendations={() => setActiveTab('recommendations')}
              onStartNewAnalysis={() => setActiveTab('new-analysis')}
            />
          )}

          {activeTab === 'recommendations' && (
            <RecommendationsView
              onStartNewAnalysis={() => setActiveTab('new-analysis')}
            />
          )}

          {activeTab === 'history' && (
            <HistoryView
              onStartNewAnalysis={() => setActiveTab('new-analysis')}
            />
          )}

          {activeTab === 'research' && (
            <ResearchView />
          )}

          {activeTab === 'notifications' && (
            <NotificationsView
              onNavigateToRecommendations={() => setActiveTab('recommendations')}
            />
          )}

          {activeTab === 'help' && (
            <HelpSupportView />
          )}

          {activeTab === 'settings' && (
            <SettingsView />
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
    </div>
  );
}
