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
const [horns, setHorns] = useState("");

// // form, dropdown menu to view favourites
// const [form, setForm] = useState ({
//   horns: "",
// })

// function handleSubmit(event) {
//   event.preventDefault();
// }

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  function handleFilter(event) {
    setHorns(event.target.value);
  }

function handleChange(event) {
  setForm({ ...form, [event.target.name]: event.taget.value});
}

  return (
    <div>
      <Header />
      <select onChange={handleFilter}>
      <option value="">ALL</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="100">100</option>
      </select>
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
