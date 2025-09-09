import introIcon from '../assets/books.gif';
import viewIcon from '../assets/viewbooks.gif';
import categoriesIcon from '../assets/categories.gif';
import { Link } from 'react-router-dom';
import NewBookForm from './NewBookForm';
import BookPreview from './BookPreview';
import BookSubmissionModal from "./BookSubmissionModal";
import { UIContext } from '../context/UIContext';
import { AppStateContext } from '../context/AppStateContext';
import { useContext, useState } from 'react';

function Main() {
  const {isMobile, previewUrl} = useContext(UIContext)
  const {state} = useContext(AppStateContext)
  const {title = "", author = "", categories = []} = state || {};
  const [showNewBookForm, setShowNewBookForm] = useState(false);

  // show form on mobile, hide it in desktop
  const showForm = isMobile || (!isMobile && showNewBookForm) 
  
  return (
    <main className="main flex-1 flex flex-col p-4 bg-slate-100">
      <h1 className="text-2xl text-center">Welcome to My Books</h1>
      <div className='md:flex md:justify-center md:gap-4'>
        <div className=" p-4 shadow-lg rounded-lg mt-4 bg-white sm:max-w-[500px]">
          <p className="text-center text-lg">
            Your personal library, always with you.
            Keep track of every book you’ve read,
            organize them into categories, and revisit your reading journey anytime.
          </p>
          <img
            className='h-10 mx-auto'
            src={introIcon} alt="icon" aria-hidden="true" />
        </div>
        <div>
          <div className='p-4 shadow-lg rounded-lg mt-4 bg-white
            flex justify-center items-center gap-4'>
            <img src={viewIcon} alt="icon" aria-hidden="true" className='h-10' />
            <Link
              to={'/books'}
              className='text-xl text-center'>
              View Books
            </Link>
          </div>
          <div className='p-4 shadow-lg rounded-lg mt-4 bg-white
            flex justify-center items-center gap-4'>
            <img src={categoriesIcon} alt="icon" aria-hidden="true" className='h-10' />
            <Link
              to={'/categories'}
              className='text-xl text-center'>
              View Categories
            </Link>
          </div>
        </div>
      </div>
      
      {showForm && ( 
        <div className="md:flex">
          <NewBookForm />
          <BookPreview 
            previewUrl={previewUrl}
            title={title}
            author={author}
            categories={categories}/>
        </div>
      )}

      {!isMobile && !showNewBookForm && 
        <button 
          onClick={() => setShowNewBookForm(true)}
          className='mt-8 px-8 py-4 text-xl bg-green-300 rounded-md cursor-pointer mx-auto
          hover:bg-green-400 hover:scale-110 transition duration-300 shadow-lg'>
          Add new book!!
        </button>
      }
      <BookSubmissionModal setShowNewBookForm={setShowNewBookForm}/>
    </main>
  )
}

export default Main;