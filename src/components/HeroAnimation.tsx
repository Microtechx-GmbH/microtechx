import { Shield, Cloud, Database, Key, User, Fingerprint, CheckCircle, Lock, Brain, Server } from "lucide-react";

const floatingItems = [
  { icon: Cloud, label: "Cloud", position: { top: '8%', left: '50%' }, transform: 'translateX(-50%)', delay: '0s', color: 'primary' },
  { icon: Database, label: "Data", position: { top: '18%', right: '3%' }, delay: '0.5s', color: 'accent' },
  { icon: Server, label: "Server", position: { top: '50%', right: '-2%' }, transform: 'translateY(-50%)', delay: '1s', color: 'primary' },
  { icon: Key, label: "Access", position: { bottom: '18%', right: '8%' }, delay: '1.5s', color: 'accent' },
  { icon: Lock, label: "Security", position: { bottom: '3%', left: '50%' }, transform: 'translateX(-50%)', delay: '2s', color: 'primary' },
  { icon: Fingerprint, label: "Identity", position: { bottom: '18%', left: '8%' }, delay: '2.5s', color: 'accent' },
  { icon: User, label: "Users", position: { top: '50%', left: '-2%' }, transform: 'translateY(-50%)', delay: '3s', color: 'primary' },
  { icon: CheckCircle, label: "Compliant", position: { top: '18%', left: '3%' }, delay: '3.5s', color: 'accent' },
];

const HeroAnimation = () => {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px] bg-[#0a1628] rounded-3xl overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 rounded-full bg-primary/30 blur-[80px] animate-pulse-glow" />
      </div>
      
      {/* Outer rotating ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] animate-rotate-slow">
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <circle
              cx="250"
              cy="250"
              r="230"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="1.5"
              strokeDasharray="15 8"
              className="opacity-50"
            />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 250 + 230 * Math.cos((angle * Math.PI) / 180);
              const y = 250 + 230 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="6"
                  fill="url(#gradient1)"
                  className="animate-pulse-glow"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(217 91% 60%)" />
                <stop offset="100%" stopColor="hsl(199 89% 48%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Middle rotating ring - reverse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] animate-rotate-reverse">
          <svg viewBox="0 0 380 380" className="w-full h-full">
            <circle
              cx="190"
              cy="190"
              r="170"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="2"
              strokeDasharray="25 12"
              className="opacity-60"
            />
            {[0, 90, 180, 270].map((angle, i) => {
              const x = 190 + 170 * Math.cos((angle * Math.PI) / 180);
              const y = 190 + 170 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="url(#gradient2)"
                  className="animate-pulse-glow"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(199 89% 48%)" />
                <stop offset="100%" stopColor="hsl(187 85% 53%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Inner hexagon ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] animate-rotate-slow" style={{ animationDuration: '30s' }}>
          <svg viewBox="0 0 260 260" className="w-full h-full">
            <polygon
              points="130,10 240,70 240,190 130,250 20,190 20,70"
              fill="none"
              stroke="url(#gradient3)"
              strokeWidth="2"
              className="opacity-60"
            />
            <defs>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(217 91% 60%)" />
                <stop offset="100%" stopColor="hsl(199 89% 48%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Central Shield with AI Brain */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative group">
          {/* Glow behind shield */}
          <div className="absolute -inset-10 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-3xl animate-pulse-glow" />
          
          {/* Shield container */}
          <div className="relative w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-45 opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="absolute inset-3 bg-[#0f1f35] rounded-xl rotate-45 shadow-2xl border border-primary/30" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <Shield className="w-12 h-12 lg:w-16 lg:h-16 text-primary" strokeWidth={1.5} />
              <Brain className="w-7 h-7 lg:w-9 lg:h-9 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70" strokeWidth={1.5} />
            </div>
          </div>
          
          {/* Center label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-full shadow-lg whitespace-nowrap">
              AI Security
            </span>
          </div>
        </div>
      </div>

      {/* Floating icons with labels */}
      <div className="absolute inset-0 px-8 lg:px-12">
        {floatingItems.map((item, index) => (
          <div
            key={item.label}
            className="absolute animate-float"
            style={{
              ...item.position,
              transform: item.transform,
              animationDelay: item.delay,
            }}
          >
            <div className="group relative flex flex-col items-center gap-2">
              {/* Icon container with glow */}
              <div className={`relative p-3 lg:p-4 bg-[#0f1f35] rounded-2xl shadow-lg border border-primary/30 hover:border-${item.color}/50 hover:shadow-xl hover:shadow-${item.color}/20 transition-all duration-300 hover:scale-110`}>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${item.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <item.icon className={`relative z-10 w-5 h-5 lg:w-7 lg:h-7 ${item.color === 'primary' ? 'text-primary' : 'text-white/80'}`} strokeWidth={1.5} />
              </div>
              
              {/* Label pill */}
              <span className={`px-3 py-1 text-[10px] lg:text-xs font-semibold rounded-full shadow-md whitespace-nowrap ${
                item.color === 'primary' 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'bg-white/10 text-white/90 border border-white/20'
              }`}>
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(199 89% 48%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroAnimation;
