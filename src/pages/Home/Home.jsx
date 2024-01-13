import { Link } from "react-router-dom";
import data from "../../json/Data.json";
import { SearchButton } from "../../components";

const Home = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="flex justify-end">
        <SearchButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
        {data.map((d) => (
          <Link to={`/foods/${d.Guid}`}
            key={d.Guid}
            className="flex border border-orange-500 hover:bg-gray-100 p-4 items-center space-x-6 hover:rotate-2 transition-all rounded-lg"
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
              <p className="hover:text-orange-500">{d.Name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
