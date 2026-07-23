export default function Button({
  children,
  href = "#",
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "button-gradient text-white hover:scale-105 hover:shadow-xl",

    secondary:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",

    light:
      "bg-white text-[#111827] hover:bg-gray-100",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}