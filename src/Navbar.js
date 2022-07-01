import { menuItems } from "./menuItems";
import MenuItems from "./Menu.items";

const Navbar = () => {
 return (
  <nav>
   <ul className="menus">
    {menuItems.map((menu, index) => {
     return <MenuItems items={menu} key={index} />;
    })}
   </ul>
  </nav>
 );
};

export default Navbar;