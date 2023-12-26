import { useEffect,useState } from "react"
import Menu from "../component/main_left-menu";
import PostBlog from "../component/blog/postBlog";
import MenuMobile from "../component/mobile_menu"

const BlogPage = () => {
    return (
        <div class="grid grid-cols-5 min-h-[100vh] bg-[#f2f2f2]">
          <MenuMobile />
          <Menu />
          <PostBlog />
   
        </div>
    )
}


export default BlogPage;