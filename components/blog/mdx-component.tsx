// Server-safe markdown components shared by ReactMarkdown in the blog page.

import Image from 'next/image';
import React from 'react';
import GithubSlugger from 'github-slugger';
import { cn } from '@/lib/utils';
import { cleanHeadingText, createSlugger } from '@/lib/post-helpers';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children?: React.ReactNode;
};

const extractText = (children: React.ReactNode): string => {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string' || typeof child === 'number') {
        return String(child);
      }
      if (React.isValidElement(child)) {
        const element = child as React.ReactElement<{ children?: React.ReactNode }>;
        return extractText(element.props.children);
      }
      return '';
    })
    .join(' ');
};

const createHeading =
  (Tag: 'h1' | 'h2' | 'h3' | 'h4', level: number, slugger: GithubSlugger) =>
  ({ children, className, ...props }: HeadingProps) => {
    const text = cleanHeadingText(extractText(children));
    const id = slugger.slug(text);

    return (
      <Tag
        id={id}
        className={cn(
          'group relative scroll-mt-28 font-semibold tracking-tight text-white',
          level === 1 && 'mt-12 text-3xl sm:text-4xl',
          level === 2 && 'mt-12 text-3xl sm:text-4xl',
          level === 3 && 'mt-10 text-2xl sm:text-3xl',
          level >= 4 && 'mt-8 text-xl sm:text-2xl',
          className
        )}
        {...props}
      >
        <a
          href={`#${id}`}
          className="no-underline text-inherit hover:text-purple-200"
          aria-label={`Jump to ${text}`}
        >
          {children}
          <span className="ml-2 text-sm text-purple-300 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            #
          </span>
        </a>
      </Tag>
    );
  };

export function getMarkdownComponents() {
  const slugger = createSlugger();

  return {
    h1: createHeading('h1', 1, slugger),
    h2: createHeading('h2', 2, slugger),
    h3: createHeading('h3', 3, slugger),
    h4: createHeading('h4', 4, slugger),
    // Inline code
    code: ({ className, children, ...props }: any) => {
      // If no className, it's inline code
      if (!className) {
        return (
          <code
            className="bg-white/10 text-purple-300 px-1.5 py-0.5 rounded text-sm font-mono"
            {...props}
          >
            {children}
          </code>
        );
      }
      // Block code - rehype-highlight adds the className
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },

    pre: ({ children, ...props }: any) => {
      return (
        <pre
          className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto my-6"
          {...props}
        >
          {children}
        </pre>
      );
    },

    img: ({ src, alt }: { src?: string | Blob; alt?: string }) => {
      if (!src || typeof src !== 'string') return null;

      return (
        <Image
          src={src}
          alt={alt || ''}
          className="rounded-xl border border-white/10"
          width={1200}
          height={675}
        />
      );
    },

    table: ({ children }: { children?: React.ReactNode }) => (
      <Table className="my-6 rounded-md border border-white/10">{children}</Table>
    ),
    thead: ({ children }: { children?: React.ReactNode }) => (
      <TableHeader className="bg-white/5">{children}</TableHeader>
    ),
    tbody: ({ children }: { children?: React.ReactNode }) => (
      <TableBody className="[&>tr:nth-child(even)]:bg-white/5">{children}</TableBody>
    ),
    tr: ({ children }: { children?: React.ReactNode }) => (
      <TableRow className="border-white/10 group">{children}</TableRow>
    ),
    td: ({ children }: { children?: React.ReactNode }) => (
      <TableCell className="border-r border-white/10 last:border-r-0">{children}</TableCell>
    ),
    th: ({ children }: { children?: React.ReactNode }) => (
      <TableHead className="border-r border-white/10 last:border-r-0 font-bold text-white">
        {children}
      </TableHead>
    ),
  };
}
