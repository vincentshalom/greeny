import { Link, NavLink } from "react-router-dom";

export default function Button({
  className = "",
  type = "button",
  children,
  variant = "primary",
  onClick,
  disabled = false,
  to = "",
  path,
  ...props
}) {
  if (to)
    return (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    );

  if (path)
    return (
      <NavLink path={path} className={className} {...props}>
        {children}
      </NavLink>
    );

  if (onClick) {
    return (
      <button
        type={type}
        className={className}
        onClick={onClick}
        {...props}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  return (
    <button type={type} disabled={disabled} className={className}>
      {children}
    </button>
  );
}
