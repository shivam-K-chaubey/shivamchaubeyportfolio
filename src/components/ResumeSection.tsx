import { Button } from "@/components/ui/button";
import { Download, FileText, Brain } from "lucide-react";

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

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="glass-card p-8 flex flex-col items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <FileText size={32} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">General Resume</h3>
              <p className="text-muted-foreground text-sm">Full-stack & software engineering</p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <a href="/Shivam_Kumar_Chaubey_General_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={18} />
                View Resume
              </a>
            </Button>
          </div>

          <div className="glass-card p-8 flex flex-col items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Brain size={32} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">AI / Specialized Resume</h3>
              <p className="text-muted-foreground text-sm">AI & machine learning focus</p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <a href="/Shivam_Specialized_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={18} />
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
