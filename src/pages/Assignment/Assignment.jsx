import { useEffect, useState } from "react";
import AssignMentCard from "./AssignMentCard";
import Swal from "sweetalert2";

 
 
const Assignment = () => {
    const [assignments, setAssignments] = useState([])
    const url = 'http://localhost:5000/create-assignment'
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data =>  setAssignments(data))
    }, [])

    const handleDelete = id =>{
        console.log(id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        fetch(`http://localhost:5000/create-assignment/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
                Swal.fire(
                        'Deleted!',
                        'Your assignment has been deleted.',
                        'success'
                      )
                      const remaining = assignments.filter(assignment => assignment._id !==id)
                      setAssignments(remaining)
                
            }
        })
        }
      }) 
    }
    return (
        <div className="mt-4">
          
          <div>
            <h2 className="text-5xl font-semibold text-center mb-4"><span className="text-red-500">Your Assignment</span> is here</h2>
           </div> 
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
         {
            assignments.map(assignment => <AssignMentCard key={assignment._id} 
            assignment={assignment}
            handleDelete={handleDelete}
            ></AssignMentCard>)
          }
         </div>
        </div>
    );
};

export default Assignment;