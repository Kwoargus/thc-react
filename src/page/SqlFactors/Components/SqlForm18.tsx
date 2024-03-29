import React, {useState} from "react";
import {Button, Form, Input, Radio, RadioChangeEvent, Space, Table} from "antd";
import {Divider, Typography} from "antd";
import {CenterDivWrapper} from "../../style";
import {useNavigate} from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import SqlTable from "./SqlTable";
import {useStores} from "../../../stores";


type LayoutType = Parameters<typeof Form>[0]["layout"];

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export const SqlForm18 = (): JSX.Element => {

    const {SqlStore} = useStores();

    const {Title, Paragraph, Text, Link} = Typography;
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
    // const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    //     setFormLayout(layout);
    // };

    const buttonItemLayout =
        formLayout === "horizontal"
            ? {wrapperCol: {span: 14, offset: 4}}
            : null;
    const formItemLayout =
        formLayout === "horizontal"
            ? {labelCol: {span: 4}, wrapperCol: {span: 14}}
            : null;
    const [value, setValue] = useState(1);

    const getTaskClassification = (): number => {
        let estimate = 0;
        let acc = SqlStore.getAccum();

        if (acc == 0) {estimate = 0}
        if (acc > 0 && acc <= 3) {estimate = 10}
        if (acc > 3 && acc <= 5) {estimate = 20}
        if (acc > 5 && acc <= 8) {estimate = 30}
        if (acc > 8 && acc <= 13) {estimate = 40}
        if (acc > 13 && acc <= 21) {estimate = 80}
        if (acc > 21 && acc <= 34) {estimate = 160}
        if (acc > 34 && acc <= 55) {estimate = 320}
        if (acc > 55) {estimate = 640}

        return estimate;
    };

    let res = getTaskClassification();
    let addition = "";
    if (res > 160) {
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
                // onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                {/*<Form.Item label="Факторы влияющие на трудоёмкость задач для аналитика">*/}
                <Form.Item
                    name="ResultsTable"
                >
                    <SqlTable/>
                </Form.Item>
            </Form>

            <Text>Итоговая трудоёмкость {res} человеко-часов{addition}</Text>
        </CenterDivWrapper>
    );
};