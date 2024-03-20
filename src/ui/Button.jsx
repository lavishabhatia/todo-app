import { twMerge } from "tailwind-merge";

function Button({ children, className, ...props }) {
  return (
    <button className={twMerge(["border p-2", className])} {...props}>{children}</button>
  );
}

export default Button;
