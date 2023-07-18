import React from "react";
interface Props {
  title: string;
  imgPath: string;
}

const FoodCart: React.FC<Props> = ({ title, imgPath }) => {
  return (
    <div className="max-h-[500px] w-[250px] rounded-lg overflow-hidden transiton-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-200">
      <div className="h-[250px] w-[250px]">
        <img
          src={imgPath}
          alt="Hamburgesa"
          className="w-full h-full cursor-pointer"
        />
      </div>
      <div className="py-2 px-4">
        <h2 className=" cursor-pointer font-semibold text-xl mb-2">{title}</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore
          recusandae natus?
        </p>
      </div>
    </div>
  );
};

export default FoodCart;
