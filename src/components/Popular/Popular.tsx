import FoodCart from "../card/FoodCart";
import menu from "../../utils/images";
const Popular = () => {
  return (
    <div className=" min-h-screen my-8 flex items-center">
      <div className="px-2 md:px-6 lg:px-10">
        <h2 className="text-5xl text-center my-9 font-bold">Popular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-4 justify-center">
          <FoodCart title="Pizza" imgPath={menu.pizza} />
          <FoodCart title="Hamburgesa" imgPath={menu.hamburger} />
          <FoodCart title="Alitas" imgPath={menu.boneless} />
          <FoodCart title="Tacos" imgPath={menu.tacos} />
        </div>
      </div>
    </div>
  );
};

export default Popular;
