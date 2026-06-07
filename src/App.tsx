import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MetricsSection from './components/MetricsSection';
import BiologicalLoop from './components/Platform';
import DetectionWindow from './components/Problem';
import SensorSection from './components/SensorSection';
import TechDevelopment from './components/CurrentProgress';
import FocusAreas from './components/FocusAreas';
import ProgressSection from './components/ProgressSection';
import FounderSection from './components/FounderSection';
import TrustBar from './components/TrustBar';
import CTA from './components/Vision';
import ProductShowcase from './components/ProductShowcase';
import ForFarmers from './pages/ForFarmers';
import ForInvestors from './pages/ForInvestors';
import Founder from './pages/Founder';

const HomePage = () => (
  <main>
    <Hero />
    <ProductShowcase />
    <BiologicalLoop />
    <DetectionWindow />
    <SensorSection />
    <MetricsSection />
    <TechDevelopment />
    <FocusAreas />
    <ProgressSection />
    <FounderSection />
    <TrustBar />
    <CTA />
  </main>
)

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/farmers" element={<ForFarmers />} />
        <Route path="/investors" element={<ForInvestors />} />
        <Route path="/founder" element={<Founder />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
