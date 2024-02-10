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

export const AnalistForm7 = observer((): JSX.Element => {

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
        AnalistStore.setUiBackFactor(Number(e.target.value));
    };

    const navigate = useNavigate();
    const handleClick = () : void => {
        AnalistStore.setFactor(8);
        //navigate(clientRoutes.analistForm8)
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
                <Form.Item label="7. Выберите вариант уровня взаимодействия с коллегами из команд, с продуктами которых необходимо интегрировать разработку:  ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>
                                {" "}
                                1. Взаимодействие с коллегами из других команд не потребуется. [0 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                2. Взаимодействие с коллегами из других команд, максимально эффективное – быстрый отклик на запросы, ответы на вопросы содержательны и полезны согласование позиций ничем не затруднено. [1 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. Взаимодействие с коллегами из других команд по большей части эффективное –  задержка отклика  отклика на запрос небольшая, ответы на вопросы по большей части содержательны и полезны, согласование позиций не затруднено в большинстве случаев. [2 storypoints]
                            </Radio>
                            <Radio value={4}>
                                {" "}
                                4. Взаимодействие с коллегами из других команд в половине случаев эффективное –  задержка отклика отклика на запрос может быть значительной, ответы на вопросы в половине случаев содержательны и полезны, согласование позиций часто затруднено. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Взаимодействие с коллегами из других команд мало эффективное –  задержка отклика на запрос  может быть значительной, ответы на вопросы в половине случаев содержательны и полезны, согласование позиций часто затруднено. [5 storypoints]
                            </Radio>
                            <Radio value={6}>
                                {" "}
                                6. Взаимодействие с коллегами из других команд не эффективное –  задержка отклика на запрос  слишком большая, ответы на вопросы безсодержательны и безполезны, согласование позиций почти невозможно. [8 storypoints]
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
