import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="javascript:void(0)">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDzrcR76JDFjYJComkIbHIv6eMK2ZRPvUpw&s"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between space-x-5 bg-white border-2 border-gray-300 rounded-full px-4">
            <a
              className="menu-hover my-2 py-2 text-sm font-medium text-purple-400 lg:mx-4"
              onClick=""
            >
              Browse by Stream
            </a>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-purple-400 md:mx-2">
              Engineering and Architecture
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-purple-400 md:mx-2">
              LAW
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-purple-400 md:mx-2">
              Animation and Design
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-purple-400 md:mx-2">
              Computer Application and IT
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-purple-400 md:mx-2">
              Study Abroad
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-purple-400 md:mx-2">
              Competition
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-purple-400 md:mx-2">
              Finance and Accounts
            </a>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-indigo-600">
                  <Link to={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <Link
                  to="/login"
                  className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/signUp"
                  className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                >
                  Sign up
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
