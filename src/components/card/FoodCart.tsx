import React from "react";
interface Props {
  title: string;
  imgPath: string;
}

const FoodCart: React.FC<Props> = ({ title, imgPath }) => {
  return (
    <div className=" max-w-[500px] bg-slate-100 rounded-lg overflow-hidden transiton-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-300">
      <div className="w-full">
        <img
          src={imgPath}
          alt="Hamburgesa"
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>
      <div className="py-2 px-4">
        <h2 className=" cursor-pointer font-semibold text-xl mb-2">{title}</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore
          recusandae natus?
        </p>
        <div className="flex justify-evenly my-3 gap-3">
          <span className="w-full border border-red-500 rounded-full flex items-center justify-center">
            $150.00
          </span>
          <button className="w-full py-3 bg-red-500 rounded-full text-white">
            Ordenar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
