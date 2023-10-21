import { useEffect,useState } from "react"
import Menu from "../component/main_left-menu";
import DisplayProducts from "../component/displayProduct/displayProduct"
import MenuMobile from "../component/mobile_menu"

const ShowProductPage = () => {
    return (
        <div class="grid grid-cols-5 min-h-[100vh] bg-[#f2f2f2]">
          <MenuMobile />
          <Menu />
          <DisplayProducts />
   
        </div>
    )
}


export default ShowProductPage;