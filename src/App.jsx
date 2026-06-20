import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Location />
      </main>
      <Footer />
    </>
  )
}

export default App
