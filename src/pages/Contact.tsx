import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalPrompt from "@/components/TerminalPrompt";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
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

  const technicalSkills = {
    Databases: ["MS SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Snowflake", "Redshift", "BigQuery"],
    "ETL & Data Pipelines": ["Apache Airflow", "AWS Glue", "DBT", "Python", "Apache Kafka", "Apache Spark", "SSIS", "Databricks"],
    "Cloud Platforms & Infrastructure": ["AWS – S3, Lambda, RDS, EC2, Databrew", "Google Cloud Platform – BigQuery, Dataflow", "Azure - Data Factory, SQL Database"],
    "Programming & Scripting": ["Python", "SQL", "Java", "C#", "PySpark", "JavaScript"],
    "DevOps, Version Control & CI/CD": ["GitHub", "Jenkins", "Docker", "Kubernetes"],
    "Business Intelligence & Reporting": ["Power BI", "Tableau", "Looker"],
    "Big Data & Analytics": ["Hadoop", "Hive", "Spark"],
    "Data Modeling & Architecture": ["Erwin", "DBSchema"]
  };

  // No experiences section as requested

  return (
    <div className="min-h-screen flex flex-col bg-terminal-background text-terminal-foreground">
      <TerminalHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            {showPrompt && (
              <div>
                <TerminalPrompt
                  text="$ cat profile.md"
                  className="text-terminal-accent-alt text-lg mb-3"
                  onComplete={() => {
                    setTimeout(() => {
                      setShowPrompt(false);
                      setShowContent(true);
                    }, 500);
                  }}
                />
              </div>
            )}

            {showContent && (
              <h1 className="text-3xl font-bold text-terminal-accent mb-4">Semeon Dawera</h1>
            )}

            <div className={`space-y-8 ${showContent ? 'animate-fadeIn' : 'opacity-0'}`}>
              {/* Contact Information Card */}
              <Card className="bg-terminal-background border-terminal-accent/30">
                <CardHeader>
                  <CardTitle className="text-terminal-accent">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <a href="tel:571-234-1672" className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent">
                      <Phone size={18} />
                      <span>571-234-1672</span>
                    </a>
                    <a href="mailto:semeon.dawera@gmail.com" className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent">
                      <Mail size={18} />
                      <span>semeon.dawera@gmail.com</span>
                    </a>
                    <a href="https://github.com/dawcurious" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent">
                      <Github size={18} />
                      <span>GitHub Profile</span>
                    </a>
                    <a href="https://www.semeon.work/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      <span>www.semeon.work</span>
                    </a>
                    <a href="https://linkedin.com/in/semeondawera" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent">
                      <Linkedin size={18} />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Summary Card */}
              <Card className="bg-terminal-background border-terminal-accent/30">
                <CardHeader>
                  <CardTitle className="text-terminal-accent">Professional Summary</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <p className="text-terminal-foreground/90">
                    As a Senior Data Engineer at Google, I specialize in creating robust data pipelines.
                    My experience extends to cloud services, programming, databases, data modeling and reporting.
                    With industry experience in Energy (Utility), Education, Retail and Cybersecurity,
                    I bring a wealth of knowledge and skills to drive data-driven solutions.
                  </p>
                </CardContent>
              </Card>

              {/* Technical Skills Card */}
              <Card className="bg-terminal-background border-terminal-accent/30">
                <CardHeader>
                  <CardTitle className="text-terminal-accent">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    {Object.entries(technicalSkills).map(([category, skills]) => (
                      <div key={category} className="space-y-2">
                        <h3 className="text-terminal-accent-alt font-semibold">{category}</h3>
                        <p className="text-terminal-foreground/80 text-sm">{skills.join(", ")}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education & Certifications Card */}
              <Card className="bg-terminal-background border-terminal-accent/30">
                <CardHeader>
                  <CardTitle className="text-terminal-accent">Education & Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-terminal-accent-alt font-semibold">Education</h3>
                    <p className="text-terminal-foreground/80">Bachelor of Science in Civil Engineering</p>
                    <p className="text-terminal-foreground/60 text-sm">Addis Ababa Institute of Technology (AAiT)</p>
                  </div>
                  <div>
                    <h3 className="text-terminal-accent-alt font-semibold">Certifications</h3>
                    <ul className="list-disc list-inside text-terminal-foreground/80 space-y-1">
                      <li>AWS Certified Data Engineer</li>
                      <li>AWS Certified Solutions Architect</li>
                      <li>GCP Professional Data Engineer</li>
                      <li>GCP Associate Cloud Engineer</li>
                      <li>Microsoft Certified: Querying Microsoft SQL Server 2012</li>
                      <li>Java Programming Certification – Northern Virginia Community College</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Experience section removed as requested */}

              {/* Contact Form */}
              <div className="border-t border-terminal-accent/20 pt-6">
                <h2 className="text-xl text-terminal-accent-alt mb-4">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-terminal-foreground/70 mb-1">
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
                    <label htmlFor="email" className="block text-sm text-terminal-foreground/70 mb-1">
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
                    <label htmlFor="message" className="block text-sm text-terminal-foreground/70 mb-1">
                      &gt; Message:
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full bg-terminal-background border border-terminal-accent/30 rounded-md px-3 py-2 text-terminal-foreground focus:outline-none focus:border-terminal-accent"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-terminal-accent text-terminal-background hover:bg-terminal-accent-alt flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
