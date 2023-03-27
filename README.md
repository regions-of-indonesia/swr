[![cover]][site]

<p align="center">
  <a href="http://www.npmjs.com/package/@regions-of-indonesia/swr"><img src="https://img.shields.io/npm/v/@regions-of-indonesia/swr" /></a>
  <a href="https://bundlephobia.com/package/@regions-of-indonesia/swr"><img src="https://img.shields.io/bundlephobia/minzip/@regions-of-indonesia/swr" /></a>
</p>

<img src="https://hiiits.deno.dev/hit/regions-of-indonesia/swr?" width="100%" heigth="10px" />

# Regions of Indonesia SWR

Regions of Indonesia [SWR](https://swr.vercel.app)

## Package

Install

```bash
npm install @regions-of-indonesia/swr
# or
yarn add @regions-of-indonesia/swr
# or
pnpm add @regions-of-indonesia/swr
```

Usage

```typescript
import { createSWR } from "@regions-of-indonesia/swr";

const {
  useProvinces,
  useProvince,
  useDistricts,
  useDistrict,
  useSubdistricts,
  useSubdistrict,
  useVillages,
  useVillage,
  useSearch,
  useSearchProvinces,
  useSearchDistricts,
  useSearchSubdistricts,
  useSearchVillages,
} = createSWR();
```

## Examples

- [swr][github:example-react-ts-swr]

## Support

[![][support:ko-fi-button]][support:ko-fi]

[![][support:trakteer-button]][support:trakteer]

## LICENSE

GPL-3.0

<!--  -->

[cover]: https://raw.githubusercontent.com/regions-of-indonesia/regions-of-indonesia/main/public/cover@2.png?sanitize=true
[logo]: https://raw.githubusercontent.com/regions-of-indonesia/regions-of-indonesia/main/public/logo@2.png?sanitize=true
[site]: https://regions-of-indonesia.netlify.app
[docs]: https://docs-regions-of-indonesia.netlify.app

<!--  -->

[github:api]: https://github.com/regions-of-indonesia/api
[github:static-api]: https://github.com/regions-of-indonesia/static-api
[github:site]: https://github.com/regions-of-indonesia/site
[github:docs]: https://github.com/regions-of-indonesia/docs

<!--  -->

[github:client]: https://github.com/regions-of-indonesia/client
[github:data]: https://github.com/regions-of-indonesia/data
[github:php-client]: https://github.com/regions-of-indonesia/php-client
[github:dart-client]: https://github.com/regions-of-indonesia/dart-client
[github:python-client]: https://github.com/regions-of-indonesia/python-client

<!--  -->

[github:localforage]: https://github.com/regions-of-indonesia/localforage
[github:swr]: https://github.com/regions-of-indonesia/swr
[github:react-query]: https://github.com/regions-of-indonesia/react-query
[github:solid-query]: https://github.com/regions-of-indonesia/solid-query
[github:vue-query]: https://github.com/regions-of-indonesia/vue-query
[github:svelte-query]: https://github.com/regions-of-indonesia/svelte-query

<!--  -->

[github:example-react-ts]: https://github.com/regions-of-indonesia/example-react-ts
[github:example-react-ts-swr]: https://github.com/regions-of-indonesia/example-react-ts-swr
[github:example-react-ts-query]: https://github.com/regions-of-indonesia/example-react-ts-query
[github:example-solid-ts]: https://github.com/regions-of-indonesia/example-solid-ts
[github:example-solid-ts-query]: https://github.com/regions-of-indonesia/example-solid-ts-query
[github:example-vue-ts]: https://github.com/regions-of-indonesia/example-vue-ts
[github:example-vue-ts-query]: https://github.com/regions-of-indonesia/example-vue-ts-query
[github:example-svelte-ts]: https://github.com/regions-of-indonesia/example-svelte-ts
[github:example-svelte-ts-query]: https://github.com/regions-of-indonesia/example-svelte-ts-query

<!--  -->

[support:ko-fi]: https://ko-fi.com/flamrdevs
[support:ko-fi-button]: https://flamrdevs.vercel.app/ko-fi.png
[support:trakteer]: https://trakteer.id/flamrdevs
[support:trakteer-button]: https://flamrdevs.vercel.app/trakteer.png
