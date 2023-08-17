import { useDistrict } from "../libs";

const UseDistrict = () => {
  const { data, error, isLoading } = useDistrict("11.01");

  return (
    <div data-testid="use-district">
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

export default UseDistrict;
