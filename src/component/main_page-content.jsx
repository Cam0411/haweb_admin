import {AiOutlineSearch,AiOutlineBell} from "react-icons/ai"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from "react";
const Mainpage = () => {

    return (
        <div class="col-span-5 xl:col-span-4 p-3 mt-[150px] xl:mt-0">
        <div class="bg-white shadow-xl h-[50px] sm:ml-5 sm:mr-5 ml-0 mr-0 rounded-lg flex justify-between items-center p-2">
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
        <div class="grid grid-cols-4 md:grid-cols-5 sm:ml-5 sm:mr-5 ml-0 mr-0 mt-10 min-h-[150px]">
           <div class="col-span-4 md:col-span-3 min-h-[150px] md:h-[0] mb-5 md:mb-0 bg-white shadow-lg md:mr-2 mr-0 rounded p-2 relative">
             <p class="text-[22px] text-[#a3262a] font-bold">Xin chào, Cam</p>
              <div class="w-[200px] absolute bottom-0 right-0">
                  <img src="https://sneat-vuetify-admin-template.vercel.app/assets/illustration-john-light-0061869a.png"  alt="" srcset="" />
              </div>
             </div>
           <div class="col-span-2 md:col-span-1 min-h-[150px] md:h-[0] bg-white shadow-lg md:ml-2  ml-0   rounded p-2">
             <p class="font-bold">Số lượng hàng</p>
             <p class="text-[28px] font-bold">0</p>
           </div>
           <div class="col-span-2 md:col-span-1 min-h-[150px] md:h-[0] bg-white shadow-lg ml-2 rounded p-2">
             <p class="font-bold">Doanh thu</p>
             <p class="text-[28px] font-bold">0</p>
            </div>
       
        </div>
        <div class=" sm:ml-5 sm:mr-5 ml-0 mr-0   mt-5 grid grid-cols-5">
        <div class="col-span-5 bg-white shadow-lg">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar class="mt-10"/>
        </LocalizationProvider>
        </div>

      </div>
       </div>
    )
}

export default Mainpage;