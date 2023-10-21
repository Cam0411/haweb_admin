import {AiOutlineSearch,AiOutlineBell} from "react-icons/ai"
import { useState,useEffect } from "react";
import axios from "axios"
import { useParams } from 'react-router-dom';


function generateSlug(title) {
    // Remove special characters, spaces, and convert to lowercase
    if (title) {
        // Remove special characters, spaces, and convert to lowercase
        return title
            .replace(/[^\w\s-]/g, '')
            .split(' ')
            .filter((word) => word) // Remove empty strings
            .join('-')
            .toLowerCase();
    } 
    // Handle the case where title is undefined
// or another default value
}
const UpdateProducts = () => {
    const { slug } = useParams();
    const apiHaweb = `https://haweb-api.onrender.com/api/product/${slug}`
    console.log(apiHaweb)
    // set up product
    const [productData, setProductData] = useState({});
     const [modal,setModal] = useState(false);
     const [error,setError] = useState(false)
     
      const handleChange = (e) => {
        const newSlug = generateSlug(productData.title);
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value,slug:newSlug });
      }
     const openModal = () => {
        
             return setModal(true)
    }
     
     const closeModal = () => {
        return setModal(false)
        
     }
    //   set up product 
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.put(`${apiHaweb}`, productData); // Send a POST request to your backend route
            setError(false)  
        } catch (err) {
            if (err.response && err.response.status === 404) {
              setError(true)
            } 
          }
      };
   
    return (
        <div class="col-span-5 xl:col-span-4 p-3 mt-[150px] xl:mt-0">
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
           <h1 class="text-[22px] font-bold">Cập nhật sản phẩm</h1>
           <form onSubmit={handleSubmit} ction="#"  method="POST" class="mt-5">
          <div className="mb-4">
          <label htmlFor="title" className="block  font-medium mb-2">
            Tiêu đề sản phẩm
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleChange}
            className="w-full px-2 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600 font-medium mb-2">
            Thông tin sản phẩm
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full px-2 py-2 border rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-600 font-medium mb-2">
            Phân loại sản phẩm
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="w-full px-2 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-600 font-medium mb-2">
            URL hình ảnh
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={productData.photo}
            onChange={handleChange}
            className="w-full px-2 py-2 border rounded-md"
          />
        </div>
        <div className="mt-10 mb-5">
          <button
            type="submit"
            onClick={ openModal}
            className="bg-[#b5262a] text-white py-2 px-4 rounded font-bold  focus:outline-none"
          >
            Cập nhật sản phẩm
          </button>
        </div>
      </form>
      {modal ? (
           <div class="fixed bg-[#0004] inset-0 h-full flex justify-center items-center">
           <div className="bg-white p-10 rounded-lg shadow-md">
             <h2 className="text-[28px] font-bold mb-2">Sản phẩm cập nhật thành công</h2>
             <p>Bạn đã hoàn thành cập nhật sản phẩm!</p>
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
  
        <p>{error}</p>
        </div>
    </div>
    )
}

export default UpdateProducts;