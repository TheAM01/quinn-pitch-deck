export function Slide9() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          08. MARKET OPPORTUNITY
        </div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Massive TAM
          <br />
          <span className="font-light">Zero Direct Competition</span>
        </h2>

        <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div>
            <p className="text-xs font-bold tracking-widest text-foreground/50 mb-6">TOTAL ADDRESSABLE MARKET</p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-5xl font-black">$50B</p>
                <p className="text-sm text-foreground/60 mt-2">operations software spend</p>
              </div>
              <div>
                <p className="text-5xl font-black">24M</p>
                <p className="text-sm text-foreground/60 mt-2">e-commerce businesses</p>
              </div>
              <div>
                <p className="text-5xl font-black">23%</p>
                <p className="text-sm text-foreground/60 mt-2">annual growth rate</p>
              </div>
            </div>
          </div>

          <div className="border-t border-foreground/20 pt-12">
            <p className="text-xs font-bold tracking-widest text-foreground/50 mb-6">OUR WEDGE: SME E-COMMERCE</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black">2.5M</p>
                <p className="text-sm text-foreground/60 mt-2">10-100 employee stores</p>
              </div>
              <div>
                <p className="text-4xl font-black">$500-2K</p>
                <p className="text-sm text-foreground/60 mt-2">monthly tool spend</p>
              </div>
            </div>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 p-8 rounded-sm">
            <p className="text-sm font-light italic text-foreground/70">
              The kicker: <span className="font-black text-foreground">We have no direct competitors</span> building the
              complete, AI-first e-commerce OS.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
