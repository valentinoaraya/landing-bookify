import './App.css'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import Benefits from './components/Benefits/Benefits'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <section id="benefits">
        <Benefits />
      </section>
      <Footer />
    </main>
  )
}

export default App
