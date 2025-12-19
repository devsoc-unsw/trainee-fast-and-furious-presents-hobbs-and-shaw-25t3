import { createContext, useState, type ReactNode } from "react";
import type { Preferences } from "../utils/types";

const defaultPreferences: Preferences = {
  mood: '',
  group: '',
  price: 0,
  distance: 5000
};

const PreferenceContext = createContext({
  preferences: defaultPreferences,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updatePreferences: (_field: string, _value: string) => {},
});

export const PreferenceProvider = ({ children }: { children: ReactNode }) => {
  const [ preferences, setPreferences ] = useState(defaultPreferences);

  const updatePreferences = (field: string, value: string | number) => {
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

