import { useState, useEffect } from "react";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalPrompt from "@/components/TerminalPrompt";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [showContent, setShowContent] = useState(false);

  // Sample articles data
  const articles = [
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
                visitor@terminal ~ /articles
              </div>
            </div>

            <div className="terminal-container p-6 md:p-8">
              {/* Back Button */}
              <Link to="/" className="inline-flex items-center text-terminal-accent hover:text-terminal-accent-alt mb-6">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Link>

              <div className="mb-8">
                <h1 className="text-3xl font-bold text-terminal-accent mb-2">
                  <TerminalPrompt
                    text="$ cat articles.md"
                    className="text-terminal-accent-alt text-lg mb-3"
                  />
                  <div className={`mt-4 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                    Articles & Insights
                  </div>
                </h1>
                <p className={`text-terminal-foreground/70 transition-opacity duration-500 delay-100 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                  Thoughts, tutorials, and technical deep dives
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
      </main>

      {/* Social Media Links */}
      <footer className="bg-[#2D2D2D]/50 border-t border-terminal-accent/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-terminal-foreground/60 text-sm mb-4 md:mb-0">
              © 2023 Semeon Dawera. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-terminal-foreground/60 hover:text-terminal-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-terminal-foreground/60 hover:text-terminal-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-terminal-foreground/60 hover:text-terminal-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="mailto:semeon.dawera@gmail.com" className="text-terminal-foreground/60 hover:text-terminal-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Articles;
