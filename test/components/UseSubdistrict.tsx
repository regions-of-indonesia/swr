import { useSubdistrict } from "../libs";

const UseSubdistrict = () => {
  const { data, error, isLoading } = useSubdistrict("11.01.01");

  return (
    <div data-testid="use-subdistrict">
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

export default UseSubdistrict;
