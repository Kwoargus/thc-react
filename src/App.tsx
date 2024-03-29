import { BrowserRouter } from "react-router-dom";
import { createStore, StoresContext } from "./stores";
import { Page } from "./page";
import { ResetCSSGlobalStyle } from "./style";
import DevTools from 'mobx-react-devtools';

export const App = (): JSX.Element => {
  const stores = createStore();

  return (
    <BrowserRouter>
      <StoresContext.Provider value={stores}>
        <DevTools />
        <Page />
        <ResetCSSGlobalStyle />
      </StoresContext.Provider>
    </BrowserRouter>
  );
};
