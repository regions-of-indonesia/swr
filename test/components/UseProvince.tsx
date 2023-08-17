import { useProvince } from "../libs";

const UseProvince = () => {
  const { data, error, isLoading } = useProvince("11");

  return (
    <div data-testid="use-province">
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

export default UseProvince;
