import {AiOutlineHome} from "react-icons/ai"
import { Link ,useLocation} from "react-router-dom";
import {useState} from "react";
const Menu = () => {
  const [category,setCategory] = useState(1);
  const location = useLocation();
    return (
        <div class="col-span-1 shadow-xl bg-white xl:block hidden border-2">
          <div class="fixed top-0 left-0 ">
          <h1 class="font-black p-5 text-[55px] text-[#a3262a]">Hà</h1>
         <div class="p-5 mt-5">
           <ul>
           <Link to="/" className={location.pathname === '/' ? 'text-[#a3262a] font-bold' : ''}> <li class="mb-4 font-medium text-[18px] flex cursor-pointer" > <AiOutlineHome class="mt-1 mr-2 text-[20px]"/>  Trang chủ </li>  </Link>
             <Link to="/displayProduct" className={location.pathname === '/displayProduct' ? 'text-[#a3262a] font-bold' : ''}> <li class="mb-4 font-medium text-[18px]">Xem trang sản phẩm</li> </Link>  
               <Link to="/createProduct" className={location.pathname === '/createProduct' ? 'text-[#a3262a] font-bold' : ''}>  <li class="mb-4 font-medium text-[18px]"> Tạo sản phẩm</li></Link> 
               <li class="mb-4 font-medium text-[18px]" >Thống kê</li>
           </ul>
        </div>
          </div>
    
     </div>
    )
}

export default Menu;