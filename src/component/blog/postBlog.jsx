import {AiOutlineSearch,AiOutlineBell} from "react-icons/ai"
import { useState,useEffect,useCallback,useRef } from "react";

import 'react-quill/dist/quill.snow.css';
import '../../asset/blog.css'
import ReactQuill from 'react-quill';
import axios from "axios"

const apiHaweb = 'https://haweb-api.onrender.com/api/blog';
const PostBlog = () => {
    
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    photo: '',
    keyword:'',
    destription:'',
  });
  const [modal,setModal] = useState(false)
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
 }

  const reactQuillRef = useRef();
  const handleContentChange = (content) => {
    setBlogData({ ...blogData, content });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request using Axios
      const response = await axios.post(apiHaweb, { ...blogData });
      setModal(true)
      // Handle success
      if (response.status === 201) {
        console.log('Data posted successfully');
        // You might want to redirect or show a success message here
      } else {
        // Handle other HTTP status codes if needed
        console.error('Failed to post data');
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      console.log(typeof(blogData.title));
    }
  };
  const quillRef = useRef();
  const handleImageUpload = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];

      if (file) {
        try {
          const imageUrl = await uploadImageToCloudinary(file);
          const quill = quillRef.current.getEditor();
        
         
            const range = quill.getSelection();
            quill.clipboard.dangerouslyPasteHTML(
              range.index,
              `<img class="image_default"  src="${imageUrl}" alt="Uploaded Image" style="height: 50px;" />`
            );
          
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    };
  }, []);

  const uploadImageToCloudinary = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', `${process.env.REACT_APP_UPLOAD_PRESET}`);

      const response = await axios.post(`${process.env.REACT_APP_CLOUNDINARYAPI}`, formData);

      if (response.data.secure_url) {
        return response.data.secure_url;
      } else {
        throw new Error('Image upload failed.');
      }
    } catch (error) {
      throw error;
    }
  };

  const modules={
      
        toolbar: {
          container: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic" ,"underline", "strike", "blockquote"],
            [{ 'color': [] }],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["code-block"],
            ["clean"],
          ],
          handlers: {
            image: handleImageUpload,   // <- 
          },
        },
        clipboard: {
          matchVisual: false,
        },
      }
    const formats = [
      'font','size',
      'bold','italic','underline','strike',
      'color','background',
      'script',
      'header','blockquote','code-block',
      'indent','list',
      'direction','align',
      'link','image','video','formula',
    ]

    return (
        <div class="col-span-5 xl:col-span-4 p-3  mt-[150px] xl:mt-0 h-auto">
        <div class="bg-white shadow-xl h-[50px] sm:ml-5 sm:mr-5 ml-0 rounded-lg flex justify-between items-center p-2">
            <div class="w-[50%] flex justify-center">
             <AiOutlineSearch 
             class="text-[25px] mt-2"
             />
               <input 
                class="w-full p-2 outline-none"
                placeholder="Tìm kiếm"
               />
            </div>
            <div>
              <ul>
                  <li class="text-[25px]"><AiOutlineBell /></li>
              </ul>
            </div>
        </div>
        <div class="bg-white mt-10 shadow-lg min-h-[50vh] sm:ml-5 sm:mr-5 ml-0 rounded p-2">
           <h1 class="text-[22px] font-bold">Tạo Nội Dung</h1>
           <form onSubmit={handleSubmit} action="#"  method="POST" class="mt-5">
           <div className="mb-2">
          <label htmlFor="title" className="block font-medium mb-2">
            Tiêu đề nội dung
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            className="w-full px-2 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block font-medium mb-2">
            Thêm Banner
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={blogData.photo}
            onChange={handleChange}
            className="w-full px-2 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="keyword" className="block font-medium mb-2">
            Từ Khóa 
          </label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            value={blogData.keyword}
            onChange={handleChange}
            className="w-full px-2 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destription" className="block font-medium mb-2">
             Thông tin web
          </label>
          <input
            type="text"
            id="destription"
            name="destription"
            value={blogData.destription}
            onChange={handleChange}
            className="w-full px-2 py-2 border rounded-md"
          />
        </div>
        <div className="min-h-[500px]">
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
           ref={quillRef}
            value={blogData.content}
            onChange={handleContentChange}  // Use the new handler for content changes
          />
        </div>  
        <button
            type="submit"
            onClick={openModal}
            className="bg-[#b5262a] mt-2 text-white py-2 px-4 rounded font-bold  focus:outline-none shadow-lg"
          >
            Tạo Nội dung
          </button>
        
       
      </form>
      {modal ? (
           <div class="fixed bg-[#0004] inset-0 h-full flex justify-center items-center">
           <div className="bg-white p-10 rounded-lg shadow-md">
             <h2 className="text-[28px] font-bold mb-2">Sản phẩm tạo thành công</h2>
             <p>Bạn đã hoàn thành tạo sản phẩm!</p>
             <button
                onClick={closeModal}
               className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 focus:outline-none"
            type="submit"
            >
               Đóng
             </button>
             </div>
           </div>
      ) : ""}
            
        
        </div>
       </div>
    )
}

export default PostBlog;