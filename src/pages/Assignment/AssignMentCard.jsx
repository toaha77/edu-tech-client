 
const AssignMentCard = ({assignment}) => {
    const handleDelete = id =>{
     const proceed = 
    }
     const {name, marks, photo, data, description} = assignment
    return (
        <div>
           
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="{name}" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">{name}</h2>
    <h2 className="text-[18px] ">Marks: {marks}</h2>
    {/* <p>{description}</p> */}
    <div className="card-actions justify-end">
      <button  className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AssignMentCard;