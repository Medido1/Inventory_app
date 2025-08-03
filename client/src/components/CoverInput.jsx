import { useEffect, useRef, useState } from "react";
import uploadIcon from '../assets/upload.png';

function CoverInput() {
  const [errMsg, setErrMsg] = useState("");

  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileInputRef = useRef(null); 

  /*  Cleanup effect: revokes the previous object URL to free memory 
  whenever previewUrl changes or the component unmounts */
  useEffect(() => { 
    return () => {
      if (previewUrl){
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  const verifyFileValidity = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file)
    }
    else {
      setErrMsg("Upload an image!!")
    }
  };

  const handleFile = (file) => {
    const isValidType = ["image/jpeg", "image/png"].includes(file.type);
    const isValidSize = file.size <= 600 * 1024; // 600KB
  
    if (!isValidType || !isValidSize) {
      setErrMsg("Invalid file!! Please choose a JPG or PNG image under 500KB.");
      setPreviewUrl(null);
    } else {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      setErrMsg("");
    }
  };

  return (
    <div className="w-full">
      <p className="text-lg font-bold text-center">Upload Book cover</p>
      <div
        className="border-2 border-dashed w-full h-[200px] flex justify-center items-center"
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          /* retrieves the first file from the dataTransfer.files list of a drag-and-drop event. */
          const file = e.dataTransfer.files[0] 
          if (file) {
          handleFile(file)
        }
        }}
      >
        {previewUrl ? 
          <div className="flex flex-col items-center">
            <img 
              src={previewUrl}
              alt="preview"
              className="h-[120px] mb-2"
            />
            <div className="flex gap-2">
              <button
                className="bg-red-200 p-2 rounded-md"
                onClick={() => setPreviewUrl(null)}
              >
                Remove
              </button>
              <button
                className="bg-green-200 p-2 rounded-md"
                /* opens the file picker without showing the default file input UI. */
                onClick={(e) => {
                  e.preventDefault();
                  fileInputRef.current.click()
                  }
                }
              >
                Change
              </button>
            </div>
          </div>
        : (
          <label htmlFor = "coverUpload" className="flex flex-col items-center">
            <img src={uploadIcon} alt="upload" className="h-10" />
            <p>Drag and drop or click to upload</p>
          </label>
        )}
      </div>
      {errMsg ? (
        <p className="text-red-400 text-sm mt-2">{errMsg}</p>
        ): (
          <div className="flex justify-center gap-2">
            <p className="text-xs font-display font-thin">
              Upload your photo (JPG or PNG, max size: 600KB).
            </p>
          </div>
      )}
      <input 
        type="file" 
        id="coverUpload" 
        onChange={verifyFileValidity} 
        ref={fileInputRef}
        className="hidden"
      />
    </div>
  )
}

export default CoverInput;