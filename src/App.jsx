import { Outlet } from "react-router-dom"
import { Navbar } from "./components"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet/>
      </div>
    </>
  )
}

export default App
