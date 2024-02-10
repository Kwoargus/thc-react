import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import {clientRoutes} from "../../../routes/client";
import {useNavigate} from "react-router-dom";
import {useStores} from "../../../stores";
import {BackStore} from "../../../stores/back";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const BackForm2 = (): JSX.Element => {

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
        BackStore.setJobFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = (): void => {
        BackStore.setFactor(3);
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
                <Form.Item label="2. Выберите вариант уровня понимания задачи:">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={0}>
                                {" "}
                                1. Разработчику понятны формулировка задачи и бизнес логика, которую необходимо реализовать. [0 storypoints]
                            </Radio>
                            <Radio value={1}>
                                {" "}
                                2. Разработчику не понятны небольшая часть описания задачи и некоторые функции бизнес логики, которую необходимо реализовать. [1 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                3. Разработчику не понятны примерно половина описания задачи и примерно половина функций бизнес логики, которую необходимо реализовать. [2 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                4. Разработчику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо реализовать. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Разработчику не понятны все описания задачи и все функции бизнес логики, которую необходимо реализовать. [5 storypoints]
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
