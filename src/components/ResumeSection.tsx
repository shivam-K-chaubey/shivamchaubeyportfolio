import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Download my resume to learn more about my education, experience, and skills.
        </p>

        <div className="glass-card max-w-lg mx-auto p-10 flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
            <FileText size={40} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Shivam Kumar Chaubey</h3>
            <p className="text-muted-foreground text-sm">BTech Computer Science — Resume</p>
          </div>
          <Button variant="hero" size="lg" asChild>
            <a href="#" download>
              <Download size={18} />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
