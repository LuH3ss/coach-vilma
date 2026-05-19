"use client";

import { useMemo, useState } from "react";

type Props = {
  text: string;
  maxChars?: number;
  className?: string;
};

export function ExpandableText({
  text,
  maxChars = 220,
  className = "",
}: Props) {
  const needsToggle = text.trim().length > maxChars;
  const [open, setOpen] = useState(false);

  const display = useMemo(() => {
    if (!needsToggle || open) return text.trim();
    const slice = text.slice(0, maxChars).trim();
    return `${slice}…`;
  }, [text, needsToggle, open, maxChars]);

  if (!needsToggle) {
    return <p className={className}>{text.trim()}</p>;
  }

  return (
    <div>
      <p className={className}>{display}</p>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-2 text-sm font-bold uppercase tracking-wide text-flyer-lavender underline decoration-flyer-lavender/40 underline-offset-2 hover:text-flyer-plum"
      >
        {open ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
}
