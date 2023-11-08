import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Toggle from "./Toggle";

 
const ViewAssignment = () => {
    const [view,setViews] = useState()

    // const {id} = useParams()
    // console.log(id);
    const viewAssignment = useLoaderData()
    console.log(viewAssignment);
  const {name, photo,marks, description} = viewAssignment

    // useEffect(()=>{
    //    const viewAssign = viewAssignment?.find(view => view.id === id)
    //    console.log(viewAssign);

    //    setViews(viewAssign)
    // },[id, viewAssignment])
    return (
        <div className="mt-4">
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Name: {name}</h1>
      <p className="py-2 text-2xl">Marks: {marks}</p>
      <p className="py-6">{description}</p>
 <Toggle></Toggle>
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewAssignment;