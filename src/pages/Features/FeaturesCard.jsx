const FeaturesCard = ({ features }) => {
    console.log(features);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      {features?.map((feature) => {
        return (
          <div
            key={feature.id}
            className="card-compact rounded-lg bg-base-100 shadow-xl hover:text-white hover:bg-red-500  shadow-2xl  "
          >
            <figure>
              <img
                src=
            {feature.img}
            className="h-20 ml-4 mt-4 hover:bg-white p-2 hover:rounded-full"
                alt="{brand.title}"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl">{feature.title}</h2>
              <p  className="text-[16px]">{feature.description}</p>
              
              <div className="card-actions justify-center">
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesCard;
