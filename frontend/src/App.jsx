import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import USAPathways from './pages/USAPathways';
import OJT from './pages/OJT';
import OJTEdTech from './pages/OJTEdTech';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usa-pathways" element={<USAPathways />} />
          <Route path="/ojt" element={<OJT />} />
          <Route path="/ojt/edtech-project" element={<OJTEdTech />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
