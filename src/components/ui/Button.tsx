import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    to?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: undefined;
  };

type ButtonAsRouterLink = CommonProps &
  Omit<LinkProps, "to"> & {
    to: string;
    href?: undefined;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsRouterLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-teal-500 text-slate-950 hover:bg-teal-400 focus-visible:ring-teal-400",
  secondary:
    "border border-slate-600 bg-slate-800/80 text-slate-100 hover:border-teal-500/50 hover:bg-slate-800 focus-visible:ring-teal-400",
  ghost:
    "text-slate-300 hover:bg-slate-800/80 hover:text-white focus-visible:ring-teal-400",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50";

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("to" in props && props.to) {
    const { to, ...linkRest } = rest as Omit<LinkProps, "to"> & { to: string };
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
