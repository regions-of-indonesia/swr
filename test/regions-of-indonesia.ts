import { RegionsOfIndonesiaClient } from "@regions-of-indonesia/client";

import { createSWR } from "../src";

const { useProvinces } = createSWR(new RegionsOfIndonesiaClient({ baseURL: { dynamic: "http://127.1.0.0:8000" } }));

export { useProvinces };
