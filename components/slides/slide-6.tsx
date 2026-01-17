export function Slide6() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          05. HOW IT WORKS
        </div>

        <h2
          className="text-6xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Powered by Two AI Agents
        </h2>

        {/* Agent 1 */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="mb-6">
            <h3 className="text-2xl font-black mb-4">1. Customer-Facing AI</h3>
            <p className="text-sm font-light text-foreground/50 tracking-widest mb-6">WHITE-LABEL CUSTOMIZABLE</p>
          </div>
          <ul className="space-y-3 ml-6 text-lg font-light text-foreground/70">
            <li>• Handles 92.5% of customer queries automatically</li>
            <li>• Creates orders, tracks shipments, processes returns</li>
            <li>• Available 24/7 across all channels</li>
            <li>• Escalates complex issues to humans instantly</li>
          </ul>
        </div>

        {/* Agent 2 */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="mb-6">
            <h3 className="text-2xl font-black mb-4">2. Quincy — Internal AI Co-Pilot</h3>
          </div>
          <ul className="space-y-3 ml-6 text-lg font-light text-foreground/70">
            <li>• Predicts inventory needs before stockouts</li>
            <li>• Assigns tasks and sends smart reminders</li>
            <li>• Generates performance reports automatically</li>
            <li>• Negotiates with suppliers (with translation)</li>
          </ul>
        </div>

        {/* Result */}
        <div className="mt-16 p-8 border-l-2 border-foreground/40 bg-foreground/5">
          <p className="text-2xl font-light italic text-foreground/70">Your team focuses on growth, not grunt work.</p>
        </div>
      </div>
    </div>
  )
}
