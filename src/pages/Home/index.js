import React from 'react';
//components
import Wave from "../../components/Shared/Wave";
import Byography from "../../components/Byography";
import Container from "../../components/Shared/Container";

const Home = () => {
  return (
    <Container>
      <Wave />
      <Byography />
    </Container>
  );
};

export default Home;
