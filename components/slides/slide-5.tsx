export function Slide5() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          04. THE SOLUTION
        </div>

        <h2
          className="text-7xl font-black tracking-tight mb-6 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Quinn
        </h2>
        <p className="text-2xl font-light text-foreground/60 mb-16 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Your AI-Powered Operating System
        </p>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {[
            "AI Customer Service — Instant responses, order creation, support",
            "Unified Inbox — WhatsApp, Instagram, Messenger in one view",
            "Smart Operations — Inventory, warehouse, delivery management",
            "Quincy AI Co-Pilot — Automates tasks, alerts, insights across business",
            "Real-Time Intelligence — Live dashboards for every department",
            "Team Optimization — Performance tracking, training, gamification",
          ].map((feature, i) => (
            <div key={i} className="flex gap-6 pb-6 border-b border-foreground/10">
              <div className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center flex-shrink-0 font-light text-sm">
                ✓
              </div>
              <p className="text-lg font-light text-foreground/80 pt-0.5">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-foreground/5 border border-foreground/10 rounded-sm">
          <p className="text-2xl font-light italic text-foreground/70">
            "No more app-switching. Just one system that runs your entire business."
          </p>
        </div>
      </div>
    </div>
  )
}
