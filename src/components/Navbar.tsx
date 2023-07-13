import { Bag, Search, PersonCircle } from "@styled-icons/ionicons-outline";
const Navbar = () => {
  return (
    <div className="container px-2 mx-auto flex justify-between items-center py-5 ">
      <h1 className="text-xl font-semibold">FOODAKA</h1>
      <ul className="flex gap-4 hidden lg:flex">
        <li className=" nav-item">Home</li>
        <li className=" nav-item">Menu</li>
        <li className=" nav-item">About us</li>
        <li className=" nav-item">Contact us</li>
      </ul>
      <div className="flex gap-4 items-center">
        <Search className="h-6 w-6 cursor-pointer hover:text-red-600 transition-all duration-300" />
        <Bag className="h-6 w-6 cursor-pointer hover:text-red-600 transition-all duration-300" />
        <PersonCircle className="h-7 w-7 cursor-pointer hover:text-red-600 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Navbar;
