
import styles from './App.module.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { LaboralExperience } from './components/LaboralExperience/LaboralExperience'
import { LaboralReferences } from './components/LaboralReferences/LaboralReferences'

function App() {
  
  return(
  <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <LaboralExperience/>
    <Experience/>
    <Projects/>
    <LaboralReferences/>
    <Contact/>
  </div>
  )
  
}

export default App
