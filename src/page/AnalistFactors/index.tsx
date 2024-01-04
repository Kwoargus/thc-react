import React, { useState } from 'react';
import {Button, Form, Input, Radio, RadioChangeEvent, Space} from 'antd';
import {CenterDivWrapper} from "./style";
import { Divider, Typography } from 'antd';
import {СhooseAnalistVariant} from "../../helper/handler";

type LayoutType = Parameters<typeof Form>[0]['layout'];

// export const AnalistFactors: React.FC = () => {
export const AnalistFactors: React.FC = () => {

    // const { Title, Paragraph, Text, Link } = Typography;
    // const [form] = Form.useForm();
    // const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
    //
    // const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    //     setFormLayout(layout);
    // };
    //
    // const formItemLayout =
    //     formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;
    //
    // const buttonItemLayout =
    //     formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;
    //
    // const onChange = (e: RadioChangeEvent) => {
    //     console.log('radio checked', e.target.value);
    //     setValue(e.target.value);
    // };
    //
    // const handleClick = (): void => {
    //     const objStr="0,access,"+value;
    // };

    const [value, setValue] = useState(1);

    const objStr="0,access,"+value;
    console.log("AnalistFactors made new objStr = : " + objStr);

    return (
        <CenterDivWrapper>
            <СhooseAnalistVariant obj={objStr} />
        </CenterDivWrapper>
    );
};

export default AnalistFactors;


{/*<Form*/}
{/*    {...formItemLayout}*/}
{/*    layout={formLayout}*/}
{/*    form={form}*/}
{/*    // initialValues={{ layout: formLayout }}*/}
{/*    onValuesChange={onFormLayoutChange}*/}
{/*    // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}*/}
{/*>*/}
{/*    <Form.Item label="1. Выберите вариант ситуации с доступами и лицензиями:">*/}
{/*        <Radio.Group onChange={onChange} value={value}>*/}
{/*            <Space direction="vertical">*/}
{/*                <Radio value={1}> 1. У аналитика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии. [0 storypionts]</Radio>*/}
{/*                <Radio value={2}> 2. У аналитика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время. [1 storypionts]</Radio>*/}
{/*                <Radio value={3}> 3. У аналитика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня. [2 storypionts]</Radio>*/}
{/*                <Radio value={4}> 4. У аналитика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней. [3 storypionts]</Radio>*/}
{/*                <Radio value={5}> 5. У аналитика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значительное время. [5 storypionts]</Radio>*/}
{/*                <Radio value={6}> 6. У аналитика нет доступа к инфрастуктуре и лицензиям, на получение этих доступов потребуется много времени. [8 storypionts]</Radio>*/}
{/*            </Space>*/}
{/*        </Radio.Group>*/}
{/*    </Form.Item>*/}

{/*    <Form.Item {...buttonItemLayout}>*/}
{/*        <Button type="primary" onClick={<СhooseBackendVariant obj=objStr />}>Делее</Button>*/}
{/*    </Form.Item>*/}
{/*</Form>*/}
