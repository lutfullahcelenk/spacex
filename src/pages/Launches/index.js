import React, { useContext, useState } from "react";
//components
import Wave from "../../components/Shared/Wave";
import Hero from "../../components/Shared/Hero";
import ReusableList from "../../components/ReusableList";
import Title from "../../components/Shared/Title";
import Filter from "../../components/Filter";
//context
import Container from "../../components/Shared/Container";
import { LaunchContext } from "../../context";

const Launches = () => {
  const { launches } = useContext(LaunchContext);
  console.log("launches", launches);
  const [rocketName, setRocketName] = useState("");
  console.log("rocketName", rocketName);
  const [launchYear, setLaunchYear] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");

  const filterChangeHandler = (type, event) => {
    if (type === "rocketName") {
      setRocketName(event.target.value);
    } else if (type === "launchYear") {
      setLaunchYear(event.target.value);
    } else if (type === "launchSuccess") {
      setLaunchSuccess(event.target.value);
    }
  };

  const filteredLaunches = launches.filter(
    (launch) =>
      launch?.rocket === rocketName ||
      launch?.date_local?.slice(0, 4) === launchYear ||
      launch?.success === launchSuccess
  );

  return (
    <Container>
      <Hero
        title="SpaceX Launches with Lutfullah"
        subtitle="My strong intuitive sense is that having a public platform that is maximally trusted and broadly inclusive is extremely important to the future of civilization. I don’t care about the economics at all.”"
        author="Elon Musk"
      />
      <Wave />
      <Title message="LAUNCHES" />
      <Filter
        filterChangeHandler={filterChangeHandler}
        rocketName={rocketName}
        launchYear={launchYear}
        launchSuccess={launchSuccess}
      />
      <ReusableList
        datas={filteredLaunches.length > 0 ? filteredLaunches : launches}
        isWhat={"launches"}
      />
    </Container>
  );
};

export default Launches;
