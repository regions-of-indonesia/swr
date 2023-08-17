import { useSearchDistricts } from "../libs";

const UseSearchDistricts = () => {
  const { data, error, isLoading } = useSearchDistricts("a");

  return (
    <div data-testid="use-search-districts">
      {error ? (
        <span id="error"></span>
      ) : isLoading ? (
        <span id="loading"></span>
      ) : (
        <ul id="data">
          {data!.map((item) => (
            <li key={item.code} data-code={item.code} data-name={item.name}></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UseSearchDistricts;
