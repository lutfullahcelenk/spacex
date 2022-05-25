import { LaunchContext } from "../context";

const LaunchContextProvider = (props) => {
  return (
    <LaunchContext.Provider value={""}>{props.children}</LaunchContext.Provider>
  );
};

export default LaunchContextProvider;
