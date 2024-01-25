import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new-video">Create new video</Link></li>
      </ul>
    </>
  )
} 

export default Navbar