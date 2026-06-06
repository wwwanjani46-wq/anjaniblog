import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin sign in — designwithanjani" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/admin" });
    });
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/admin" },
        });
        if (error) throw error;
        toast.success("Account created. Check your email if confirmation is required, then sign in.");
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/admin" });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-md flex-col px-6 py-24">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Studio</p>
      <h1 className="font-display text-4xl font-medium leading-tight md:text-5xl">
        {mode === "signin" ? "Sign in" : "Create account"}
      </h1>
      {/* <p className="mt-4 text-sm text-muted-foreground">
        Admin access for managing journal entries. The first account created becomes the site admin.
      </p> */}

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-base outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Password</label>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-base outline-none focus:border-accent"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-foreground py-3 text-sm uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "…" : mode === "signin" ? "Sign in" : "Create account"}
        </button>
      </form>

      {/* <button
        onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
        className="mt-6 text-center text-sm text-muted-foreground hover:text-accent"
      >
        {mode === "signin" ? "Need an account? Create one" : "Have an account? Sign in"}
      </button> */}

      <Link to="/" className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
        ← Back to site
      </Link>
    </div>
  );
}