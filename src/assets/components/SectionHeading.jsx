function SectionHeading({ eyebrow, title, description, align = "center", className = "" }) {
  const alignment = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`mx-auto max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
