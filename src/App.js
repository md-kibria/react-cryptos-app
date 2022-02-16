import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Feedbacks from './Components/Feedbacks';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Sell from './Components/Sell';
import Services from './Components/Services';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Sell />
      <Services />
      <Feedbacks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
