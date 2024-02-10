import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {AnalistStore} from "../../../stores/analist";
import {observer} from "mobx-react-lite";
import {AuthStore} from "../../../stores/auth";
import {TGetAnalistTaskFactors, TGetAnalistTaskFactorsResponce} from "src/api/analist/types";
// import {uuidv4} from "uuid";//чота не находит uuid надо сделать на бэкенде

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const BackForm1 = observer((): JSX.Element => {

    const {BackStore} = useStores();

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
        BackStore.setAccum(Number(e.target.value));
        BackStore.setAccessFactor(Number(e.target.value));
    };

    const navigate = useNavigate();

    const handleClick = () : void => {
        BackStore.setFactor(2);
    };

    return (
        <CenterDivWrapper>
            <Title level={4}>Факторы влияющие на трудоёмкость задач для бэкенд разразработчика</Title>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                // initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                {/*<Form.Item label="Факторы влияющие на трудоёмкость задач для аналитика">*/}
                <Form.Item label="1. Выберите вариант ситуации с доступами и лицензиями: ">
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={0}>
                                {" "}
                                1. У разработчика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии. [0 storypoints]
                            </Radio>
                            <Radio value={1}>
                                {" "}
                                2. У разработчика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время. [1 storypoints]
                            </Radio>
                            <Radio value={2}>
                                {" "}
                                3. У разработчика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня. [2 storypoints]
                            </Radio>
                            <Radio value={3}>
                                {" "}
                                4. У разработчика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней. [3 storypoints]
                            </Radio>
                            <Radio value={5}>
                                {" "}
                                5. У разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [5 storypoints]
                            </Radio>
                            <Radio value={8}>
                                {" "}
                                6. У разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [8 storypoints]
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











// import React, {useEffect, useState} from "react";
// import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
// import { Divider, Typography } from "antd";
// import { CenterDivWrapper } from "../../style";
// import {clientRoutes} from "../../../routes/client";
// import {useNavigate} from "react-router-dom";
// import {useStores} from "../../../stores";
// import {BackStore} from "../../../stores/back";
//
// type LayoutType = Parameters<typeof Form>[0]["layout"];
//
// export const BackForm1 = (): JSX.Element => {
//
//     const {BackStore} = useStores();
//
//     // let {BackStore: {  }} = useStores();
//     // useEffect(() => {});
//     // let accum = BackStore.accValue;
//
//     const { Title, Paragraph, Text, Link } = Typography;
//     const [form] = Form.useForm();
//     const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
//     const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
//
//         setFormLayout(layout);
//     };
//     const buttonItemLayout =
//         formLayout === "horizontal"
//             ? { wrapperCol: { span: 14, offset: 4 } }
//             : null;
//     const [value, setValue] = useState(1);
//
//     const formItemLayout =
//         formLayout === "horizontal"
//             ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
//             : null;
//     const onChange = (e: RadioChangeEvent) => {
//         setValue(e.target.value);
//         BackStore.setAccum(Number(e.target.value));
//         BackStore.setAccessFactor(Number(e.target.value));
//     };
//
//     const navigate = useNavigate();
//     const handleClick = () : void => {
//         BackStore.setFactor(2);
//     };
//
//     return (
//         <CenterDivWrapper>
//             <Title level={4}>Факторы влияющие на трудоёмкость задач для аналитика</Title>
//             <Form
//                 {...formItemLayout}
//                 layout={formLayout}
//                 form={form}
//                 // initialValues={{ layout: formLayout }}
//                 onValuesChange={onFormLayoutChange}
//                 // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
//             >
//                 <Form.Item label="">
//                     <Radio.Group onChange={onChange} value={value}>
//                         <Space direction="vertical">
//                             <Radio value={1}>
//                                 {" "}
//                                 1.  [0 storypoints]
//                             </Radio>
//                             <Radio value={2}>
//                                 {" "}
//                                 2.  [1 storypoints]
//                             </Radio>
//                             <Radio value={3}>
//                                 {" "}
//                                 3.  [2 storypoints]
//                             </Radio>
//                             <Radio value={4}>
//                                 {" "}
//                                 4.  [3 storypoints]
//                             </Radio>
//                             <Radio value={5}>
//                                 {" "}
//                                 5.  [5 storypoints]
//                             </Radio>
//                             <Radio value={6}>
//                                 {" "}
//                                 6.  [8 storypoints]
//                             </Radio>
//                         </Space>
//                     </Radio.Group>
//                 </Form.Item>
//
//                 <Form.Item {...buttonItemLayout}>
//                     <Button type="primary" onClick={handleClick}>
//                         Делее
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </CenterDivWrapper>
//     );
// };
