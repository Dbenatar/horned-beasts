import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import data from './assets/Data.json';
import { useState } from 'react';
import SelectedBeast from './components/SelectedBeast'

function App() {
const [showModal, setShowModal] = useState(false);
const [shownBeast, setShownBeast] = useState({});

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  return (
    <>
      <Header />
      <Gallery data={data} handleShowModal={handleShowModal} />
      <Footer />
      {showModal && (
        <SelectedBeast shownBeast={shownBeast}
        handleShowModal={handleShowModal} />
      )}
    </>
  )
}

export default App;
