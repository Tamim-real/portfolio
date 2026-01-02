import React from 'react';
import Home from './pages/Home/Home';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div className="font-sans antialiased text-slate-200 bg-dark selection:bg-primary selection:text-white">
        <Home />
     
      </div>
    </HelmetProvider>
  );
}

export default App;