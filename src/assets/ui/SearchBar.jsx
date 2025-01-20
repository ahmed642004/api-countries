import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="w-[100%] xl:w-[20rem] mb-4 xl:mb-0">
      <div className="relative">
        <HiMagnifyingGlass className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search For a Country..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full pl-14 p-3 dark:bg-[#2b3743] dark:border-0  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
