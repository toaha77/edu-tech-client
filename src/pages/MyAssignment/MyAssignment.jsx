import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyAssignmentRow from "./MyAssignmentRow";
import Swal from "sweetalert2";

 
const MyAssignment = () => {
    const  {user} = useContext(AuthContext)
   const [myAssignment, setMyAssignment] = useState([])
    const url = `https://study-group-server.vercel.app/create-assignment?email=${user?.email}`

    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => setMyAssignment(data))
    },[url])

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://study-group-server.vercel.app/create-assignment/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "Your assignment has been deleted.",
                  "success"
                );
                const remaining = myAssignment.filter(
                  (assignment) => assignment._id !== id
                );
                setMyAssignment(remaining);
              }
            });
        }
      });
    };

   
 

   
    return (
        <div className="overflow-x-auto mt-8 w-full">
  <table className="table w-full">
    {/* head */}
     
    <tbody>
      {/* row 1 */}
     
      <div>
      {
        myAssignment.map( assignment=> <MyAssignmentRow key={assignment._id}
        assignment={assignment}
        handleDelete={handleDelete}
        
        ></MyAssignmentRow>)
      }
      </div>
    
    </tbody>  
   
    
  </table>
</div>
    );
};

export default MyAssignment;