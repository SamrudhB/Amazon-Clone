import React, {
  createContext,
  useState,
} from "react";

export const Logincontext = createContext(null);

const Contextprovider = ({ children }) => {
  const [account, setAccount] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  // Refresh logged-in user details from backend
  const refreshUser = async () => {
    try {
      const res = await fetch("/api/users/profile", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        setAccount(null);
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        return;
      }

      const data = await res.json();

      setAccount(data);

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      localStorage.setItem(
        "role",
        data.role
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Logincontext.Provider
      value={{
        account,
        setAccount,
        refreshUser,
      }}
    >
      {children}
    </Logincontext.Provider>
  );
};

export default Contextprovider;