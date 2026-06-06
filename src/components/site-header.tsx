import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight text-foreground">
          designwithanjani<span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-8 text-sm">
          <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/blog" className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Journal
          </Link>
          <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            About
          </Link>
          <a
            href="https://www.instagram.com/designwithanjani.in/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}