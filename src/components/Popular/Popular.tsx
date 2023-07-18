import FoodCart from "../card/FoodCart";
import menu from "../../utils/images";
const Popular = () => {
  return (
    <div className=" h-screen">
      <div className="px-10">
        <h2 className="text-5xl text-center my-9 font-bold">Most Popular</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <FoodCart title="Pizza" imgPath={menu.pizza} />
          <FoodCart title="Hamburger" imgPath={menu.hamburger} />
          <FoodCart title="Boneless" imgPath={menu.boneless} />
          <FoodCart title="Tacos" imgPath={menu.tacos} />
        </div>
      </div>
    </div>
  );
};

export default Popular;
