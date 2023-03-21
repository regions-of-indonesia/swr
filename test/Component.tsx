import React from "react";

import { useProvinces } from "./regions-of-indonesia";

const AsyncComponent = () => {
  const { data } = useProvinces();

  return (
    <div>
      {data?.map((item) => {
        return (
          <div data-testid={`code-${item.code}`} key={item.code}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

const Component = () => {
  return <AsyncComponent />;
};

export default Component;
