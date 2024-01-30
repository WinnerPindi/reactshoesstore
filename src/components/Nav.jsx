import { TbShoppingBag } from "react-icons/tb";
import { RiShoppingBagLine } from "react-icons/ri";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Conctact"];
export function Nav() {
  const [isMobileMenuShown, setisMobileMenuShown] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger Button */}
      <button onClick={()=>setisMobileMenuShown(!isMobileMenuShown)} className="lg:hidden hover:bg-gray-100 rap-2 focus:ring-2 focus:ring-gray-200 rounded-lg">
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu List */}
      <div
        className={`${isMobileMenuShown === false && "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className=" lg:space-x-8 flex flex-col lg:flex-row border bg-gray-50 lg:bg-transparent  border-gray-100 lg:border-none text-lg rounded-lg p-4">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:text-blue-500 lg:hover:bg-transparent rounded cursor-pointer px-3 py-2 ${i === 0 ? "bg-blue-500 lg:bg-transparent lg:text-blue-500 text-white" : "hover:bg-gray-100"}
                ${(i===3 || i===4) && "lg:text-white" }`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div className="btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8">
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
