export default function SectionHeading({
  title,
  subtitle,
  center = false,
}) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <h2 className="mb-5">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}