import Menu from "../component/main_left-menu";
import CreateProductContent from "../component/createProduct/createProduct";
import MenuMobile from "../component/mobile_menu"
const CreateProduct = () => {
    return (
        <div class="grid grid-cols-5 min-h-[100vh] bg-[#f2f2f2]">
            <MenuMobile />
           <Menu />
           <CreateProductContent />
        </div>
    )
}

export default CreateProduct;