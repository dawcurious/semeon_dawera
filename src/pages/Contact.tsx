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
    Databases: ["MS SQL Server", "Amazon Redshift", "Postgres", "Snowflake"],
    "CI/CD": ["Git", "Jenkins"],
    Reporting: ["SSRS", "Tableau", "Kibana", "Qlik", "Sisense", "PowerBI"],
    "Programming Language": ["Transact-SQL (T-SQL)", "SQL PL", "VBA", "UNIX", "Python", "Pyspark", "Java", "C#"],
    "ETL/BI": ["SSIS", "Apache Airflow", "Python", "Amazon Glue", "Databricks", "DBT"],
    "Cloud Services": ["AWS S3", "AWS Glue", "AWS Lambda", "AWS CloudWatch", "EMR", "Azure"],
    IDE: ["Visual Studio 2012", "Eclipse", "Visual Studio Code", "PyCharm"],
    "Big Data": ["Hadoop", "Hive", "MapReduce"]
  };

  const experiences = [
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
        "Created Pyspark framework for data transformations according to Mandiant's specifications",
        "Automated data transformation deployments with Jenkins and Docker",
        "Integrated Managed Defense data using Google's internal ETL tool"
      ]
    },
    {
      company: "AtSite Inc. (InSite)",
      period: "March 2017 – September 2021",
      title: "Senior Data Engineer/ BI Developer",
      responsibilities: [
        "Managed data integration using Apache Airflow for diverse sources into Amazon Redshift",
        "Automated IoT device data flow and optimized energy bill data handling",
        "Designed fault-tolerant Airflow ETL workflows for frequent data updates",
        "Engineered Python-based data pipelines for meter readings",
        "Conducted rigorous SQL testing for data quality",
        "Led the Unified Data Store project for data modeling",
        "Developed efficient Tableau and Qlik Sense reports for analysis",
        "Created SQL reporting data layers with the help of views and stored procs",
        "Managed data backups, AWS server setup, and ELK stack for dashboards",
        "Conducted Machine Learning analysis in Kibana for energy predictions"
      ]
    },
    {
      company: "Department of Labor, Washington DC",
      period: "November 2014 – February 2017",
      title: "Data Engineer",
      responsibilities: [
        "Transformed VBA reports into SSRS reports with SQL",
        "Automated data retrieval from Weather Underground REST APIs using Python",
        "Designed ETL processes for IBM DB2 to SQL Server data transfer",
        "Scripted DB2 table definitions for migration",
        "Led report development and data warehousing",
        "Adapted DB2 scripts to SQL Server",
        "Improved SQL Server database performance and queries",
        "Converted MS Access reports to SQL Server Reporting Services",
        "Translated MS Access Visual Basic code into T-SQL",
        "Explored NoSQL databases for large datasets",
        "Migrated SQL Server tables to AWS via Azure Migration Wizard",
        "Contributed to ICD10 modification in Java",
        "Analyzed ECS data and maintained data quality",
        "Led data quality project for ECS business processes",
        "Resolved database anomalies and facilitated changes",
        "Organized developer-analyst meetings for data quality assurance"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-terminal-background text-terminal-foreground">
      <TerminalHeader />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            {showPrompt && (
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
                    Proficient in cloud services, programming, and databases, I excel in data modeling 
                    and reporting. My experience extends to Big Data and machine learning for anomaly 
                    detection. With industry experience in energy (utility), cybersecurity, and finance, 
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
                    <p className="text-terminal-foreground/80">BSc in Civil Engineering</p>
                    <p className="text-terminal-foreground/60 text-sm">Addis Ababa Institute of Technology (AAiT)</p>
                  </div>
                  <div>
                    <h3 className="text-terminal-accent-alt font-semibold">Certifications</h3>
                    <ul className="list-disc list-inside text-terminal-foreground/80 space-y-1">
                      <li>Certified in Querying Microsoft SQL Server 2012</li>
                      <li>Java Programming, Northern Virginia Community College</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Experience Card */}
              <Card className="bg-terminal-background border-terminal-accent/30">
                <CardHeader>
                  <CardTitle className="text-terminal-accent">Professional Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="space-y-3">
                      <div>
                        <h3 className="text-terminal-accent-alt font-semibold text-lg">{exp.company}</h3>
                        <p className="text-terminal-foreground/60">{exp.period}</p>
                        <p className="text-terminal-foreground/80 font-medium">{exp.title}</p>
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
