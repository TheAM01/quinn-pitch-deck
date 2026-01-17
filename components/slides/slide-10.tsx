export function Slide10() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          09. BUSINESS MODEL
        </div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Enterprise-First
          <br />
          <span className="font-light">High-Value Pricing</span>
        </h2>

        <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-bold tracking-widest text-foreground/50 mb-4">PRICING</p>
              <ul className="space-y-3 text-lg font-light text-foreground/70">
                <li>Custom quotes per customer</li>
                <li>Average: $1K-3K/month</li>
                <li>Annual contracts</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-foreground/50 mb-4">UNIT ECONOMICS</p>
              <ul className="space-y-3 text-lg font-light text-foreground/70">
                <li>CAC: $100-150</li>
                <li>LTV: $50K-80K</li>
                <li>LTV:CAC: 400-500:1</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/20 pt-12">
            <p className="text-xs font-bold tracking-widest text-foreground/50 mb-6">REVENUE STREAMS</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-light">SaaS Subscriptions</p>
                <p className="text-2xl font-black">95%</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-light">Premium AI Features</p>
                <p className="text-2xl font-black">4%</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-light">Implementation Services</p>
                <p className="text-2xl font-black">1%</p>
              </div>
            </div>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 p-8 rounded-sm">
            <p className="text-lg font-light italic text-foreground/70">
              Gross Margin: <span className="font-black text-foreground">85%+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
