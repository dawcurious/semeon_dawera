import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import TerminalHeader from '@/components/TerminalHeader';

// Role-specific content and configurations
export const roleConfig = {
  sde: {
    title: 'Senior Data Engineer',
    description: 'Specializing in data pipelines, ETL processes, and data warehousing',
  },
  fse: {
    title: 'Full Stack Web Engineer',
    description: 'Building end-to-end web applications with modern frameworks and technologies',
  },
  bi: {
    title: 'BI Engineer',
    description: 'Creating business intelligence solutions and data visualizations for decision-making',
  },
  da: {
    title: 'Data Analyst',
    description: 'Analyzing data to provide insights and support business decisions',
  },
  ad: {
    title: 'Data Architect',
    description: 'Designing and implementing enterprise data management systems and infrastructure',
  },
};

const RoleLayout = () => {
  const { role } = useParams<{ role: 'sde' | 'fse' | 'bi' | 'da' | 'ad' }>();
  const { setCurrentRole } = useRole();

  useEffect(() => {
    if (role && (role === 'sde' || role === 'fse' || role === 'bi' || role === 'da' || role === 'ad')) {
      setCurrentRole(role);
    }
  }, [role, setCurrentRole]);

  return (
    <div className="min-h-screen flex flex-col bg-terminal-background text-terminal-foreground">
      <TerminalHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RoleLayout;
