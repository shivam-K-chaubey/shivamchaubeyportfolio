import { Brain, Server, BarChart3, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI & Machine Learning", desc: "Building intelligent models and data pipelines" },
  { icon: Server, label: "Backend Development", desc: "Designing robust server-side applications" },
  { icon: BarChart3, label: "Data Analytics", desc: "Turning raw data into actionable insights" },
  { icon: GraduationCap, label: "Continuous Learner", desc: "Always exploring new technologies" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Get to know me and what drives my passion for technology.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground/90 leading-relaxed text-lg">
              I'm a <span className="text-primary font-semibold">BTech Computer Science</span> student
              with a strong passion for Artificial Intelligence, backend development, and data analytics.
              I enjoy solving complex problems and building applications that make a real-world impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From creating intelligent recipe generators to visualizing global electricity data,
              I thrive at the intersection of software engineering and data science. I'm constantly
              learning and applying new tools like Python, Java, Spring Boot, and Power BI
              to push the boundaries of what I can build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass-card p-5 hover:glow-border transition-all duration-300 group cursor-default opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <item.icon size={28} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
