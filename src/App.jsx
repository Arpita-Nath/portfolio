import { useState , useEffect } from 'react'
import HashLoader	 from "react-spinners/HashLoader";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])

  return (
    <>
      {
        loading?
          <div className="flex items-center justify-center text-center w-full h-screen">
            <HashLoader
            color={'#33025d'}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
          </div>
          
      :
        <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          </div>

          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <About />
            <Technologies />
            <Experiences />
            <Projects />
            <Contact />
          </div>

        
        </div>
      }
      
    </>
  )
}

export default App
