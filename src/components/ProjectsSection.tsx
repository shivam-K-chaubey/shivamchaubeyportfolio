import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectRecipe from "@/assets/project-recipe.jpg";
import projectFlight from "@/assets/project-flight.jpg";
import projectWeather from "@/assets/project-weather.jpg";
import projectPowerbi from "@/assets/project-powerbi.jpg";

const projects = [
  {
    title: "Recipe Generator",
    description: "A non-AI recipe generator application that helps users discover new recipes based on available ingredients, dietary preferences, and cuisine types.",
    image: projectRecipe,
    tags: ["Java", "Spring Boot", "SQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Flight Search Application",
    description: "A comprehensive flight search platform enabling users to find, compare, and filter flights with real-time data and an intuitive interface.",
    image: projectFlight,
    tags: ["Java", "REST API", "Spring Boot"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Data Visualization",
    description: "An interactive dashboard that visualizes weather data with charts, graphs, and maps for meaningful climate insights.",
    image: projectWeather,
    tags: ["Python", "Data Analytics", "Visualization"],
    github: "#",
    demo: "#",
  },
  {
    title: "Power BI Dashboard – World Electricity Access",
    description: "A Power BI dashboard analyzing global electricity access patterns across countries with interactive maps and KPI metrics.",
    image: projectPowerbi,
    tags: ["Power BI", "Data Analytics", "DAX"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          A selection of projects I've built and contributed to.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group hover:glow-border transition-all duration-500 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
