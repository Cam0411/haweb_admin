import {Link,useLocation} from  "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"
import {useState} from "react";

const MenuMobile = () => {
    const [modal,setModal] = useState(false);
    function openModal (){
        return setModal(true)
    }
    function closeModal(){
        return setModal(false)
    }
    const location = useLocation()
    return (
        <div class="xl:hidden flex fixed z-20 top-0 left-0 right-0 bg-white shadow-lg p-3 min-h-[80px] w-full justify-between items-center">
            <h1 class="font-black  text-[45px] text-[#a3262a]">Hà</h1>

           <ul class="hidden md:flex mt-10 ">
           <Link to="/" className={location.pathname === '/' ? 'text-[#a3262a] font-bold' : ''}> <li class="mb-4 font-medium text-[18px] flex mr-5">  Trang chủ </li>  </Link>
             <Link to="/displayProduct" className={`${location.pathname === '/displayProduct' ? 'text-[#a3262a] font-bold' : ''} mr-5`}> <li class="mb-4 font-medium text-[18px]">Xem trang sản phẩm</li> </Link>  
               <Link to="/createProduct" className={`${location.pathname === '/createProduct' ? 'text-[#a3262a] font-bold' : ''} mr-5`}>  <li class="mb-4 font-medium text-[18px]"> Tạo sản phẩm</li></Link> 
               <li class="mb-4 font-medium text-[18px] mr-5">Thống kê</li>
           </ul>
           <div class="block md:hidden cursor-pointer" onClick={openModal}>
              <AiOutlineMenu class="text-[30px]"/>
          </div>
          {
            modal ? (
           <div class="fixed  inset-0 z-30" >
             <div class="w-[80%] bg-white h-[100%]">
             <h1 class="font-black  text-[45px] text-[#a3262a] p-3">Hà</h1>
             <ul class="p-3 mt-5">
             <Link to="/"> <li class="font-bold mb-4 text-[18px]">Trang chủ</li> </Link>
             <Link to="/displayProduct" > <li class="font-bold mb-4 text-[18px]">Xem trang sản phẩm</li> </Link>
            <Link to="/createProduct"> <li class="font-bold mb-4 text-[18px]">Tạo sản phẩm</li> </Link>
               <li class="font-bold mb-4 text-[18px]">Thống kê</li>
             </ul>
             </div>
             <div class="bg-[#0004] w-[20%] fixed z-10 top-0 right-0 h-full cursor-pointer" onClick={closeModal}>
            </div>
          </div>
          
            ) : ""
          }
        
        </div>
    )
}

export default MenuMobile;