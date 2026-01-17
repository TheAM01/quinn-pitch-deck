export function Slide4() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          03. ORIGIN STORY
        </div>

        <h2
          className="text-7xl font-black tracking-tight mb-12 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Born From Necessity
        </h2>

        <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-3">
              <p className="text-xs font-bold tracking-widest text-foreground/50">WHEN</p>
              <p className="text-lg font-light">July 2025</p>
            </div>
            <div className="space-y-3 col-span-2">
              <p className="text-xs font-bold tracking-widest text-foreground/50">WHO</p>
              <p className="text-lg font-light">Pakistan's leading electronics brand, Boost Lifestyle</p>
            </div>
          </div>

          <div className="border-t border-foreground/20 pt-8">
            <p className="text-sm font-bold tracking-widest text-foreground/50 mb-4">THE IMPACT</p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-5xl font-black">60%</p>
                <p className="text-sm text-foreground/60 mt-2">reduction in support team</p>
              </div>
              <div>
                <p className="text-5xl font-black">40%</p>
                <p className="text-sm text-foreground/60 mt-2">efficiency improvement</p>
              </div>
              <div>
                <p className="text-5xl font-black">1W</p>
                <p className="text-sm text-foreground/60 mt-2">build time for solution</p>
              </div>
            </div>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 p-8 mt-8 rounded-sm">
            <p className="text-sm font-light italic text-foreground/70">
              "Every e-commerce business has this exact problem. We weren't solving one client's issue—we were solving
              THE issue."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
