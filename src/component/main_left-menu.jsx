import {AiOutlineHome} from "react-icons/ai"
import { Link ,useLocation} from "react-router-dom";
import {useState} from "react";
const Menu = () => {
  const [category,setCategory] = useState(1);
  const [modalProduct,setModalProduct] = useState();
  const [modalBLog,setModalBlog] = useState();
  function toggleMenu() {
    setModalProduct(!modalProduct);
   
  }
  function toggleBlog() {
    setModalBlog(!modalBLog)
  }
  const location = useLocation();
    return (
        <div class="col-span-1 shadow-xl bg-white xl:block hidden border-2">
          <div class="fixed top-0 left-0 ">
          <h1 class="font-black p-5 text-[55px] text-[#a3262a]">Hà</h1>
         <div class="p-5 mt-5">
           <ul>
             <Link to="/" className={location.pathname === '/' ? 'text-[#a3262a] font-bold' : ''}> <li class="mb-4 font-medium text-[18px] flex cursor-pointer" > <AiOutlineHome class="mt-1 mr-2 text-[20px]"/>  Trang chủ </li>  </Link>
             {/* <Link to="/displayProduct" className={location.pathname === '/displayProduct' ? 'text-[#a3262a] font-bold' : ''}> <li class="mb-4 font-medium text-[18px]">Xem trang sản phẩm</li> </Link>  
           */}
              <div>
              <li class="mb-2 font-bold text-[18px] flex cursor-pointer" onClick={toggleMenu}>Phần Sản Phẩm </li>
                <div class={`${modalProduct ? "min-h-[50px]  " : "h-[0px] p-0" } transition-height duration-300   overflow-hidden  font-bold w-full`}>
                   <Link to="/displayProduct" className={location.pathname === '/displayProduct' ? 'text-[#a3262a] font-bold' : ''}> <li class="mb-2 font-medium text-[16px]">Xem trang sản phẩm</li> </Link>  
                   <Link to="/createProduct" className={location.pathname === '/createProduct' ? 'text-[#a3262a] font-bold' : ''}>  <li class="mb-2 font-medium text-[16px]"> Tạo sản phẩm</li></Link> 
                </div>
             
              </div>
              <div>
                 <li  class=" mt-2 mb-2 font-bold text-[18px] flex cursor-pointer" onClick={toggleBlog}>Phần Nội Dung</li>
        
                 <div class={`${modalBLog ? "min-h-[50px]  " : "h-[0px] p-0" } transition-height duration-300   overflow-hidden  font-bold w-full`}>
                 <Link to="/displayBlog" className={location.pathname === '/displayBlog' ? 'text-[#a3262a] font-bold' : ''}> <li class="mb-2 font-medium text-[16px]">Xem trang nội dung</li> </Link>  
                 <Link to="/blog" className={location.pathname === '/blog' ? 'text-[#a3262a] font-bold' : ''}>  <li class="mb-2 font-medium text-[16px]" >Tạo Nội dung</li> </Link>
                </div>
            </div>
           </ul>
        </div>
          </div>
    
     </div>
    )
}

export default Menu;