import {AiOutlineSearch,AiOutlineBell} from "react-icons/ai"
import {BsTrash} from "react-icons/bs"
import {IoIosArrowUp} from "react-icons/io"
import {HiOutlinePencil} from "react-icons/hi"
import { useState,useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import { List } from 'react-content-loader'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ShowBlog = () => {
    const [blogs,setBlog] = useState();
    const [category,setCategory] = useState("li-xi");
    const [modal,setModal] = useState(false);
    const [popUp,setPopup] = useState(false);
    function toggleMenu() {
      setModal(!modal);
    }
    const [searchProduct,setSearchProduct] = useState("");
    const [checkSearch,setCheckSearch] = useState(false);
    // main Api
    const apiHaweb = `https://haweb-api.onrender.com/api/blog`;
    useEffect(() => {
    axios.get(`${apiHaweb}`)
        .then((res) => {
           setBlog(res.data.blogs)  
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
    },[])
    



    return (
        <div class="col-span-5 xl:col-span-4 p-0 md:p-3 h-auto  mt-[150px] xl:mt-0">
       
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
        <div class="bg-white shadow-xl mt-10 min-h-[400px] sm:ml-5 sm:mr-5 ml-0 mr-0 rounded p-3 relative">
          <h1 class="font-bold text-[22px] border-b-2 pb-2 border-[#000] " >Trang nội dung</h1>
        
        
          <div>
           {
                blogs ? (
                    <div class="grid grid-cols-2  md:grid-cols-3 gap-1  xl:grid-cols-4 2xl:grid-cols-5 mt-5 mb-10">
                      {blogs.map((blog) => (
                          <div key={blog.id} class="cursor-pointer ml-auto mr-auto text-[14px] max-w-[300px] h-[auto] shadow-lg mt-5 mb-5 bg-white p-3 relative rounded overflow-hidden group border-2 border-[#f2f2f2]">
                            <div>
                            <LazyLoadImage
                             alt={blog.photo}
                            src={blog.photo} // use normal <img> attributes as props
                            class="mt-2 w-full ml-auto mr-auto"
                             />
                            <div class="min-h-[100px]">
                        
                             <h1 class="font-bold ">{blog.title}</h1>
                   
                             <p><span class="font-bold"> Giá:</span>  Liên hệ</p>
                             </div>
                   
              
                            </div>
                          </div>
                    ))}
                    </div>
                ) : <div class="font-bold mt-5"><List /></div>
                
            }
          </div>


        </div>
     
    </div>
    )}

export default ShowBlog;