import type { Client } from "@regions-of-indonesia/client";

import useSWR from "swr";

type QueryKey = string[];

const isCode = (value: unknown) => typeof value === "string" && value !== "";
const isName = (value: unknown) => typeof value === "string" && value !== "";

const create = (client: Client) => {
  const name = "regions-of-indonesia";

  const str_provinces = "provinces";
  const str_districts = "districts";
  const str_subdistricts = "subdistricts";
  const str_villages = "villages";
  const str_region = "region";
  const str_search = "search";

  const name_provinces = `${name}/${str_provinces}`;
  const name_districts = `${name}/${str_districts}`;
  const name_subdistricts = `${name}/${str_subdistricts}`;
  const name_villages = `${name}/${str_villages}`;
  const name_region = `${name}/${str_region}`;
  const name_search = `${name}/${str_search}`;

  const fetcher_provinces = () => client.province.find();
  const fetcher_province = ([_, code]: QueryKey) => client.province.find.by(code);
  const fetcher_districts = ([_, code]: QueryKey) => client.district.find(code);
  const fetcher_district = ([_, code]: QueryKey) => client.district.find.by(code);
  const fetcher_subdistricts = ([_, code]: QueryKey) => client.subdistrict.find(code);
  const fetcher_subdistrict = ([_, code]: QueryKey) => client.subdistrict.find.by(code);
  const fetcher_villages = ([_, code]: QueryKey) => client.village.find(code);
  const fetcher_village = ([_, code]: QueryKey) => client.village.find.by(code);
  const fetcher_region = ([_, code]: QueryKey) => client.region(code);
  const fetcher_search = ([_, name]: QueryKey) => client.search(name);
  const fetcher_search_provinces = ([_, name]: QueryKey) => client.search.provinces(name);
  const fetcher_search_districts = ([_, name]: QueryKey) => client.search.districts(name);
  const fetcher_search_subdistricts = ([_, name]: QueryKey) => client.search.subdistricts(name);
  const fetcher_search_villages = ([_, name]: QueryKey) => client.search.villages(name);

  return {
    useProvinces: () => useSWR(() => [name_provinces], fetcher_provinces),
    useProvince: (code: string) => useSWR(() => (isCode(code) ? [name_provinces, code] : null), fetcher_province),
    useDistricts: (parent: string) => useSWR(() => (isCode(parent) ? [name_provinces, parent, str_districts] : null), fetcher_districts),
    useDistrict: (code: string) => useSWR(() => (isCode(code) ? [name_districts, code] : null), fetcher_district),
    useSubdistricts: (parent: string) =>
      useSWR(() => (isCode(parent) ? [name_districts, parent, str_subdistricts] : null), fetcher_subdistricts),
    useSubdistrict: (code: string) => useSWR(() => (isCode(code) ? [name_subdistricts, code] : null), fetcher_subdistrict),
    useVillages: (parent: string) => useSWR(() => (isCode(parent) ? [name_subdistricts, parent, str_villages] : null), fetcher_villages),
    useVillage: (code: string) => useSWR(() => (isCode(code) ? [name_villages, code] : null), fetcher_village),
    useRegion: (code: string) => useSWR(() => (isCode(code) ? [name_region, code] : null), fetcher_region),
    useSearch: (name: string) => useSWR(() => (isName(name) ? [name_search, name] : null), fetcher_search),
    useSearchProvinces: (name: string) =>
      useSWR(() => (isName(name) ? [name_search, name, str_provinces] : null), fetcher_search_provinces),
    useSearchDistricts: (name: string) =>
      useSWR(() => (isName(name) ? [name_search, name, str_districts] : null), fetcher_search_districts),
    useSearchSubdistricts: (name: string) =>
      useSWR(() => (isName(name) ? [name_search, name, str_subdistricts] : null), fetcher_search_subdistricts),
    useSearchVillages: (name: string) => useSWR(() => (isName(name) ? [name_search, name, str_villages] : null), fetcher_search_villages),
  };
};

export { create };
