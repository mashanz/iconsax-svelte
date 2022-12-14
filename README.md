> **STATUS**: still messy because auto generate from svg list

# Iconsax Svelte

![iconsax-svelte](./iconsax-svelte.png)

> &copy; Iconsax [official website](https://iconsax.io) [github page](https://github.com/lusaxweb/iconsax) | This repository is inspired by [iconsax-react](https://iconsax-react.pages.dev/)

## Preview

[Iconsax Svelte Demo](https://iconsax-svelte.vercel.app/)

## Installation on Dev Dependency

```bash
npm i -D iconsax-svelte
# or
yarn add -D iconsax-svelte
```

## Basic usage

```svelte
<script>
	import { Add } from 'iconsax-svelte';
</script>

<Add size="25" color="#fff" variant="Bold" />
```

## Properties

| Prop      | Type                                                | Default  | Note                   |
| --------- | --------------------------------------------------- | -------- | ---------------------- |
| `color`   | `string`                                            | `#fff`   | css color              |
| `size`    | `number` `string`                                   | 24px     | size={24} or size="24" |
| `variant` | `Linear` `Outline` `TwoTone` `Bulk` `Broken` `Bold` | `Linear` | icons styles           |

## License

[MIT](LICENSE)
