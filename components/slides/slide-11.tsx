export function Slide11() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          10. GO-TO-MARKET
        </div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Land, Expand
          <br />
          <span className="font-light">Dominate</span>
        </h2>

        <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {[
            {
              phase: "Phase 1",
              timeline: "Months 0-12",
              title: "Design Partnerships → Paying Customers",
              items: [
                "Convert 2 design partners",
                "Target 10 more enterprise clients in Pakistan/South Asia",
                "Direct sales channel",
                "$1.5K-3K/month pricing",
              ],
            },
            {
              phase: "Phase 2",
              timeline: "Months 12-24",
              title: "Regional Expansion",
              items: [
                "Expand to Middle East & Southeast Asia",
                "Shopify App Store launch",
                "Agency partner program",
                "Target: 100+ customers, $1.5M ARR",
              ],
            },
            {
              phase: "Phase 3",
              timeline: "Months 24+",
              title: "Global Scale",
              items: [
                "Enter US/Europe markets",
                "API marketplace",
                "White-label platform",
                "Network effects via shared integrations",
              ],
            },
          ].map((phase, i) => (
            <div key={i} className="pb-8 border-b border-foreground/10 last:border-0">
              <div className="flex gap-6 mb-4">
                <div className="font-bold text-sm tracking-widest">{phase.phase}</div>
                <div className="font-light text-sm text-foreground/60">{phase.timeline}</div>
              </div>
              <p className="text-xl font-light mb-4">{phase.title}</p>
              <ul className="ml-6 space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="text-sm font-light text-foreground/70">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-2xl font-light italic text-foreground/70">
          First Mover Advantage = <span className="font-black text-foreground">Land Grab Opportunity</span>
        </div>
      </div>
    </div>
  )
}
