import withMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  pageExtensions: ["tsx", "mdx"],
};

export default withMdx({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})(nextConfig);
