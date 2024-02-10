import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {observer} from "mobx-react-lite";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const ManualQAForm6 = observer((): JSX.Element => {

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
        ManualQAStore.setModelFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = () : void => {
        ManualQAStore.setFactor(7);
    };

    return (
        <CenterDivWrapper>
            <Title level={4}>Факторы влияющие на трудоёмкость задач для тестировщика</Title>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                // initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                {/*<Form.Item label="Факторы влияющие на трудоёмкость задач для аналитика">*/}
                <Form.Item label="6. Выберите вариант уровня понимания модели данных:  ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>
                                {" "}
                                1.  Тестировщику понятна структура модели данных и атрибутивный состав таблиц. [0 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                2. Тестировщику не понятна небольшая часть структуры модели данных и/или назначение некоторых атрибутов. [1 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. Тестировщику не понятна примерно половина структуры модели данных и/или назначение половины атрибутов. [2 storypoints]
                            </Radio>
                            <Radio value={4}>
                                {" "}
                                4. Тестировщику не понятна бОльшая часть структуры модели данных и/или назначение бОльшей части атрибутов. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Тестировщику не понятна вся структура модели данных и атрибутивный состав таблиц. [5 storypoints]
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
