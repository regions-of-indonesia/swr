import { useRegion } from "../libs";

const UseRegion = () => {
  const { data, error, isLoading } = useRegion("11");

  return (
    <div data-testid="use-region">
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

export default UseRegion;
