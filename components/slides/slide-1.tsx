export function Slide1() {
  return (
    <div className="w-full h-full bg-background flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-foreground/5 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full border border-foreground/5 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        {/* Logo/Brand */}
        <div className="mb-16 animate-fade-in">
          <h1 className="font-serif text-8xl font-light tracking-tight mb-2">QUINN</h1>
          <div className="h-0.5 w-24 bg-foreground mx-auto mb-8"></div>
        </div>

        {/* Main headline */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-5xl font-black tracking-wider leading-tight" style={{ letterSpacing: "-0.02em" }}>
            THE OPERATING SYSTEM
          </p>
          <p className="text-5xl font-light tracking-widest leading-tight opacity-70">for e-commerce</p>
        </div>

        {/* Subheading */}
        <div
          className="mt-12 text-sm font-light tracking-[0.2em] text-foreground/60 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          ↓ SCROLL TO BEGIN
        </div>
      </div>
    </div>
  )
}
