
import Filter from "./Filter";
function BookingTableOperations() {
  return (
    <div className="flex items-center gap-4">
      <Filter
        filterField="region"
        options={[
          { value: "all", label: "All" },
          { value: "Africa", label: "Africa" },
          { value: "Europe", label: "Europe" },
          { value: "Asia", label: "Asia" },
          { value: "Americas", label: "Northern America" },
          { value: "Oceania", label: "Oceania" }
        ]}
      />
    </div>
  );
}

export default BookingTableOperations;
