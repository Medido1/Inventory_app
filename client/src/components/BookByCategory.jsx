import { useParams } from 'react-router-dom'; /* access URL parameters defined in route paths. */
import { UIContext } from '../context/UIContext';
import { BooksContext } from '../context/BooksContext';
import { AppStateContext } from '../context/AppStateContext';
import BookCard from './BookCard';
import { useContext } from 'react';
import NewBookForm from './NewBookForm';

function BookByCategory() {
  const {showForm} = useContext(UIContext);
  const {booksData} = useContext(BooksContext);
  const {currentBook} = useContext(AppStateContext)
  const { categoryName } = useParams(); //get category name from url
  const filteredBooks = booksData.filter(book => book.categories.includes(categoryName))

  return (
    <div className='p-4'>
      <h2 className='text-center text-2xl text-black font-bold mb-4'>
        {categoryName}
      </h2>
      {filteredBooks.length > 0 ? 
      (
        <ul className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {filteredBooks.map((book) => 
          <li key={book.id}>
            <BookCard book = {book}/>
          </li>
        )}
      </ul>
      ) :
      <p className='text-center'> No books added yet:(</p>
      }
      {showForm && 
        <div  className="fixed inset-0 z-50 flex items-center justify-center" 
          role='dialog' aria-modal="true">
          <div className='absolute inset-0 bg-black/75 z-40 '></div>
          <div className="relative  bg-white rounded-2xl p-4 z-50">
            <NewBookForm currentBook={currentBook} />
          </div> 
        </div>
      }
    </div>
  )
}

export default BookByCategory;