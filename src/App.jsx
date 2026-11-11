import { useState } from 'react';
import Home from "./Home" ;
import About from "./About" ;
import Product from "./Product" ;
import Services from './Services';
import Blogs from "./Blogs" ;
import Commitment from "./Commitment"
import Industries from "./Industries"
import Process from './Process';
import Collection from "./Collection"
import Footer from "./Footer"
import './index.css' ;
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <div>
    <nav className="w-full bg-white shadow-sm px-5 md:px-10 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-2">
          <img
            src="public/logo.png"
            alt="Packaging Logo"
            className="w-50 h-10 object-contain"
          />
        </div>

       
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#product" className="hover:text-orange-500">Products</a>
          <a href="#services" className="hover:text-orange-500">Services</a>
          <a href="#blog" className="hover:text-orange-500">Blog</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
        </div>

      
        <div className="lg:flex hidden items-center gap-4">
          <button className="text-gray-600 hover:text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-4-4" />
            </svg>
          </button>

          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-3 rounded-full transition">
            Get a Quote
          </button>
        </div>
                <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-gray-700 hover:text-orange-500"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </nav>

          {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 mt-4 py-5 border-t border-gray-200 text-sm font-medium text-gray-700">

          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Home</a>

          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">About</a>

          <a href="#product" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Products</a>

          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Services</a>

          <a href="#blog" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Blog</a>

          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Contact</a>

          <button className="bg-orange-500 hover:bg-orange-600 w-full text-white px-5 py-3 rounded-full transition">
            Get a Quote
          </button>

        </div>
      )}




<div id='home' className="scroll-mt-20">
  <Home />
</div>


<div id='about' className="scroll-mt-20">
<About />
</div>


<div id='product' className="scroll-mt-20">
  <Product />
</div>

<div id='services' className="scroll-mt-20">
  <Services />
</div>

<div className='scroll-mt-20' id='blog'>
  <Blogs />
</div>

<div className='scroll-mt-20'>
  <Commitment />
</div>

<div className='scroll-mt-20'>
  <Industries />
</div>

<div className='scroll-mt-20'>
  <Process />
</div>
<div className='scroll-mt-20'>
  <Collection />
</div>
<div>
  <Footer />
</div>





    </div>
  );
}

export default App;
