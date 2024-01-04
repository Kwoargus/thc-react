import { createContext, useContext } from "react";
import { AuthStore } from "./auth";
import { BackStore } from "./back";
import { CommonStore } from "./common";

// Создаём root стейт приложения
export const createStore = () => ({
  AuthStore: new AuthStore(),
  BackStore: new BackStore(),
  CommonStore: new CommonStore()
});
export type RootStore = ReturnType<typeof createStore>;
export const StoresContext = createContext<RootStore | null>(null);

// Хук для использования стейта в компонентах
export const useStores = (): RootStore => {
  const stores = useContext(StoresContext);

  if (!stores) {
    throw new Error(
      "useStores() allow use inside <StoreContext.provider /> only"
    );
  }

  return stores;
};
