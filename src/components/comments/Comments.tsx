import ReviewCard from "../card/ReviewCard";

const Comments = () => {
  return (
    <div className=" bg-gradient-to-tr from-slate-500 to bg-slate-800 px-4 shadow-inner shadow-black/75">
      <h2 className="text-4xl lg:text-5xl text-center font-bold text-white py-5">
        Lo Que Nuestros Clientes Opinan
      </h2>
      <div className="container mx-auto py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Comments;
