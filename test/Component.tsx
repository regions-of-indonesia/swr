import React from "react";

import { useProvinces, useDistricts, useSubdistricts, useVillages } from "./regions-of-indonesia";

const AsyncComponent = () => {
  const { data: provinces } = useProvinces();

  const { data: districts } = useDistricts("11");

  const { data: subdistricts } = useSubdistricts("11.01");

  const { data: villages } = useVillages("11.01.01");

  return (
    <div>
      {provinces?.map((province) => (
        <div data-testid={`province-${province.code}`} key={province.code}>
          {province.name}
        </div>
      ))}

      {districts?.map((district) => (
        <div data-testid={`district-${district.code}`} key={district.code}>
          {district.name}
        </div>
      ))}

      {subdistricts?.map((subdistrict) => (
        <div data-testid={`subdistrict-${subdistrict.code}`} key={subdistrict.code}>
          {subdistrict.name}
        </div>
      ))}

      {villages?.map((village) => (
        <div data-testid={`village-${village.code}`} key={village.code}>
          {village.name}
        </div>
      ))}
    </div>
  );
};

const Component = () => {
  return <AsyncComponent />;
};

export default Component;
