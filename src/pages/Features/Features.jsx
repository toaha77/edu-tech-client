import { useLoaderData } from "react-router-dom";

 
const Features = () => {
    const features = useLoaderData()
    console.log(features);
    return (
        <div>
            
        </div>
    );
};

export default Features;