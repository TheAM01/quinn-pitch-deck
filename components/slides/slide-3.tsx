export function Slide3() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">02. WHY NOW</div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          The Perfect
          <br />
          <span className="font-serif font-light italic text-6xl">Storm</span>
        </h2>

        {/* Reasons */}
        <div className="space-y-6 mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {[
            { title: "E-commerce explosion", desc: "Online retail grew 300% since 2020" },
            { title: "Customer expectations", desc: "Instant responses expected 24/7" },
            { title: "AI breakthrough", desc: "GPT-4 level models enable automation" },
            { title: "Integration hell", desc: "Average store uses 12-18 separate tools" },
          ].map((item, i) => (
            <div key={i} className="flex gap-8 pb-6 border-b border-foreground/10">
              <div className="w-32 flex-shrink-0">
                <p className="text-sm font-bold tracking-widest text-foreground/50">{item.title}</p>
              </div>
              <div>
                <p className="text-xl font-light text-foreground/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div className="mt-16 p-8 border-l-2 border-foreground/40 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm font-bold tracking-widest text-foreground/60 mb-3">KEY INSIGHT</p>
          <p className="text-3xl font-light italic text-foreground/80">
            Nobody's building the complete, AI-first e-commerce operating system
          </p>
        </div>
      </div>
    </div>
  )
}
