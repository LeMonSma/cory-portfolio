import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Sidebar from './components/Sidebar/Sidebar';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';


function router(page) {
  switch (page) {
    case 'about':
      return <About />

    case 'contact':
      return <Contact />

    case 'portfolio':
      return <Portfolio />
    default:
      return <About />

  }
}

function App() {
  const [selectedPage, setPage] = useState('home')

  return (

    <div id='App' className='row'>
      <Sidebar selected={selectedPage} onSelect={setPage} />
      <main className='col-10'>
        {router(selectedPage)}
      </main>
    </div>

  )

}

export default App;
