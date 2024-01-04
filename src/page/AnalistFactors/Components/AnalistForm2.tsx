import React, { useState } from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import {clientRoutes} from "../../../routes/client";
import {useNavigate} from "react-router-dom";

type LayoutType = Parameters<typeof Form>[0]["layout"];

interface IProps {
    obj: string;
}
export const AnalistForm2 = ({ obj }: IProps): JSX.Element => {
    console.log("AnalistForm2 get obj = ", obj)
    const objComponents = obj.split(",", 3);
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
    let accum = objComponents[2];
    console.log("accume = " , accum)

    const formItemLayout =
        formLayout === "horizontal"
            ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
            : null;
    const onChange = (e: RadioChangeEvent) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
        accum = accum  + e.target.value;
        console.log("e.target.value = ", e.target.value);
        console.log("accum = ", accum);
    };

    const navigate = useNavigate();
    const handleClick = (): void => {
        console.log("button clicked");
        navigate(clientRoutes.analistForm3)
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
                            <Radio value={1}>
                                {" "}
                                1. Аналитику понятно описание задачи и все функции бизнес логики, которые необходимо описать. [0 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                2. Аналитику не понятны небольшая часть описания задачи и некоторые функции бизнес логики, которую необходимо описать. [1 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                3. Аналитику не понятны примерно половина описания задачи и примерно половина функций бизнес логики, которую необходимо описать. [2 storypoints]
                            </Radio>
                            <Radio value={4}>
                                {" "}
                                4. Аналитику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо описать. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. Аналитику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо описать. [5 storypoints]
                            </Radio>
                            <Radio value={6}>
                                {" "}
                                6. Аналитику не понятны все описания задачи и все функции бизнес логики, которую необходимо описать. [8 storypoints]
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