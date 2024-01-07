import React, {ReactNode, useEffect} from 'react';
import {useRouter} from 'next/router'
import Header from '@/components/Header';
import Copyright from "@/components/Copyright";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  const router = useRouter();

  useEffect(() => {
    // TODO: check login status
    const isLoggedIn = true
    if (!isLoggedIn) {
      router.push('/signin');
    }
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow mx-auto px-2 py-2">
        {children}
      </main>
      <footer><Copyright/></footer>
    </div>
  );
};

export default MainLayout;
