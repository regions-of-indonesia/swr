import { RegionsOfIndonesiaClient } from "@regions-of-indonesia/client";

import useSWR from "swr";

const isKey = (value: unknown): value is string => typeof value === "string" && value !== "",
  getValidKey =
    <T>(value: unknown, callback: (value: string) => T) =>
    () =>
      isKey(value) ? callback(value) : null;

const createSWR = (client: RegionsOfIndonesiaClient = new RegionsOfIndonesiaClient()) => {
  const key = {
      provinces: () => ["provinces"],
      province: (code: string) => ["province", code],
      districts: (provinceCode: string) => ["districts", provinceCode],
      district: (code: string) => ["district", code],
      subdistricts: (districtCode: string) => ["subdistricts", districtCode],
      subdistrict: (code: string) => ["subdistrict", code],
      villages: (subdistrictCode: string) => ["villages", subdistrictCode],
      village: (code: string) => ["village", code],

      search: (name: string) => ["search", name],
      searchProvinces: (name: string) => ["search/provinces", name],
      searchDistricts: (name: string) => ["search/districts", name],
      searchSubdistricts: (name: string) => ["search/subdistricts", name],
      searchVillages: (name: string) => ["search/villages", name],
    },
    fetcher = {
      provinces: () => client.province.find(),
      province: (_path: string, code: string) => client.province.findByCode(code),
      districts: (_path: string, provinceCode: string) => client.district.findByProvinceCode(provinceCode),
      district: (_path: string, code: string) => client.district.findByCode(code),
      subdistricts: (_path: string, districtCode: string) => client.subdistrict.findByDistrictCode(districtCode),
      subdistrict: (_path: string, code: string) => client.subdistrict.findByCode(code),
      villages: (_path: string, subdistrictCode: string) => client.village.findBySubdistrictCode(subdistrictCode),
      village: (_path: string, code: string) => client.village.findByCode(code),

      search: (_path: string, name: string) => client.search(name),
      searchProvinces: (_path: string, name: string) => client.province.search(name),
      searchDistricts: (_path: string, name: string) => client.district.search(name),
      searchSubdistricts: (_path: string, name: string) => client.subdistrict.search(name),
      searchVillages: (_path: string, name: string) => client.village.search(name),
    };

  return {
    useProvinces: () => useSWR(key.provinces, fetcher.provinces),
    useProvince: (code?: string) => useSWR(getValidKey(code, key.province), fetcher.province),
    useDistricts: (provinceCode?: string) => useSWR(getValidKey(provinceCode, key.districts), fetcher.districts),
    useDistrict: (code?: string) => useSWR(getValidKey(code, key.district), fetcher.district),
    useSubdistricts: (districtCode?: string) => useSWR(getValidKey(districtCode, key.subdistricts), fetcher.subdistricts),
    useSubdistrict: (code?: string) => useSWR(getValidKey(code, key.subdistrict), fetcher.subdistrict),
    useVillages: (subdistrictCode?: string) => useSWR(getValidKey(subdistrictCode, key.villages), fetcher.villages),
    useVillage: (code?: string) => useSWR(getValidKey(code, key.village), fetcher.village),

    useSearch: (name?: string) => useSWR(getValidKey(name, key.search), fetcher.search),
    useSearchProvinces: (name?: string) => useSWR(getValidKey(name, key.searchProvinces), fetcher.searchProvinces),
    useSearchDistricts: (name?: string) => useSWR(getValidKey(name, key.searchDistricts), fetcher.searchDistricts),
    useSearchSubdistricts: (name?: string) => useSWR(getValidKey(name, key.searchSubdistricts), fetcher.searchSubdistricts),
    useSearchVillages: (name?: string) => useSWR(getValidKey(name, key.searchVillages), fetcher.searchVillages),
  };
};

export default createSWR;
