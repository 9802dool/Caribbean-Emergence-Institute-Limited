"use client";

import { createContext, useContext, useMemo, useState } from "react";

import DiagnosticModal from "./DiagnosticModal";
import Footer from "./Footer";
import NavBar from "./NavBar";

type DiagnosticContextValue = {
  openDiagnostic: () => void;
};

const DiagnosticContext = createContext<DiagnosticContextValue | null>(null);

export function useDiagnostic() {
  const context = useContext(DiagnosticContext);

  if (!context) {
    throw new Error("useDiagnostic must be used within SiteChrome");
  }

  return context;
}

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDiagnosticOpen, setDiagnosticOpen] = useState(false);
  const contextValue = useMemo(
    () => ({ openDiagnostic: () => setDiagnosticOpen(true) }),
    [],
  );

  return (
    <DiagnosticContext.Provider value={contextValue}>
      <NavBar onOpenDiagnostic={contextValue.openDiagnostic} />
      {children}
      <Footer />
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
      />
    </DiagnosticContext.Provider>
  );
}
