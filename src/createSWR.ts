import { RegionsOfIndonesiaClient } from "@regions-of-indonesia/client";

import useSWR from "swr";

function isNotEmptyString(value: unknown): value is string {
  return typeof value === "string" && value !== "";
}

function createCallbackIfNotEmptyStringOrNull<T>(value: unknown, callback: (value: string) => T) {
  return () => (isNotEmptyString(value) ? callback(value) : null);
}

function createSWR(client: RegionsOfIndonesiaClient = new RegionsOfIndonesiaClient()) {
  const key = {
    provinces: () => ["provinces"],
    province: (code: string) => ["province", code],
    districts: (provinceCode: string) => ["districts", provinceCode],
    district: (code: string) => ["district", code],
    subdistricts: (districtCode: string) => ["subdistricts", districtCode],
    subdistrict: (code: string) => ["subdistrict", code],
    villages: (subdistrictCode: string) => ["villages", subdistrictCode],
    village: (code: string) => ["village", code],

    search: (text: string) => ["search", text],
    searchProvinces: (text: string) => ["search/provinces", text],
    searchDistricts: (text: string) => ["search/districts", text],
    searchSubdistricts: (text: string) => ["search/subdistricts", text],
    searchVillages: (text: string) => ["search/villages", text],
  };

  const fetcher = {
    provinces: async () => await client.province.find(),
    province: async (_path: string, code: string) => await client.province.findByCode(code),
    districts: async (_path: string, provinceCode: string) => await client.district.findByProvinceCode(provinceCode),
    district: async (_path: string, code: string) => await client.district.findByCode(code),
    subdistricts: async (_path: string, districtCode: string) => await client.subdistrict.findByDistrictCode(districtCode),
    subdistrict: async (_path: string, code: string) => await client.subdistrict.findByCode(code),
    villages: async (_path: string, subdistrictCode: string) => await client.village.findBySubdistrictCode(subdistrictCode),
    village: async (_path: string, code: string) => await client.village.findByCode(code),

    search: async (_path: string, text: string) => await client.search(text),
    searchProvinces: async (_path: string, text: string) => await client.province.search(text),
    searchDistricts: async (_path: string, text: string) => await client.district.search(text),
    searchSubdistricts: async (_path: string, text: string) => await client.subdistrict.search(text),
    searchVillages: async (_path: string, text: string) => await client.village.search(text),
  };

  return {
    useProvinces() {
      return useSWR(key.provinces, fetcher.provinces);
    },
    useProvince(code: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(code, key.province), fetcher.province);
    },
    useDistricts(provinceCode: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(provinceCode, key.districts), fetcher.districts);
    },
    useDistrict(code: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(code, key.district), fetcher.district);
    },
    useSubdistricts(districtCode: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(districtCode, key.subdistricts), fetcher.subdistricts);
    },
    useSubdistrict(code: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(code, key.subdistrict), fetcher.subdistrict);
    },
    useVillages(subdistrictCode: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(subdistrictCode, key.villages), fetcher.villages);
    },
    useVillage(code: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(code, key.village), fetcher.village);
    },

    useSearch(text: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(text, key.search), fetcher.search);
    },
    useSearchProvinces(text: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(text, key.searchProvinces), fetcher.searchProvinces);
    },
    useSearchDistricts(text: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(text, key.searchDistricts), fetcher.searchDistricts);
    },
    useSearchSubdistricts(text: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(text, key.searchSubdistricts), fetcher.searchSubdistricts);
    },
    useSearchVillages(text: string) {
      return useSWR(createCallbackIfNotEmptyStringOrNull(text, key.searchVillages), fetcher.searchVillages);
    },
  };
}

export default createSWR;
