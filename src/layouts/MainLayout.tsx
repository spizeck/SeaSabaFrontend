import React, {ReactNode} from 'react';
import Header from '@/components/Header';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow mx-auto px-2 py-2">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
