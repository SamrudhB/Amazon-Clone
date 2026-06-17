import React, { createContext, useState } from "react";

export const Logincontext = createContext(null);

const Contextprovider = ({ children }) => {
  const [account, setAccount] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  return (
    <Logincontext.Provider value={{ account, setAccount }}>
      {children}
    </Logincontext.Provider>
  );
};

export default Contextprovider;