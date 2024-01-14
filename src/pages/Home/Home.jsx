import data from "../../json/Data.json";
import { FoodList, SearchButton } from "../../components";
import UserType from "../../json/UserTypes.json";
import { useState } from "react";

const Home = () => {
  const [type, setType] = useState("all");
  const [search, setSearch] = useState(null);

  const filterData = data.filter((d) => {
    if (type === "all") {
      if (search) {
        const searchData = d.Name.includes(search);
        return searchData;
      }
      return true;
    } else if (type === "eater") {
      const eaterData = d.UserType === UserType[0].UserCode;
      if (search) {
        const searchData = eaterData && d.Name.includes(search);
        return searchData;
      }
      return eaterData;
    } else if (type === "vegan") {
      const veganData = d.UserType === UserType[1].UserCode;
      if (search) {
        const searchData = veganData && d.Name.includes(search);
        return searchData;
      }
      return veganData;
    }
    return false;
  });

  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="md:flex md:justify-between md:items-center pl-6 space-y-3">
        <div className="space-x-2">
          <button
            onClick={() => setType("all")}
            className={`border border-orange-500 text-orange-500 px-6 py-2 rounded-tl-[20px] rounded-br-[20px] hover:bg-orange-500 hover:text-white ${
              type === "all" && "bg-orange-500 text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setType("eater")}
            className={`border border-orange-500 text-orange-500 px-6 py-2 rounded-tl-[20px] rounded-br-[20px] hover:bg-orange-500 hover:text-white ${
              type === "eater" && "bg-orange-500 text-white"
            }`}
          >
            Meal Eater
          </button>
          <button
            onClick={() => setType("vegan")}
            className={`border border-orange-500 text-orange-500 px-6 py-2 rounded-tl-[20px] rounded-br-[20px] hover:bg-orange-500 hover:text-white ${
              type === "vegan" && "bg-orange-500 text-white"
            }`}
          >
            Vegan
          </button>
        </div>
        <SearchButton search={search} setSearch={setSearch} />
      </div>
      <div
        className={`grid ${
          filterData.length !== 0 &&
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        } p-6`}
      >
        {filterData.length === 0 ? (
          <div className="flex justify-center my-36">
            <h1 className="text-orange-500 text-2xl italic">Menu No Found</h1>
          </div>
        ) : (
          filterData.map((d) => (
            <FoodList d={d} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
