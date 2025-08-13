import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Main from './components/Main';
import LoadingFallBack from './components/LoadingFallBack';
import NotFound from './components/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/ErrorFallBack';

const Books = lazy(() => import('./components/Books'));
const Categories = lazy(() => import('./components/Categories'));
const BookByCategory = lazy(() => import('./components/BookByCategory'));

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col relative'>
        <Header />
        <MobileMenu />
        <ErrorBoundary  FallbackComponent = {ErrorFallBack}>
          <Suspense fallback = {<LoadingFallBack />}>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/books' element={<Books />}/>
              <Route path='/categories' element={<Categories />}/>
              <Route path='/categories/:categoryName' element={<BookByCategory />}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
      
    </Router>
  )
}

export default App
