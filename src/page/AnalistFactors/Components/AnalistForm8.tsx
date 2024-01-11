import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {AnalistStore} from "../../../stores/analist";
import {observer} from "mobx-react-lite";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const AnalistForm8 = observer((): JSX.Element => {

    const {AnalistStore} = useStores();

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
        AnalistStore.setAccum(Number(e.target.value));
        AnalistStore.setColleguesFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = () : void => {
        AnalistStore.setFactor(9);
        //navigate(clientRoutes.analistForm9)
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
                <Form.Item label="8. Выберите вариант комплексности описания задачи в спецификации: ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>
                                {" "}
                                1. В задаче не требуется описать ни UI ни бэкенд. [0 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                2. В задаче требуется описать только UI и не требуется описывать бэкенд. [1 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. В задаче требуется описать только бэкенд и не требуется описывать UI. [2 storypoints]
                            </Radio>
                            <Radio value={4}>
                                {" "}
                                4. В задаче требуется описать не только бэкенд но и UI. [3 storypoints]
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
});
