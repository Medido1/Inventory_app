import { useState } from "react";
import CoverInput from './CoverInput';

function NewBookForm() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  const handleKeyDown = (e) => {
    if ((e.key === "Enter") && inputValue.trim() !=="") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())){
        setTags([...tags, inputValue.trim()])
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  };

  return (
    <form action="" className='p-4 shadow-lg rounded-lg mt-4 bg-white
      flex flex-col items-center gap-4'>
      <p className='text-xl font-bold'>Add a new book!</p>
      <div className='flex items-center gap-2 text-lg'>
        <label htmlFor="title" className='w-[22%]'>Title :</label>
        <input type="text"
          className='bg-gray-200 rounded-md p-2 w-[80%]'
        />
      </div>
      <div className='flex items-center gap-2 text-lg'>
        <label htmlFor="author">Author:</label>
        <input 
          type="text" 
          className='bg-gray-200 rounded-md p-2 w-[80%]'
        />
      </div>
      <div>
        <div className="flex flex-col items-center gap-2 text-lg mb-2">
          <label htmlFor="categories">Categories:</label>
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type category and press enter'
            className='bg-gray-200 rouned-md p-2'
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span className='flex gap-2 bg-gray-200 p-2 rounded-lg' key={index}>
              {tag}
              <button 
                onClick={() => removeTag(tag)}>
                x
              </button>
            </span>
          ))}
        </div>
      </div>
      <CoverInput />
      <button 
        className="bg-gray-200 p-2 rounded-md"
        type="submit">
        Submit
      </button>
    </form>
  )
}

export default NewBookForm;