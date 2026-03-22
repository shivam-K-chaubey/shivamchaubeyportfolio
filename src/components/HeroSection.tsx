import { Button } from "@/components/ui/button";
import { ArrowDown, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <img 
          src="/public/profileimg.png"
          className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-primary shadow-lg"
        />
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
            <Code2 size={16} className="text-primary" />
            <span>BTech Computer Science Student</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Hi, I'm{" "}
          <span className="gradient-text">Shivam</span>
          <br />
          <span className="text-foreground">Kumar Chaubey</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Aspiring Software Engineer & AI Engineer — building intelligent solutions
          with code, data, and machine learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Button
            variant="hero"
            size="lg"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </Button>
          <Button
            variant="hero-outline"
            size="lg"
            asChild
          >
            <a href="/resume/general-cv.pdf" target="_blank" rel="noopener noreferrer">
              <ArrowDown size={18} />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
