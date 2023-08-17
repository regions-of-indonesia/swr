import { useSearchProvinces } from "../libs";

const UseSearchProvinces = () => {
  const { data, error, isLoading } = useSearchProvinces("a");

  return (
    <div data-testid="use-search-provinces">
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

export default UseSearchProvinces;
