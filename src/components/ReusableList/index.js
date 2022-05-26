import React from "react";
//components
import Card from "../Card";

const ReusableList = ({ datas, isWhat }) => {
  return (
    <div className="my-auto mx-auto grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      {/* launches */}
      {isWhat === "launches" &&
        datas.map((launch, index) => (
          <Card
            key={index}
            to={`/launches/${launch?.id}`}
            title={launch?.name}
            date={launch?.date_utc}
            imageUrl={launch?.links?.patch?.large}
            details={launch?.details}
          />
        ))}

      {/* rockets */}
      {isWhat === "rockets" &&
        datas.map((rocket, index) => (
          <Card
            key={index}
            to={`/rockets/${rocket?.id}`}
            title={rocket?.name}
            date={rocket?.first_flight}
            imageUrl={rocket?.flickr_images[1]}
            details={rocket?.description}
          />
        ))}
    </div>
  );
};

export default ReusableList;
