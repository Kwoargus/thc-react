import {TesterForm1} from "../page/TesterFactors/Components/TesterForm1";
import {TesterForm2} from "../page/TesterFactors/Components/TesterForm2";
import {TesterForm3} from "../page/TesterFactors/Components/TesterForm3";
import {TesterForm4} from "../page/TesterFactors/Components/TesterForm4";
import {TesterForm5} from "../page/TesterFactors/Components/TesterForm5";
import {TesterForm6} from "../page/TesterFactors/Components/TesterForm6";
import {TesterForm7} from "../page/TesterFactors/Components/TesterForm7";
import {TesterForm8} from "../page/TesterFactors/Components/TesterForm8";
import {TesterForm9} from "../page/TesterFactors/Components/TesterForm9";
import {TesterForm10} from "../page/TesterFactors/Components/TesterForm10";
import {TesterForm11} from "../page/TesterFactors/Components/TesterForm11";
import {TesterForm12} from "../page/TesterFactors/Components/TesterForm12";
import {TesterForm13} from "../page/TesterFactors/Components/TesterForm13";
import {TesterForm14} from "../page/TesterFactors/Components/TesterForm14";
import {observer} from "mobx-react-lite";
import React from "react";
import {useStores} from "../stores";

export const СhooseTesterVariant = observer((): JSX.Element => {
    const {TesterStore} = useStores();
    const renderContent = (): JSX.Element => {

        switch (TesterStore.factorValue) {
            case 1:
                return <TesterForm1/>;
            case 2:
                return <TesterForm2/>;
            case 3:
                return <TesterForm3/>;
            case 4:
                return <TesterForm4/>;
            case 5:
                return <TesterForm5/>;
            case 6:
                return <TesterForm6/>;
            case 7:
                return <TesterForm7/>;
            case 8:
                return <TesterForm8/>;
            case 9:
                return <TesterForm9/>;
            case 10:
                return <TesterForm10/>;
            case 11:
                return <TesterForm11/>;
            case 12:
                return <TesterForm12/>;
            case 13:
                return <TesterForm13/>;
            case 14:
                return <TesterForm14/>;
            default:
                return <TesterForm1/>;
        }
    };

    return renderContent();
});
