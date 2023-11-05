import toast from "react-hot-toast";

const CreateAssignment = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const pets = form.pets.value;
    const photo = form.photo.value;
    const type = form.type.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const addProduct = {
      name,
      brand_name,
      pets,
      photo,
      type,
      description,
      price,
      rating,
    };
    console.log(addProduct);
    fetch("https://brand-shop-server-alpha-eight.vercel.app/brandsCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product Added Successfully!");
        }
      });
  };
  return (
    <div className="  p-20">
      <h2 className="text-5xl text-center font-bold">Add a Product</h2>
      <form onSubmit={handleAddProduct}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand_name"
                placeholder="Brand Name"
                className="input input-bordered w-full  "
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              
            </label>
            <label htmlFor="pet-select" >Choose a Car:</label>

<select name="pets">
  <option value="">--Please choose an option--</option>
  <option value="Toyota">Toyota</option>
  <option value="BMW">BMW</option>
  <option value="Hyundai">Hyundai</option>
  <option value="Ford">Ford</option>
  <option value="Mercedez-Benz">Mercedez-Benz</option>
  <option value="Tesla">Tesla</option>
</select>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="photo"
                name="photo"
                placeholder="Photo URL  "
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="select"
                name="type"
                placeholder="Type"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price  "
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
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
            value="Add Product"
            className="btn bg-blue-500 text-white hover:bg-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateAssignment;