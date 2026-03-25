"use client";

import { useState, useEffect } from "react";

export const LiveClock = () => {
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const date = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setDisplay(`${date} · ${time}`);
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!display) return null;

  return (
    <span className="hidden font-mono text-xs tabular-nums text-muted-foreground lg:block">
      {display}
    </span>
  );
};
