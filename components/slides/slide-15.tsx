export function Slide15() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">14. THE ASK</div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Join Us in Rebuilding
          <br />
          <span className="font-light">E-Commerce Operations</span>
        </h2>

        <div className="grid grid-cols-2 gap-12 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold tracking-widest text-foreground/50 mb-2">RAISING</p>
              <p className="text-5xl font-black">$100K</p>
              <p className="text-sm font-light text-foreground/60 mt-2">USD Seed Round</p>
            </div>
            <div className="border-t border-foreground/20 pt-6">
              <p className="text-sm font-bold tracking-widest text-foreground/50 mb-4">USE OF FUNDS</p>
              <ul className="space-y-3 text-sm font-light text-foreground/70">
                <li>45% — Product development</li>
                <li>30% — Go-to-market</li>
                <li>15% — Team expansion</li>
                <li>10% — Infrastructure & legal</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold tracking-widest text-foreground/50 mb-4">12-MONTH MILESTONES</p>
              <ul className="space-y-3 text-sm font-light text-foreground/70">
                <li>✓ Convert 2 design partners to paid</li>
                <li>✓ Sign 10 additional enterprise clients</li>
                <li>✓ Reach $250K ARR</li>
                <li>✓ Shopify App Store integration</li>
                <li>✓ Delaware C-Corp incorporation</li>
                <li>✓ Position for $1-2M Series A</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/20 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm font-light text-foreground/60 mb-6">COMPANY STATUS</p>
          <p className="text-2xl font-light italic text-foreground/70">
            Founded August 2025 • Pakistan-based • Incorporating in Delaware • MVP in production with 2 design partners
          </p>
        </div>

        <div className="mt-12 text-3xl font-light italic text-foreground/70">
          This is the <span className="font-black text-foreground">Salesforce moment</span> for e-commerce. Join us.
        </div>
      </div>
    </div>
  )
}
