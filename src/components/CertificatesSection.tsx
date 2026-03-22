import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Master Generative AI & Generative AI Tools",
    org: "Udemy",
    link: "https://drive.google.com/file/d/1-ZIVNwHuc60AbsIgrDoGYfGXo3LLilz6/view",
  },
  {
    title: "Master in C: Basic to Beyond",
    org: "CSE Pathshala",
    link: "https://drive.google.com/file/d/1T3rK2k-h9xyxIEHFxS6rpbNB7zYln2WW/view",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Certificates</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Certifications that validate my skills and knowledge.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certificates.map((cert, i) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card overflow-hidden group hover:glow-border transition-all duration-500 opacity-0 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">Issued by {cert.org}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium">
                  <ExternalLink size={14} />
                  View Certificate
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
