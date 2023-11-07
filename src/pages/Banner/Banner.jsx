  
 const Banner = () => {
    return (
      <div className="mt-6 mb-4">
          <div className="sm:object-cover hero  min-h-screen rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/VxDpwSK/joanna-kosinska-7-ACu-Hoez-UYk-unsplash.jpg)'}}>
  <div className="hero-overlay rounded-xl bg-opacity-60 "></div>
  <div className="  text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-6xl text-white  uppercase">Education is a <br /> backbone of life</h1>
       
      <button className="btn bg-red-500 text-white hover:bg-red-500 text-white">Get Assignment</button>
    </div>
  </div>
</div>
      </div>
    );
 };
 
 export default Banner;