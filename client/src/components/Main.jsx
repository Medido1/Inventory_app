import introIcon from '../assets/books.gif';
import viewIcon from '../assets/viewbooks.gif';
import categoriesIcon from '../assets/categories.gif';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <main className="main flex-1 flex flex-col p-4 bg-slate-100">
      <h1 className="text-2xl text-center">Welcome to My Books</h1>
      <div className=" p-4 shadow-lg rounded-lg mt-4 bg-white">
        <p className="text-center text-lg">
          Your personal library, always with you.
          Keep track of every book you’ve read, 
          organize them into categories, and revisit your reading journey anytime.
        </p>
        <img 
          className='h-10 mx-auto'
          src={introIcon} alt="icon" />
      </div>
      <div className='p-4 shadow-lg rounded-lg mt-4 bg-white 
        flex justify-center items-center gap-4'>
        <img src={viewIcon} alt="icon" className='h-10' />
        <Link 
          to={'/books'}
          className='text-xl text-center'>
          View Books
        </Link>
      </div>
      <div className='p-4 shadow-lg rounded-lg mt-4 bg-white 
        flex justify-center items-center gap-4'>
        <img src={categoriesIcon} alt="icon" className='h-10' />
        <Link 
          to={'/categories'}
          className='text-xl text-center'>
          View Categories
        </Link>
      </div>
    </main>
  )
}

export default Main;