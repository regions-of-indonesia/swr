import { useSearchSubdistricts } from "../libs";

const UseSearchSubdistricts = () => {
  const { data, error, isLoading } = useSearchSubdistricts("a");

  return (
    <div data-testid="use-search-subdistricts">
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

export default UseSearchSubdistricts;
