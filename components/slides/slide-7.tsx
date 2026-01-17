export function Slide7() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          06. MAGIC MOMENTS
        </div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          What Makes Quinn Different
        </h2>

        <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {[
            { trigger: "Order #1247 is delayed", action: "Quincy alerts team, offers compensation, updates customer" },
            {
              trigger: "Best-selling item hits reorder",
              action: "Drafts PO, suggests suppliers, translates negotiations",
            },
            {
              trigger: 'Customer saved "Mom\'s Birthday"',
              action: "Sends reminder 7 days before with personalized gifts",
            },
            { trigger: "End of day", action: "Daily digest: Sales up 23%, CSAT 4.8, 3 items reorder needed" },
          ].map((moment, i) => (
            <div key={i} className="pb-8 border-b border-foreground/10 last:border-0">
              <div className="flex gap-8">
                <div className="w-48 flex-shrink-0">
                  <p className="text-sm font-bold text-foreground/80 tracking-tight">{moment.trigger}</p>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-light text-foreground/60">→ {moment.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-2xl font-light italic text-foreground/70">
          It's not just software. It's an <span className="font-black text-foreground">AI-powered team member</span>{" "}
          that never sleeps.
        </div>
      </div>
    </div>
  )
}
