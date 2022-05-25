import React from "react";
//components
import Wave from "../../components/Shared/Wave";
import Byography from "../../components/Byography";
import Container from "../../components/Shared/Container";
import Hero from "../../components/Shared/Hero";

const Home = () => {
  return (
    <Container>
      <Hero
        title={"Welcome to Lutfullah SpaceX"}
        subtitle="You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars."
        author = "Elon Musk"
      />
      <Wave />
      <Byography />
    </Container>
  );
};

export default Home;
