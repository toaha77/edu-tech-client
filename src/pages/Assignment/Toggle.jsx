 
 const Toggle = () => {

 
    return (
        <div>
            {/* The button to open modal */}
<a href="#my_modal_8" className="btn">Take Assignment</a>
{/* Put this part before </body> tag */}
<div className="modal" id="my_modal_8">
  <div className="modal-box">
    <h2 className="text-xl mb-4">Upload pdf:</h2>
    <input type="file" className=" input input-bordered"/> <br />
    <br />
    <textarea className="bg-gray-200 input-bordered">Right here....</textarea>
    <div className="modal-action">
     <a href="#" className="btn">Submit</a>
    </div>
  </div>
</div>
        </div>
    );
 };
 
 export default Toggle;