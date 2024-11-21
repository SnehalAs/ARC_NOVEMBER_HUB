import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RetroGridDemo } from './component/practice/practice'
import Benefits from './component/benifits/benifits'
import HeroSection from './component/herosection/herosection'
import Navbar from './component/navbar/navbar'
import StatsSection from './component/StatsSection/StatsSection'
import CaseStudy from './component/CaseStudy/CaseStudy'
import BigEnough from './component/BigEnough/BigEnough'
import Testimonial from './component/Testimonial/Testimonial'
import CTA from './component/CTA/CTA'
import BlogSection from './component/BlogSection/BlogSection'
import Footer from './component/Footer/Footer'
// import PartnerHero from './component/practice/practice'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar/>
    <HeroSection/>
    <RetroGridDemo/>
    <Benefits/>
    <StatsSection/>
    <CaseStudy/>
    <BigEnough/>
    <Testimonial/>
    <CTA/>
    <BlogSection/>
    <Footer/>
  </StrictMode>,
)
