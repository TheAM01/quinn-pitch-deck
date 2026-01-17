export function Slide16() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">15. VISION</div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          The Future We're Building
        </h2>

        <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {[
            {
              timeline: "Today",
              title: "Quinn replaces scattered tools",
              desc: "Unified platform for all operations",
            },
            {
              timeline: "12 Months",
              title: "Go-to OS for South Asia",
              desc: "100+ customers, Shopify ecosystem leader",
            },
            {
              timeline: "3 Years",
              title: "Global standard for e-commerce",
              desc: "5,000+ businesses, category-defining brand",
            },
            {
              timeline: "End State",
              title: "Infrastructure layer for commerce",
              desc: "100,000+ businesses powered by Quinn",
            },
          ].map((milestone, i) => (
            <div key={i} className="pb-8 border-b border-foreground/10 last:border-0">
              <div className="flex gap-8">
                <div className="w-32 flex-shrink-0">
                  <p className="text-sm font-bold tracking-widest text-foreground/50">{milestone.timeline}</p>
                </div>
                <div className="flex-1">
                  <p className="text-2xl font-black mb-2">{milestone.title}</p>
                  <p className="text-lg font-light text-foreground/60">{milestone.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-3xl font-light italic text-foreground/70">
          We're not building a tool. <br />
          <span className="font-black text-foreground">We're building infrastructure for modern commerce.</span>
        </div>
      </div>
    </div>
  )
}
