import { Link } from "react-router-dom"

const BackButton = () => {
  return (
    <div>
        <Link to="/">
            <button className="py-2 px-6 rounded-tl-[20px] rounded-br-[20px] text-orange-500 border-2 border-orange-500 my-10  hover:bg-orange-500 hover:text-white transition-all">    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
            </button>
        </Link>
    </div>
  )
}

export default BackButton
