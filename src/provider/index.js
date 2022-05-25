import { useEffect, useState } from "react";
import { LaunchContext } from "../context";

const LaunchContextProvider = (props) => {
  const [rockets, setRockets] = useState();

  useEffect(() => {
    const CompanyInfo = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/company");
        const data = await response.json();
        setRockets(data);
      } catch (error) {
        console.log(error);
      }
    };
    CompanyInfo();
  }, []);

  return (
    <LaunchContext.Provider value={{ rockets: rockets }}>
      {props.children}
    </LaunchContext.Provider>
  );
};

export default LaunchContextProvider;
