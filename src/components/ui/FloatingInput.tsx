"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import React, { useState } from "react";

interface InputProps
  extends Omit<HTMLMotionProps<"input">, "children"> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className,
  onFocus,
  onBlur,
  value,
  defaultValue,
  ...props
}: InputProps) {
  const [focused, setFocused] = useState(false);

  const isActive = focused || value || defaultValue;

  return (
    <div className="relative w-full">
      <motion.input
        {...props}
        value={value}
        defaultValue={defaultValue}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        whileFocus={{ scale: 1.01 }}
whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={clsx(
          "peer w-full h-12 rounded-xl border bg-background/70 backdrop-blur-xl px-4 pt-5 pb-2 text-sm outline-none transition-all duration-200",
          "border-border focus:border-primary focus:ring-2 focus:ring-primary/30",
          error && "border-destructive focus:ring-destructive/30",
          className
        )}
      />

      {/* Floating Label */}
      <motion.label
        initial={false}
        animate={{
          y: isActive ? -10 : 0,
          scale: isActive ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={clsx(
          "absolute left-4 top-3 text-muted-foreground text-sm pointer-events-none origin-left",
          focused && "text-primary",
          error && "text-destructive"
        )}
      >
        {label}
      </motion.label>

      {error && (
        <p className="text-xs text-destructive mt-1">{error}</p>
      )}
    </div>
  );
}