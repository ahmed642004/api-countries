import { useCountryData } from "../context/CountryContext";
import Button from "../assets/ui/Button";
import CountryData from "../assets/ui/CountryData";
import { useNavigate } from "react-router";

const CountryPage = () => {
  const { data } = useCountryData();
  const naivgate = useNavigate();

  if (!data) {
    return <div>No country data available</div>;
  }
  return (
    <div className="w-[80%] m-auto lg:w-[100%] lg:m-0">
      <Button
        onClick={() => naivgate(-1)}
        className="bg-white text-black mt-3 py-2 px-4 rounded shadow hover:bg-gray-200"
      >
        Back
      </Button>
      <CountryData />
    </div>
  );
};

export default CountryPage;
