import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Master Generative AI & Generative AI Tools",
    org: "Udemy",
    image: "/certificates/gen-ai-udemy.png",
    link: "https://drive.google.com/file/d/1-ZIVNwHuc60AbsIgrDoGYfGXo3LLilz6/view",
  },
  {
    title: "Build Generative AI Apps with No-Code Tools",
    org: "Udemy",
    image: "/certificates/gen-ai-nocode.png",
    link: "https://drive.google.com/file/d/1-ZIVNwHuc60AbsIgrDoGYfGXo3LLilz6/view",
  },
  {
    title: "Mastering in C: Basic to Beyond",
    org: "CSE Pathshala",
    image: "/certificates/c-programming.jpg",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, i) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card overflow-hidden group hover:glow-border transition-all duration-500 opacity-0 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-foreground mb-1 text-sm leading-snug">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">Issued by {cert.org}</p>
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
