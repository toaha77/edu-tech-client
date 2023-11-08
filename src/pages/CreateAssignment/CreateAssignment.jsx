import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const CreateAssignment = () => {
    const {user} = useContext(AuthContext)
  const handleCreatedAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const  marks = form.marks.value;
    const pets = form.pets.value;
    const photo = form.photo.value;
    const date = form.date.value;
    const description = form.description.value;
   

    const createAssignment = {
      name,
      marks,
      pets,
      email,
      photo,
      date,
      description,
      
    };
    console.log(createAssignment);
    fetch("https://study-group-server.vercel.app/create-assignment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Assignment Created Successfully!");
        }
      });
  };
  return (
    <div className="  p-20">
      <h2 className="text-5xl text-center font-bold">Create Your Assignment</h2>
      <form onSubmit={handleCreatedAssignment}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Assignment Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="marks"
                placeholder="Marks"
                className="input input-bordered w-full  "
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              
            </label>
            <label htmlFor="pet-select" >Choose a level:</label>

<select className="input input-bordered" name="pets">
  <option value="">--Please choose an option--</option>
  <option value="Hard">Hard</option>
  <option value="Medium">Medium</option>
  <option value="Easy">Easy</option>
 
</select>
          </div>
        </div>

        <div className="md:flex mb-8  ">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                defaultValue={user?.email}
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Thumbnail Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="photo"
                name="photo"
                placeholder="ThumbnailImage URL  "
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
        </div>
        
         <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short Description"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center  items-center">
          <input
            type="submit"
            value="Add Assignment"
            className="btn bg-red-500 text-white hover:bg-red-500"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateAssignment;