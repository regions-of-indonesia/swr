import { useVillages } from "../libs";

const UseVillages = () => {
  const { data, error, isLoading } = useVillages("11.01.01");

  return (
    <div data-testid="use-villages">
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

export default UseVillages;
