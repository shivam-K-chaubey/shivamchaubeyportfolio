import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectRecipe from "@/assets/project-recipe.jpg";
import projectFlight from "@/assets/project-flight.jpg";
import projectWeather from "@/assets/project-weather.jpg";

const projects = [
  {
    title: "AI Recipe Generator",
    description: "A web application that generates recipes based on user input ingredients and dietary preferences using AI-powered suggestions.",
    image: projectRecipe,
    tags: ["Python", "APIs", "Streamlit"],
    github: "https://github.com/shivam-K-chaubey/Ai-recipe-generator",
    demo: "",
  },
  {
    title: "Flight Search Automation",
    description: "A system that searches for cheap flights and sends alerts when prices drop below a threshold using automated workflows.",
    image: projectFlight,
    tags: ["Python", "REST APIs", "Automation"],
    github: "https://github.com/shivam-K-chaubey/flight-search",
    demo: "",
  },
  {
    title: "Live Weather Data Visualization",
    description: "An interactive dashboard that analyzes and visualizes real-time weather data for 50+ cities with charts and insights.",
    image: projectWeather,
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/shivam-K-chaubey/live-weather-data-visualization",
    demo: "",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  {project.demo && (
                    <Button variant="hero-outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
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
