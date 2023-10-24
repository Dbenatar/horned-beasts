import './App.css'
import Gallery from './components/Gallery'
import beastArr from './Data'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {


  return (
    <>
      <Header />
      <Gallery beast={beastArr}/>
      <Footer />
    </>
  )
}

export default App
