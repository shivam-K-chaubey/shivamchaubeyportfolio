import cert1 from "@/assets/cert-placeholder-1.jpg";
import cert2 from "@/assets/cert-placeholder-2.jpg";
import cert3 from "@/assets/cert-placeholder-3.jpg";

const certificates = [
  {
    title: "Machine Learning Certification",
    org: "Coursera",
    image: cert1,
  },
  {
    title: "Java Programming Masterclass",
    org: "Udemy",
    image: cert2,
  },
  {
    title: "Data Science Professional",
    org: "IBM",
    image: cert3,
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, i) => (
            <div
              key={cert.title}
              className="glass-card overflow-hidden group hover:glow-border transition-all duration-500 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">Issued by {cert.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
