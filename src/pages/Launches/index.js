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
  const [rocketName, setRocketName] = useState("");
  const [launchYear, setLaunchYear] = useState("");
  const [launchName, setLaunchName] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");

  const handleFilter = (type, event) => {
    if (type === "rocketName") {
      setRocketName(event.target.value);
    } else if (type === "launchYear") {
      setLaunchYear(event.target.value);
    } else if (type === "launchName") {
      setLaunchName(event.target.value);
    } else if (type === "launchSuccess") {
      setLaunchSuccess(event.target.value);
    }
  };

  const filteredLaunches = launches.filter(
    (launch) =>
      (launch?.date_local?.slice(0, 4) === launchYear || launchYear === "") &&
      (launch?.rocket === rocketName || rocketName === "") &&
      (launch?.name === launchName || launchName === "") &&
      (launch?.success === launchSuccess || launchSuccess === "")
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
        handleFilter={handleFilter}
        isFilter ="launches"
        rocketName={rocketName}
        launchYear={launchYear}
        launchSuccess={launchSuccess}
      />
      <ReusableList datas={filteredLaunches} isWhat={"launches"} />
    </Container>
  );
};

export default Launches;
