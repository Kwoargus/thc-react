import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { AuthPage } from "./Auth";
import { MainPage } from "./Main";
import { BackendFactors } from "./BackendFactors";
import { FrontendFactors } from "./FrontendFactors";
import { ManualQAFactors } from "./ManualQAFactors";
import { AnalistFactors } from "./AnalistFactors";
import { PageLayout } from "./style";
import { clientRoutes } from "src/routes/client";
import { useStores } from "src/stores";
import {Sidebar} from "../components/Sidebar";

export const Page = observer((): JSX.Element => {

  const {
    AuthStore: { isAuth }
  } = useStores();
  let {
    AnalistStore: {  }
  } = useStores();

  const navigate = useNavigate();

  useEffect(() => {
    !isAuth && navigate(clientRoutes.auth);
  }, [isAuth]);

  useEffect(() => {

  });


  return (
    <PageLayout>
      <Sidebar/>
      <Routes>
        <Route path={clientRoutes.auth} element={<AuthPage />} />
        <Route path={clientRoutes.main} element={<MainPage />} />
        <Route path={clientRoutes.backendFactors} element={<BackendFactors />} />
        <Route path={clientRoutes.frontendFactors} element={<FrontendFactors />} />
        <Route path={clientRoutes.manualQAFactors} element={<ManualQAFactors />} />
        <Route path={clientRoutes.analistFactors} element={<AnalistFactors />} />
      </Routes>
    </PageLayout>
  );
});

