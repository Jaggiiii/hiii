
import './App.css'
import AboutMe from './components/Skills'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
    <Header />
    <main className="max-w-6xl mx-auto px-6 py-12">
      <AboutMe />
      <Projects />
      {/* <Skills /> */}
      <Contact />
    </main>
  </div>
  )
}

export default App
