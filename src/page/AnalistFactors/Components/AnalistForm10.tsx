import React, { useState } from "react";
import {Button, Form, Input, Radio, RadioChangeEvent, Space, Table} from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {AnalistStore} from "../../../stores/analist";
import {TGetAnalistTaskFactors} from "../../../api/analist/types";
import AnalistTable from "./AnalistTable";
import {useStores} from "../../../stores";
import {AnalistForm1} from "./AnalistForm1";
import {AnalistForm2} from "./AnalistForm2";
import {AnalistForm3} from "./AnalistForm3";
import {AnalistForm4} from "./AnalistForm4";
import {AnalistForm5} from "./AnalistForm5";
import {AnalistForm6} from "./AnalistForm6";
import {AnalistForm7} from "./AnalistForm7";
import {AnalistForm8} from "./AnalistForm8";
import {AnalistForm9} from "./AnalistForm9";


type LayoutType = Parameters<typeof Form>[0]["layout"];

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export const AnalistForm10 = (): JSX.Element => {

    const {AnalistStore} = useStores();

    const { Title, Paragraph, Text, Link } = Typography;
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const buttonItemLayout =
        formLayout === "horizontal"
            ? { wrapperCol: { span: 14, offset: 4 } }
            : null;
    const [value, setValue] = useState(1);
    const formItemLayout =
        formLayout === "horizontal"
            ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
            : null;

    // const navigate = useNavigate();
    // const handleClick = () : void => {
    //     console.log("button clicked");
    //     navigate(clientRoutes.backendFactors)
    // };

    const getTaskClassification = () : number => {
        let estimate = 0;
        let acc = AnalistStore.getAccum();

        if(acc==0){estimate = 0}
        if(acc>0 && acc<=3){estimate = 10}
        if(acc>3 && acc<=5){estimate = 20}
        if(acc>5 && acc<=8){estimate = 30}
        if(acc>8 && acc<=13){estimate = 40}
        if(acc>13 && acc<=21){estimate = 80}
        if(acc>21 && acc<=34){estimate = 160}
        if(acc>34 && acc<=55){estimate = 320}
        if(acc>55 && acc<=89){estimate = 640}

        return estimate;
    };

    let res = getTaskClassification();
    let addition = "";
    if(res > 160){
        addition = ". Эта задача избыточно трудоёмкая, ее следует декомпозировать на несколько более простых";
    }

    return (
        <CenterDivWrapper>
            <Title level={4}>Сводная таблица введённых данных (результат оценки выведен внизу)</Title>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                // initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                {/*<Form.Item label="Факторы влияющие на трудоёмкость задач для аналитика">*/}
                <Form.Item
                    name="ResultsTable"
                >
                    <AnalistTable />
                </Form.Item>
            </Form>

            <Text >Итоговая трудоёмкость {res} человеко-часов{addition}.</Text>
        </CenterDivWrapper>
    );
};