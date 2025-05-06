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
    title: 'Fullstack Software Engineer',
    description: 'Crafting responsive and intuitive user interfaces with modern web technologies',
  },
};

const RoleLayout = () => {
  const { role } = useParams<{ role: 'sde' | 'fse' }>();
  const { setCurrentRole } = useRole();

  useEffect(() => {
    if (role && (role === 'sde' || role === 'fse')) {
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
