import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'></div>
    </Router>
  )
}

export default App
