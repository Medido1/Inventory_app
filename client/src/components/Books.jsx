import { useContext } from 'react';
import viewIcon from '../assets/viewbooks.gif';
import {GlobalContext} from '../context/GlobalContext';
import BookCard from './BookCard';
import NewBookForm from './NewBookForm';

function Books() {
  const {booksData, showForm, currentBook} = useContext(GlobalContext);

  return (
    <div className="p-4">
      <div className='flex items-center gap-4 mb-4'>
        <img src={viewIcon} alt="icon" className='h-10' />
        <h1 className="text-2xl text-center">My Books</h1>
      </div>
      <ul>
        {booksData.map((book) => 
          <li key={book.id}>
            <BookCard book = {book}/>
          </li>
        )}
      </ul>
      {showForm && 
        <div>
          <div className='fixed inset-0 bg-black/75 z-10 p-4 '></div>
          <div className='absolute p-4 top-10 rounded-2xl z-20'>
            <NewBookForm currentBook = {currentBook}/>
          </div>
          
          
        </div>
      }
    </div>
  )
}

export default Books;