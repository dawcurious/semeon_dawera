import { useState, useEffect } from "react";
import TerminalPrompt from "@/components/TerminalPrompt";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { useRole } from "@/contexts/RoleContext";
import { roleConfig } from "@/components/RoleLayout";
import { Link } from "react-router-dom";

// Role-specific articles data
const articlesData = {
  sde: [
    {
      title: "Optimizing Data Pipelines for Scale",
      date: "2023-05-15",
      readTime: "8 min read",
      tags: ["Data Engineering", "ETL", "Performance"],
      excerpt: "Learn how to design and optimize data pipelines that can handle terabytes of data efficiently.",
      link: "#"
    },
    {
      title: "SQL Query Performance: Best Practices",
      date: "2023-03-22",
      readTime: "6 min read",
      tags: ["SQL", "Performance", "Database"],
      excerpt: "Discover techniques to improve your SQL queries and make them run faster.",
      link: "#"
    },
    {
      title: "Introduction to Data Warehousing",
      date: "2023-01-10",
      readTime: "10 min read",
      tags: ["Data Warehouse", "Architecture", "Big Data"],
      excerpt: "A comprehensive guide to understanding modern data warehousing concepts and implementations.",
      link: "#"
    },
    {
      title: "Real-time Analytics with Streaming Data",
      date: "2022-11-05",
      readTime: "7 min read",
      tags: ["Streaming", "Real-time", "Analytics"],
      excerpt: "How to build systems that process and analyze data in real-time for immediate insights.",
      link: "#"
    }
  ],
  fse: [
    {
      title: "Building Responsive UIs with React",
      date: "2023-06-10",
      readTime: "9 min read",
      tags: ["React", "UI/UX", "Frontend"],
      excerpt: "A guide to creating responsive and adaptive user interfaces using React and modern CSS techniques.",
      link: "#"
    },
    {
      title: "State Management in Modern Web Apps",
      date: "2023-04-18",
      readTime: "7 min read",
      tags: ["React", "State Management", "Redux"],
      excerpt: "Comparing different state management approaches and when to use each one.",
      link: "#"
    },
    {
      title: "Optimizing Web Performance",
      date: "2023-02-05",
      readTime: "8 min read",
      tags: ["Performance", "Web Vitals", "Optimization"],
      excerpt: "Techniques to improve loading times and user experience in web applications.",
      link: "#"
    },
    {
      title: "Accessibility in Web Development",
      date: "2022-12-12",
      readTime: "6 min read",
      tags: ["Accessibility", "a11y", "Frontend"],
      excerpt: "Best practices for building inclusive web applications that work for everyone.",
      link: "#"
    }
  ],
  bi: [
    {
      title: "Data Visualization Best Practices",
      date: "2023-06-20",
      readTime: "7 min read",
      tags: ["BI", "Visualization", "Dashboards"],
      excerpt: "How to create effective data visualizations that communicate insights clearly.",
      link: "#"
    },
    {
      title: "Building Interactive BI Dashboards",
      date: "2023-04-15",
      readTime: "8 min read",
      tags: ["BI", "Dashboards", "Interactivity"],
      excerpt: "Techniques for creating interactive dashboards that engage users and provide valuable insights.",
      link: "#"
    },
    {
      title: "ETL vs ELT for Business Intelligence",
      date: "2023-02-10",
      readTime: "6 min read",
      tags: ["BI", "ETL", "ELT", "Data Integration"],
      excerpt: "Comparing traditional ETL with modern ELT approaches for business intelligence workflows.",
      link: "#"
    },
    {
      title: "Self-Service BI Implementation",
      date: "2022-12-05",
      readTime: "9 min read",
      tags: ["BI", "Self-Service", "Data Democratization"],
      excerpt: "How to implement self-service BI tools that empower business users to access insights.",
      link: "#"
    }
  ],
  da: [
    {
      title: "Statistical Analysis Techniques for Data Analysts",
      date: "2023-06-25",
      readTime: "10 min read",
      tags: ["Statistics", "Data Analysis", "Python"],
      excerpt: "Essential statistical methods every data analyst should know and how to apply them.",
      link: "#"
    },
    {
      title: "Data Cleaning Best Practices",
      date: "2023-04-20",
      readTime: "7 min read",
      tags: ["Data Cleaning", "Data Quality", "Pandas"],
      excerpt: "How to efficiently clean and prepare data for analysis to ensure accurate results.",
      link: "#"
    },
    {
      title: "Exploratory Data Analysis Workflow",
      date: "2023-02-15",
      readTime: "8 min read",
      tags: ["EDA", "Data Analysis", "Visualization"],
      excerpt: "A structured approach to exploring datasets and uncovering patterns and insights.",
      link: "#"
    },
    {
      title: "Building Effective Data Reports",
      date: "2022-12-10",
      readTime: "6 min read",
      tags: ["Reporting", "Data Storytelling", "Communication"],
      excerpt: "How to create data reports that effectively communicate findings to stakeholders.",
      link: "#"
    }
  ],
  ad: [
    {
      title: "Designing Scalable Data Architectures",
      date: "2023-06-30",
      readTime: "11 min read",
      tags: ["Data Architecture", "Scalability", "Cloud"],
      excerpt: "Principles and patterns for designing data architectures that can scale with your business.",
      link: "#"
    },
    {
      title: "Data Mesh vs Data Lake vs Data Warehouse",
      date: "2023-04-25",
      readTime: "9 min read",
      tags: ["Data Architecture", "Data Mesh", "Data Lake"],
      excerpt: "Comparing modern architectural approaches for enterprise data management.",
      link: "#"
    },
    {
      title: "Data Governance Framework Design",
      date: "2023-02-20",
      readTime: "8 min read",
      tags: ["Data Governance", "Compliance", "Data Quality"],
      excerpt: "How to design and implement effective data governance frameworks for your organization.",
      link: "#"
    },
    {
      title: "Real-time Data Architecture Patterns",
      date: "2022-12-15",
      readTime: "7 min read",
      tags: ["Real-time", "Streaming", "Event-driven"],
      excerpt: "Architectural patterns for building systems that process and analyze data in real-time.",
      link: "#"
    }
  ]
};

