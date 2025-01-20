import { useParams } from "react-router";
import { useCountryData } from "../../context/CountryContext";

const CountryData = () => {
  const { alpha2Code } = useParams();
  const { data } = useCountryData();
  const country = data?.find((country) => country.alpha2Code === alpha2Code);
  return (
    <div className=" xl:blcok  justify-center items-start gap-12 pt-5">
      <div className="xl:flex place-content-evenly h-[calc(100vh-97px-1.25rem-0.75rem)] items-center">
        <div>
          <img src={country.flag} alt={country.name} className="xl:w-[600px]" />
        </div>
        <div>
          <h1 className="font-bold text-lg mt-8 dark:text-white">
            {country.name}
          </h1>
          <div className="xl:flex gap-28">
            <div>
              <p className="font-bold mt-4">
                Native name:{" "}
                <span className="text-slate-400">{country.nativeName}</span>
              </p>
              <p className="font-bold mt-4">
                Population:{" "}
                <span className="text-slate-400">{country.population}</span>
              </p>
              <p className="font-bold mt-4">
                Region: <span className="text-slate-400">{country.region}</span>
              </p>
              <p className="font-bold mt-4">
                Sub-Region:{" "}
                <span className="text-slate-400">{country.subregion}</span>
              </p>
              <p className="font-bold mt-4">
                Capital:{" "}
                <span className="text-slate-400">{country.capital}</span>
              </p>
            </div>
            <div>
              <p className="font-bold mt-4">
                Top-level domain:{" "}
                <span className="text-slate-400">
                  {country.topLevelDomain.join(", ")}
                </span>
              </p>
              <p className="font-bold mt-4">
                Currencies:{" "}
                <span className="text-slate-400">
                  {country.currencies
                    ?.map((currency) => currency.name)
                    .join(", ") || "No currency available"}
                </span>
              </p>
              <p className="font-bold mt-4">
                Languages:{" "}
                <span className="text-slate-400">
                  {country.languages
                    .map((language) => language.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          <p className="font-bold mt-4">Border Countries:</p>
          {country.borders?.length > 0 ? (
            <ul className="flex flex-wrap gap-3 pt-5">
              {country.borders.map((border, index) => (
                <li
                  key={index}
                  className="dark:bg-[hsl(210,22,22)] dark:text-[#cbd7e2]  w-fit px-5 py-2 text-sm rounded-sm shadow-lg flex justify-center items-center text-center"
                >
                  {border}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-400">No border countries available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryData;
