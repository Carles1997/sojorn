type DividerProps = {
  /** Superfície on es col·loca la línia: paper (oliva al 20%) o bosc (paper al 20%). */
  on?: "paper" | "bosc";
  className?: string;
};

export function Divider({ on = "paper", className = "" }: DividerProps) {
  const color = on === "bosc" ? "border-paper/20" : "border-linia";

  return (
    <hr aria-hidden="true" className={`border-0 border-t ${color} ${className}`} />
  );
}
