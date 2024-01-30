import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between h-16 items-center max-w-6xl mx-auto">
        <button className="text-slate-500 hover:bg-sky-500 hover:text-slate-100 rounded p-1 -m-1 transition-color focus:ring-2 focus:ring-slate-200">
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
        <div className="flex -mr-4 items-center">
          <a
            href="#"
            className="text-sky-500 hover:text-sky-600 hover:-rotate-6 duration-200"
          >
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
              ></path>
            </svg>
            My Videos
          </a>
          <div className="space-x-8 ml-8 hidden md:flex">
            <Link to="/" className="px-3 py-2 text-sky-500">
              Home
            </Link>
            <a
              href="#"
              className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex">
          <button className="text-slate-500 hover:text-sky-500 rounded-full transition-color focus:ring-2 focus:ring-slate-200 focus:ring-offset-1">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              ></path>
            </svg>
          </button>
          <button className="ml-4 text-slate-500 hover:text-sky-500 rounded-full transition-color focus:ring-2 focus:ring-slate-200 focus:ring-offset-1">
            <img
              src="https://ui-avatars.com/api?name=Jimmy+García"
              alt="Jimmy García"
              className="h-6 w-6 rounded-full"
            />
          </button>
        </div>
      </div>

      <div className="space-y-1 pb-3 border-t pt-2 md:hidden">
        <a
          href="#"
          className="bg-sky-500 text-white block px-3 py-2 rounded-md "
        >
          Home
        </a>
        <a
          href="#"
          className="text-slate-700 hover:bg-sky-500 hover:text-white block px-3 py-2 rounded-md transition-colors"
        >
          About
        </a>
        <a
          href="#"
          className="text-slate-700 hover:bg-sky-500 hover:text-white block px-3 py-2 rounded-md transition-colors"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-slate-700 hover:bg-sky-500 hover:text-white block px-3 py-2 rounded-md transition-colors"
        >
          Contact
        </a>
      </div>

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
    </header>
  );
};

export default Navbar;
