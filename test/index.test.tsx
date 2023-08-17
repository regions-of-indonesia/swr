import { describe, expect, it } from "vitest";

import { render } from "@testing-library/react";

import { isRegionCode, isRegionName } from "@regions-of-indonesia/utils";

import UseProvinces from "./components/UseProvinces";
import UseProvince from "./components/UseProvince";
import UseDistricts from "./components/UseDistricts";
import UseDistrict from "./components/UseDistrict";
import UseSubdistricts from "./components/UseSubdistricts";
import UseSubdistrict from "./components/UseSubdistrict";
import UseVillages from "./components/UseVillages";
import UseVillage from "./components/UseVillage";
import UseRegion from "./components/UseRegion";
import UseSearch from "./components/UseSearch";
import UseSearchProvinces from "./components/UseSearchProvinces";
import UseSearchDistricts from "./components/UseSearchDistricts";
import UseSearchSubdistricts from "./components/UseSearchSubdistricts";
import UseSearchVillages from "./components/UseSearchVillages";

const fetching = () => new Promise<void>((resolve) => setTimeout(resolve, 200));

const getDataElement = async (element: HTMLElement) => {
  expect(element).toBeDefined();
  expect(element.querySelector("#loading")).toBeDefined();
  await fetching();
  expect(element.querySelector("#error")).toBeNull();
  const data = element.querySelector("#data");
  expect(data).toBeDefined();
  return data!;
};

const expectRegionElement = (element: Element) => {
  expect(isRegionCode(element.getAttribute("data-code"))).toEqual(true);
  expect(isRegionName(element.getAttribute("data-name"))).toEqual(true);
};

const expectRegionsElement = (element: Element) => {
  [...element.children].forEach(expectRegionElement);
};

const itRegionElement = (id: string, element: React.ReactElement) => {
  it(id, async () => expectRegionElement(await getDataElement(render(element).getByTestId(id))));
};

const itRegionsElement = (id: string, element: React.ReactElement) => {
  it(id, async () => expectRegionsElement(await getDataElement(render(element).getByTestId(id))));
};

describe("Data", () => {
  itRegionsElement("use-provinces", <UseProvinces />);
  itRegionElement("use-province", <UseProvince />);
  itRegionsElement("use-districts", <UseDistricts />);
  itRegionElement("use-district", <UseDistrict />);
  itRegionsElement("use-subdistricts", <UseSubdistricts />);
  itRegionElement("use-subdistrict", <UseSubdistrict />);
  itRegionsElement("use-villages", <UseVillages />);
  itRegionElement("use-village", <UseVillage />);
  itRegionElement("use-region", <UseRegion />);
  itRegionsElement("use-search", <UseSearch />);
  itRegionsElement("use-search-provinces", <UseSearchProvinces />);
  itRegionsElement("use-search-districts", <UseSearchDistricts />);
  itRegionsElement("use-search-subdistricts", <UseSearchSubdistricts />);
  itRegionsElement("use-search-villages", <UseSearchVillages />);
});