const RoleArticles = () => {
  const [showContent, setShowContent] = useState(false);
  const { currentRole } = useRole();

  // Default to SDE if no role is selected
  const role = currentRole || 'sde';
  const articles = articlesData[role];
  const roleTitle = roleConfig[role]?.title || '';

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
            visitor@terminal ~ /{role}/articles
          </div>
        </div>

        <div className="terminal-container p-6 md:p-8">
          {/* Back Button */}
          <Link to={`/${role}`} className="inline-flex items-center text-terminal-accent hover:text-terminal-accent-alt mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to {roleTitle} Home
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-terminal-accent mb-2">
              <TerminalPrompt
                text={`$ cat ${role}_articles.md`}
                className="text-terminal-accent-alt text-lg mb-3"
              />
              <div className={`mt-4 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                {roleTitle} Articles & Insights
              </div>
            </h1>
            <p className={`text-terminal-foreground/70 transition-opacity duration-500 delay-100 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
              Thoughts, tutorials, and technical deep dives related to {roleTitle}
            </p>
          </div>

          <div className="space-y-8 mt-10">
            {showContent && articles.map((article, index) => (
              <div
                key={index}
                className="border-l-2 border-terminal-accent pl-4 py-2 transition-all duration-500 animate-fadeIn hover:bg-terminal-background/30"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <a href={article.link} className="block">
                  <h3 className="text-xl font-semibold text-terminal-accent-alt mb-2">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap items-center text-sm text-terminal-foreground/60 mb-3 gap-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <p className="text-terminal-foreground/80 mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="flex items-center text-xs px-2 py-1 rounded-md bg-terminal-background border border-terminal-accent/40 text-terminal-accent"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-terminal-accent/20 text-center">
            <p className="text-terminal-muted text-sm">
              Run 'article --read [title]' for full content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleArticles;
