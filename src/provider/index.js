import { useEffect, useState } from "react";
import { LaunchContext } from "../context";

const LaunchContextProvider = (props) => {
  const [companyInfo, setCompanyInfo] = useState();
  const [rockets, setRockets] = useState();
  const [launches, setLaunches] = useState();
  const [crews, setCrews] = useState();

  useEffect(() => {
    const CompanyInfo = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/company");
        const data = await response.json();
        setCompanyInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    CompanyInfo();
  }, []);

  useEffect(() => {
    const Rockets = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/rockets");
        const data = await response.json();
        setRockets(data);
      } catch (error) {
        console.log(error);
      }
    };
    Rockets();
  }, []);

  useEffect(() => {
    const Launches = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/launches");
        const data = await response.json();
        setLaunches(data);
      } catch (error) {
        console.log(error);
      }
    };
    Launches();
  }, []);

  useEffect(() => {
    const Crews = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/crew");
        const data = await response.json();
        setCrews(data);
      } catch (error) {
        console.log(error);
      }
    };
    Crews();
  }, []);

  const getRocket = (rocketId) => {
    return rockets.find((rocket) => rocket?.id === rocketId);
  };

  const getLaunch = (launchId) => {
    return launches.find((launch) => launch?.id === launchId);
  };

  const getCrews = (crewId) => {
    return crews.find((crew) => crew?.id === crewId);
  };

  return (
    <LaunchContext.Provider
      value={{
        companyInfo: companyInfo,
        rockets: rockets,
        getRocket: getRocket,
        launches: launches,
        getLaunch: getLaunch,
        crews: crews,
        getCrews: getCrews,
      }}
    >
      {props.children}
    </LaunchContext.Provider>
  );
};

export default LaunchContextProvider;
