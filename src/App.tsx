import './App.css'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import Benefits from './components/Benefits/Benefits'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Price from './components/Price/Price'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <section id="benefits">
        <Benefits />
      </section>
      <section id='howItWorks'>
        <HowItWorks />
      </section>
      <section id='price'>
        <Price />
      </section>
      <Footer />
    </main>
  )
}

export default App
