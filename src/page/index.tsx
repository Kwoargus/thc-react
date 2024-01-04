import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { AuthPage } from "./Auth";
import { MainPage } from "./Main";
import { BackendFactors } from "./BackendFactors";
import { FrontendFactors } from "./FrontendFactors";
import { TesterFactors } from "./TesterFactors";
import { AnalistFactors } from "./AnalistFactors";
import { AnalistForm1 } from "./AnalistFactors/Components/AnalistForm1";
import { AnalistForm2 } from "./AnalistFactors/Components/AnalistForm2";
import { AnalistForm3 } from "./AnalistFactors/Components/AnalistForm3";
import { AnalistForm4 } from "./AnalistFactors/Components/AnalistForm4";
import { AnalistForm5 } from "./AnalistFactors/Components/AnalistForm5";
import { AnalistForm6 } from "./AnalistFactors/Components/AnalistForm6";
import { AnalistForm7 } from "./AnalistFactors/Components/AnalistForm7";
import { AnalistForm8 } from "./AnalistFactors/Components/AnalistForm8";
import { AnalistForm9 } from "./AnalistFactors/Components/AnalistForm9";
import { PageLayout } from "./style";
import { clientRoutes } from "src/routes/client";
import { useStores } from "src/stores";
import {Sidebar} from "../components/Sidebar";

interface IProps {
  obj: string;
}
export const Page = observer(({ obj }: IProps): JSX.Element => {
  console.log("page get obj = ", obj)
  const objComponents = obj.split(",", 3);
  const {
    AuthStore: { isAuth }
  } = useStores();

  const navigate = useNavigate();

  useEffect(() => {
    !isAuth && navigate(clientRoutes.auth);
  }, [isAuth]);

  let accum = objComponents[2];
  const objStr = obj;
  console.log("page made new objStr = : " + objStr);

  return (
    <PageLayout>
      <Sidebar/>
      <Routes>
        <Route path={clientRoutes.auth} element={<AuthPage />} />
        <Route path={clientRoutes.main} element={<MainPage />} />
        <Route path={clientRoutes.backendFactors} element={<BackendFactors />} />
        <Route path={clientRoutes.frontendFactors} element={<FrontendFactors />} />
        <Route path={clientRoutes.testerFactors} element={<TesterFactors />} />
        <Route path={clientRoutes.analistFactors} element={<AnalistFactors />} />
        {/*<Route path={clientRoutes.analistForm1} element={<AnalistForm1  obj={objStr}  />} />*/}
        <Route path={clientRoutes.analistForm2} element={<AnalistForm2  obj={objStr} />} />
        <Route path={clientRoutes.analistForm3} element={<AnalistForm3 />} />
        <Route path={clientRoutes.analistForm4} element={<AnalistForm4 />} />
        <Route path={clientRoutes.analistForm5} element={<AnalistForm5 />} />
        <Route path={clientRoutes.analistForm6} element={<AnalistForm6 />} />
        <Route path={clientRoutes.analistForm7} element={<AnalistForm7 />} />
        <Route path={clientRoutes.analistForm8} element={<AnalistForm8 />} />
        <Route path={clientRoutes.analistForm9} element={<AnalistForm9 />} />
      </Routes>
    </PageLayout>
  );
});

