"use client";

import { useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  collapsedClass?: string;
  centerButton?: boolean;
};

export function ExpandableBlock({
  children,
  collapsedClass = "max-h-[14rem]",
  centerButton = false,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={
          open ? "relative" : `relative overflow-hidden ${collapsedClass}`
        }
      >
        {children}
        {!open && <div className="fade-read-more" aria-hidden />}
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`mt-2 text-sm font-bold uppercase tracking-wide text-flyer-lavender underline decoration-flyer-lavender/40 underline-offset-2 hover:text-flyer-plum ${centerButton ? "mx-auto block w-fit" : ""}`}
      >
        {open ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
}
