import Image from "../Shared/Image";

const ReusableListItem = ({
  isWhat,
  name,
  description,
  country,
  wikipedia,
  firstFlight,
  diameter,
  height,
  flightNumber,
  url,
}) => {
  return (
    <div className="container mx-auto">
      <h1 className="flex justify-center w-full text-[2rem] font-bold text-fuchsia-900 leading-tight items-center my-14">
        {name}
      </h1>
      <div className="flex flex-col items-center my-14 mx-20 text-center sm:text-left xl:flex-row">
        {isWhat === "rockets" && (
          <div className="w-full xl:ml-20 xl:w-1/2">
            <Image
              className="w-full mt-16 rounded-lg hidden sm:block xl:mx-12 xl:mt-5"
              src={url}
              width="30rem"
              height="30rem"
            />
          </div>
        )}
        {isWhat === "launch" && (
          <div className="w-full hidden sm:block xl:ml-10 xl:mr-20 xl:w-1/2">
            <iframe
              title="launch_video"
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${url}?autoplay=1&mute=1&loop=1&playlist=${url}`}
              className="mt-16 rounded-lg xl:mx-12 xl:mt-5"
            />
          </div>
        )}

        <div className="flex flex-col w-full xl:w-1/2">
          <h1 className="text-4xl font-bold my-8 text-rose-900">Description</h1>
          <p className="text-base">{description || "No Data"}</p>

          <div className="flex flex-col justify-between sm:flex-row my-4">
            <div className="w-full">
              {isWhat === "launch" ? (
                <div className="w-full">
                  <h1 className="text-2xl my-4 text-rose-900">More Info</h1>

                  <a
                    className="text-blue-600"
                    href={wikipedia}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wikipedia
                  </a>
                </div>
              ) : (
                <div className="w-full">
                  <h1 className="text-2xl my-4 text-rose-900">Country</h1>
                  <span className="">{country}</span>
                </div>
              )}
            </div>
            <div className="w-full">
              <h1 className="text-2xl my-4 text-rose-900">First Flight</h1>
              <span className="">
                {firstFlight
                  ? new Date(firstFlight).toLocaleDateString("en-GB")
                  : "No Spesific Date"}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between sm:flex-row">
            <div className="w-full">
              <h1 className="text-2xl my-4 text-rose-900">Diameter</h1>
              {diameter ? `${diameter} meter` : "No Diameter Info"}
            </div>
            <div className="w-full">
              {isWhat === "launch" ? (
                <div className="w-full sm:w-3/4">
                  <h1 className="text-2xl my-4 text-rose-900">Flight Number</h1>
                  {flightNumber}
                </div>
              ) : (
                <div className="w-full sm:w-3/4">
                  <h1 className="text-2xl my-4 text-rose-900">Height</h1>
                  {height} meter
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableListItem;
