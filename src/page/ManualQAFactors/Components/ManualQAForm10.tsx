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

export const ManualQAForm10 = observer((): JSX.Element => {

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
        ManualQAStore.setBugReportFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = () : void => {
        ManualQAStore.setFactor(11);
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
                <Form.Item label="10. Выберите предполагаемое количество баг-репортов: ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>
                                {" "}
                                1. Составить от 1 до 10 баг-репортов. [1 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                2. Составить от 11 до 20 баг-репортов. [2 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. Составить от 21 до 30 баг-репортов. [3 storypoints]
                            </Radio>
                            <Radio value={4}>
                                {" "}
                                4. Составить от 31 до 40 баг-репортов. [5 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Составить от 41 до 50 баг-репортов. [8 storypoints]
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
