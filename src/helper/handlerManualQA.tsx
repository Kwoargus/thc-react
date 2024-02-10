import { ManualQAForm1 } from "../page/ManualQAFactors/Components/ManualQAForm1";
import { ManualQAForm2 } from "../page/ManualQAFactors/Components/ManualQAForm2";
import { ManualQAForm3 } from "../page/ManualQAFactors/Components/ManualQAForm3";
import { ManualQAForm4 } from "../page/ManualQAFactors/Components/ManualQAForm4";
import { ManualQAForm5 } from "../page/ManualQAFactors/Components/ManualQAForm5";
import { ManualQAForm6 } from "../page/ManualQAFactors/Components/ManualQAForm6";
import { ManualQAForm7 } from "../page/ManualQAFactors/Components/ManualQAForm7";
import { ManualQAForm8 } from "../page/ManualQAFactors/Components/ManualQAForm8";
import { ManualQAForm9 } from "../page/ManualQAFactors/Components/ManualQAForm9";
import { ManualQAForm10 } from "../page/ManualQAFactors/Components/ManualQAForm10";
import { ManualQAForm11 } from "../page/ManualQAFactors/Components/ManualQAForm11";
import { ManualQAForm12 } from "../page/ManualQAFactors/Components/ManualQAForm12";
import { ManualQAForm13 } from "../page/ManualQAFactors/Components/ManualQAForm13";
import {observer} from "mobx-react-lite";
import React from "react";
import {useStores} from "../stores";



let manualQA_access = 0              //analist_tag === 1
let manualQA_auto_label = 0
let manualQA_user_label = 0
let manualQA_user_description = ""
let manualQA_user_nazvanie = ""
let manualQA_user_comments = ""
let manualQA_user_label_sp = ""
let manualQA_user_label_hr = ""

//create_date заполняется на бэке
let manualQA_user_id = 0
//status заполняется на бэке
let manualQA_status = 0

var manualQA_access_string = new Array(13);

export const СhooseManualQAVariant = observer((): JSX.Element => {
    const{ManualQAStore}=useStores();
    const renderContent = (): JSX.Element => {

        switch (ManualQAStore.factorValue) {
            case 1:
                return  <ManualQAForm1  />;
            case 2:
                return  <ManualQAForm2  />;
            case 3:
                return  <ManualQAForm3  />;
            case 4:
                return  <ManualQAForm4  />;
            case 5:
                return  <ManualQAForm5  />;
            case 6:
                return  <ManualQAForm6  />;
            case 7:
                return  <ManualQAForm7  />;
            case 8:
                return  <ManualQAForm8  />;
            case 9:
                return  <ManualQAForm9  />;
            case 10:
                return  <ManualQAForm10  />;
            case 11:
                return  <ManualQAForm11  />;
            case 12:
                return  <ManualQAForm12  />;
            case 13:
                return  <ManualQAForm13  />;
            

            default:
                return <ManualQAForm1 />;
        }
    };

    return renderContent();
});
