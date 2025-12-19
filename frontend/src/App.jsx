import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import USACareerPathways from './pages/USACareerPathways';
import OJTProgram from './pages/OJTProgram';
import OJTEdTechProject from './pages/OJTEdTechProject';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/usa-pathways" element={<USACareerPathways />} />
                    <Route path="/ojt-program" element={<OJTProgram />} />
                    <Route path="/ojt-edtech" element={<OJTEdTechProject />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
