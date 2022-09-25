import nodeFetch from "node-fetch";

if (!globalThis.fetch) {
  globalThis.fetch = nodeFetch as any;
}
