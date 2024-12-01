import { type ComponentProps, type ElementType, type ReactNode } from "react";
import type { TypeScale } from "./Text.types";
import styles from "./Text.module.css";
import clsx from "clsx";

// Define the props for the Text component
type TextOwnProps<E extends ElementType> = {
  typescale?: TypeScale; // Accepts a typescale prop for typography
  as?: E; // Allow custom element type (like "span", "h1", etc.)
  children?: ReactNode; // Children elements to render inside the component
  className?: string; // Custom className for styling
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends ElementType = "span">({
  typescale = "body-large",
  as,
  children,
  className,
  ...delegated
}: TextProps<E>) => {
  const Component = as || "span";
  return (
    <Component
      {...delegated}
      data-typescale={typescale}
      className={clsx(styles.Text, className)}
    >
      {children}
    </Component>
  );
};
