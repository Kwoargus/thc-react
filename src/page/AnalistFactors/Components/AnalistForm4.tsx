import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {observer} from "mobx-react-lite";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const AnalistForm4 = observer((): JSX.Element => {

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
        AnalistStore.setInstrumentFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = () : void => {
        AnalistStore.setFactor(5);
        //navigate(clientRoutes.analistForm5)
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
                <Form.Item label="4. Выберите вариант уровня владения инструментарием: ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={0}>
                                {" "}
                                1. Из необходимых инструментов анализа, все хорошо знакомы аналитику и у него имеется достаточный опыт их использования. [0 storypoints]
                            </Radio>
                            <Radio value={1}>
                                {" "}
                                2. Из необходимых инструментов анализа, все, кроме одного, хорошо знакомы аналитику, и у него имеется достаточный опыт их использования всех кроме одного. [1 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. Из необходимых инструменты анализа, половина, хорошо знакомы аналитику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно. [3 storypoints]
                            </Radio>
                            <Radio value={8}>
                                {" "}
                                4. Из необходимых инструменты анализа, все не знакомы и опыта их использования нет или недостаточно. [8 storypoints]
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
