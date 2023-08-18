import {
  BagCheck,
  Flash,
  NavigateCircle,
} from "@styled-icons/ionicons-outline";
import Card from "./card/Card";

const OurService = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center my-8 font-bold">Nuestro Servicio</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 px-2 gap-5">
        <Card
          icon={
            <BagCheck className="h-16 w-16 text-red-500 group-hover:text-orange-500 " />
          }
          title="Comidas de calidad"
        />
        <Card
          icon={
            <Flash className="h-16 w-16 text-red-500 group-hover:text-orange-500 " />
          }
          title="Entrega Rapida"
        />
        <Card
          icon={
            <NavigateCircle className="h-16 w-16 text-red-500 group-hover:text-orange-500 " />
          }
          title="Rastreo En tiempo Real"
        />
      </div>
    </div>
  );
};

export default OurService;
