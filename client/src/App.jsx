import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Main from './components/Main';

const Books = lazy(() => import('./components/Books'));

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <MobileMenu />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/books' element={<Books />}/>
        </Routes>
      </div>
      
    </Router>
  )
}

export default App
