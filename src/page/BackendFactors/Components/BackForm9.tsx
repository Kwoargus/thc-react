
import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import {clientRoutes} from "../../../routes/client";
import {useNavigate} from "react-router-dom";
import {useStores} from "../../../stores";
import {back_entity_string} from "./BackTable";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const BackForm9 = (): JSX.Element => {

    const {BackStore} = useStores();

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
    const [value, setValue] = useState(undefined);

    const formItemLayout =
        formLayout === "horizontal"
            ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
            : null;
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        BackStore.setAccum(Number(e.target.value));
        BackStore.setEntityFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = (): void => {
        BackStore.setFactor(10);
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
                <Form.Item label="9. Выберите вариант количесва сущностей:">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={0}> 1. {back_entity_string[0]} [0 storypoints] </Radio>
                            <Radio value={1}> 2. {back_entity_string[1]} [1 storypoints] </Radio>
                            <Radio value={2}> 3. {back_entity_string[2]} [2 storypoints] </Radio>
                            <Radio value={3}> 4. {back_entity_string[3]} [3 storypoints] </Radio>
                            <Radio value={5}> 5. {back_entity_string[5]} [5 storypoints] </Radio>
                            <Radio value={8}> 6. {back_entity_string[8]} [8 storypoints] </Radio>
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