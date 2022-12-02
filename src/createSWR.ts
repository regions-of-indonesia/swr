import { RegionsOfIndonesiaClient } from "@regions-of-indonesia/client";

import useSWR from "swr";

function isKey(value: unknown): value is string {
  return typeof value === "string" && value !== "";
}

function getValidKey<T>(value: unknown, callback: (value: string) => T) {
  return () => (isKey(value) ? callback(value) : null);
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
    provinces: () => client.province.find(),
    province: (_path: string, code: string) => client.province.findByCode(code),
    districts: (_path: string, provinceCode: string) => client.district.findByProvinceCode(provinceCode),
    district: (_path: string, code: string) => client.district.findByCode(code),
    subdistricts: (_path: string, districtCode: string) => client.subdistrict.findByDistrictCode(districtCode),
    subdistrict: (_path: string, code: string) => client.subdistrict.findByCode(code),
    villages: (_path: string, subdistrictCode: string) => client.village.findBySubdistrictCode(subdistrictCode),
    village: (_path: string, code: string) => client.village.findByCode(code),

    search: (_path: string, text: string) => client.search(text),
    searchProvinces: (_path: string, text: string) => client.province.search(text),
    searchDistricts: (_path: string, text: string) => client.district.search(text),
    searchSubdistricts: (_path: string, text: string) => client.subdistrict.search(text),
    searchVillages: (_path: string, text: string) => client.village.search(text),
  };

  return {
    useProvinces() {
      return useSWR(key.provinces, fetcher.provinces);
    },
    useProvince(code?: string) {
      return useSWR(getValidKey(code, key.province), fetcher.province);
    },
    useDistricts(provinceCode?: string) {
      return useSWR(getValidKey(provinceCode, key.districts), fetcher.districts);
    },
    useDistrict(code?: string) {
      return useSWR(getValidKey(code, key.district), fetcher.district);
    },
    useSubdistricts(districtCode?: string) {
      return useSWR(getValidKey(districtCode, key.subdistricts), fetcher.subdistricts);
    },
    useSubdistrict(code?: string) {
      return useSWR(getValidKey(code, key.subdistrict), fetcher.subdistrict);
    },
    useVillages(subdistrictCode?: string) {
      return useSWR(getValidKey(subdistrictCode, key.villages), fetcher.villages);
    },
    useVillage(code?: string) {
      return useSWR(getValidKey(code, key.village), fetcher.village);
    },

    useSearch(text?: string) {
      return useSWR(getValidKey(text, key.search), fetcher.search);
    },
    useSearchProvinces(text?: string) {
      return useSWR(getValidKey(text, key.searchProvinces), fetcher.searchProvinces);
    },
    useSearchDistricts(text?: string) {
      return useSWR(getValidKey(text, key.searchDistricts), fetcher.searchDistricts);
    },
    useSearchSubdistricts(text?: string) {
      return useSWR(getValidKey(text, key.searchSubdistricts), fetcher.searchSubdistricts);
    },
    useSearchVillages(text?: string) {
      return useSWR(getValidKey(text, key.searchVillages), fetcher.searchVillages);
    },
  };
}

export default createSWR;
