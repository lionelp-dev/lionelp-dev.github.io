import type { ComponentPropsWithoutRef, ReactElement } from "react";
import { cn } from "../lib/utils";

type Hover3DProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  children: ReactElement;
};

export function Hover3D({ children, className, ...props }: Hover3DProps) {
  return (
    <div
      className={cn("hover-3d hover-3d-subtle hover-3d-subtle-primary", className)}
      {...props}
    >
      {children}
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} aria-hidden="true" />
      ))}
    </div>
  );
}
