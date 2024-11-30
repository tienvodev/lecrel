import type { ReactNode } from "react";
import type { TypeScale } from "./Text.types";
import styles from "./Text.module.css";
import clsx from "clsx";

type TextProps = {
  typescale?: TypeScale;
  as: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
};

export function Text({
  typescale = "body-large",
  as: Component = "div",
  children,
  className,
  ...delegated
}: TextProps) {
  return (
    <Component
      {...delegated}
      data-typescale={typescale}
      className={clsx(styles.Text, className)}
    >
      {children}
    </Component>
  );
}
