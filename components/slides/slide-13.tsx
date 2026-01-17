export function Slide13() {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center px-16 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold tracking-[0.3em] text-foreground/40 mb-12 animate-fade-in">12. TEAM</div>

        <h2
          className="text-7xl font-black tracking-tight mb-16 leading-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Battle-Tested Operators
        </h2>

        <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {[
            {
              name: "Athar Ahmed Shaikh",
              role: "CEO & Co-Founder",
              points: [
                "Serial entrepreneur: CEO of Marktecs, Codtecs, ExtensorLabs",
                "Built and scaled multiple software companies",
                "Lived the e-commerce pain firsthand",
              ],
            },
            {
              name: "Abdul Mueed",
              role: "CTO & Co-Founder",
              points: [
                "5 years building complex enterprise software",
                "Full-stack engineering expertise",
                "Architected Quinn's AI infrastructure",
                "Proven ability to ship fast",
              ],
            },
          ].map((team, i) => (
            <div key={i} className="pb-12 border-b border-foreground/10 last:border-0">
              <h3 className="text-2xl font-black mb-2">{team.name}</h3>
              <p className="text-sm font-light text-foreground/60 mb-6 tracking-widest">{team.role}</p>
              <ul className="space-y-3">
                {team.points.map((point, j) => (
                  <li key={j} className="font-light text-foreground/70">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-foreground/5 border border-foreground/10 p-8 rounded-sm">
          <p className="text-lg font-light italic text-foreground/70">
            We're not theorizing—we've lived the problem and built the solution.
          </p>
        </div>
      </div>
    </div>
  )
}
