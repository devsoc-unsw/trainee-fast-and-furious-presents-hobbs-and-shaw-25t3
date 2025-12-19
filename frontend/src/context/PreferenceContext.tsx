import { createContext, useContext, useState, type ReactNode } from "react";
import type { Preferences } from "../utils/types";

const defaultPreferences: Preferences = {
  mood: '',
  group: '',
  price: 0,
  distance: 5000
};

type PreferenceContextType = {
  preferences: Preferences;
  updatePreferences: (field: string, value: string) => void;
};

const PreferenceContext = createContext<PreferenceContextType>({
  preferences: defaultPreferences,
  updatePreferences: () => {},
});

export const PreferenceProvider = ({ children }: { children: ReactNode }) => {
  const [ preferences, setPreferences ] = useState(defaultPreferences);

  const updatePreferences = (field: string, value: string) => {
    setPreferences(preferences => {
      return {
        ...preferences,
        [field]: value
      };
    });
  };

  return (
    <PreferenceContext.Provider value={{ preferences, updatePreferences }}>
      { children }
    </PreferenceContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePreferences = () => {
  const context = useContext(PreferenceContext);
  return context;
}