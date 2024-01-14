import { Outlet } from "react-router-dom"
import { Navbar } from "./components"

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <div className="">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
