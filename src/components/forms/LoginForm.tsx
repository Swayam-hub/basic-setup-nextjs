"use client";

import { motion } from "framer-motion";
import { useActionState, useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginAction, type LoginState } from "@/actions/auth.action";
import { useRouter } from "next/navigation";
import Input from "../ui/FloatingInput";
import Button from "../ui/Button";

const initialState: LoginState = { error: "", success: false };

export default function LoginPage() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(loginAction, initialState);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (state?.success) router.push("/dashboard");
  }, [state?.success, router]);

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-center px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-md"
        >
          <h1 className="text-4xl font-bold mb-6">Build. Deploy. Scale.</h1>
          <p className="text-muted-foreground text-lg">
            Create multi-page websites in minutes and deploy instantly. Your platform for modern web creation.
          </p>
        </motion.div>
      </div>

      <div className="flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 relative before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/5 before:pointer-events-none"
        >
          <h2 className="text-3xl font-semibold tracking-tight mb-2">Welcome back</h2>
          <p className="text-sm text-muted-foreground mb-6">Sign in to your workspace</p>

          <form action={formAction} className="space-y-6">
            <Input name="email" label="Email" type="email" required />

            <div className="relative">
              <Input
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-4 top-3 text-muted-foreground hover:text-foreground transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {state?.error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-destructive">
                {state.error}
              </motion.p>
            )}

            <Button type="submit" isLoading={isPending} fullWidth>
              Sign In
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-6 text-center">
            Don’t have an account?{" "}
            <span className="text-primary hover:underline cursor-pointer">Sign up</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}