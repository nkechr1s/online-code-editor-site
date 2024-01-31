/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, ReactNode } from "react";
import { data as headerData } from "src/lib/data/headerData";
import { data as heroData } from "src/lib/data/heroData";
import { HeaderProps, HeroProps } from "src/lib/types";

interface GlobalData {
  headerData: HeaderProps;
  heroData: HeroProps;
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

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const globalData: GlobalData = {
    headerData,
    heroData,
  };

  return (
    <GlobalContext.Provider value={globalData}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
