// no "use client"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="relative flex h-full w-[375px] justify-center">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
