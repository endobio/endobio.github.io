import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Platform from './components/Platform';
import Difference from './components/Difference';
import Vision from './components/Vision';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Platform />
        <Difference />
        <Vision />
      </main>
    </div>
  );
}

export default App;
