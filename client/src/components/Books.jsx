import { useContext, useEffect } from 'react';
import viewIcon from '../assets/viewbooks.gif';
import {GlobalContext} from '../context/GlobalContext';
import BookCard from './BookCard';

function Books() {
  const {booksData} = useContext(GlobalContext);

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
    </div>
  )
}

export default Books;