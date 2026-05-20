import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type EmailDialogContextValue = {
  isOpen: boolean;
  openEmailDialog: () => void;
  closeEmailDialog: () => void;
};

const EmailDialogContext = createContext<EmailDialogContextValue | null>(null);

export function EmailDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openEmailDialog = useCallback(() => setIsOpen(true), []);
  const closeEmailDialog = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openEmailDialog, closeEmailDialog }),
    [isOpen, openEmailDialog, closeEmailDialog],
  );

  return (
    <EmailDialogContext.Provider value={value}>
      {children}
    </EmailDialogContext.Provider>
  );
}

export function useEmailDialog() {
  const context = useContext(EmailDialogContext);
  if (!context) {
    throw new Error("useEmailDialog must be used within EmailDialogProvider");
  }
  return context;
}
