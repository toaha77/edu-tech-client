import { Link } from "react-router-dom";

 
const AssignMentCard = ({assignment, handleDelete}) => {
    const {_id,name, marks, photo, date, description} = assignment
   
    
    return (
        <div>
           
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="{name}" className="h-60 w-full" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">Name: {name}</h2>
    <h2 className="text-[18px] ">Marks: {marks}</h2>
    {/* <p>{description}</p> */}
    <div className="card-actions justify-around">
      {/* <button onClick={()=> handleDelete(_id)}  className="btn bg-red-500 text-white hover:bg-red-500 text-white">Delete</button> */}
      <Link to={`view/${_id}`}>
      <button className="btn bg-red-500 text-white hover:bg-red-500 text-white">View</button>
      </Link>
     <Link to={`updateAssignment/${_id}`}>
     <button  className="btn bg-red-500 text-white hover:bg-red-500 text-white">Update</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AssignMentCard;