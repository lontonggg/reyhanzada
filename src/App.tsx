import './App.css'
import { Navbar } from './components/navigations/Navbar'
import { Footer } from './components/navigations/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Project'

function App() {
  return (
    <>
      <Navbar />
      <div className='px-6 lg:px-20 xl:px-50 2xl:px-72 mt-20 mb-10 lg:mb-20'>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
