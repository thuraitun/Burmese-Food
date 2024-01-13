import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="py-6">
        <nav className="max-w-7xl mx-auto flex justify-center hover:rotate-2 transition-all">
            <Link to="/" className="text-3xl font-bold text-orange-500 border-2 border-orange-500 bg-gray-50 p-3 rounded-tl-[30px] rounded-br-[30px]">Burmese <span className=" italic">Food</span></Link>
        </nav>
    </div>
  )
}

export default Navbar
