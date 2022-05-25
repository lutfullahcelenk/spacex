import React from "react";
//components
import Card from "../Card"

const RocketList = ({ rockets }) => {
  return (
    <div className="my-auto mx-auto grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      {rockets.map((rocket,index) => (
        <Card
          key={index}
          to={`/rockets/${rocket?.id}`}
          title={rocket?.name}
          imageUrl={
            rocket?.flickr_images[1]
          }
          date={rocket?.first_flight}
          details={rocket?.description}
          isRocket={true}
        />
      ))}
    </div>
  );
};

export default RocketList;