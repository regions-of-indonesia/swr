import { useDistricts } from "../libs";

const UseDistricts = () => {
  const { data, error, isLoading } = useDistricts("11");

  return (
    <div data-testid="use-districts">
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

export default UseDistricts;
