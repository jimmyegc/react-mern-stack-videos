import { Link } from "react-router-dom";

const Navbar = () => {
  return (<>
    <header>
      <div className="bg-slate-900 p-4 text-white mt-0">
        <ul className="flex h-10 items-center">
          {/*  <li className="">
            <Link to="/">Home</Link>
          </li> */}
          <li className="">
            <Link to="/new-video">Create new video</Link>
          </li>
        </ul>
      </div>
    </header >
  </>);
};

export default Navbar;
