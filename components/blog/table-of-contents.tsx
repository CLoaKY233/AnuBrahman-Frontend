'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronDown, List } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { HeadingItem } from '@/lib/post-helpers';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

type HeadingNode = HeadingItem & { children: HeadingNode[] };

type TableOfContentsProps = {
  headings: HeadingItem[];
};

const OFFSET_TOP = 96;

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(headings.map((h) => h.id))
  );
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { tree, parentMap, ids } = useMemo(() => {
    const stack: HeadingNode[] = [];
    const root: HeadingNode[] = [];
    const parent = new Map<string, string | null>();

    headings.forEach((h) => {
      const node: HeadingNode = { ...h, children: [] };
      while (stack.length && stack[stack.length - 1].level >= h.level) {
        stack.pop();
      }
      if (stack.length) {
        stack[stack.length - 1].children.push(node);
        parent.set(node.id, stack[stack.length - 1].id);
      } else {
        root.push(node);
        parent.set(node.id, null);
      }
      stack.push(node);
    });

    return { tree: root, parentMap: parent, ids: headings.map((h) => h.id) };
  }, [headings]);

  // Reset state when headings change
  useEffect(() => {
    setActiveId(headings[0]?.id ?? null);
    setExpandedIds(new Set(headings.map((h) => h.id)));
  }, [headings]);

  useEffect(() => {
    if (!ids.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -65% 0px',
        threshold: [0.1, 0.4, 1],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  // Auto-expand ancestors for the active heading
  useEffect(() => {
    if (!activeId) return;
    setExpandedIds((prev) => {
      const next = new Set(prev);
      let current = parentMap.get(activeId);
      while (current) {
        next.add(current);
        current = parentMap.get(current);
      }
      return next;
    });
  }, [activeId, parentMap]);

  const handleClick = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - OFFSET_TOP;
    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveId(id);
    setIsMobileOpen(false);
  }, []);

  const toggleExpanded = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  if (!headings.length) return null;

  const renderNodes = useCallback(
    (nodes: HeadingNode[], depth = 0) =>
      nodes.map((node) => {
        const hasChildren = node.children.length > 0;
        const expanded = !hasChildren || expandedIds.has(node.id);
        const isActive = activeId === node.id;
        const depthClass = depth === 0 ? '' : depth === 1 ? 'pl-4' : 'pl-7';
        const levelClass =
          node.level === 2 ? 'text-sm' : node.level === 3 ? 'text-xs' : 'text-[11px]';

        return (
          <div key={node.id} className="space-y-1">
            <button
              type="button"
              onClick={() => handleClick(node.id)}
              aria-current={isActive ? 'location' : undefined}
              className={cn(
                'group flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left transition-colors duration-150',
                depthClass,
                levelClass,
                isActive
                  ? 'bg-purple-500/15 text-white'
                  : 'text-zinc-300 hover:bg-white/5 hover:text-white'
              )}
            >
              {hasChildren ? (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpanded(node.id);
                  }}
                  className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-zinc-400 transition-colors',
                    expanded ? 'text-purple-200' : 'text-zinc-400'
                  )}
                >
                  <ChevronDown
                    className={cn('h-3.5 w-3.5 transition-transform', expanded ? '' : '-rotate-90')}
                  />
                </span>
              ) : (
                <span className="h-2 w-2 rounded-full bg-purple-400/80 opacity-80" />
              )}
              <span className="line-clamp-1 flex-1">{node.text}</span>
            </button>

            {hasChildren && expanded && (
              <div className={cn('space-y-1 border-l border-white/5', depth === 0 ? 'ml-3 pl-3' : 'ml-4 pl-3')}>
                {renderNodes(node.children, depth + 1)}
              </div>
            )}
          </div>
        );
      }),
    [activeId, expandedIds, handleClick, toggleExpanded]
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <div className="sticky top-24 w-[320px] max-h-[calc(100vh-120px)] overflow-y-auto rounded-xl border border-white/10 bg-white/5 px-4 py-5 pr-3 text-sm text-zinc-200 shadow-lg shadow-black/20 backdrop-blur [scrollbar-width:thin] [scrollbar-color:#7c3aed_transparent]">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            <span>On this page</span>
            <span className="text-[10px] text-zinc-500">{headings.length} sections</span>
          </div>
          <nav className="space-y-1">{renderNodes(tree)}</nav>
        </div>
      </div>

      {/* Mobile drawer */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-4 z-40 bg-purple-600 text-white shadow-xl shadow-purple-500/30 hover:bg-purple-500 lg:hidden"
          >
            <List className="h-5 w-5" />
            <span className="text-sm font-semibold">TOC</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-zinc-950/95 border-white/10 text-white px-0 sm:max-w-sm"
        >
          <SheetHeader className="border-b border-white/10 px-4 py-3">
            <SheetTitle className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300">
              On this page
            </SheetTitle>
          </SheetHeader>
          <div className="h-full overflow-y-auto px-4 pb-8 pt-4">
            <nav className="space-y-1">{renderNodes(tree)}</nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

