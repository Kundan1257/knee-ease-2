
import React, { useState, useEffect } from 'react';
import { Onboarding } from './components/Onboarding';
import { Dashboard } from './components/Dashboard';
import { Assessment } from './components/Assessment';
import { Exercises } from './components/Exercises';
import { AICoach } from './components/AICoach';
import { Navigation } from './components/Navigation';
import { AppScreen } from './types';

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>(AppScreen.ONBOARDING);
  const [hasOnboarded, setHasOnboarded] = useState(false);

  useEffect(() => {
    const onboarded = localStorage.getItem('knee-ease-onboarded');
    if (onboarded) {
      setHasOnboarded(true);
      setScreen(AppScreen.DASHBOARD);
    }
  }, []);

  const completeOnboarding = () => {
    localStorage.setItem('knee-ease-onboarded', 'true');
    setHasOnboarded(true);
    setScreen(AppScreen.DASHBOARD);
  };

  const renderScreen = () => {
    switch (screen) {
      case AppScreen.ONBOARDING:
        return <Onboarding onComplete={completeOnboarding} />;
      case AppScreen.DASHBOARD:
        return <Dashboard onNavigate={setScreen} />;
      case AppScreen.ASSESSMENT:
        return <Assessment onComplete={() => setScreen(AppScreen.DASHBOARD)} />;
      case AppScreen.EXERCISES:
        return <Exercises />;
      case AppScreen.AI_COACH:
        return <AICoach />;
      default:
        return <Dashboard onNavigate={setScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto relative shadow-2xl overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-20">
        {renderScreen()}
      </main>
      {hasOnboarded && screen !== AppScreen.ONBOARDING && (
        <Navigation currentScreen={screen} onNavigate={setScreen} />
      )}
    </div>
  );
};

export default App;
