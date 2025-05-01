import { useState, useEffect } from "react";
import TerminalPrompt from "@/components/TerminalPrompt";
import { useRole } from "@/contexts/RoleContext";
import { roleConfig } from "@/components/RoleLayout";

// Role-specific experience data
const experienceData = {
  sde: [
    {
      title: "Senior Data Engineer",
      company: "Google (Mandiant Cyber Security)",
      period: "September 2021 - present",
      description: [
        "Developed data quality reports using AWS Databrew for Mandiant client onboarding, reducing onboarding time by 40%",
        "Collaborated with DevOps for deployment and troubleshooting of GCP data systems",
        "Automated threat log imports from Amazon S3 to Snowflake tables using Snowpipes",
        "Extracted data from GCP BigQuery to generate IR billing reports",
        "Analyzed and identified anomalies in IR logs using Machine Learning",
      ],
    },
    {
      title: "Data Engineer",
      company: "DataSystems Ltd.",
      period: "2017 - 2020",
      description: [
        "Developed ETL processes using SQL and Python",
        "Created data warehousing solutions on cloud platforms",
        "Implemented data quality checks and monitoring systems",
      ],
    },
    {
      title: "Database Developer",
      company: "InnovateTech",
      period: "2015 - 2017",
      description: [
        "Designed relational database schemas for enterprise applications",
        "Wrote complex SQL queries and stored procedures",
        "Performed database performance tuning and optimization",
      ],
    },
  ],
  fse: [
    {
      title: "Fullstack Software Engineer",
      company: "WebTech Solutions",
      period: "2020 - Present",
      description: [
        "Developed responsive web applications using React and TypeScript",
        "Implemented UI components following design system guidelines",
        "Optimized application performance and reduced load times by 35%",
        "Collaborated with UX designers to create intuitive user interfaces",
      ],
    },
    {
      title: "UI Developer",
      company: "Creative Digital Agency",
      period: "2018 - 2020",
      description: [
        "Built interactive web experiences using modern JavaScript frameworks",
        "Created animations and transitions for enhanced user experience",
        "Developed mobile-first responsive layouts",
      ],
    },
    {
      title: "Web Developer",
      company: "StartupHub",
      period: "2016 - 2018",
      description: [
        "Developed and maintained client websites using HTML, CSS, and JavaScript",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Worked with content management systems to create customizable templates",
      ],
    },
  ],
};

const RoleExperience = () => {
  const [showContent, setShowContent] = useState(false);
  const { currentRole } = useRole();

  // Default to SDE if no role is selected
  const role = currentRole || "sde";
  const experiences = experienceData[role];
  const roleTitle = roleConfig[role]?.title || "";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-lg overflow-hidden shadow-2xl border border-terminal-accent/20">
        {/* Terminal Title Bar */}
        <div className="bg-[#2D2D2D] px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="flex-1 text-center text-sm text-gray-400">
            visitor@terminal ~ /{role}/experience
          </div>
        </div>

        <div className="terminal-container p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-terminal-accent mb-2">
              <TerminalPrompt
                text={`$ cat ${role}_experience.md`}
                className="text-terminal-accent-alt text-lg mb-3"
              />
              <div
                className={`mt-4 transition-opacity duration-500 ${
                  showContent ? "opacity-100" : "opacity-0"
                }`}
              >
                {roleTitle} Experience
              </div>
            </h1>
            <p
              className={`text-terminal-foreground/70 transition-opacity duration-500 delay-100 ${
                showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              A timeline of my professional journey as a {roleTitle}
            </p>
          </div>

          <div className="space-y-8 mt-10">
            {showContent &&
              experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`border-l-2 border-terminal-accent pl-4 py-2 transition-all duration-500 animate-fadeIn`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-terminal-accent-alt">
                      {exp.title}{" "}
                      <span className="text-terminal-foreground/70">
                        @ {exp.company}
                      </span>
                    </h3>
                    <span className="text-sm text-terminal-muted">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-terminal-foreground/90 mt-2 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm md:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleExperience;
