
import Menu from "../component/main_left-menu";
import Mainpage from "../component/main_page-content";
import MenuMobile from "../component/mobile_menu"
const HomePage = () => {
    return (
        <div class="grid grid-cols-5 min-h-[100vh] bg-[#f2f2f2]">
           {/* <div class="col-span-1 shadow-xl">
              <h1 class="font-bold p-5 text-[25px] text-[#a3262a]">Admin</h1>
              <div class="p-5">
                 <ul>
                     <li class="mb-4 font-medium text-[18px] flex  border-b-4 pb-2 border-[#a3262a]"> <AiOutlineHome class="mt-1 mr-2 text-[20px]"/>  Trang chủ</li>
                     <li class="mb-4 font-medium text-[18px]">Xem trang sản phẩm</li>
                     <li class="mb-4 font-medium text-[18px]">Tạo sản phẩm</li>
                     <li class="mb-4 font-medium text-[18px]">Thống kê</li>
                 </ul>
              </div>
           </div> */}
           <MenuMobile />
           <Menu />
           {/* <div class="col-span-4 p-3">
               <div class="bg-white shadow-xl h-[50px] ml-5 mr-5 rounded-lg flex justify-between items-center p-2">
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
               <div class="grid grid-cols-5 ml-5 mr-5 mt-10 h-[150px]">
                  <div class="col-span-3 bg-white shadow-lg mr-2 rounded p-2 relative">
                    <p class="text-[22px] text-[#a3262a] font-bold">Xin chào, Cam</p>
                     <div class="w-[200px] absolute bottom-0 right-0">
                         <img src="https://sneat-vuetify-admin-template.vercel.app/assets/illustration-john-light-0061869a.png"  alt="" srcset="" />
                     </div>
                    </div>
                  <div class="col-span-1 bg-white shadow-lg ml-2 mr-2 rounded p-2">
                    <p class="font-bold">Số lượng hàng</p>
                    <p class="text-[28px] font-bold">0</p>
                  </div>
                  <div class="col-span-1 bg-white shadow-lg ml-2 mr-2 rounded p-2">
                    <p class="font-bold">Doanh thu</p>
                    <p class="text-[28px] font-bold">0</p>
                    </div>
               </div>
           </div> */}
           <Mainpage />
        </div>
    )
}

export default HomePage;