import { describe, expect, it } from "vitest";

import { hasOwnProperties, isTypeofObject } from "javascript-yesterday";

import { createSWR } from "../src";

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
});
