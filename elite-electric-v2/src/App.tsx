import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Stats from './components/Stats'
import WhyUs from './components/WhyUs'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
