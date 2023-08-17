import * as client from "@regions-of-indonesia/client";

import { create } from "../src";

export const {
  useProvinces,
  useProvince,
  useDistricts,
  useDistrict,
  useSubdistricts,
  useSubdistrict,
  useVillages,
  useVillage,
  useRegion,
  useSearch,
  useSearchProvinces,
  useSearchDistricts,
  useSearchSubdistricts,
  useSearchVillages,
} = create(
  client.create({
    baseURL: { dynamic: "http://localhost:8000" },
    static: false,
  })
);
