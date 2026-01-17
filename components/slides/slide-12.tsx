export function Slide12() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          11. COMPETITION
        </div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          We Play a<br />
          <span className="font-light">Different Game</span>
        </h2>

        <div className="space-y-2 mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Header row */}
          <div className="grid grid-cols-5 gap-4 pb-4 border-b-2 border-foreground/20">
            <div className="font-black text-sm tracking-widest">FEATURE</div>
            <div className="text-center font-black text-sm">Quinn</div>
            <div className="text-center font-light text-sm text-foreground/60">Shopify</div>
            <div className="text-center font-light text-sm text-foreground/60">ERP</div>
            <div className="text-center font-light text-sm text-foreground/60">Point Tools</div>
          </div>

          {/* Data rows */}
          {[
            { feature: "All-in-One Platform", quinn: "✓", shopify: "✗", erp: "✗", point: "✗" },
            { feature: "AI Automation", quinn: "✓", shopify: "✗", erp: "✗", point: "✗" },
            { feature: "E-commerce Native", quinn: "✓", shopify: "✓", erp: "✗", point: "✓" },
            { feature: "Setup Time", quinn: "1 wk", shopify: "2-4 wks", erp: "3-6 mo", point: "1-2 wks" },
            { feature: "Works Out-of-Box", quinn: "✓", shopify: "✗", erp: "✗", point: "✗" },
            { feature: "Operations Focus", quinn: "✓", shopify: "✗", erp: "✓", point: "✗" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-5 gap-4 pb-4 border-b border-foreground/10">
              <div className="font-light text-foreground/80 text-sm">{row.feature}</div>
              <div className="text-center font-black text-foreground">{row.quinn}</div>
              <div className="text-center text-foreground/60">{row.shopify}</div>
              <div className="text-center text-foreground/60">{row.erp}</div>
              <div className="text-center text-foreground/60">{row.point}</div>
            </div>
          ))}
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm font-bold tracking-widest text-foreground/50 mb-6">OUR MOAT</p>
          <ul className="space-y-4">
            {[
              "First mover in unified e-commerce OS",
              "AI-first architecture (can't bolt on legacy)",
              "Data network effects improve AI",
              "Vertical integration for e-commerce",
              "Proven with market leaders, not theory",
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-lg font-light text-foreground/70">
                <span className="font-black">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
