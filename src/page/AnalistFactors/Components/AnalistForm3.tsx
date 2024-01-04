import React, { useState } from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const AnalistForm3 = (): JSX.Element => {
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
        navigate(clientRoutes.analistForm4)

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
                <Form.Item label="3. Выберите вариант уровня понимания модели данных:  ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>
                                {" "}
                                1.  Аналитику понятна структура модели данных и атрибутивный состав таблиц. [0 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                2. Аналитику не понятна небольшая часть структуры модели данных и/или назначение некоторых атрибутов. [1 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. Аналитику не понятна примерно половина структуры модели данных и/или назначение половины атрибутов. [2 storypoints]
                            </Radio>
                            <Radio value={4}>
                                {" "}
                                4. Аналитику не понятна бОльшая часть структуры модели данных и/или назначение бОльшей части атрибутов. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Аналитику не понятна вся структура модели данных и атрибутивный состав таблиц. [5 storypoints]
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
