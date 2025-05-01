import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TerminalPrompt from "@/components/TerminalPrompt";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRole } from "@/contexts/RoleContext";
import { roleConfig } from "@/components/RoleLayout";

// Role-specific experience data
const experienceData = {
  sde: [
    {
      company: "Google (Mandiant Cyber Security)",
      period: "September 2021 - present",
      title: "Senior Data Engineer",
      responsibilities: [
        "Developed data quality reports using AWS Databrew for Mandiant client onboarding, reducing onboarding time by 40%",
        "Collaborated with DevOps for deployment and troubleshooting of GCP data systems",
        "Automated threat log imports from Amazon S3 to Snowflake tables using Snowpipes",
        "Extracted data from GCP BigQuery to generate IR billing reports",
        "Analyzed and identified anomalies in IR logs using Machine Learning",
      ],
    },
  ],
  fse: [
    {
      company: "WebTech Solutions",
      period: "2020 - Present",
      title: "Fullstack Software Engineer",
      responsibilities: [
        "Led the development of responsive web applications using React and TypeScript",
        "Implemented a component library that improved development speed by 30%",
        "Optimized application performance and reduced load times by 35%",
        "Collaborated with UX designers to create intuitive user interfaces",
        "Mentored junior developers and conducted code reviews",
      ],
    },
  ],
};

// Role-specific professional summaries
const summaryData = {
  sde: "As a Senior Data Engineer at Google, I specialize in creating robust data pipelines. Proficient in cloud services, programming, and databases, I excel in data modeling and reporting. My experience extends to Big Data and machine learning for anomaly detection. With industry experience in energy (utility), cybersecurity, and finance, I bring a wealth of knowledge and skills to drive data-driven solutions.",
  fse: "As aFullstack Software Engineer, I specialize in building responsive, user-friendly web applications. With expertise in modern JavaScript frameworks like React, I create intuitive interfaces that enhance user experience. I'm passionate about clean code, performance optimization, and accessibility. My experience spans various industries, allowing me to bring diverse perspectives to every project.",
};

const RoleContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { toast } = useToast();
  const { currentRole } = useRole();

  // Default to SDE if no role is selected
  const role = currentRole || "sde";
  const experiences = experienceData[role];
  const summary = summaryData[role];
  const roleTitle = roleConfig[role]?.title || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        {showPrompt && (
          <TerminalPrompt
            text={`$ cat ${role}_profile.md`}
            className="text-terminal-accent-alt text-lg mb-3"
            onComplete={() => {
              setTimeout(() => {
                setShowPrompt(false);
                setShowContent(true);
              }, 500);
            }}
          />
        )}

        <div
          className={`space-y-8 ${
            showContent ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          {/* Contact Information Card */}
          <Card className="bg-terminal-background border-terminal-accent/30">
            <CardHeader>
              <CardTitle className="text-terminal-accent">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="tel:571-234-1672"
                  className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent"
                >
                  <Phone size={18} />
                  <span>571-234-1672</span>
                </a>
                <a
                  href="mailto:semeon.dawera@gmail.com"
                  className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent"
                >
                  <Mail size={18} />
                  <span>semeon.dawera@gmail.com</span>
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary Card */}
          <Card className="bg-terminal-background border-terminal-accent/30">
            <CardHeader>
              <CardTitle className="text-terminal-accent">
                {roleTitle} Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-terminal-foreground/90">{summary}</p>
            </CardContent>
          </Card>

          {/* Professional Experience Card */}
          <Card className="bg-terminal-background border-terminal-accent/30">
            <CardHeader>
              <CardTitle className="text-terminal-accent">
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-3">
                  <div>
                    <h3 className="text-terminal-accent-alt font-semibold text-lg">
                      {exp.company}
                    </h3>
                    <p className="text-terminal-foreground/60">{exp.period}</p>
                    <p className="text-terminal-foreground/80 font-medium">
                      {exp.title}
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-terminal-foreground/80 text-sm">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact Form */}
          <div className="border-t border-terminal-accent/20 pt-6">
            <h2 className="text-xl text-terminal-accent-alt mb-4">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-terminal-foreground/70 mb-1"
                >
                  &gt; Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-terminal-background border border-terminal-accent/30 rounded-md px-3 py-2 text-terminal-foreground focus:outline-none focus:border-terminal-accent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-terminal-foreground/70 mb-1"
                >
                  &gt; Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-terminal-background border border-terminal-accent/30 rounded-md px-3 py-2 text-terminal-foreground focus:outline-none focus:border-terminal-accent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-terminal-foreground/70 mb-1"
                >
                  &gt; Message:
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full bg-terminal-background border border-terminal-accent/30 rounded-md px-3 py-2 text-terminal-foreground focus:outline-none focus:border-terminal-accent"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-terminal-accent text-terminal-background hover:bg-terminal-accent-alt"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleContact;
