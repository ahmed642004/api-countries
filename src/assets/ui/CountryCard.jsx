import { useNavigate } from "react-router";

const CountryCard = ({ data }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/${data.alpha2Code}`);
  }
  return (
    <div
      className="rounded-md overflow-hidden shadow-md cursor-pointer w-[80%] xl:w-[100%] dark:bg-[#2b3743]"
      onClick={handleClick}
    >
      <img
        src={data.flag}
        alt={data.name}
        className="w-full object-cover h-[170px]"
      />
      <h3 className="p-4 font-extrabold dark:text-white">{data.name}</h3>
      <ul className="p-4">
        <li className="font-bold mb-2  dark:text-white">
          Population: <span className="text-slate-400">{data.population}</span>
        </li>
        <li className="font-bold mb-2 dark:text-white">
          Region: <span className="text-slate-400">{data.region}</span>
        </li>
        <li className="font-bold mb-5 dark:text-white">
          Capital: <span className="text-slate-400">{data.capital}</span>
        </li>
      </ul>
    </div>
  );
};

export default CountryCard;
