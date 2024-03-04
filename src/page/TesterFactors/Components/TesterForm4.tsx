import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {observer} from "mobx-react-lite";
import {tester_instrument_string} from "./TesterTable"
// import {uuidv4} from "uuid";//чота не находит uuid надо сделать на бэкенде

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const TesterForm4 = observer((): JSX.Element => {

    const {TesterStore} = useStores();

    const { Title, Paragraph, Text, Link } = Typography;
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const buttonItemLayout = formLayout === "horizontal" ? { wrapperCol: { span: 14, offset: 4 } } : null;
    const [value, setValue] = useState(1);
    const formItemLayout =  formLayout === "horizontal" ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        TesterStore.setAccum(Number(e.target.value));
        TesterStore.setInstrumentFactor(Number(e.target.value));
    };

    const navigate = useNavigate();

    const handleClick = () : void => {
        TesterStore.setFactor(5);
    };

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
                <Form.Item label="4. Выберите вариант уровня владения инструментарием:">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={0}> 1. {tester_instrument_string[0]} [0 storypoints]</Radio>
                            <Radio value={1}> 2. {tester_instrument_string[1]} [1 storypoints]</Radio>
                            <Radio value={2}> 3. {tester_instrument_string[2]} [2 storypoints]</Radio>
                            <Radio value={3}> 4. {tester_instrument_string[3]}[3 storypoints]</Radio>
                            <Radio value={5}> 5. {tester_instrument_string[5]} [5 storypoints]</Radio>
                            <Radio value={8}> 6. {tester_instrument_string[8]} [8 storypoints]</Radio>
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
});