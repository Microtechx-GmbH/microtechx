import { Shield, Cloud, Database, Key, User, Fingerprint, CheckCircle, Lock, Brain, Server } from "lucide-react";

const HeroAnimation = () => {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px]">
      {/* Background glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 rounded-full bg-primary/20 blur-[80px] animate-pulse-glow" />
      </div>
      
      {/* Outer rotating ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] animate-rotate-slow">
          <svg viewBox="0 0 500 500" className="w-full h-full">
            {/* Outer dashed ring */}
            <circle
              cx="250"
              cy="250"
              r="230"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="1"
              strokeDasharray="10 5"
              className="opacity-40"
            />
            {/* Outer nodes */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 250 + 230 * Math.cos((angle * Math.PI) / 180);
              const y = 250 + 230 * Math.sin((angle * Math.PI) / 180);
              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="url(#gradient1)"
                    className="animate-pulse-glow"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                </g>
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
              strokeDasharray="20 10"
              className="opacity-50"
            />
            {/* Connection lines */}
            {[45, 135, 225, 315].map((angle, i) => {
              const x1 = 190 + 170 * Math.cos((angle * Math.PI) / 180);
              const y1 = 190 + 170 * Math.sin((angle * Math.PI) / 180);
              return (
                <line
                  key={i}
                  x1="190"
                  y1="190"
                  x2={x1}
                  y2={y1}
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  strokeDasharray="5 5"
                  className="opacity-30"
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
            {/* Hexagon shape */}
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
        <div className="relative">
          {/* Glow behind shield */}
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl animate-pulse-glow" />
          
          {/* Shield container */}
          <div className="relative w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-45 opacity-20" />
            <div className="absolute inset-2 bg-card rounded-xl rotate-45 shadow-2xl" />
            <div className="relative z-10 flex flex-col items-center gap-1">
              <Shield className="w-10 h-10 lg:w-14 lg:h-14 text-primary" strokeWidth={1.5} />
              <Brain className="w-6 h-6 lg:w-8 lg:h-8 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating icons around */}
      <div className="absolute inset-0">
        {/* Cloud - top */}
        <div 
          className="absolute animate-float" 
          style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', animationDelay: '0s' }}
        >
          <div className="p-3 lg:p-4 bg-card rounded-xl shadow-lg border border-border/50">
            <Cloud className="w-6 h-6 lg:w-8 lg:h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        {/* Database - top right */}
        <div 
          className="absolute animate-float" 
          style={{ top: '20%', right: '5%', animationDelay: '0.5s' }}
        >
          <div className="p-3 lg:p-4 bg-card rounded-xl shadow-lg border border-border/50">
            <Database className="w-6 h-6 lg:w-8 lg:h-8 text-accent" strokeWidth={1.5} />
          </div>
        </div>

        {/* Server - right */}
        <div 
          className="absolute animate-float" 
          style={{ top: '50%', right: '0%', transform: 'translateY(-50%)', animationDelay: '1s' }}
        >
          <div className="p-3 lg:p-4 bg-card rounded-xl shadow-lg border border-border/50">
            <Server className="w-6 h-6 lg:w-8 lg:h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        {/* Key - bottom right */}
        <div 
          className="absolute animate-float" 
          style={{ bottom: '20%', right: '10%', animationDelay: '1.5s' }}
        >
          <div className="p-3 lg:p-4 bg-card rounded-xl shadow-lg border border-border/50">
            <Key className="w-6 h-6 lg:w-8 lg:h-8 text-accent" strokeWidth={1.5} />
          </div>
        </div>

        {/* Lock - bottom */}
        <div 
          className="absolute animate-float" 
          style={{ bottom: '5%', left: '50%', transform: 'translateX(-50%)', animationDelay: '2s' }}
        >
          <div className="p-3 lg:p-4 bg-card rounded-xl shadow-lg border border-border/50">
            <Lock className="w-6 h-6 lg:w-8 lg:h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        {/* Fingerprint - bottom left */}
        <div 
          className="absolute animate-float" 
          style={{ bottom: '20%', left: '10%', animationDelay: '2.5s' }}
        >
          <div className="p-3 lg:p-4 bg-card rounded-xl shadow-lg border border-border/50">
            <Fingerprint className="w-6 h-6 lg:w-8 lg:h-8 text-accent" strokeWidth={1.5} />
          </div>
        </div>

        {/* User - left */}
        <div 
          className="absolute animate-float" 
          style={{ top: '50%', left: '0%', transform: 'translateY(-50%)', animationDelay: '3s' }}
        >
          <div className="p-3 lg:p-4 bg-card rounded-xl shadow-lg border border-border/50">
            <User className="w-6 h-6 lg:w-8 lg:h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        {/* Check - top left */}
        <div 
          className="absolute animate-float" 
          style={{ top: '20%', left: '5%', animationDelay: '3.5s' }}
        >
          <div className="p-3 lg:p-4 bg-card rounded-xl shadow-lg border border-border/50">
            <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-accent" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Connecting lines SVG overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(199 89% 48%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Data flow lines - these create subtle connections */}
        <path
          d="M 50% 10% Q 30% 30%, 50% 50%"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="opacity-40"
        />
      </svg>
    </div>
  );
};

export default HeroAnimation;
