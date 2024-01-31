/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { data as headerData } from "src/lib/data/headerData";
import { data as heroData } from "src/lib/data/heroData";
import { GlobalDataProps, GlobalProviderProps } from "src/lib/types";

const GlobalContext = createContext<GlobalDataProps | undefined>(undefined);

export const useGlobalContext = (): GlobalDataProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const globalData: GlobalDataProps = {
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
