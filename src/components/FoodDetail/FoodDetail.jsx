
const FoodDetail = ({ Name, UserMMType, UserEngType, Ingredients, CookingInstructions }) => {
  return (
    <>
        <div className="mx-auto">
          <img
            className="md:w-[550px] md:h-[600px] rounded-tl-[100px] rounded-br-[100px] hover:rotate-2 hover:scale-105 hover:md:rotate-3 transition-all overflow-hidden hover:md:scale-110"
            src={`/img/${Name}.jpg`}
            alt={Name}
            onError={(e) => {
              e.target.src = "/img/default.png";
            }}
          />
        </div>
        <div className="">
            <div className="space-y-1 mb-3">
              <h1 className="text-2xl font-bold text-orange-500">Menu Type</h1>
              <div className="flex space-x-3">
                <span className="">
                  {UserMMType} or {UserEngType}
                </span>
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <h1 className="text-2xl font-bold text-orange-500">Menu Name</h1>
              <div className="flex space-x-3">
                <span className="">
                  {Name}
                </span>
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <h1 className="text-2xl font-bold text-orange-500">Ingredients</h1>
              <div className="flex space-x-3">
                <span className="">
                  {Ingredients}
                </span>
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <h1 className="text-2xl font-bold text-orange-500">Cooking Instruction</h1>
              <div className="flex space-x-3">
                <span className="">
                  {CookingInstructions}
                </span>
              </div>
            </div>
        </div>
    </>
  )
}

export default FoodDetail
