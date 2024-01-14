import { Link } from "react-router-dom";

const FoodList = ({ d }) => {
  return (
    <div>
      <Link
        to={`/foods/${d.Guid}`}
        key={d.Guid}
        className="flex border border-orange-500 hover:bg-gray-100 p-4 items-center space-x-6 hover:rotate-2 transition-all rounded-tl-[30px] rounded-br-[30px]"
      >
        <div className="">
          <img
            className="w-[100px] h-[100px] rounded-full hover:scale-110 overflow-hidden transition-all"
            src={`/img/${d.Name}.jpg`}
            alt={d.Name}
            onError={(e) => {
              e.target.src = "/img/default.png";
            }}
          />
        </div>
        <div className="">
          <p className="hover:text-orange-500 text-orange-500">{d.Name}</p>
        </div>
      </Link>
    </div>
  );
};

export default FoodList;
