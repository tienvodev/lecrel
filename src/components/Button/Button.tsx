import { forwardRef, type ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any custom props here
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props} className={styles.button}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
