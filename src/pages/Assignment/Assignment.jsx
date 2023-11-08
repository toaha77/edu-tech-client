import { useEffect, useState } from "react";
import AssignMentCard from "./AssignMentCard";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const { count } = useLoaderData();
    const  numberofPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberofPages).keys()]
  const url = `http://localhost:5000/create-assignment?page=${currentPage}&&size=&{itemsPerPage}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, []);

   

  const handleLevel = e =>{
    
  } 
  return (
    <div className="mt-4">
      <div>
        <h2 className="text-5xl font-semibold text-center mb-4">
          <span className="text-red-500">Your Assignment</span> is here
        </h2>
      </div>
      <div className="mb-4">
        <label htmlFor="pet-select">Choose a level:</label>

        <select value={itemsPerPage} className="input input-bordered" onChange={handleLevel} name="pets">
          <option value="">--Please choose an option--</option>
          <option value="Hard">Hard</option>
          <option value="Medium">Medium</option>
          <option value="Easy">Easy</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((assignment) => (
          <AssignMentCard
            key={assignment._id}
            assignment={assignment}
            // handleDelete={handleDelete}
          ></AssignMentCard>
        ))}
      </div>
    <div className="flex items-center justify-center mt-6">
      {
        pages.map(page => <button  

          onClick={()=> setCurrentPage(page)}
          key={page} className={
            currentPage === page  && 'btn bg-red-500 text-white hover:bg-red-500 text-white'
          }>{page}</button>)
      }
    </div>
    </div>
  );
};

export default Assignment;
