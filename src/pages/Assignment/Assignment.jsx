import { useEffect, useState } from "react";
import AssignMentCard from "./AssignMentCard";
 import { useLoaderData } from "react-router-dom";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const { count } = useLoaderData();
    const  numberOfPages = Math.ceil(count / itemsPerPage)


  const pages = [...Array(numberOfPages).keys()]

  
 ;
  useEffect(() => {
    fetch(`https://study-group-server.vercel.app/page-assignment?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, [currentPage, itemsPerPage]);

   

  const handleLevel = e =>{
   const val = parseInt(e.target.value)
    setItemsPerPage(val)
    setCurrentPage(0)
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

        <select className="input input-bordered"  name="pets">
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
            currentPage === page  ? 'btn mr-2 bg-red-500 text-white hover:bg-red-500 text-white' : 'btn'
          }>{page}</button>)
      }
      <select value={itemsPerPage} onChange={handleLevel} className="input input-bordered" name="" id="">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
    </div>
  );
};

export default Assignment;
