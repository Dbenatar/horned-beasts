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

// form, dropdown menu to view favourites
const [form, setForm] = useState ({
  horns: "",
})

function handleSubmit(event) {
  event.preventDefault();
}

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

function handleChange(event) {
  setForm({ ...form, [event.target.name]: event.taget.value});
}

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>Number of horns</label>
        <input type="number" />
        <button>Submit</button>
      </form>
      <Gallery data={data} handleShowModal={handleShowModal} />
      <Footer />
      {showModal && (
        <SelectedBeast shownBeast={shownBeast}
        handleShowModal={handleShowModal} />
      )}
    </div>
  )
}

export default App;
