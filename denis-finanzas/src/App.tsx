import Hero from './components/pages/Hero'
import Navbar from './components/NavBar'
import About from './components/pages/About'
import SmallDownArrow from './components/smallComponents/DownArrow'
import WhoAmI from './components/pages/WhoAmI'
import KnowMore from './components/smallComponents/KnowMore'
import JoinCommunity from './components/pages/JoinComminuty'
import Footer from './components/pages/Footer'
import Coaching from './components/pages/Coaching'
import Featured from './components/pages/Featured'
import Separator from './components/smallComponents/Separator'
import NotGonnaLearn from './components/pages/NotGonnaLearn'
function App() {

  return (
    <div className="bg-[rgba(var(--mainBackground),1)] 
    transition-colors duration-300">
      <Navbar />
      <Hero />
      <SmallDownArrow headTo="whoami" />
      <WhoAmI />
      <KnowMore headTo="about" />
      <About />
      <Separator />
      <NotGonnaLearn />
      <Coaching />
      <Featured />
      <JoinCommunity />
      <Footer />
    </div>
  )
}

export default App
