import { Link } from "react-router-dom";
//components
import Image from "../Shared/Image";

const Card = ({ title, imageUrl, date, to, details, isRocket }) => {
  return (
    <div
      className={`flex flex-col cursor-pointer shadow-lg rounded-2xl w-80 mx-16 mt-16`}
      style={{
        height: "540px",
      }}
    >
      <Link to={to ? to : "#"}>
        <Image
          className={`m-auto h-60 ${
            isRocket ? "object-cover" : "object-scale-down"
          }`}
          src={imageUrl}
          width="320px"
          height="288px"
        />

        <div className="p-5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg text-red-300	">{title}</span>
          </div>

          <div className="flex flex-1">
            <span className="text-lime-500">
              {date && new Date(date).toLocaleDateString("en-GB")}
            </span>
          </div>

          <div className="flex flex-1 mt-3">
            <p className="text-rose-900 line-clamp-5">
              {details ? details : "No Data"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
