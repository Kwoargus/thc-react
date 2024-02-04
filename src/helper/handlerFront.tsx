import {FrontForm1} from "../page/FrontendFactors/Components/FrontForm1";
import {FrontForm2} from "../page/FrontendFactors/Components/FrontForm2";
import {FrontForm3} from "../page/FrontendFactors/Components/FrontForm3";
import {FrontForm4} from "../page/FrontendFactors/Components/FrontForm4";
import {FrontForm5} from "../page/FrontendFactors/Components/FrontForm5";
import {FrontForm6} from "../page/FrontendFactors/Components/FrontForm6";
import {FrontForm7} from "../page/FrontendFactors/Components/FrontForm7";
import {FrontForm8} from "../page/FrontendFactors/Components/FrontForm8";
import {FrontForm9} from "../page/FrontendFactors/Components/FrontForm9";
import {FrontForm10} from "../page/FrontendFactors/Components/FrontForm10";
import {FrontForm11} from "../page/FrontendFactors/Components/FrontForm11";
import {FrontForm12} from "../page/FrontendFactors/Components/FrontForm12";
import {FrontForm13} from "../page/FrontendFactors/Components/FrontForm13";
import {FrontForm14} from "../page/FrontendFactors/Components/FrontForm14";
import {FrontForm15} from "../page/FrontendFactors/Components/FrontForm15";
import {FrontForm16} from "../page/FrontendFactors/Components/FrontForm16";
import {observer} from "mobx-react-lite";
import React from "react";
import {useStores} from "../stores";

export const СhooseFrontVariant = observer((): JSX.Element => {
    const {FrontStore} = useStores();
    const renderContent = (): JSX.Element => {

        switch (FrontStore.factorValue) {
            case 1:
                return <FrontForm1/>;
            case 2:
                return <FrontForm2/>;
            case 3:
                return <FrontForm3/>;
            case 4:
                return <FrontForm4/>;
            case 5:
                return <FrontForm5/>;
            case 6:
                return <FrontForm6/>;
            case 7:
                return <FrontForm7/>;
            case 8:
                return <FrontForm8/>;
            case 9:
                return <FrontForm9/>;
            case 10:
                return <FrontForm10/>;
            case 11:
                return <FrontForm11/>;
            case 12:
                return <FrontForm12/>;
            case 13:
                return <FrontForm13/>;
            case 14:
                return <FrontForm14/>;
            case 15:
                return <FrontForm15/>;
            case 16:
                return <FrontForm16/>;
            default:
                return <FrontForm1/>;
        }
    };

    return renderContent();
});
