import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

 
const ViewAssignment = () => {
    const [view,setViews] = useState()

    // const {id} = useParams()
    // console.log(id);
    const viewAssignment = useLoaderData()
  const {name} = viewAssignment

    // useEffect(()=>{
    //    const viewAssign = viewAssignment?.find(view => view.id === id)
    //    console.log(viewAssign);

    //    setViews(viewAssign)
    // },[id, viewAssignment])
    return (
        <div className="mt-4">
            name:  { name}
        </div>
    );
};

export default ViewAssignment;