import FoodCart from "../card/FoodCart";
import menu from "../../utils/images";
const Menu = () => {
  return (
    <div className=" min-h-screen my-8 flex items-center">
      <div className="px-2 md:px-6 lg:px-10">
        <h2 className="text-5xl text-center my-9 font-bold">Menu </h2>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-4 justify-center">
          <FoodCart title="Sushi" imgPath={menu.sushi} />
          <FoodCart title="Paella" imgPath={menu.paella} />
          <FoodCart title="Fondue" imgPath={menu.fondue} />
          <FoodCart title="Burrito" imgPath={menu.burrito} />
          <FoodCart title="Ceviche" imgPath={menu.ceviche} />
          <FoodCart title="Enchiladas" imgPath={menu.enchiladas} />
          <FoodCart title="Pad Thai" imgPath={menu.padThai} />
          <FoodCart title="Pastel De Chocolate" imgPath={menu.cake} />
          <FoodCart title="Hotdogs" imgPath={menu.hotdogs} />
        </div>
        <h2 className="text-2xl text-center my-3 cursor-pointer font-bold text-red-500">
          {" "}
          Ver Todos{" "}
        </h2>
      </div>
    </div>
  );
};

export default Menu;
