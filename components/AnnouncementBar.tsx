/** Slim berry strip above the header. Content varies per surface. */
export function AnnouncementBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#ff3b5f] px-4 py-2 text-center text-[11.5px] font-normal uppercase tracking-[0.26em] text-cream-dim">
      {children}
    </div>
  );
}
