import { SqlForm1 } from "../page/SqlFactors/Components/SqlForm1";
import {observer} from "mobx-react-lite";
import React from "react";
// import {AnalistStore} from "../stores/analist";
import {useStores} from "../stores";

export const СhooseSqlVariant = observer((): JSX.Element => {
    const{SqlStore}=useStores();
    const renderContent = (): JSX.Element => {
        console.log("FactorValue = ", SqlStore.factorValue);
        // switch (SqlStore.factorValue) {
        switch (1) {
                case 1:
                return  <SqlForm1  />;
 
            default:
                return <SqlForm1 />;
        }
    };

    return renderContent();
});

