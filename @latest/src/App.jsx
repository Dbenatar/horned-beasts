import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import beastArr from './Data'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Header />
      <Gallery beasts={beastArr}/>
      <Footer />
    </>
  )
}

export default App
