import React, {useEffect, useState} from "react";
import {Button, Form, Input, Radio, RadioChangeEvent, Space} from "antd";
import {Divider, Typography} from "antd";
import {CenterDivWrapper} from "../../style";
import {useNavigate} from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {SqlStore} from "../../../stores/sql";
import {observer} from "mobx-react-lite";
import {sqldev_history_string} from "./SqlTable";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const SqlForm10 = observer((): JSX.Element => {

    const {SqlStore} = useStores();

    const {Title, Paragraph, Text, Link} = Typography;
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
    // const onFormLayoutChange = ({layout}: { layout: LayoutType }) => {
    //     setFormLayout(layout);
    // };

    const buttonItemLayout = formLayout === "horizontal" ? {wrapperCol: {span: 14, offset: 4}} : null;
    const formItemLayout = formLayout === "horizontal" ? {labelCol: {span: 4}, wrapperCol: {span: 14}} : null;
    const [value, setValue] = useState(undefined);
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        SqlStore.setAccum(Number(e.target.value));
        SqlStore.setHistoryFactor(Number(e.target.value));
    };

    // const navigate = useNavigate();

    const handleClick = (): void => {
        SqlStore.setFactor(11);
        //navigate(clientRoutes.SqlForm2)//лучше использовать renderContent чтобы предотвратить несанкционирован переход через строку адреса
    };

    return (
        <CenterDivWrapper>
            <Title level={4}>Факторы влияющие на трудоёмкость задач для SQL-разработчика</Title>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                // initialValues={{ layout: formLayout }}
                // onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                <Form.Item label="10. Хранение истории изменения данных:">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={0}>1. {sqldev_history_string[0]} [0 storypoints]</Radio>
                            <Radio value={1}>2. {sqldev_history_string[1]} [1 storypoints]</Radio>
                            <Radio value={2}>3. {sqldev_history_string[2]} [2 storypoints]</Radio>
                            <Radio value={3}>4. {sqldev_history_string[3]} [3 storypoints]</Radio>
                            <Radio value={5}>5. {sqldev_history_string[5]} [5 storypoints]</Radio>
                            <Radio value={8}>6. {sqldev_history_string[8]} [8 storypoints]</Radio>
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
