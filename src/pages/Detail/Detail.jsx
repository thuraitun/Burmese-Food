import { Link, useParams } from "react-router-dom"
import UserType from "../../json/UserTypes.json"
import Foods from "../../json/Data.json"

const Detail = () => {

  const {id} = useParams()

  const food = Foods.find(food => food.Guid == id)
  const type = UserType.find(type => type.UserId == food.UserType)
  const { Name, Ingredients, CookingInstructions } = food
  const {UserMMType,UserEngType} = type
  
  return (
    <div className="max-w-[1500px] mx-auto px-6">
      <Link to="/">
        <button className="py-2 px-4 text-orange-500 border border-orange-500 my-10  hover:bg-orange-500 hover:text-white transition-all">    
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 items-center">
        <div className=" mx-auto">
          <img
            className="w-[550px] rounded-tl-[100px] rounded-br-[100px] hover:rotate-3 transition-all overflow-hidden hover:scale-110"
            src={`/img/${Name}.jpg`}
            alt={Name}
            onError={(e) => {
              e.target.src = "/img/default.png";
            }}
          />
        </div>
        <div className="">
            <div className="space-y-1 mb-3">
              <h1 className="text-2xl font-bold hover:text-orange-500">Menu Type</h1>
              <div className="hover:text-orange-500 flex space-x-3">
                {/* <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                  </svg>

                </span>  */}
                <span className="">
                  {UserMMType} or {UserEngType}
                </span>
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <h1 className="text-2xl font-bold hover:text-orange-500">Menu Name</h1>
              <div className="hover:text-orange-500 flex space-x-3">
                {/* <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                  </svg>

                </span>  */}
                <span className="">
                  {Name}
                </span>
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <h1 className="text-2xl font-bold hover:text-orange-500">Ingredients</h1>
              <div className="hover:text-orange-500 flex space-x-3">
                {/* <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                  </svg>
                </span>  */}
                <span className="">
                  {Ingredients}
                </span>
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <h1 className="text-2xl font-bold hover:text-orange-500">Cooking Instruction</h1>
              <div className="hover:text-orange-500 flex space-x-3">
                {/* <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                  </svg>
                </span>  */}
                <span className="">
                  {CookingInstructions}
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
