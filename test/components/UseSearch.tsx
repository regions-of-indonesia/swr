import { useSearch } from "../libs";

const UseSearch = () => {
  const { data, error, isLoading } = useSearch("a");

  return (
    <div data-testid="use-search">
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

export default UseSearch;
