import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Carousal from './components/Carousal';
import Testimonials from './components/Testimonials';
import News from './components/News';

function App() {
  return (
    <div >
      <Navbar/>
      <div className=' flex items-center py-[5rem] justify-center bg-no-repeat bg-cover bg-[url("https://source.unsplash.com/random/?white")]'>
      <Hero/>
    
    
      </div>

      <div className='bg-[#f3f4f6]'>
      <Features/>
      
      <Gallery/>
      <Carousal/>
      <News/>
      <Team/>
      <Testimonials/>
      </div>
      <div className='bg-slate-700'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
