// LocaleContext.js
import React, { createContext, useContext, useState } from 'react';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en'); // Default locale

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === 'en' ? 'es' : 'en')); // Example toggle between English and Spanish
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
