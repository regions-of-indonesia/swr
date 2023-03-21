import { RegionsOfIndonesiaClient } from "@regions-of-indonesia/client";

import useSWR from "swr";

type QueryKey = [string, string];

const iskey = (value: unknown): value is string => typeof value === "string" && value !== "",
  validkey = <T>(value: unknown, callback: (value: string) => T) => (iskey(value) ? callback(value) : null);

const createSWR = (client: RegionsOfIndonesiaClient = new RegionsOfIndonesiaClient(), options: { name?: string } = {}) => {
  const { name = "regions-of-indonesia" } = options,
    named = (value: string) => (typeof name === "string" ? [name, value].join("/") : value),
    keyname = {
      ps: named("provinces"),
      p: named("province"),
      ds: named("districts"),
      d: named("district"),
      ss: named("subdistricts"),
      s: named("subdistrict"),
      vs: named("villages"),
      v: named("village"),

      f: named("search"),
      fP: named("search/provinces"),
      fD: named("search/districts"),
      fS: named("search/subdistricts"),
      fV: named("search/villages"),
    },
    key = {
      ps: () => [keyname.ps],
      p: (code: string) => [keyname.p, code],
      ds: (provinceCode: string) => [keyname.ds, provinceCode],
      d: (code: string) => [keyname.d, code],
      ss: (districtCode: string) => [keyname.ss, districtCode],
      s: (code: string) => [keyname.s, code],
      vs: (subdistrictCode: string) => [keyname.vs, subdistrictCode],
      v: (code: string) => [keyname.v, code],

      f: (name: string) => [keyname.f, name],
      fP: (name: string) => [keyname.fP, name],
      fD: (name: string) => [keyname.fD, name],
      fS: (name: string) => [keyname.fS, name],
      fV: (name: string) => [keyname.fV, name],
    },
    fetcher = {
      ps: () => client.province.find(),
      p: ([_, code]: QueryKey) => client.province.findByCode(code),
      ds: ([_, provinceCode]: QueryKey) => client.district.findByProvinceCode(provinceCode),
      d: ([_, code]: QueryKey) => client.district.findByCode(code),
      ss: ([_, districtCode]: QueryKey) => client.subdistrict.findByDistrictCode(districtCode),
      s: ([_, code]: QueryKey) => client.subdistrict.findByCode(code),
      vs: ([_, subdistrictCode]: QueryKey) => client.village.findBySubdistrictCode(subdistrictCode),
      v: ([_, code]: QueryKey) => client.village.findByCode(code),

      f: ([_, name]: QueryKey) => client.search(name),
      fP: ([_, name]: QueryKey) => client.province.search(name),
      fD: ([_, name]: QueryKey) => client.district.search(name),
      fS: ([_, name]: QueryKey) => client.subdistrict.search(name),
      fV: ([_, name]: QueryKey) => client.village.search(name),
    };

  return {
    useProvinces: () => useSWR(key.ps, fetcher.ps),
    useProvince: (code?: string) => useSWR(validkey(code, key.p), fetcher.p),
    useDistricts: (provinceCode?: string) => useSWR(validkey(provinceCode, key.ds), fetcher.ds),
    useDistrict: (code?: string) => useSWR(validkey(code, key.d), fetcher.d),
    useSubdistricts: (districtCode?: string) => useSWR(validkey(districtCode, key.ss), fetcher.ss),
    useSubdistrict: (code?: string) => useSWR(validkey(code, key.s), fetcher.s),
    useVillages: (subdistrictCode?: string) => useSWR(validkey(subdistrictCode, key.vs), fetcher.vs),
    useVillage: (code?: string) => useSWR(validkey(code, key.v), fetcher.v),

    useSearch: (name?: string) => useSWR(validkey(name, key.f), fetcher.f),
    useSearchProvinces: (name?: string) => useSWR(validkey(name, key.fP), fetcher.fP),
    useSearchDistricts: (name?: string) => useSWR(validkey(name, key.fD), fetcher.fD),
    useSearchSubdistricts: (name?: string) => useSWR(validkey(name, key.fS), fetcher.fS),
    useSearchVillages: (name?: string) => useSWR(validkey(name, key.fV), fetcher.fV),
  };
};

export default createSWR;
