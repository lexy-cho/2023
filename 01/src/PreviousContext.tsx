import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Page {
  path: string;
  title: string;
}

interface PreviousPageContextType {
  // previousPage: string | null;
  // setPreviousPage: React.Dispatch<React.SetStateAction<string | null>>;
  currentPath: string;
  previousPage: Page | null;
  navigateWithPrevious: (to: string, state?: any) => void;
}
// 이전 페이지의 URL을 저장하는 컨텍스트
const PreviousPageContext = createContext<PreviousPageContextType | undefined>(undefined);

interface ContextProps {
  children: any
}

// 이전 페이지 정보를 관리하는 Provider
export const PreviousPageProvider: React.FC<ContextProps> = ({ children }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>(location.pathname);
  // const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<Page | null>(null);

  const navigateWithPrevious = (to: string, state?: any) => {
    // console.log("navigateWithPrevious=======>", to, state)
    // console.log("navigateWithPrevious========>", currentPath)
    
    setPreviousPage({ path: currentPath, title: document.title });
    setCurrentPath(to);
  };

  useEffect(() => {
    // console.log("PreviousPageProvider==========>")
    const handleBeforeUnload = () => {
      setPreviousPage(null);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <PreviousPageContext.Provider value={{ currentPath, previousPage, navigateWithPrevious }}>
      {children}
    </PreviousPageContext.Provider>
  );
};

// 이전 페이지 정보를 사용할 수 있는 Hook
export const usePreviousPage = () => {
  const context = useContext(PreviousPageContext);
  if (!context) {
    throw new Error('usePreviousPage must be used within a PreviousPageProvider');
  }
  return context;
};

