import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MetricsSection from './components/MetricsSection';
import Problem from './components/Problem';
import Platform from './components/Platform';
import CurrentProgress from './components/CurrentProgress';
import WhyNow from './components/WhyNow';
import Roadmap from './components/Roadmap';
import WhyItMatters from './components/Difference';
import FounderSection from './components/FounderSection';
import TrustBar from './components/TrustBar';
import CTA from './components/Vision';
import ForFarmers from './pages/ForFarmers';
import ForInvestors from './pages/ForInvestors';
import Founder from './pages/Founder';

const HomePage = () => (
  <main>
    <Hero />
    <MetricsSection />
    <Problem />
    <Platform />
    <CurrentProgress />
    <WhyNow />
    <Roadmap />
    <WhyItMatters />
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
