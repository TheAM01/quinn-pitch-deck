export function Slide8() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          07. EARLY TRACTION
        </div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Validation From Market Leaders
        </h2>

        <div className="grid grid-cols-2 gap-12 mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-widest text-foreground/50">CURRENT STATUS</p>
            <ul className="space-y-4 text-lg font-light leading-relaxed">
              <li>• 2 design partnerships with largest e-commerce brands</li>
              <li>• Pre-revenue, MVP deployed</li>
              <li>• Proven impact at Boost Lifestyle</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-widest text-foreground/50">THE NUMBERS</p>
            <ul className="space-y-3">
              <li>
                <p className="text-4xl font-black">60%</p>
                <p className="text-sm text-foreground/60">Support team reduction</p>
              </li>
              <li>
                <p className="text-4xl font-black">40%</p>
                <p className="text-sm text-foreground/60">Operations efficiency gain</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-foreground/5 border border-foreground/10 p-8 rounded-sm">
          <p className="text-sm font-light text-foreground/60 mb-3 tracking-widest">CUSTOMER TESTIMONIAL</p>
          <p className="text-2xl font-light italic text-foreground/70">
            "Quinn didn't just solve our problem—it revealed how broken our operations were. We can't imagine going
            back."
          </p>
          <p className="text-sm font-light text-foreground/50 mt-4">— Aamir Arabi, CEO, Boost Lifestyle</p>
        </div>
      </div>
    </div>
  )
}
