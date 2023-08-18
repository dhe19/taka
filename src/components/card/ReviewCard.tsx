import eduardo from "../../assets/img/profile/ed.jpeg";
import { Star } from "@styled-icons/ionicons-outline";

const ReviewCard = () => {
  return (
    <div className="p-5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-300 shadow-lg relative">
      <div className="flex items-center justify-center text-white">
        <div className="h-[52px] w-[52px] rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 absolute -top-8  ">
          <img
            src={eduardo}
            className="w-12 h-12 rounded-full "
            alt="Eduardo"
          />
        </div>
        <div className="items-center flex flex-col">
          <span className="text-lg font-semibold ">Eduardo</span>
          <p className="text-sm font-light ">12/07/2017</p>
          <div>
            <Star className="w-5 h-5 mr-1 text-red-500" />
            <Star className="w-5 h-5 mr-1 text-red-500" />
            <Star className="w-5 h-5 mr-1 text-red-500" />
            <Star className="w-5 h-5 mr-1 text-red-500" />
            <Star className="w-5 h-5 mr-1 text-red-500" />
          </div>
        </div>
      </div>
      <div className="text-center text-sm my-3 text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem
        ullam obcaecati error omnis, consectetur ex porro delectus.
      </div>
    </div>
  );
};

export default ReviewCard;
