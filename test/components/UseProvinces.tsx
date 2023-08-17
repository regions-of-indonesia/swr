import { useProvinces } from "../libs";

const UseProvinces = () => {
  const { data, error, isLoading } = useProvinces();

  return (
    <div data-testid="use-provinces">
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

export default UseProvinces;
