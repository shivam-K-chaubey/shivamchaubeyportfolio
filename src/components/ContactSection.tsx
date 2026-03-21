import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Have a question or want to work together? Let's connect!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="bg-card border-border resize-none"
            />
            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Send size={18} />
              Send Message
            </Button>
          </form>

          <div className="flex flex-col justify-center gap-6">
            <div className="glass-card p-5 flex items-center gap-4">
              <Mail className="text-primary" size={24} />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">shivam@example.com</p>
              </div>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex items-center gap-4 hover:glow-border transition-all duration-300">
              <Github className="text-primary" size={24} />
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="text-foreground font-medium">github.com/shivamchaubey</p>
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex items-center gap-4 hover:glow-border transition-all duration-300">
              <Linkedin className="text-primary" size={24} />
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground font-medium">linkedin.com/in/shivamchaubey</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
