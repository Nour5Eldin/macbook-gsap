import Hero from './components/Hero'
import NavBar from './components/NavBar'
import ProductViewer from './components/ProductViewer'
import Performance from './components/Performance'
import gsap from 'gsap'
import { ScrollTrigger} from 'gsap/all'
import Showcase from './components/Showcase'
import Features from './components/Features'

gsap.registerPlugin(ScrollTrigger);
const App = () => {

  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
    </main>
  )
}

export default App
