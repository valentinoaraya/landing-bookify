import './App.css'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import Benefits from './components/Benefits/Benefits'
import ForEveryoneSection from './components/ForEveryoneSection/ForEveryoneSection'
import Footer from './components/Footer/Footer'
import SupportSection from './components/SupportSection/SupportSection'
import Price from './components/Price/Price'

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <section id="benefits">
        <Benefits />
      </section>
      <section className='forEveryoneSection' id="forEveryone">
        <ForEveryoneSection />
      </section>
      <section id="price">
        <Price />
      </section>
      <section id="support">
        <SupportSection />
      </section>
      <Footer />
    </main>
  )
}

export default App
