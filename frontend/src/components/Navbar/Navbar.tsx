import { Link } from "react-router-dom"

const Navbar = () => {
  return (    
    <div className="container mx-auto bg-black text-white">
      <ul className="flex items-center justify-items-center h-10 p-6">
        <li><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/new-video">Create new video</Link></li>
      </ul>
    </div>
  )
} 

export default Navbar