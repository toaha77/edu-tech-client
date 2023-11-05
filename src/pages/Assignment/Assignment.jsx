import { useEffect, useState } from "react";
import AssignMentCard from "./AssignMentCard";

 
 
const Assignment = () => {
    const [assignments, setAssignments] = useState([])
    const url = 'http://localhost:5000/create-assignment'
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data =>  setAssignments(data))
    }, [])
    return (
        <div className="mt-4">
          
          <div>
            <h2 className="text-5xl font-semibold text-center mb-4"><span className="text-red-500">Your Assignment</span> is here</h2>
           </div> 
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
         {
            assignments.map(assignment => <AssignMentCard key={assignment._id} 
            assignment={assignment}
            ></AssignMentCard>)
          }
         </div>
        </div>
    );
};

export default Assignment;