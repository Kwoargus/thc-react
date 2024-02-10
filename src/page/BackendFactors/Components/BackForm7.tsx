import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import {clientRoutes} from "../../../routes/client";
import {useNavigate} from "react-router-dom";
import {useStores} from "../../../stores";
import {BackStore} from "../../../stores/back";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const BackForm7 = (): JSX.Element => {

    const {BackStore} = useStores();

    // let {BackStore: {  }} = useStores();
    // useEffect(() => {});
    // let accum = BackStore.accValue;

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
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        BackStore.setAccum(Number(e.target.value));
        BackStore.setTablesFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = (): void => {
        BackStore.setFactor(8);
    };

    return (
        <CenterDivWrapper>
            <Title level={4}>Факторы влияющие на трудоёмкость задач для бэкенд разразработчика</Title>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                // initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                <Form.Item label="7. Выберите степень готовности таблиц в БД:">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={0}>
                                {" "}
                                1. Все таблицы в БД созданы, атрибутивный состав полон и корректен и все необходимые связи по ключам определены. [0 storypoints]
                            </Radio>
                            <Radio value={1}>
                                {" "}
                                2. Все таблицы в БД созданы, но их атрибутивный состав не полон и/или не корректен и/или не все необходимые связи по ключам определены. [1 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                3. Небольшая часть таблиц в БД не созданы, их атрибутивный состав ещё не сформирован. [2 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                4. Примерно половина таблиц в БД не созданы, их атрибутивный состав ещё не сформирован. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Большая часть таблиц в БД не созданы, их атрибутивный состав ещё не сформирован. [5 storypoints]
                            </Radio>
                            <Radio value={8}>
                                {" "}
                                6. Таблицы в БД не созданы, их атрибутивный состав неопределён. [8 storypoints]
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>

                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" onClick={handleClick}>
                        Делее
                    </Button>
                </Form.Item>
            </Form>
        </CenterDivWrapper>
    );
};