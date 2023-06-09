import './assets/css/App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CardContainer from './components/CardContainer'

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Hero />
        <CardContainer />
      </div>
    </>
  )
}

export default App
