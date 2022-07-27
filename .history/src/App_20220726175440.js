import React from 'react'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Home from './components/Home'
import Milestones from './components/Milestones'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import ScrollTop from './components/ScrollTop'
import Services from './components/Services'
import Skill from './components/Skill'
import Testimonil from './components/Testimonil'
import Footer from './components/Footer'
import V from './components/Viedo'
const App = () => {
  return (
 <>
 <ScrollTop />
 <Home/>
 <Services/>
 <Portfolio/>
 <Milestones/>
 <Blog/>
 <Video/>
 <Pricing/>
 <Testimonil/>
 <Skill/>
 <Contact/>
 <Footer/>
 </>
  )
}

export default App