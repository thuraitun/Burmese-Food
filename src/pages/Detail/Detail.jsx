import { Link, useParams } from "react-router-dom"
import UserType from "../../json/UserTypes.json"
import Foods from "../../json/Data.json"
import { BackButton, FoodDetail } from "../../components"

const Detail = () => {

  const {id} = useParams()

  const food = Foods.find(food => food.Guid == id)
  const type = UserType.find(type => type.UserId == food.UserType)
  const { Name, Ingredients, CookingInstructions } = food
  const {UserMMType,UserEngType} = type
  
  return (
    <div className="max-w-[1500px] mx-auto px-6 text-white min-h-screen">
      <BackButton />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 my-10 items-center">
        <FoodDetail 
          Name={Name}
          Ingredients={Ingredients}
          CookingInstructions={CookingInstructions}
          UserMMType={UserMMType}
          UserEngType={UserEngType}
        />
      </div>
    </div>
  )
}

export default Detail
