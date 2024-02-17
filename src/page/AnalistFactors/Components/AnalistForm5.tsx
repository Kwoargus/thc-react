import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {AnalistStore} from "../../../stores/analist";
import {observer} from "mobx-react-lite";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const AnalistForm5 = observer((): JSX.Element => {

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
        AnalistStore.setInformationFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = () : void => {
        AnalistStore.setFactor(6);
        //navigate(clientRoutes.analistForm6)
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
                <Form.Item label="5. Выберите вариант достаточности исходных данных:  ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>
                                {" "}
                                1. В задаче не потребуются исходные данные/информация. [0 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                2. Из необходимых исходных данных/информации аналитику доступны все необходимые исходные данные. [1 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. Из необходимых исходных данных/информации аналитику доступны все кроме малого числа незначительных сведений. [2 storypoints]
                            </Radio>
                            <Radio value={4}>
                                {" "}
                                4. Из необходимых исходных данных аналитику доступны примерно половина, а на получение пока недоступных потребуется много времени. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Из необходимых исходных данных аналитику доступны меньшая часть, а на получение пока недоступных потребуется очень много времени. [5 storypoints]
                            </Radio>
                            <Radio value={6}>
                                {" "}
                                6. Необходимые исходные данные аналитику не доступны, а на их получение потребуется неопределённо много времени. [8 storypoints]
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
