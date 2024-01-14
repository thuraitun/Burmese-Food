import { BackButton } from "../../components"

const NoFound = () => {
  return (
    <div className="max-w-[1500px] mx-auto flex flex-col items-center my-44 space-y-5">
      <h1 className="text-orange-500 text-5xl font-bold italic">404 No Found</h1>
      <BackButton />
    </div>
  )
}

export default NoFound
