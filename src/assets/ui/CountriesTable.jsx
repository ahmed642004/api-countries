import { useSearchParams } from "react-router";
import { useCountryData } from "../../context/CountryContext";
import Pagination from "./Paginantion";
import CountriesList from "./CountriesList";

const CountriesTable = ({ searchTerm }) => {
  const { data, isLoading } = useCountryData();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const regionFilter = searchParams.get("region") || "all";
  const itemsPerPage = 10;

  // Filter data based on region
  let filteredData = data || [];
  if (regionFilter !== "all") {
    filteredData = filteredData.filter(
      (country) => country.region === regionFilter
    );
  }

  // Filter data based on search term
  if (searchTerm.trim() !== "") {
    filteredData = filteredData.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  function handlePageChange(newPage) {
    if (newPage < 1 || newPage > totalPages) return; // Prevent invalid pages

    setSearchParams(
      (prevParams) => {
        prevParams.set("page", newPage.toString());
        return prevParams;
      },
      { replace: newPage === 1 }
    );
    window.scrollTo({ top: 0, behavior: "smooth" }); // Replace history only if on page 1
  }

  return (
    <>
      <CountriesList countries={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default CountriesTable;
