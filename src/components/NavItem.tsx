import { IoIosArrowDown } from "react-icons/io";
import { Route } from "../data/routes";
import Link from "next/link";

const NavItem = ({ menu }: { menu: Route }) => {
  const subMenu = menu?.submenu;
  return (
    <>
      {subMenu !== undefined && subMenu?.length > 0 ? (
        <li className="relative ">
          <button
            className={`mr-2 px-6 py-3 text-white  font-medium flex items-center gap-x-2 `}
          >
            {menu.name}
            <IoIosArrowDown />
          </button>
          <ul className="subMenu absolute *:text-black w-60 bg-white *:border-b *:border-blue-100 *:last:border-none rounded-sm hidden">
            {subMenu?.map((route) => (
              <NavItem menu={route} key={route.id} />
            ))}
          </ul>
        </li>
      ) : (
        <li>
          <Link
            className={`mr-2 px-6 py-3 font-medium inline-block  `}
            href={menu.path}
          >
            {menu.name}
          </Link>
        </li>
      )}
    </>
  );
};

export default NavItem;
