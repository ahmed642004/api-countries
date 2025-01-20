import FilterCountries from "./FilterCountires";
import SearchBar from "./SearchBar";
import CountriesTable from "./CountriesTable";
import { useState } from "react";
import { useSearchParams } from "react-router";
import Header from "./Header";
const AppLayout = () => {
  const [, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term) {
    setSearchTerm(term);
    setSearchParams((prevParams) => {
      prevParams.set("page", "1"); // Reset to first page on search
      return prevParams;
    });
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between my-5 xl:my-14">
          <SearchBar onSearch={handleSearch} />
          <FilterCountries />
        </div>

        <CountriesTable searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default AppLayout;
