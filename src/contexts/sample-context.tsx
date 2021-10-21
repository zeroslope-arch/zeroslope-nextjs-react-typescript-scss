import React, { useState } from "react";

const SampleContext = React.createContext({ });

const SampleProvider = ({ children }) => {
  const [sample, setSample] = useState({});
  return (
    <SampleContext.Provider
      value={{ sample }}
    >
      {children}
    </SampleContext.Provider>
  );
};

export { SampleProvider, SampleContext };
