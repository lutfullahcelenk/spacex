import Image from "../../components/Shared/Image";

const RocketItem = ({
  name,
  description,
  country,
  firstFlight,
  diameter,
  height,
  imageUrl,
}) => {
  return (
    <div className="container mx-auto">
      <h1 className="flex justify-center w-full text-6xl font-bold text-fuchsia-900 leading-tight items-center my-14">
        {name}
      </h1>
      <div className="flex flex-col items-center my-14 mx-20 text-center sm:text-left xl:flex-row">
        <div className="flex flex-col w-full xl:w-1/2">
          <h1 className="text-4xl font-bold my-8 text-rose-900">Description</h1>
          <p className="text-base">{description}</p>

          <div className="flex flex-col justify-between sm:flex-row my-4">
            <div className="w-full">
              <h1 className="text-2xl my-4 text-rose-900">Country</h1>
              <span className="">{country}</span>
            </div>
            <div className="w-full sm:w-3/4">
              <h1 className="text-2xl my-4 text-rose-900">First Flight</h1>
              <span className="">
                {new Date(firstFlight).toLocaleDateString("en-GB")}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between sm:flex-row">
            <div className="w-full">
              <h1 className="text-2xl my-4 text-rose-900">Diameter</h1>
              {diameter} meter
            </div>
            <div className="w-full sm:w-3/4">
              <h1 className="text-2xl my-4 text-rose-900">Height</h1>
              {height} meter
            </div>
          </div>
        </div>

        <div className="w-full xl:ml-20 xl:w-1/2">
          <Image
            className="w-full mt-16 rounded-lg hidden sm:block xl:mx-12 xl:mt-5"
            src={imageUrl}
            width="640px"
            height="480px"
          />
        </div>
      </div>
    </div>
  );
};

export default RocketItem;
