export function Slide14() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">
          13. CAPITALIZATION & FUNDING
        </div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Valuation &
          <br />
          <span className="font-light">Equity Structure</span>
        </h2>

        <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-bold tracking-widest text-foreground/50 mb-6">VALUATION</p>
              <div className="space-y-6">
                <div>
                  <p className="text-5xl font-black">$1M</p>
                  <p className="text-sm text-foreground/60 mt-2">Post-money valuation</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-widest text-foreground/50 mb-6">RAISE DETAILS</p>
              <ul className="space-y-4">
                <li>
                  <p className="text-sm font-light text-foreground/60 mb-1">Raise Amount</p>
                  <p className="text-3xl font-black">$100K</p>
                </li>
                <li className="border-t border-foreground/20 pt-4">
                  <p className="text-sm font-light text-foreground/60 mb-1">Equity Dilution</p>
                  <p className="text-3xl font-black">10%</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/20 pt-12">
            <p className="text-xs font-bold tracking-widest text-foreground/50 mb-6">OWNERSHIP POST-FUNDING</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-lg font-light">Founders (Athar, Mueed, Razeen)</p>
                <p className="text-2xl font-black">90%</p>
              </div>
              <div className="flex justify-between items-center border-t border-foreground/10 pt-3">
                <p className="text-lg font-light">New Investor</p>
                <p className="text-2xl font-black">10%</p>
              </div>
            </div>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 p-8 rounded-sm">
            <p className="text-lg font-light italic text-foreground/70">
              Founders retain <span className="font-black text-foreground">90% control</span> with runway for 18-24
              months to reach Series A.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
