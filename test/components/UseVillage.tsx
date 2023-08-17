import { useVillage } from "../libs";

const UseVillage = () => {
  const { data, error, isLoading } = useVillage("11.01.01.2001");

  return (
    <div data-testid="use-village">
      {error ? (
        <span id="error"></span>
      ) : isLoading ? (
        <span id="loading"></span>
      ) : (
        <span id="data" data-code={data!.code} data-name={data!.name}></span>
      )}
    </div>
  );
};

export default UseVillage;
