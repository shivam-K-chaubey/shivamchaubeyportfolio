const skills = [
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Artificial Intelligence", icon: "🧠" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "SQL", icon: "🗄️" },
  { name: "Git & GitHub", icon: "📦" },
  { name: "Power BI", icon: "📊" },
];

const SkillsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Technologies and tools I work with every day.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card p-6 text-center hover:glow-border transition-all duration-300 group cursor-default opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <span className="text-3xl mb-3 block group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
