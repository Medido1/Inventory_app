import { useContext } from 'react';
import viewIcon from '../assets/viewbooks.gif';
import {UIContext} from '../context/UIContext';
import { BooksContext } from '../context/BooksContext';
import BookCard from './BookCard';
import NewBookForm from './NewBookForm';
import { AppStateContext } from '../context/AppStateContext';

function Books() {
  const {showForm, setShowForm} = useContext(UIContext);
  const {booksData = [], setBooksData} = useContext(BooksContext)
  const {currentBook, setCurrentBook} = useContext(AppStateContext)

  function confirmDelete(book) {
    if (window.confirm("Are you sure you want to delete this book ?")) {
      const filteredBooks = booksData.filter((b) => b.id !== book.id);
      setBooksData(filteredBooks);
    }
  }

  function handleEdit(book) {
    setShowForm(true)
    setCurrentBook(book)
  }

  return (
    <div className="p-4">
      <div className='flex items-center gap-4 mb-4'>
        <img src={viewIcon} alt="icon" className='h-10' />
        <h1 className="text-2xl text-center">My Books</h1>
      </div>
      {booksData.length > 0 ? 
        (<ul className='sm:grid sm:gap-2 sm:grid-cols-2 md:grid-cols-4'>
          {booksData.map((book) => 
            <li key={book.id}>
              <BookCard book = {book}
                onEdit={handleEdit}
                onDelete={confirmDelete}
              />
            </li>
          )}
        </ul>)
        :
        <p className='text-center'>No Books added yet :(</p>
      }
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