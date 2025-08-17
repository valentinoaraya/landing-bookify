import './App.css'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import Benefits from './components/Benefits/Benefits'
import ForEveryoneSection from './components/ForEveryoneSection/ForEveryoneSection'
import Footer from './components/Footer/Footer'
import SupportSection from './components/SupportSection/SupportSection'

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <section id="benefits">
        <Benefits />
      </section>
      <section className='for-everyone-section'>
        <ForEveryoneSection />
      </section>
      <section>
        <SupportSection />
      </section>
      <Footer />
    </main>
  )
}

export default App
