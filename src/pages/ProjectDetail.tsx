import { useState, useEffect } from "react";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalPrompt from "@/components/TerminalPrompt";
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// Project details data
const projectDetails = {
  "from-checkout-to-chart": {
    title: "From Checkout to Chart: Real-Time Retail Analytics",
    subtitle: "Real-Time Retail Analytics with Kafka, BigQuery & Looker Studio",
    date: "2023-05-15",
    readTime: "8 min read",
    tags: ["Kafka", "BigQuery", "Looker Studio", "Debezium", "Real-time"],
    link: "#",
    repo: "#",
    content: `
## 🛒 The Problem: Sales Data Trapped in Transactional Systems

Department stores generate thousands of transactions daily — online, mobile, and in-store. This data lives in an OLTP SQL database optimized for quick inserts, not analytics. Running reports on it directly leads to performance issues and stale insights.

What was needed:
- Near-instant access to transactional data
- A scalable stream-based pipeline
- A visual, self-service dashboard for business stakeholders

## 🛠️ The Solution: Streaming Data Pipeline Architecture

Here's how we set up a modern streaming analytics architecture, enabling real-time retail insights:

### 🔄 Step 1: Change Data Capture with Debezium

We used Debezium (on top of Kafka Connect) to monitor the department store's PostgreSQL database. Debezium captures every INSERT, UPDATE, and DELETE from key tables like transactions, customers, and products.

**Why Debezium?**
It's low-latency, open-source, and integrates seamlessly with Kafka.

\`\`\`bash
# Debezium Kafka Connector Sample Config (simplified)
"database.hostname": "postgres.internal",
"table.include.list": "public.transactions",
"connector.class": "io.debezium.connector.postgresql.PostgresConnector",
\`\`\`

CDC turns your database into a live event source.

### 🧵 Step 2: Streaming with Apache Kafka

Each change event from Debezium is streamed into Kafka topics like transactions-topic, customers-topic, etc.
Kafka decouples the producers (the SQL database) from the consumers (analytics systems), enabling real-time parallel processing.

### ☁️ Step 3: Data Staging in Google Cloud Storage (Optional)

To ensure downstream flexibility and recoverability, we wrote the Kafka events into Google Cloud Storage (GCS) in Avro/JSON format using Kafka Connect + GCS Sink.

This provides:
- A replayable audit trail of all sales data
- Batch processing options in case real-time isn't needed

### 🧮 Step 4: Real-Time Warehousing in BigQuery

We loaded the events from GCS into BigQuery using Dataflow templates and BigQuery streaming inserts for minimal latency.

BigQuery enabled us to:
- Run complex analytical SQL on fresh data
- Join live sales data with static product & customer tables
- Power aggregated KPIs, time-series charts, and fraud detection

Example query to get best-selling products in the last 24 hours:

\`\`\`sql
SELECT product_id, COUNT(*) as units_sold
FROM \`project.dataset.transactions\`
WHERE timestamp > TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 1 DAY)
GROUP BY product_id
ORDER BY units_sold DESC
LIMIT 10;
\`\`\`

### 📊 Step 5: Visualizing with Looker Studio (Google BI)

We connected BigQuery to Looker Studio, where we built an interactive, live dashboard that includes:
- 💰 Total Sales, Avg Order Value
- 🔥 Best-Selling Products
- 📈 Hourly Sales Trends
- 🛍️ Region- or Store-Based Heatmaps
- 🚨 Fraud Alerts (e.g. > $1000 single transaction)

Filters let managers view data by date, store, product category, or channel (online/in-store/mobile).
Looker Studio made it easy for non-technical users to explore the data without SQL.

## ⚙️ Architecture Diagram

Here's a visual of the end-to-end pipeline:

\`\`\`
   [ PostgreSQL ]
         │
   [ Debezium CDC ]
         │
   [ Apache Kafka ]
         │
 ┌──────┴────────┐
 │               │
▼                ▼
[GCS Sink]     [Dataflow / Kafka Consumer]
    │                │
    ▼                ▼
[Google Cloud Storage] → [BigQuery]
                                │
                                ▼
                       [Looker Studio Dashboard]
\`\`\`

## 🧠 Key Insights & Benefits

- ✅ Real-time visibility: Store managers no longer wait for end-of-day reports
- ✅ Scalable: Kafka handles volume spikes easily (e.g., holiday sales)
- ✅ Actionable: Live dashboards help detect fraud and manage inventory
- ✅ Modular: Each component is independently scalable and replaceable

## 🧪 What's Next?

Here's how we plan to expand:
- 📈 Machine Learning Models in BigQuery ML to forecast sales
- 📦 Restocking Recommendations based on sales velocity
- 📍 Geospatial Analysis using store locations & customer heatmaps
- 🚨 Real-time Alerting via Slack or SMS using Pub/Sub + Cloud Functions

## ✨ Final Thoughts

This project showed how streaming technologies like Kafka and Debezium, combined with cloud-native analytics (BigQuery, Looker Studio), can transform transactional retail data into powerful business intelligence. From checkout to chart, we gave stakeholders real-time visibility into the pulse of their business.
    `
  }
};

