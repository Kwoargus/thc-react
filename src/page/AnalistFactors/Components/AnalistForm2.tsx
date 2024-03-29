import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import {clientRoutes} from "../../../routes/client";
import {useNavigate} from "react-router-dom";
import {useStores} from "../../../stores";
import {observer} from "mobx-react-lite";
import {analist_job_string} from "./AnalistTable";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const AnalistForm2 = observer((): JSX.Element => {

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
        AnalistStore.setJobFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = (): void => {
        AnalistStore.setFactor(3);
        //navigate(clientRoutes.analistForm3)
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
                <Form.Item label="2. Выберите вариант уровня понимания задачи: ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={0}> 1. {analist_job_string[0]} [0 storypoints] </Radio>
                            <Radio value={1}> 2. {analist_job_string[1]} [1 storypoints] </Radio>
                            <Radio value={2}> 3. {analist_job_string[2]} [2 storypoints] </Radio>
                            <Radio value={3}> 4. {analist_job_string[3]} [3 storypoints] </Radio>
                            <Radio value={5}> 5. {analist_job_string[5]} [5 storypoints] </Radio>
                            <Radio value={8}> 6. {analist_job_string[8]} [8 storypoints] </Radio>
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
