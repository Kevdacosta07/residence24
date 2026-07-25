import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={cn("brand-logo", className)} aria-label="Residence24">
      <svg viewBox="0 0 42 42" aria-hidden="true">
        <path d="M5 35V7h14.2c7.2 0 11.6 3.5 11.6 9.3 0 4.1-2.4 7.1-6.4 8.4L37 35h-8.2L17.6 25.2H12V35H5Zm7-15.7h6.4c3.6 0 5.5-.9 5.5-3.1 0-2.1-1.9-3.1-5.5-3.1H12v6.2Z" fill="currentColor" />
        <path d="M34 5h2v15h-2z" fill="var(--gold)" />
      </svg>
      <span>RESIDENCE<span className="brand-logo__24">24</span></span>
    </span>
  );
}
