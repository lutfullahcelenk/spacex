import { useContext } from "react";
import { LaunchContext } from "../../context";

const Filter = ({
  handleFilter,
  isFilter,
  rocketName,
  launchYear,
  launchName,
  launchSuccess,
  crewName
}) => {
  const { rockets } = useContext(LaunchContext);
  const { launches } = useContext(LaunchContext);
  const { crews } = useContext(LaunchContext);
  const currentYear = new Date().getFullYear();

  return (
    <>
      {isFilter === "launches" && (
        <div className="container grid grid-cols-1 gap-6 mx-auto w-2/3 mt-14 xl:grid-cols-4">
          <label className="block">
            <span className="text-gray-700">Rocket name</span>
            <select
              value={rocketName}
              onChange={(e) => handleFilter("rocketName", e)}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">All</option>
              {rockets.map((item) => (
                <option key={item.name} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Launch year</span>
            <select
              value={launchYear}
              onChange={(e) => handleFilter("launchYear", e)}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">All</option>
              {[...Array(currentYear - 2001 + 1).keys()]
                .sort((a, b) => b - a)
                .map((item) => {
                  const year = item + 2001;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Launch name</span>
            <select
              value={launchName}
              onChange={(e) => handleFilter("launchName", e)}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">All</option>
              {launches.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Launch success</span>
            <select
              value={launchSuccess}
              onChange={(e) => handleFilter("launchSuccess", e)}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">All</option>
              <option value={true}>Success</option>
              <option value={false}>Failed</option>
            </select>
          </label>
        </div>
      )}

      {isFilter === "crews" && (
        <div className="container grid grid-cols-1 gap-6 mx-auto w-2/3 mt-14 xl:grid-cols-1">
          <label className="block">
            <span className="text-gray-700">Crew name</span>
            <select
              value={crewName}
              onChange={(e) => handleFilter("crewName", e)}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">All</option>
              {crews.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
    </>
  );
};

export default Filter;
