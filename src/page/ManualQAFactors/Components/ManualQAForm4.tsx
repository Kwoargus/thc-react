import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {ManualQAStore} from "../../../stores/manualQA";
import {observer} from "mobx-react-lite";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const ManualQAForm4 = observer((): JSX.Element => {

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
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        ManualQAStore.setAccum(Number(e.target.value));
        ManualQAStore.setInfraFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = () : void => {
        ManualQAStore.setFactor(5);
    };

    return (
        <CenterDivWrapper>
            <Title level={4}>Факторы влияющие на трудоёмкость задач для тестировщика</Title>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                onValuesChange={onFormLayoutChange}
            >
                <Form.Item label="4. Выберите вариант состояния инфраструктуры:  ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>
                                {" "}
                                1. Все элементы инфраструктуры корректно настроены и работают стабильно. [0 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                2. Все элементы инфраструктуры корректно настроены но некоторые работают иногда не стабильно. [1 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. Некоторые элементы инфраструктуры настроены не вполне корректно и работают не стабильно. [3 storypoints]
                            </Radio>
                            <Radio value={4}>
                                {" "}
                                4. Некоторые элементы инфраструктуры не корректно настроены и/или работают нестабильно. [8 storypoints]
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>

                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" onClick={handleClick}>
                        Далее
                    </Button>
                </Form.Item>
            </Form>
        </CenterDivWrapper>
    );
});
