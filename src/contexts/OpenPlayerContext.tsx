import { createContext, ReactNode, useContext, useState } from "react";

type OpenPlayerContextData = {
  open: string;
  openPlayer: () => void;
};

// Criação do PlayerContext

export const OpenPlayerContext = createContext({} as OpenPlayerContextData);

type OpenPlayerContextProviderProps = {
  children: ReactNode;
};

// Exportando PlayerContextProvider

export function OpenPlayerContextProvider({
  children,
}: OpenPlayerContextProviderProps) {
  const [open, setOpen] = useState("none");

  function openPlayer() {
    setOpen(open === "none" ? "block" : "none");
  }

  return (
    <OpenPlayerContext.Provider
      value={{
        open,
        openPlayer,
      }}
    >
      {children}
    </OpenPlayerContext.Provider>
  );
}
