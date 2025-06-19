import '../index.css';
import { FaSearch, FaUser } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex items-center gap-5">
      <form action="" className="action">
        <div className="flex flex-wrap items-center ml-40 gap-2.5 relative z-[3]">
          <FaSearch className="absolute right-1 mx-2 text-gray-500" />
          <input
            type="search"
            name="search"
            placeholder="Search"
            id="search"
            className="w-full p-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
          />
        </div>
      </form>
      <FaUser className="ml-2 text-gray-500 w-5 h-5" />
    </div>
  );
};

export default Search;