const ProjectDetail = () => {
  const [showContent, setShowContent] = useState(false);
  const { projectId } = useParams<{ projectId: string }>();
  
  const project = projectId ? projectDetails[projectId] : null;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-terminal-background text-terminal-foreground">
        <TerminalHeader />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="w-full max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-terminal-accent/20">
            <div className="bg-gray-100 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex-1 text-center text-sm text-gray-500">
                  visitor@terminal ~ /projects/not-found
                </div>
              </div>
              <div className="terminal-container p-6 md:p-8">
                <Link to="/projects" className="inline-flex items-center text-terminal-accent hover:text-terminal-accent-alt mb-6">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Projects
                </Link>
                <div className="text-center py-12">
                  <h1 className="text-3xl font-bold text-terminal-accent mb-4">Project Not Found</h1>
                  <p className="text-terminal-foreground/70">The project you're looking for doesn't exist or has been moved.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

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
                visitor@terminal ~ /projects/{projectId}
              </div>
            </div>

            <div className="terminal-container p-6 md:p-8">
              <Link to="/projects" className="inline-flex items-center text-terminal-accent hover:text-terminal-accent-alt mb-6">
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
              </Link>
              
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-terminal-accent mb-2">
                  <TerminalPrompt 
                    text={`$ cat project_${projectId}.md`}
                    className="text-terminal-accent-alt text-lg mb-3"
                  />
                  <div className={`mt-4 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                    {project.title}
                  </div>
                </h1>
                <p className={`text-terminal-foreground/70 transition-opacity duration-500 delay-100 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                  {project.subtitle}
                </p>
                
                <div className={`flex flex-wrap items-center text-sm text-terminal-foreground/60 mt-4 gap-4 ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 delay-200`}>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{project.readTime}</span>
                  </div>
                </div>
                
                <div className={`flex flex-wrap gap-2 mt-4 ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 delay-300`}>
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="flex items-center text-xs px-2 py-1 rounded-md bg-terminal-background border border-terminal-accent/40 text-terminal-accent"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`flex space-x-4 mt-4 ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 delay-400`}>
                  <a 
                    href={project.link}
                    className="text-terminal-accent hover:text-terminal-accent-alt flex items-center text-sm"
                  >
                    <ExternalLink size={14} className="mr-1" /> Demo
                  </a>
                  <a 
                    href={project.repo}
                    className="text-terminal-accent hover:text-terminal-accent-alt flex items-center text-sm"
                  >
                    <Github size={14} className="mr-1" /> Code
                  </a>
                </div>
              </div>
              
              <div className={`prose prose-invert max-w-none mt-8 ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 delay-500`}>
                <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br>') }} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
