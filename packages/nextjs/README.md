# next-mdx-content

> Warning: Package WIP. Building in public.

Content collection for Next.js using MDX in the app directory.

## Installation

```bash
npm install next-mdx-content
```

> Note: This package requires Next.js 13.2 or later.

## Usage

> Prerequisite: You need to have MDX installed in your project and configured like in a normal Next.js project, i.e. you need a `mdx-components.tsx` file in the root of your project and your `next.config.js` should be wrapped in `withMdx` from `@next/mdx`. See [their documentation](https://beta.nextjs.org/docs/guides/mdx) or the [example project](./examples/nextjs) for more details.

Put some MDX files in a place of your choice, e.g. `content`:

```
content
├── docs
├   ├── introduction.mdx
├   ├── about.mdx
├   ├── about.mdx
└── blog
    ├── first-post.mdx
    └── second-post.mdx
```

Then, create a `next-mdx-content.config.js` file in the root of your project:

```js
const { defineConfig } = require('next-mdx-content')

const config = defineConfig({
  ..., // Options described below
});

module.exports = config;
```

After configuring your content collection, you can use the `getContent` function to retrieve the content from your MDX files:

```ts
// app/docs/[...slug].tsx
import { getContent } from 'next-mdx-content'
import { type DocsContent } from "content-types";

export async function generateStaticPaths() {
  const docs = await getContent<DocsContent>({
    contentDir: 'content/docs',
  })

  return docs.map((doc) => ({
    params: {
      slug: doc.slug,
    },
  }))
}


### Options

Your config file should export an array of configuration objects, each one containing options for a specific content collection (`docs` and `blog` in the above example). The following options are available:

| Option       | Type        | Required | Description                                                                           |
| ------------ | ----------- | -------- | ------------------------------------------------------------------------------------- |
| `contentDir` | `string`    | Yes      | The directory where your MDX files are located, relative to the root of your project. |
| `metadata`   | `ZodObject` | No       | A validation schema for the metadata that your MDX files should contain.              |
```
