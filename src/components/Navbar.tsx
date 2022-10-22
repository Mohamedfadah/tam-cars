import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png';
import Avatar from '../assets/avatar.png';
import Notifications from '../assets/notification.png'

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate('/car/search/'+search)
  }
  return (
    <nav className="bg-white mr-5 p-4">
      <div className="container flex flex-wrap justify-between items-center mx-auto mb-4 mt-4">
        <form onSubmit={handleSubmit}>
          <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search or type" required
                onChange={(e: any) => setSearch(e.target.value)}
              />
          </div>
        </form>

        <div className="flex items-center md:order-2">
          <img className="h-5 w-auto mr-4" src={Notifications} alt="Notifications" />
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={Avatar}
              alt="user avatar"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
