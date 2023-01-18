/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-17 16:59:27
 * @LastEditTime: 2023-01-17 22:12:20
 */
import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import { rootStore, RootStoreInterface } from "@/stores";

const storeContext = React.createContext<RootStoreInterface | null>(null);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalObservable(() => rootStore);
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
