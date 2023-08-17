import { useSearchVillages } from "../libs";

const UseSearchVillages = () => {
  const { data, error, isLoading } = useSearchVillages("a");

  return (
    <div data-testid="use-search-villages">
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

export default UseSearchVillages;
