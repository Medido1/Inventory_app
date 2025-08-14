import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import categoriesIcon from '../assets/categories.gif';
import { Link } from 'react-router-dom';
import NewBookForm from './NewBookForm';

function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);
  const {booksData} = useContext(GlobalContext);

  useEffect(() => {
    const uniqueCategories = [];
    booksData.forEach((book) => {
      book.categories.forEach((category) => {
        if (!uniqueCategories.includes(category)) {
          uniqueCategories.push(category)
        }
      }) 
    })
    setCategoriesList(uniqueCategories)
  }, [booksData])

  return (
    <div className='p-4'>
      <div className='flex items-center gap-4 mb-4'>
        <img src={categoriesIcon} alt="icon" className='h-10' aria-hidden="true" />
        <h1 className="text-2xl text-center">Categories</h1>
      </div>
      <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-2'>
        {categoriesList.length > 0 ? 
          (categoriesList.map((category) => 
            <Link 
              to={`/categories/${category}`}
              key={category}
              className='bg-slate-200 p-4 text-black rounded-md text-center text-xl mb-4
                font-bold cursor-pointer'
            >
              {category}
            </Link>
          ))
          :
          (<p className='text-center'>No Categories yet :(</p>)
        }
      </div>
    </div>
  )
}

export default Categories;