import { useCountryData } from "../../context/CountryContext";
import CountryCard from "./CountryCard";
import Skeleton from "./Skeleton";

const CountriesList = ({ countries }) => {
  const { isLoading } = useCountryData();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 place-items-center w-full gap-12">
      {isLoading ? (
        // Render skeleton cards while loading
        Array.from({ length: 10 }).map((_, index) => <Skeleton key={index} />)
      ) : countries.length > 0 ? (
        countries.map((country) => (
          <CountryCard data={country} key={country.name} />
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default CountriesList;
