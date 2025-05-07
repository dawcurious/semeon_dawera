import { useEffect, useState } from "react";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalPrompt from "@/components/TerminalPrompt";

const Experience = () => {
  const [showContent, setShowContent] = useState(false);

  // Experience data
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "Mandiant Cybersecurity (Acquired by Google)",
      period: "January 2024 – Present",
      description: [
        "Built ETL pipelines using Apache Airflow, AWS Glue, and PySpark to ingest and transform massive volumes of cybersecurity telemetry for threat intelligence reporting",
        "Developed data quality reports using Amazon Web Services (AWS) Databrew for Mandiant client onboarding, reducing onboarding time by 40%.",
        "Collaborated with DevOps for deployment and troubleshooting of Google Cloud Platform (GCP) data systems.",
        "Automated threat log imports from Amazon S3 to Snowflake tables using Snowpipes.",
        "Extracted data from GCP BigQuery to generate IR billing reports.",
        "Analyzed and identified anomalies in Incident Response (IR) logs using Machine Learning (ML).",
        "Created Pyspark framework for data transformations according to Mandiant's specifications.",
        "Automated data transformation deployments with Jenkins and Docker.",
        "Integrated Managed Defense data using Google's internal ETL tool."
      ]
    },
    {
      title: "Data Engineer Consulting",
      company: "Kohls",
      period: "January 2024 - September 2024",
      description: [
        "Engineering the migration of Apache airflow 2 jobs to Apache Airflow 2",
        "CI/CD automation via Jenkins to help with migration to Airflow 2",
        "Created Airflow 2 operators and modules to be shared across 60+ engineers",
        "Led a new project to stream retail sales transactional data using MySQL with CDC (Change Data Capture), Kafka and BigQuery",
        "Helped troubleshoot failing Airflow Dags and worked with DevOps on release steps"
      ]
    },
    {
      title: "Senior Data Engineer/ BI Developer",
      company: "Trilogy Education (Acquired by 2U)",
      period: "September 2018 - January 2024",
      description: [
        "Wrote and automated multiple reporting SQL queries against snowflake database to generate student progress reports",
        "Designed Tableau dashboards to track core KPI's like Attendance and Assignment",
        "Wrote Salesforce SOQL queries then created data pipeline to run those queries via simple_salesforce python package to incrementally pull 2U's Sales data to Snowflake",
        "Created and automated data pipeline to pull data from 2U's Student Portal using Apache Airflow",
        "Created a data model to store student engagement and performance like Quiz and Test Scores, Course Completion Rate and GPA"
      ]
    },
    {
      title: "Senior Data Engineer / BI Developer",
      company: "Atsite (moved to InSite)",
      period: "March 2017 – August 2018",
      description: [
        "Automated data retrieval from Weather Underground REST APIs using Python",
        "Built ETL pipelines using Airflow, Python, and Amazon Redshift to handle multi-tenant IoT sensor data from 50+ commercial buildings",
        "Managed data integration using Apache Airflow for diverse sources into Amazon Redshift.",
        "Automated IoT device data flow and optimized energy bill data handling.",
        "Designed fault-tolerant Airflow ETL workflows for frequent data updates.",
        "Engineered Python-based data pipelines for meter readings.",
        "Conducted rigorous SQL testing for data quality.",
        "Led the Unified Data Store project for data modeling.",
        "Developed efficient Tableau and Qlik Sense reports for analysis.",
        "Created SQL reporting data layers with the help of views and stored procs.",
        "Managed data backups, AWS server setup, and ELK stack for dashboards.",
        "Conducted Machine Learning analysis in Kibana for energy consumption predictions."
      ]
    },
    {
      title: "Data Analyst",
      company: "U.S. Department of Labor",
      period: "November 2014 – February 2017",
      description: [
        "Transformed VBA reports into SSRS reports with SQL.",
        "Designed ETL processes for IBM DB2 to SQL Server data transfer.",
        "Scripted DB2 table definitions for migration.",
        "Led report development and data warehousing.",
        "Adapted DB2 scripts to SQL Server.",
        "Improved SQL Server database performance and queries.",
        "Converted MS Access reports to SQL Server Reporting Services.",
        "Translated MS Access Visual Basic code into T-SQL.",
        "Explored NoSQL databases for large datasets.",
        "Migrated SQL Server tables to AWS via Azure Migration Wizard.",
        "Contributed to ICD10 modification in Java.",
        "Analyzed ECS data and maintained data quality.",
        "Led data quality project for ECS business processes.",
        "Resolved database anomalies and facilitated changes.",
        "Organized developer-analyst meetings for data quality assurance"
      ]
    }
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
          <div className="bg-[#2D2D2D] px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400">
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
                <div className={`mt-4 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                  Career Experience
                </div>
              </h1>
              <p className={`text-terminal-foreground/70 transition-opacity duration-500 delay-100 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                A timeline of my professional journey
              </p>
            </div>

            <div className="space-y-8 mt-10">
              {showContent && experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`border-l-2 border-terminal-accent pl-4 py-2 transition-all duration-500 animate-fadeIn`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-terminal-accent-alt">
                      {exp.title} <span className="text-terminal-foreground/70">@ {exp.company}</span>
                    </h3>
                    <span className="text-sm text-terminal-muted">{exp.period}</span>
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
