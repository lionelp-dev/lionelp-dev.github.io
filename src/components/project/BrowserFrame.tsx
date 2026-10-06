import type { PropsWithChildren, ReactNode } from "react";

type BrowserFrameProps = PropsWithChildren<{
  title: ReactNode;
}>;

export function BrowserFrame({ title, children }: BrowserFrameProps) {
  return (
    <div className="flex h-full min-h-32 flex-col overflow-hidden rounded-xl max-lg:max-h-115 lg:border lg:border-base-200 lg:bg-base-100">
      <div className="relative flex shrink-0 items-center justify-center overflow-hidden px-4 py-3 max-lg:hidden">
        <div className="absolute left-4 flex gap-1" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-base-content/20" />
          <span className="size-1.5 rounded-full bg-base-content/20" />
          <span className="size-1.5 rounded-full bg-base-content/20" />
        </div>
        {title}
      </div>
      {children}
    </div>
  );
}
