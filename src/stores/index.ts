import { createContext, useContext } from "react";
import { AuthStore } from "./auth";
import { BackStore } from "./back";
import { AnalistStore } from "./analist";
import { ManualQAStore } from "./manualQA";
import { CommonStore } from "./common";


// Создаём root стейт приложения
export const createStore = () => ({
  AuthStore: new AuthStore(),
  BackStore: new BackStore(),
  AnalistStore: new AnalistStore(),
  ManualQAStore: new ManualQAStore(),
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
