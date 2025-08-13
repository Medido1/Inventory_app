import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import emptyCoverIcon from '../assets/question-sign.png';

function BookPreview() {
  const {state, previewUrl} = useContext(GlobalContext)
  
  return (
    <div className="bg-slate-300 p-4 mt-4 rounded-md flex sm:mx-auto sm:min-w-[380px]
      max-h-[250px]">
      {!previewUrl ? 
        <div className="border-2 border-dashed p-4 flex flex-col
          items-center justify-center max-w-[50%] text-center h-[180px]">
          <img 
            className="h-10"
            src={emptyCoverIcon} alt="no cover" />
          <p>No Cover provided ! </p>
        </div>
        :
        <img className="h-[160px]" src={previewUrl} alt={`${state.title} cover`}/>
      } 
      <div className="text-center flex-1 w-full">
        <h2 className="text-xl">
          {state.title}
        </h2>
        <p>{state.author}</p>
        <ul className="text-blue-400 flex flex-col">
          {state.categories.map((category) =>
            <li
              key={category}>
              {category}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default BookPreview;