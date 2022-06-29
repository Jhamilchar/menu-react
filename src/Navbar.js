import { menuItems } from "./menuItems";
import MenuItems from "./components/MenuItems";

const Navbar = () => {
    return (
     <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
            return(
                <li className="menu-items" key={index}>
                    <a href="/#">{menu.title}</a>
                </li>
            );
        })}
      </ul>
     </nav>
    );
   };
   
export default Navbar;