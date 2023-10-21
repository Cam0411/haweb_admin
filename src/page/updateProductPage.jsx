import {useState,useEffect} from "react-router-dom";
import Menu from "../component/main_left-menu";
import UpdateProducts from "../component/updateProduct/updateProduct"
import MenuMobile from "../component/mobile_menu"
const UpdateProductPage = () => {
    return (
        <div class="grid grid-cols-5 min-h-[100vh] bg-[#f2f2f2]">
            <MenuMobile />
            <Menu />
            <UpdateProducts />
        </div>
    )
}


export default UpdateProductPage;
