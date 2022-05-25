import { useContext } from "react";
import { useParams } from "react-router-dom";
//components
import Wave from "../../components/Shared/Wave";
import Container from "../../components/Shared/Container";
import RocketItem from "../../components/RocketItem";
//providers
import { LaunchContext } from "../../context";


const RocketDetail = () => {
  const { rocketId } = useParams();
  const { getRocket } = useContext(LaunchContext);
  const rocket = getRocket(rocketId);

  return (
    <Container>
      <Wave />
      <RocketItem
        name={rocket?.name}
        description={rocket?.description}
        country={rocket?.country}
        firstFlight={rocket?.first_flight}
        diameter={rocket?.diameter?.meters}
        height={rocket?.height?.meters}
        imageUrl={rocket?.flickr_images[1]}
      />
    </Container>
  );
};

export default RocketDetail;