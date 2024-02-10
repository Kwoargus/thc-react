import React, { useState } from "react";
import {Button, Form, Input, Radio, RadioChangeEvent, Space, Table} from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {ManualQAStore} from "../../../stores/manualQA";
import {TGetManualQATaskFactors} from "../../../api/manualQA/types";
import ManualQATable from "./ManualQATable";
import {useStores} from "../../../stores";
import {ManualQAForm1} from "./ManualQAForm1";
import {ManualQAForm2} from "./ManualQAForm2";
import {ManualQAForm3} from "./ManualQAForm3";
import {ManualQAForm4} from "./ManualQAForm4";
import {ManualQAForm5} from "./ManualQAForm5";
import {ManualQAForm6} from "./ManualQAForm6";
import {ManualQAForm7} from "./ManualQAForm7";
import {ManualQAForm8} from "./ManualQAForm8";
import {ManualQAForm9} from "./ManualQAForm9";


type LayoutType = Parameters<typeof Form>[0]["layout"];

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export const ManualQAForm13 = (): JSX.Element => {

    const {ManualQAStore} = useStores();

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

    const getTaskClassification = () : number => {
        let estimate = 0;
        let acc = ManualQAStore.getAccum();

        if(acc<=3){estimate = 10}
        if(acc>3 && acc<=5){estimate = 20}
        if(acc>5 && acc<=8){estimate = 30}
        if(acc>8 && acc<=13){estimate = 40}
        if(acc>13 && acc<=21){estimate = 80}
        if(acc>21 && acc<=34){estimate = 160}

        return estimate;
    };

    let res = getTaskClassification();

    return (
        <CenterDivWrapper>
            <Title level={4}>Сводная таблица введённых данных (результат оценки выведен внизу)</Title>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                onValuesChange={onFormLayoutChange}
            >
                <Form.Item
                    name="ResultsTable"
                >
                    <ManualQATable />
                </Form.Item>
            </Form>

            <Text >Итоговая трудоёмкость {res} человеко-часов</Text>
        </CenterDivWrapper>
    );
};