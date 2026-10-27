import { SocialLinks } from "./Socials";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="kerb h-1.5" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted">
        <p>© {new Date().getFullYear()} techyGondal</p>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}
