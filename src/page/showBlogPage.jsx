import Menu from "../component/main_left-menu";
import MenuMobile from "../component/mobile_menu"
import ShowBlog from "../component/blog/showBlog";

const ShowBlogPage = () => {
    return (
        <div class="grid grid-cols-5 min-h-[100vh] bg-[#f2f2f2]">
          <MenuMobile />
          <Menu />
          <ShowBlog />
   
        </div>
    )
}


export default ShowBlogPage;