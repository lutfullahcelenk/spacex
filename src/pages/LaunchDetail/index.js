import { useContext } from "react";
import { useParams } from "react-router-dom";
//components
import Wave from "../../components/Shared/Wave";
import Container from "../../components/Shared/Container";
import ReusableListItem from "../../components/ReusableListItem";
//providers
import { LaunchContext } from "../../context";


const LaunchDetail = () => {
  const { flightNumber } = useParams();
  const { getLaunch } = useContext(LaunchContext);
  const launch = getLaunch(flightNumber);

  return (
    <Container>
      <Wave />
      <ReusableListItem
        isWhat="launch"
        name={launch?.name}
        description={launch?.details}
        wikipedia={launch?.links?.wikipedia}
        flightNumber={launch?.flight_number}
        url={launch?.links?.youtube_id}
      />
    </Container>
  );
};

export default LaunchDetail;