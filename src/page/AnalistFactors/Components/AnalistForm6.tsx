import React, { useState } from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const AnalistForm6 = (): JSX.Element => {
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
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    const navigate = useNavigate();
    const handleClick = () : void => {
        console.log("button clicked");
        navigate(clientRoutes.analistForm7)

    };

    interface IProps {
        obj: string;
    }

    return (
        <CenterDivWrapper>
            <Title level={4}>Факторы влияющие на трудоёмкость задач для аналитика</Title>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                // initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                {/*<Form.Item label="Факторы влияющие на трудоёмкость задач для аналитика">*/}
                <Form.Item label="6. Выберите вариант уровня взаимодействия с бизнес заказчиком:  ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>
                                {" "}
                                1. Взаимодействие с бизнес-заказчиком максимально эффективное – быстрый отклик, функциональные требования всегда корректны и полны, ответы на вопросы содержательны и полезны. [0 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                2. Взаимодействие с бизнес-заказчиком по большей части эффективное –  отклик достаточно быстрый, функциональные требования всегда корректны и полны, ответы на вопросы иногда недостаточно содержательны или полезны. [1 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. Взаимодействие с бизнес-заказчиком не всегда эффективное –  отклик не редко с задержкой, функциональные требования иногда не корректны и/или не полны, ответы на вопросы не редко недостаточно  содержательны или полезны. [2 storypoints]
                            </Radio>
                            <Radio value={4}>
                                {" "}
                                4. Взаимодействие с бизнес-заказчиком часто не эффективное –  отклик часто с задержкой, функциональные требования часто не корректны и/или не полны, ответы на вопросы часто недостаточно содержательны или полезны. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Взаимодействие с бизнес-заказчиком не эффективное –  отклик с большой задержкой, функциональные требования не корректны и/или не полны, ответы на вопросы безсодержательны и безполезны. [5 storypoints]
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
