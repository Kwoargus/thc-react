
import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import {clientRoutes} from "../../../routes/client";
import {useNavigate} from "react-router-dom";
import {useStores} from "../../../stores";
import {BackStore} from "../../../stores/back";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const BackForm14 = (): JSX.Element => {

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
        BackStore.setBrockerFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = (): void => {
        BackStore.setFactor(15);
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
                <Form.Item label="14. Выберите вариант количества случаев использования брокера сообщений:">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={0}>
                                {" "}
                                1. В задаче не требуется реализовывать передачу/получение сообщений через брокера. [0 storypoints]
                            </Radio>
                            <Radio value={1}>
                                {" "}
                                2. Потребуется реализовать передачу/получение сообщений в/от брокера в от 1 до 10 бизнес-функцях. [1 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                3. Потребуется реализовать передачу/получение сообщений в/от брокера в от 11 до 20 бизнес-функцях. [2 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                4. Потребуется реализовать передачу/получение сообщений в/от брокера в от 21 до 30 бизнес-функцях. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Потребуется реализовать передачу/получение сообщений в/от брокера в от 31 до 40 бизнес-функцях. [5 storypoints]
                            </Radio>
                            <Radio value={8}>
                                {" "}
                                6. Потребуется реализовать передачу/получение сообщений в/от брокера в от 41 до 50 бизнес-функцях. [8 storypoints]
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