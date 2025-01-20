import { useSearchParams } from "react-router";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || "all";
  function handleChange(event) {
    const value = event.target.value;
    searchParams.set(filterField, value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }

  return (
    <div className="flex space-x-2">
      <select
        value={currentFilter}
        onChange={handleChange}
        className="px-4 py-3 rounded dark:bg-[#2b3743] dark:text-[#d3dbe5] bg-white text-gray-700"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
