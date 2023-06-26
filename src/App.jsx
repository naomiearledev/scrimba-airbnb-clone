import './assets/css/App.css'
import NavBar from './components/NavBar'
// import Hero from './components/Hero'
import CardContainer from './components/CardContainer'
import data from './data'

console.log(data)

function App() {
  return (
    <>
      <NavBar />
      {/* <Hero /> */}
      <CardContainer />
    </>
  )
}

export default App
