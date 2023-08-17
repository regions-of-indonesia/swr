import { useSubdistricts } from "../libs";

const UseSubdistricts = () => {
  const { data, error, isLoading } = useSubdistricts("11.01");

  return (
    <div data-testid="use-subdistricts">
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

export default UseSubdistricts;
