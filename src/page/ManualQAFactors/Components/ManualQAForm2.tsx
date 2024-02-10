import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import {clientRoutes} from "../../../routes/client";
import {useNavigate} from "react-router-dom";
import {useStores} from "../../../stores";
import {ManualQAStore} from "../../../stores/manualQA";
import {observer} from "mobx-react-lite";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const ManualQAForm2 = observer((): JSX.Element => {

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
        ManualQAStore.setJobFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = (): void => {
        ManualQAStore.setFactor(3);
        //navigate(clientRoutes.ManualQAForm3)
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
                <Form.Item label="2. Выберите вариант уровня понимания задачи: ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>
                                {" "}
                                1. Тестировщику понятны формулировка задачи и бизнес логика, которую необходимо реализовать. [0 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                2. Тестировщику не понятны небольшая часть описания задачи и некоторые функции бизнес логики, которую необходимо реализовать. [1 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. Тестировщику не понятны примерно половина описания задачи и примерно половина функций бизнес логики, которую необходимо реализовать. [2 storypoints]
                            </Radio>
                            <Radio value={4}>
                                {" "}
                                4. Тестировщику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо реализовать. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Тестировщику не понятны все описания задачи и все функции бизнес логики, которую необходимо реализовать. [5 storypoints]
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
