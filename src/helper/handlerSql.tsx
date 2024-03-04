import { SqlForm1 } from "../page/SqlFactors/Components/SqlForm1";
import { SqlForm2 } from "../page/SqlFactors/Components/SqlForm2";
import { SqlForm3 } from "../page/SqlFactors/Components/SqlForm3";
import { SqlForm4 } from "../page/SqlFactors/Components/SqlForm4";
import { SqlForm5 } from "../page/SqlFactors/Components/SqlForm5";
import { SqlForm6 } from "../page/SqlFactors/Components/SqlForm6";
import { SqlForm7 } from "../page/SqlFactors/Components/SqlForm7";
import { SqlForm8 } from "../page/SqlFactors/Components/SqlForm8";
import { SqlForm9 } from "../page/SqlFactors/Components/SqlForm9";
import { SqlForm10 } from "../page/SqlFactors/Components/SqlForm10";
import { SqlForm11 } from "../page/SqlFactors/Components/SqlForm11";
import { SqlForm12 } from "../page/SqlFactors/Components/SqlForm12";
import { SqlForm13 } from "../page/SqlFactors/Components/SqlForm13";
import { SqlForm14 } from "../page/SqlFactors/Components/SqlForm14";
import { SqlForm15 } from "../page/SqlFactors/Components/SqlForm15";
import { SqlForm16 } from "../page/SqlFactors/Components/SqlForm16";
import { SqlForm17 } from "../page/SqlFactors/Components/SqlForm17";
import { SqlForm18 } from "../page/SqlFactors/Components/SqlForm18";
import {observer} from "mobx-react-lite";
import React from "react";
import {observer} from "mobx-react-lite";
import React from "react";
import {useStores} from "../stores";

export const СhooseSqlVariant = observer((): JSX.Element => {
    const{SqlStore}=useStores();
    const renderContent = (): JSX.Element => {
        switch (SqlStore.factorValue) {
                case 1:
                return  <SqlForm1  />;
 
                case 2:
                return  <SqlForm2  />;
 
                case 3:
                return  <SqlForm3  />;
 
                case 4:
                return  <SqlForm4  />;
 
                case 5:
                return  <SqlForm5  />;
 
                case 6:
                return  <SqlForm6  />;
 
                case 7:
                return  <SqlForm7  />;
 
                case 8:
                return  <SqlForm8  />;
 
                case 9:
                return  <SqlForm9  />;
 
                case 10:
                return  <SqlForm10  />;
 
                case 11:
                return  <SqlForm11  />;
 
                case 12:
                return  <SqlForm12  />;
 
                case 13:
                return  <SqlForm13  />;
 
                case 14:
                return  <SqlForm14  />;
 
                case 15:
                return  <SqlForm15  />;
 
                case 16:
                return  <SqlForm16  />;
 
                case 17:
                return  <SqlForm17  />;
 
                case 18:
                return  <SqlForm18  />;
 
            default:
                return <SqlForm1 />;
        };  

    };

    return renderContent();
});

