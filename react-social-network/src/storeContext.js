import React from "react";

export const storeContext = React.createContext(null);

export const Provider = (props) => {
  return <storeContext.Provider value={props.store}>
    {props.children}
  </storeContext.Provider>
}
