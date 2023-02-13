import React, { useContext } from "react";

const BudgetsContext = React.createContext();

export function useBudget(BudgetsContext) {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  return children;
};
