// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Benefits from './component/benifits/benifits'
// import HeroSection from './component/herosection/herosection'
// import Navbar from './component/navbar/navbar'
// import StatsSection from './component/StatsSection/StatsSection'
// import CaseStudy from './component/CaseStudy/CaseStudy'
// import BigEnough from './component/BigEnough/BigEnough'
// import Testimonial from './component/Testimonial/Testimonial'
// import CTA from './component/CTA/CTA'
// import BlogSection from './component/BlogSection/BlogSection'
// import Footer from './component/Footer/Footer'
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Navbar/>
//     <HeroSection/>
//     <Benefits/>
//     <StatsSection/>
//     <CaseStudy/>
//     <BigEnough/>
//     <Testimonial/>
//     <CTA/>
//     <BlogSection/>
//     <Footer/>
//   </StrictMode>,
// )
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; 
import './index.css'; 


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);