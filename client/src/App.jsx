import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Main from './components/Main';
import LoadingFallback from './components/LoadingFallBack';
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
          <Routes>
            <Route path='/' element={<Main />} />
            <Route 
              path='/books' 
              element={
                <ErrorBoundary FallbackComponent={ErrorFallBack}>
                  <Suspense fallback = {<LoadingFallback />}>
                    <Books />
                  </Suspense>
                </ErrorBoundary>}
            />
            <Route 
              path='/categories' 
              element={
                <ErrorBoundary FallbackComponent={ErrorFallBack}>
                  <Suspense fallback = {<LoadingFallback />}>
                    <Categories />
                  </Suspense>
                </ErrorBoundary>}
            />
            <Route 
              path='/categories/:categoryName' 
              element={
                <ErrorBoundary FallbackComponent={ErrorFallBack}>
                  <Suspense fallback = {<LoadingFallback />}>
                    <BookByCategory />
                  </Suspense>
                </ErrorBoundary>}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
      
    </Router>
  )
}

export default App
