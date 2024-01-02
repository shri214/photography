import React, { createContext, useState, useContext } from 'react';

const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [toggle, setToggle ] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  const openFunction=()=>{
    setToggle(true);
  }
  const closeFunction=()=>{
    setToggle(false);
  }

  return (
    <SharedContext.Provider
      value={{
        toggle,
        openFunction,
        closeFunction,
        toggleFunction
      }}
    >
      {children}
    </SharedContext.Provider>
  );
};


export const useSharedContext = () => {
    return useContext(SharedContext);
  };