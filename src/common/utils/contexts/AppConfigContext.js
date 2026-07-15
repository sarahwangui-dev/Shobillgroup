import { createContext } from 'react';

import defaultConfig from '../config';

const initialState = {
  ...defaultConfig
};

export const ConfigContext = createContext(initialState);

export default function ConfigProvider({ children }) {
  const config = initialState;

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
