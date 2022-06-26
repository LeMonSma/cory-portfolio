import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Sidebar from './components/Sidebar/Sidebar';
import Contact from './components/Contact/Contact';

function router(page) {
  switch (page) {
    case 'about':
      return <About />

    case 'contact':
      return <Contact />

    default:
      return <h1> default </h1>
  }
}

function App() {
  const [selectedPage, setPage] = useState('home')

  return (

    <div id='App' className='flex-row flex-direction'>
      <Sidebar selected={selectedPage} onSelect={setPage} />
      <main className='container'>
        {router(selectedPage)}
      </main>
    </div>

  )

}

export default App;
