import React, { useState } from 'react';
import {Button, Form, Input, Radio, RadioChangeEvent, Space} from 'antd';
import {CenterDivWrapper} from "./style";
import { Divider, Typography } from 'antd';


type LayoutType = Parameters<typeof Form>[0]['layout'];

export const TesterFactors: React.FC = () => {
    const { Title, Paragraph, Text, Link } = Typography;
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

    const buttonItemLayout =
        formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
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
                <Form.Item label="1. Выберите вариант ситуации с доступами и лицензиями:">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}> 1. У разработчика есть все необходимые доступы к ресурсам инфрастуктуры и все необходимые лицензии. [0 storypionts]</Radio>
                            <Radio value={2}> 2. У разработчика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время. [1 storypionts]</Radio>
                            <Radio value={3}> 3. У разработчика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня. [2 storypionts]</Radio>
                            <Radio value={4}> 4. У разработчика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней. [3 storypionts]</Radio>
                            <Radio value={5}> 5. У разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [5 storypionts]</Radio>
                            <Radio value={6}> 6. У разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [8 storypionts]</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>

                <Form.Item {...buttonItemLayout}>
                    <Button type="primary">Делее</Button>
                </Form.Item>
            </Form>
        </CenterDivWrapper>
    );
};

export default TesterFactors;



