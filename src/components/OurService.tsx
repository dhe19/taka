import {
  BagCheck,
  Flash,
  NavigateCircle,
} from "@styled-icons/ionicons-outline";
import Card from "./card/Card";

const OurService = () => {
  return (
    <div className="h-[50vh] container mx-auto">
      <h1 className="text-5xl text-center my-8 font-bold">Our Service</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 px-2 gap-5">
        <Card
          icon={
            <BagCheck className="h-16 w-16 text-red-500 group-hover:text-orange-500 " />
          }
          title="Qualtiy Food"
        />
        <Card
          icon={
            <Flash className="h-16 w-16 text-red-500 group-hover:text-orange-500 " />
          }
          title="Fast Delivery"
        />
        <Card
          icon={
            <NavigateCircle className="h-16 w-16 text-red-500 group-hover:text-orange-500 " />
          }
          title="Real-time Tracking"
        />
      </div>
    </div>
  );
};

export default OurService;
