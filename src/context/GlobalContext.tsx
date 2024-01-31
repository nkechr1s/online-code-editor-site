/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, ReactNode } from "react";
import { data as headerData } from "src/lib/data/headerData";
import { data as heroData } from "src/lib/data/heroData";
import { HeaderProps, HeroProps } from "src/lib/types";

interface GlobalData {
  headerData: HeaderProps;
  heroData: HeroProps;
  // Add other data properties with their types
}
interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalData | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = (): GlobalData => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const globalData: GlobalData = {
    headerData,
    heroData,
    // Add other data properties with their values
  };

  return (
    <GlobalContext.Provider value={globalData}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
