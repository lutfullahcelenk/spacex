import { useContext } from "react";
import { LaunchContext } from "../../context";
//components
import Hero from "../../components/Shared/Hero";
import Wave from "../../components/Shared/Wave";
import Title from "../../components/Shared/Title";
import ReusableList from "../../components/ReusableList";
import Container from "../../components/Shared/Container";

const Rockets = () => {

  const { rockets } = useContext(LaunchContext);
  console.log('rockets', rockets)

  return (
    <Container>
      <Hero
        title="🚀 SpaceX Rockets with Lutfullah"
        subtitle="I think we're tracking to have the regulatory approval and hardware readiness around the same time. Hopefully, you know, basically a couple of months for both. "
        author={"Elon Musk"}
      />
      <Wave />
      <Title message="ROCKETS" />
      <ReusableList datas={rockets} isWhat={"rockets"} />
    </Container>
  );
};

export default Rockets;
