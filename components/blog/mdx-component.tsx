'use client';

import Image from 'next/image';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const components = {
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
    const imageUrl = React.useMemo(() => {
      if (!src) return '';
      return typeof src === 'string' ? src : URL.createObjectURL(src);
    }, [src]);

    React.useEffect(() => {
      return () => {
        if (imageUrl && typeof src !== 'string' && imageUrl.startsWith('blob:')) {
          URL.revokeObjectURL(imageUrl);
        }
      };
    }, [imageUrl, src]);

    if (!imageUrl) return null;

    return (
      <Image
        src={imageUrl}
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

export { components };
