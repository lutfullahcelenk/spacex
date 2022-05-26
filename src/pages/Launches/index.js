import React, { useContext } from "react";
//components
import Wave from "../../components/Shared/Wave";
import Hero from "../../components/Shared/Hero";
import ReusableList from "../../components/ReusableList";
import Title from "../../components/Shared/Title";
//context
import Container from "../../components/Shared/Container";
import { LaunchContext } from "../../context";


const Launches = () => {

  const { launches } = useContext(LaunchContext);
  console.log('launches', launches)
  
  return (
    <Container>
      <Hero
        title="SpaceX Launches with Lutfullah"
        subtitle="My strong intuitive sense is that having a public platform that is maximally trusted and broadly inclusive is extremely important to the future of civilization. I don’t care about the economics at all.”"
        author="Elon Musk"
      />
      <Wave />
      <Title message="LAUNCHES" />     
      <ReusableList datas={launches} isWhat={"launches"} />
     
    </Container>
  );
};

export default Launches;
