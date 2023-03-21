import { describe, expect, it } from "vitest";

import React from "react";

import { render } from "@testing-library/react";

import { delay, hasOwnProperties, isTypeofObject } from "javascript-yesterday";

import { createSWR } from "../src";

import Component from "./Component";

describe("Create SWR", () => {
  it("Type check", async () => {
    const swr = createSWR();

    expect(
      isTypeofObject(swr) &&
        hasOwnProperties(
          swr,
          "useProvinces",
          "useProvince",
          "useDistricts",
          "useDistrict",
          "useSubdistricts",
          "useSubdistrict",
          "useVillages",
          "useVillage",
          "useSearch",
          "useSearchProvinces",
          "useSearchDistricts",
          "useSearchSubdistricts",
          "useSearchVillages"
        )
    ).toBeTruthy();

    expect(swr.useProvinces).toBeTypeOf("function");
    expect(swr.useProvince).toBeTypeOf("function");
    expect(swr.useDistricts).toBeTypeOf("function");
    expect(swr.useDistrict).toBeTypeOf("function");
    expect(swr.useSubdistricts).toBeTypeOf("function");
    expect(swr.useSubdistrict).toBeTypeOf("function");
    expect(swr.useVillages).toBeTypeOf("function");
    expect(swr.useVillage).toBeTypeOf("function");
    expect(swr.useSearch).toBeTypeOf("function");
    expect(swr.useSearchProvinces).toBeTypeOf("function");
    expect(swr.useSearchDistricts).toBeTypeOf("function");
    expect(swr.useSearchSubdistricts).toBeTypeOf("function");
    expect(swr.useSearchVillages).toBeTypeOf("function");
  });

  it("Component", async () => {
    const { getByTestId } = render(<Component />);

    const expects = (name: string, codes: string[]) => {
      const elements = codes.map((code) => getByTestId(`${name}-${code}`));
      for (let i = 0; i < elements.length; i++) expect(elements[i]).toBeDefined();
    };

    await delay(2000);
    expects("province", ["11", "12", "13"]);
    expects("district", ["11.01", "11.02", "11.03"]);
    expects("subdistrict", ["11.01.01", "11.01.02", "11.01.03"]);
    expects("village", ["11.01.01.2001", "11.01.01.2002", "11.01.01.2003"]);
  });
});
