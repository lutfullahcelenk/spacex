import React, { useContext, useState } from "react";
import { LaunchContext } from "../../context";
//components
import ReusableList from "../../components/ReusableList";
import Container from "../../components/Shared/Container";
import Hero from "../../components/Shared/Hero";
import Title from "../../components/Shared/Title";
import Wave from "../../components/Shared/Wave";
import Filter from "../../components/Filter";

const Crews = () => {
  const [crewName, setCrewName] = useState("");
  const { crews } = useContext(LaunchContext);
  console.log("crews", crews);

  const handleFilter = (type, event) => {
    if (type === "crewName") {
      setCrewName(event.target.value);
    }
  };

  const filteredCrew = crews.filter(
    (crew) => crew?.name === crewName || crewName === ""
  );

  return (
    <Container>
      <Hero
        title="🚀 SpaceX Crews according to Lutfullah"
        subtitle="I'm just really proud of the SpaceX team and honored to be partnered with NASA and helping with JAXA and ESA as well. Thrilled to be a part of advancing human spaceflight and looking forward to going beyond Earth orbit. "
        author={"Elon Musk"}
      />
      <Wave />
      <Title message="CREWS" />
      <Filter
        handleFilter={handleFilter}
        isFilter="crews"
        crewName={crewName}
      />
      <ReusableList datas={filteredCrew} isWhat={"crews"} />
    </Container>
  );
};

export default Crews;
