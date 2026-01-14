const stats = [
  { value: "100+", label: "Customers Served" },
  { value: "8+", label: "Years of Experience" },
  { value: "120+", label: "Projects Delivered" },
  { value: "24/7", label: "Security Monitoring" },
];

const Stats = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border/50 overflow-hidden shadow-xl shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
