import { describe, expect, it } from "vitest";

import createSWR from "./createSWR";

describe("Create", () => {
  it("Typeof object", async () => {
    const swr = createSWR();

    expect(swr).toBeTypeOf("object");
  });
});
