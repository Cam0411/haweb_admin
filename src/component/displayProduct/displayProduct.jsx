import {AiOutlineSearch,AiOutlineBell} from "react-icons/ai"
import {BsTrash} from "react-icons/bs"
import {IoIosArrowUp} from "react-icons/io"
import {HiOutlinePencil} from "react-icons/hi"
import { useState,useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import { List } from 'react-content-loader'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const DisplayProducts = () => {
    const [products,setProduct] = useState();
    const [category,setCategory] = useState("treo-tuong");
    const [modal,setModal] = useState(false);
    function toggleMenu() {
      setModal(!modal);
    }
    const [searchProduct,setSearchProduct] = useState("");
    const [checkSearch,setCheckSearch] = useState(false);
    // main Api
    const apiHaweb = `https://haweb-api.onrender.com/api/product`;
    useEffect(() => {
    const apiHawebcategory = `${apiHaweb}/category/${category}`;
    axios.get(`${apiHawebcategory}`)
        .then((res) => {
           setProduct(res.data.product)  
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
    },[category])
    
    // set up category 
    const handleCategory = (cate) => {
       setCategory(cate)
       setCheckSearch(false)
    }
    // remove product by slug
    const handleDeleteProduct = (slug) => {
        
        axios.delete(`${apiHaweb}/${slug}`)
        .then((response) => {
            if (response.status === 200) {
              // Product was deleted successfully, update the state
              setProduct(products.filter((product) => product.slug !== slug));
              
            }
          })
          .catch((error) => {
            console.error('Error deleting product:', error);
          });
    }

    
    // search product 
    const handleSearch = () => {

      axios.get(`${apiHaweb}/search/${searchProduct}`)
        .then((response) => {
          setProduct(response.data.results);
        })
        .catch((error) => {
          console.error('Error searching products:', error);
        });
      setCheckSearch(true)
    };
    // scoll to top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // This triggers smooth scrolling
      });
    };
   

    return (
        <div class="col-span-5 xl:col-span-4 p-3 h-auto  mt-[150px] xl:mt-0">
       
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
        <div class="bg-white shadow-xl mt-10 min-h-[400px] sm:ml-5 sm:mr-5 ml-0 mr-0 rounded p-3">
          <h1 class="font-bold text-[22px] border-b-2 pb-2 border-[#000] " >Mục Sản phẩm</h1>
          <div class="w-full flex justify-between items-center flex-col xl:flex-row ">
          <ul class="hidden mt-5 font-medium md:flex ">
             <li class={`mr-5 border-2 py-2 px-5 cursor-pointer text-center shadow-lg ${category === "treo-tuong" ? "bg-[#a3262a] text-white" : ""} `} onClick={() => handleCategory("treo-tuong")}>Treo Tường</li>
             <li class={`mr-5 border-2 py-2 px-5 cursor-pointer text-center shadow-lg ${category === "day-treo-trung-quoc" ? "bg-[#a3262a] text-white" : ""} `} onClick={() => handleCategory("day-treo-trung-quoc")}>Dây Treo Trung Quốc</li>
             <li class={`mr-5 border-2 py-2 px-5 cursor-pointer text-center shadow-lg ${category === "day-treo-viet-nam" ? "bg-[#a3262a] text-white" : ""} `} onClick={() => handleCategory("day-treo-viet-nam")}>Dây treo Việt Nam</li>
             <li class={`mr-5 border-2 py-2 px-5 cursor-pointer text-center shadow-lg ${category === "li-xi" ? "bg-[#a3262a] text-white" : ""} `} onClick={() => handleCategory("li-xi")}>Lì Xì</li>
          </ul>
          <div class="border-2 p-2 block md:hidden mt-5 w-[100%] md:max-w-[200px] text-center cursor-pointer font-bold border-[#000] shadow-lg" onClick={toggleMenu}>
            <p>Phân loại</p>
          </div> 
          <div class={`${modal ? "min-h-[200px] p-2 border-2 border-[#000]" : "h-[0px] p-0" } transition-height duration-300   overflow-hidden  shadow-lg mt-2 font-bold w-full  md:hidden block`}>
            <ul>
            <li class={`mr-5 border-2 py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2 mt-2 ${category === "treo-tuong" ? "bg-[#a3262a] text-white" : ""} `} onClick={() => handleCategory("treo-tuong")}>Treo Tường</li>
             <li class={`mr-5 border-2 py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2  ${category === "day-treo-trung-quoc" ? "bg-[#a3262a] text-white" : ""} `} onClick={() => handleCategory("day-treo-trung-quoc")}>Dây Treo Trung Quốc</li>
             <li class={`mr-5 border-2 py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2  ${category === "day-treo-viet-nam" ? "bg-[#a3262a] text-white" : ""} `} onClick={() => handleCategory("day-treo-viet-nam")}>Dây treo Việt Nam</li>
             <li class={`mr-5 border-2 py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2  ${category === "li-xi" ? "bg-[#a3262a] text-white" : ""} `} onClick={() => handleCategory("li-xi")}>Lì Xì</li>
            </ul>
          </div>
          <div class="mt-5 border-2  border-[#000] md:w-[350px] w-[100%]  flex justify-between items-center">
             <input 
             type="text"
             placeholder="Mã sản phẩm"
             class="p-1 px-2 w-[80%] outline-none"
             value={searchProduct}
             onChange={(e) => setSearchProduct(e.target.value)}
               onKeyPress={(e) => {
              if (e.key === 'Enter') {
               handleSearch(searchProduct);
              }
           }}
             />
             <div class="flex justify-center items-center border-l-2 border-[#000]  p-2 w-[45px]  cursor-pointer" >
             <AiOutlineSearch class="text-[22px]" onClick={() => handleSearch(searchProduct)} />
             </div>
     
          </div>
          </div>
            {
              checkSearch ? <h1 class="mt-5 ml-2 font-bold text-[22px]">Mã sản phẩm: {searchProduct}</h1> : ""
            }
          <div>
           {
                products ? (
                    <div class="grid grid-cols-1  md:grid-cols-3   xl:grid-cols-4 mt-5 ">
                      {products.map((product) => (
                          <div key={product.id} class="cursor-pointer sm:ml-5 sm:mr-5 ml-0 mr-0 min-w-[200px] h-[auto] shadow-lg mt-5 mb-5 bg-white p-3 relative rounded overflow-hidden group border-2 border-[#f2f2f2]">
                            <div>
                            <LazyLoadImage
                             alt={product.photo}
                            src={product.photo} // use normal <img> attributes as props
                            class="mt-2 max-w-[150px] ml-auto mr-auto"
                             />
                            <div class="min-h-[100px]">
                             <p class="mt-2" >{product.category}</p>
                             <h1 class="font-bold ">{product.title}</h1>
                             <p> <span class="font-bold">Mã sản phẩm: </span> {product.description}</p>
                             <p><span class="font-bold"> Giá:</span>  Liên hệ</p>
                             </div>
                             <Link to={`/updateProduct/${product.slug}`}>
                             <div class="absolute top-0 left-0 px-2 py-2  translate-x-[-100%] group-hover:translate-x-[0] duration-300 cursor-pointer bg-[#a3262a] text-white shadow-lg"> 
                              <HiOutlinePencil class=""/>
                            </div>
                            </Link>
                             <div onClick={() => handleDeleteProduct(product.slug)} class="cursor-pointer translate-y-[100%] group-hover:translate-y-[0] duration-300 flex justify-center items-center absolute px-3 py-2 bottom-0 right-0 border-2 bg-[#a3262a] shadow-lg font-bold text-white rounded">
                          
                             <BsTrash class="mt-1 "/> 
                            </div>
                            </div>
                          </div>
                         ))}
                    </div>
                ) : <div class="font-bold mt-5"><List /></div>
                
            }
          </div>
        </div>
        <div class={`fixed  bottom-2 right-2 shadow-xl bg-[#a3262a] flex justify-center items-center w-[40px] h-[40px] rounded-full text-white cursor-pointer  `} onClick={scrollToTop}>
           <IoIosArrowUp class="text-[23px]" />
        </div>
      
    </div>
    )}

export default DisplayProducts;