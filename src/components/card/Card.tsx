import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
}
const Card: React.FC<Props> = ({ icon, title }) => {
  return (
    <div className=" group bg-slate-100 hover:bg-gradient-to-bl hover:from-slate-100 hover:to-slate-200 transition-all hover:-translate-y-3 min-h-[250px] shadow-xl border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center ">
      {icon}
      <h3 className="my-2 font-semibold text-xl cursor-default">{title}</h3>
      <p className="text-center cursor-default">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, repellat.
      </p>
    </div>
  );
};

export default Card;
