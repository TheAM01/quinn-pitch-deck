export function Slide2() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          01. THE PROBLEM
        </div>

        {/* Main title */}
        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          E-Commerce Operators
          <br />
          <span className="font-light italic">Are Drowning in Tools</span>
        </h2>

        {/* Problem grid */}
        <div className="grid grid-cols-2 gap-12 mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="space-y-4">
            <p className="text-sm font-bold tracking-widest text-foreground/60">REALITY</p>
            <ul className="space-y-3 text-lg font-light leading-relaxed text-foreground/80">
              <li>• 15+ disconnected apps</li>
              <li>• Data scattered everywhere</li>
              <li>• Teams working blind</li>
              <li>• 3+ hours/day app switching</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-bold tracking-widest text-foreground/60">THE COST</p>
            <ul className="space-y-3 text-lg font-light leading-relaxed text-foreground/80">
              <li>• Missed sales from slow response</li>
              <li>• Inventory mistakes costing thousands</li>
              <li>• Zero visibility into metrics</li>
              <li>• Team frustration & burnout</li>
            </ul>
          </div>
        </div>

        {/* Stat highlight */}
        <div className="border-t border-foreground/20 pt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm font-light text-foreground/60 mb-4">MARKET SIZE</p>
          <p className="text-6xl font-black tracking-tighter">
            $50B<span className="text-3xl font-light ml-4 text-foreground/60">Growing 23% annually</span>
          </p>
        </div>
      </div>
    </div>
  )
}
