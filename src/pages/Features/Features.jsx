import { useLoaderData } from "react-router-dom";
import FeaturesCard from "./FeaturesCard";

 
const Features = () => {
    const features = useLoaderData()
    console.log(features);
    return (
        <div className="mt-4">
            <h2 className="text-5xl font-bold text-center  mb-4">Available Best  <span className="text-red-500">Features</span></h2>
          <FeaturesCard features={features}></FeaturesCard>
        </div>
    );
};

export default Features;