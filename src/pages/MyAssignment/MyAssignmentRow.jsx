import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
 const MyAssignmentRow = ({ assignment, handleDelete }) => {
  const { _id,name, photo, date, email, status } = assignment;

 const handleSubmit = () =>{
  toast.success('Submitted Successfully!')
 }
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex items-center justify-between">
        <tr>
          <th>
            <label>
              <button onClick={()=>handleDelete(_id)} className="btn">
                <MdDelete  className="text-3xl"></MdDelete>
              </button>
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={photo} alt="assignment photo" />
                </div>
              </div>
              <div className=" lg:w-80">
                <div className="font-bold text-xl">Name : {name}</div>
              </div>
            </div>
          </td>
          <td>{date}</td>
          <td>{email}</td>
          <th>
             
              
              <button onClick={handleSubmit} className="btn btn-ghost btn-xs">submit</button>
            
          </th>
        </tr>
      </div>
    </div>
  );
};

export default MyAssignmentRow;
