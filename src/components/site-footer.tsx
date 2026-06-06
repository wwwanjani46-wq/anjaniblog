import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-medium tracking-tight">designwithanjani</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            A journal on graphic design, video editing and the practice between them.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
          {/* <a
            href="https://www.instagram.com/designwithanjani.in/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            @designwithanjani.in
          </a> */}
          {/* <Link to="/auth" className="hover:text-foreground">Admin</Link> */}
          <p className="text-xs">© {new Date().getFullYear()} Anjani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}