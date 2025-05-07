import { useEffect, useState } from "react";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalPrompt from "@/components/TerminalPrompt";

const Experience = () => {
  const [showContent, setShowContent] = useState(false);

  // Experience data
  const experiences = [
    {
      title: "Senior Data Engineer / Senior Full Stack Developer",
      company: "Google (Mandiant Cybersecurity)",
      period: "September 2021 – Present",
      description: [
        "Developed internal data pipelines for automating cybersecurity client onboarding workflows using AWS Databrew, reducing onboarding time by 40%. This included provisioning infrastructure for client-specific data ingestion and validation.",
        "Engineered a threat analytics dashboard for incident response teams, built with React, Node.js, and Snowflake, to provide real-time visibility into threat detection logs across enterprise environments.",
        "Designed and deployed full-stack security tooling for incident investigation using Flask/Django, with integration into Mandiant's proprietary data lake and internal policy engines.",
        "Automated the streaming of security event logs from Amazon S3 to Snowflake via Snowpipes, and abstracted ingestion logic behind a secure, API-driven microservices layer.",
        "Integrated SAML-based authentication and RBAC into internal security applications using Google Identity, ensuring compliance with SOC2 and ISO 27001 standards.",
        "Led development of interactive dashboards for threat intelligence analysts using React and Power BI, combining historical attack data with real-time alerts from Mandiant's internal threat telemetry.",
      ],
    },
    {
      title: "Senior Full Stack Developer / BI Developer",
      company: "AtSite Inc. (InSite)",
      period: "March 2017 – September 2021",
      description: [
        "Built an energy monitoring portal for commercial buildings using React, Node.js, and PostgreSQL, allowing users to visualize and compare real-time energy consumption by floor and system.",
        "Developed ETL pipelines using Apache Airflow and Python to aggregate data from IoT-based energy meters and third-party APIs, improving reporting latency by 60%.",
        "Designed interactive BI dashboards in Tableau for energy consultants to model HVAC efficiency, compare energy benchmarks, and identify cost-saving opportunities.",
        "Created a self-service reporting UI where clients could generate energy audits, load curves, and hourly trend visualizations—backed by APIs built in Express.js.",
        "Migrated legacy reporting systems to AWS (EC2, S3, Redshift), introducing autoscaling and failover support for critical infrastructure.",
        "Led the development of an IoT device management system, monitoring thousands of sensors in real-time and visualizing device health metrics in a web-based UI.",
      ],
    },
    {
      title: "Senior Data Engineer",
      company: "U.S. Department of Labor – Washington D.C.",
      period: "November 2014 – February 2017",
      description: [
        "Modernized legacy MS Access + VBA tools by building web-based data collection and reporting apps using HTML, CSS, JavaScript, and SQL Server, reducing reporting errors and centralizing data governance.",
        "Created a secure, scheduled ETL workflow in Python to collect labor statistics from external APIs and load them into SQL Server, eliminating manual spreadsheet aggregation.",
        "Developed internal portals to track workforce training outcomes, enabling departments to drill down into participant data and export performance metrics for federal oversight.",
        "Refactored and optimized stored procedures and views across multiple SQL Server databases, improving execution time for mission-critical reports by 30%.",
        "Migrated internal reporting databases to AWS RDS and set up cloud storage for archived datasets using S3, enhancing disaster recovery and long-term access.",
        "Integrated charting libraries and dynamic UI features into dashboards for internal analysts to explore labor compliance trends, grant utilization, and performance benchmarks.",
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-terminal-background text-terminal-foreground">
      <TerminalHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-2xl border border-terminal-accent/20">
            {/* Terminal Title Bar */}
            <div className="bg-gray-100 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-500">
                visitor@terminal ~ /experience
              </div>
            </div>

            <div className="terminal-container p-6 md:p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-terminal-accent mb-2">
                  <TerminalPrompt
                    text="$ cat experience.md"
                    className="text-terminal-accent-alt text-lg mb-3"
                  />
                  <div
                    className={`mt-4 transition-opacity duration-500 ${
                      showContent ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Career Experience
                  </div>
                </h1>
                <p
                  className={`text-terminal-foreground/70 transition-opacity duration-500 delay-100 ${
                    showContent ? "opacity-100" : "opacity-0"
                  }`}
                >
                  A timeline of my professional journey
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

              <div className="mt-8 pt-4 border-t border-terminal-accent/20 text-center">
                <p className="text-terminal-muted text-sm">
                  Type 'help' for more commands or navigate using the menu
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
