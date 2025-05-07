import { useState, useEffect } from "react";
import TerminalPrompt from "@/components/TerminalPrompt";
import { useRole } from "@/contexts/RoleContext";
import { roleConfig } from "@/components/RoleLayout";

// Role-specific experience data
const experienceData = {
  sde: [
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
  ],
  fse: [
    {
      title: "Full Stack Developer",
      company: "Mandiant Cybersecurity (Acquired by Google)",
      period: "January 2024 – Present",
      description: [
        "Engineered a threat analytics dashboard for incident response teams, built with React, Node.js, and Snowflake, to provide real-time visibility into threat detection logs across enterprise environments.",
        "Designed and deployed full-stack security tooling for incident investigation using Flask/Django, with integration into Mandiant's proprietary data lake and internal policy engines.",
        "Integrated SAML-based authentication and RBAC into internal security applications using Google Identity, ensuring compliance with SOC2 and ISO 27001 standards.",
        "Led development of interactive dashboards for threat intelligence analysts using React and Power BI, combining historical attack data with real-time alerts from Mandiant's internal threat telemetry.",
        "Implemented responsive UI components and data visualization tools for security analysts to track incident response metrics and threat intelligence.",
        "Collaborated with UX designers to create intuitive interfaces for complex security workflows and data exploration."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Kohls",
      period: "January 2024 - September 2024",
      description: [
        "Developed front-end components for retail analytics dashboards using React and TypeScript",
        "Built RESTful APIs using Node.js to connect front-end applications with backend data services",
        "Implemented responsive UI designs for mobile and desktop retail applications",
        "Collaborated with UX designers to create intuitive user interfaces for retail data visualization",
        "Integrated real-time data streams from Kafka into interactive web dashboards"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Trilogy Education (Acquired by 2U)",
      period: "September 2018 - January 2024",
      description: [
        "Developed responsive web interfaces for educational platforms using React and Node.js",
        "Created interactive dashboards for student progress tracking and performance visualization",
        "Built RESTful APIs to connect front-end applications with backend data services",
        "Implemented authentication and authorization systems for educational platforms",
        "Designed and developed user interfaces for student engagement and learning management systems"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Atsite (moved to InSite)",
      period: "March 2017 – August 2018",
      description: [
        "Built an energy monitoring portal for commercial buildings using React, Node.js, and PostgreSQL, allowing users to visualize and compare real-time energy consumption by floor and system.",
        "Created a self-service reporting UI where clients could generate energy audits, load curves, and hourly trend visualizations—backed by APIs built in Express.js.",
        "Developed responsive web interfaces for building management systems that displayed real-time sensor data and control systems.",
        "Implemented front-end architecture using React, Redux, and TypeScript with comprehensive test coverage using Jest and React Testing Library.",
        "Designed and built RESTful APIs using Node.js and Express to serve data to front-end applications from various backend systems.",
        "Led the development of an IoT device management system, monitoring thousands of sensors in real-time and visualizing device health metrics in a web-based UI."
      ]
    },
    {
      title: "Web Developer",
      company: "U.S. Department of Labor",
      period: "November 2014 – February 2017",
      description: [
        "Modernized legacy MS Access + VBA tools by building web-based data collection and reporting apps using HTML, CSS, JavaScript, and SQL Server.",
        "Developed internal portals to track workforce training outcomes, enabling departments to drill down into participant data and export performance metrics.",
        "Created responsive web interfaces for internal users to access and visualize labor statistics and program performance data.",
        "Implemented data visualization components using D3.js and Chart.js to display complex statistical information in an accessible format.",
        "Built accessible web applications following Section 508 compliance requirements for government systems.",
        "Integrated charting libraries and dynamic UI features into dashboards for internal analysts to explore labor compliance trends, grant utilization, and performance benchmarks."
      ]
    }
  ],
  bi: [
    {
      title: "BI Developer",
      company: "Mandiant Cybersecurity (Acquired by Google)",
      period: "January 2024 – Present",
      description: [
        "Developed data quality reports using AWS Databrew for Mandiant client onboarding, reducing onboarding time by 40%.",
        "Created interactive dashboards in Power BI for threat intelligence analysts, combining historical attack data with real-time alerts.",
        "Designed KPI dashboards for security operations teams to monitor incident response metrics and team performance.",
        "Built custom data models in Power BI to analyze security incident patterns and identify emerging threats across client environments.",
        "Implemented automated reporting solutions for executive stakeholders to track security posture and compliance metrics.",
        "Collaborated with data engineers to optimize data pipelines for business intelligence consumption and reporting."
      ]
    },
    {
      title: "BI Developer",
      company: "Kohls",
      period: "January 2024 - September 2024",
      description: [
        "Designed and implemented retail analytics dashboards using Power BI and Tableau",
        "Created data models to analyze sales performance, inventory turnover, and customer behavior",
        "Developed automated reporting solutions for retail executives and store managers",
        "Built interactive visualizations to track key retail metrics and identify sales trends",
        "Collaborated with data engineers to optimize data pipelines for business intelligence consumption"
      ]
    },
    {
      title: "BI Developer",
      company: "Trilogy Education (Acquired by 2U)",
      period: "September 2018 - January 2024",
      description: [
        "Wrote and automated multiple reporting SQL queries against snowflake database to generate student progress reports",
        "Designed Tableau dashboards to track core KPI's like Attendance and Assignment",
        "Created interactive visualizations for educational performance metrics and student engagement",
        "Developed data models to analyze student performance and identify at-risk learners",
        "Built executive dashboards showing program effectiveness and student outcomes"
      ]
    },
    {
      title: "BI Developer",
      company: "Atsite (moved to InSite)",
      period: "March 2017 – August 2018",
      description: [
        "Designed interactive BI dashboards in Tableau for energy consultants to model HVAC efficiency, compare energy benchmarks, and identify cost-saving opportunities.",
        "Created a self-service reporting system for clients to generate energy audits and consumption analytics.",
        "Developed ETL processes to transform raw sensor data into actionable business metrics for energy management.",
        "Built custom visualizations in Tableau to display building performance metrics and energy consumption patterns.",
        "Implemented data models to support comparative analysis of energy usage across different building types and systems.",
        "Created executive dashboards showing ROI on energy efficiency investments and sustainability metrics."
      ]
    },
    {
      title: "Data Analyst",
      company: "U.S. Department of Labor",
      period: "November 2014 – February 2017",
      description: [
        "Created a secure, scheduled ETL workflow to collect labor statistics from external APIs and load them into SQL Server for reporting.",
        "Developed dashboards for internal analysts to explore labor compliance trends, grant utilization, and performance benchmarks.",
        "Built statistical models to forecast workforce trends and program outcomes for budget planning.",
        "Designed reporting solutions to track federal grant performance and compliance metrics across departments.",
        "Created data visualizations to communicate complex labor statistics to non-technical stakeholders.",
        "Implemented automated reporting processes to reduce manual data compilation and improve data accuracy."
      ]
    }
  ],
  da: [
    {
      title: "Data Analyst",
      company: "Google (Mandiant Cybersecurity)",
      period: "September 2021 – Present",
      description: [
        "Analyzed and identified anomalies in security logs using statistical methods and machine learning techniques.",
        "Created data quality reports for client onboarding, ensuring completeness and accuracy of security telemetry data.",
        "Performed trend analysis on security incidents to identify patterns and potential areas for proactive defense.",
        "Developed analytical models to prioritize security alerts based on risk scoring and historical impact.",
        "Collaborated with threat intelligence teams to correlate external threat data with internal security metrics.",
        "Prepared analytical reports for security leadership on emerging threats and incident response effectiveness."
      ]
    },
    {
      title: "Data Analyst",
      company: "AtSite Inc. (InSite)",
      period: "March 2017 – September 2021",
      description: [
        "Analyzed energy consumption data to identify efficiency opportunities and anomalies in building systems.",
        "Performed statistical analysis to benchmark building performance against industry standards and similar properties.",
        "Created predictive models for energy usage based on weather patterns, occupancy, and historical consumption.",
        "Developed custom reports for clients showing energy savings and ROI from implemented efficiency measures.",
        "Analyzed sensor data to identify equipment failures and maintenance needs before critical failures occurred.",
        "Collaborated with engineering teams to validate energy models and verify savings calculations."
      ]
    },
    {
      title: "Data Analyst",
      company: "U.S. Department of Labor – Washington D.C.",
      period: "November 2014 – February 2017",
      description: [
        "Analyzed workforce training program data to measure effectiveness and outcomes across different demographics.",
        "Created statistical reports on labor market trends and program performance for federal oversight.",
        "Performed data quality assessments on departmental databases and recommended improvements.",
        "Developed analytical models to identify at-risk participants in workforce development programs.",
        "Analyzed grant utilization patterns to optimize resource allocation and improve program outcomes.",
        "Prepared data visualizations and reports for congressional briefings and public-facing publications."
      ]
    }
  ],
  ad: [
    {
      title: "Data Architect",
      company: "Google (Mandiant Cybersecurity)",
      period: "September 2021 – Present",
      description: [
        "Designed data architecture for security telemetry ingestion, processing, and analysis at enterprise scale.",
        "Developed data models for Snowflake implementation to support security analytics and threat intelligence workflows.",
        "Created data governance frameworks for handling sensitive security data across multi-tenant environments.",
        "Designed API-driven microservices architecture for security data ingestion and processing pipelines.",
        "Implemented data quality monitoring systems to ensure integrity of security telemetry across the platform.",
        "Collaborated with security engineers to design schemas optimized for threat detection and incident response."
      ]
    },
    {
      title: "Data Architect",
      company: "AtSite Inc. (InSite)",
      period: "March 2017 – September 2021",
      description: [
        "Designed data architecture for IoT sensor networks and building management systems integration.",
        "Developed data models for time-series analytics on building performance and energy consumption metrics.",
        "Created cloud-based data architecture on AWS, including data lake implementation for historical analytics.",
        "Implemented data integration patterns for connecting disparate building systems and third-party APIs.",
        "Designed schemas and data models to support real-time analytics and historical trend analysis.",
        "Led migration from legacy data warehouses to modern cloud-based analytics platforms."
      ]
    },
    {
      title: "Database Developer",
      company: "U.S. Department of Labor – Washington D.C.",
      period: "November 2014 – February 2017",
      description: [
        "Designed database schemas for workforce development tracking systems and federal reporting requirements.",
        "Migrated legacy databases to AWS RDS and implemented cloud-based disaster recovery solutions.",
        "Developed data models to support cross-departmental reporting and program evaluation.",
        "Created ETL processes for integrating data from multiple federal and state systems.",
        "Implemented data quality frameworks and validation processes for federal reporting systems.",
        "Designed database architecture to support compliance with federal security and privacy requirements."
      ]
    }
  ]
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
