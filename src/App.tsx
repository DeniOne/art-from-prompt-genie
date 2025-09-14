import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* People silhouettes with high contrast */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              Art From Prompt Genie
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Создавайте невероятные произведения искусства с помощью AI
            </p>
          </div>
          
          {/* High contrast people silhouettes */}
          <div className="flex justify-center items-end space-x-8 mt-16">
            {/* Person 1 */}
            <div className="relative">
              <div className="w-16 h-32 bg-white/90 rounded-t-full shadow-2xl border-2 border-white/50"></div>
              <div className="w-20 h-20 bg-white/90 rounded-full -mt-2 shadow-2xl border-2 border-white/50"></div>
            </div>
            
            {/* Person 2 */}
            <div className="relative">
              <div className="w-[4.5rem] h-36 bg-white/95 rounded-t-full shadow-2xl border-2 border-white/60"></div>
              <div className="w-[5.5rem] h-[5.5rem] bg-white/95 rounded-full -mt-2 shadow-2xl border-2 border-white/60"></div>
            </div>
            
            {/* Person 3 */}
            <div className="relative">
              <div className="w-16 h-[7.5rem] bg-white/90 rounded-t-full shadow-2xl border-2 border-white/50"></div>
              <div className="w-20 h-20 bg-white/90 rounded-full -mt-2 shadow-2xl border-2 border-white/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;