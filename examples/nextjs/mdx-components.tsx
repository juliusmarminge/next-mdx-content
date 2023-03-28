import * as React from "react";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="scroll-m-20 text-4xl">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="mt-10 scroll-m-20 border-b border-b-zinc-200 pb-2 text-3xl first:mt-0 dark:border-b-zinc-700">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 scroll-m-20 text-2xl text-stone-200">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    ),
    a: ({ children, href }) => {
      const isExternal = href?.startsWith("http");
      const Component = isExternal ? "a" : Link;
      return (
        <Component
          href={href as string}
          className="underline decoration-blue-500 decoration-2 underline-offset-4"
        >
          {children}
        </Component>
      );
    },
    code: ({ children }) => (
      <code className="relative rounded bg-stone-200 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-zinc-900 dark:bg-stone-700 dark:text-stone-200">
        {children}
      </code>
    ),

    // Pass through all other components.
    ...components,
  };
}
