"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Top Glow */}
      <div
        className="
        absolute -top-40 left-1/2 -translate-x-1/2
        w-[900px] h-[900px]
        bg-primary/20
        blur-[120px]
        rounded-full
      "
      />

      {/* Subtle Grid */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
             linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:48px_48px]
      "
      />
    </div>
  );
}