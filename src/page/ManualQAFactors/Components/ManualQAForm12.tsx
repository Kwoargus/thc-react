import React, { useState } from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {ManualQAStore} from "../../../stores/manualQA";
import {TGetManualQATaskFactors} from "../../../api/manualQA/types";
import {useStores} from "../../../stores";
import {observer} from "mobx-react-lite";

type LayoutType = Parameters<typeof Form>[0]["layout"];

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
    taskName?: string;
    description?: string;
    userComment?: string;
    storyPoints?: string;
    hours?: string;
};

export const ManualQAForm12 = observer((): JSX.Element => {

    const {ManualQAStore} = useStores();

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
    const onChange = (e: RadioChangeEvent) => {// обрабатывать события в инпутах
        setValue(e.target.value);
        // Сохранить в store данные из инпутов
        let acc = ManualQAStore.getAccum();
        ManualQAStore.setAutoLabel(Number(acc));
        let createDate =  ""; // сгенерировать текущую дату
        ManualQAStore.setCreateDate(createDate);
        let status =  ""; //Считать из инпута
        ManualQAStore.setStatus(status);
        let userLabelSp =  0; //Считать из инпута
        ManualQAStore.setUserLabelSp(userLabelSp);
        let userLabelHr =  0; //Считать  из инпута
        ManualQAStore.setUserLabelHr(userLabelHr);
        let nazvanie =  ""; //Считать из инпута
        ManualQAStore.setNazvanie(nazvanie);
        let userComments =  ""; //Считать из инпута
        ManualQAStore.setUserComments(userComments);
        let description =  ""; //Считать из инпута
        ManualQAStore.setDescription(description);
    };

    const onButtonClick = (values: any) => {
        ManualQAStore.setFactor(13);

        let fv = form.getFieldsValue(true);
        console.log("fv[1] = ", fv["taskName"]);
        
        let user_id = ManualQAStore.getUserId();

        
        let access = ManualQAStore.getAccessFactor();               //tag === 1
        let job =  ManualQAStore.getJobFactor();                    //tag === 2
        let instrument = ManualQAStore.getInstrumentFactor();       //tag === 3
        let infra= ManualQAStore.getInfraFactor();                    //tag === 4
        let specs= ManualQAStore.getSpecsFactor();                    //tag === 5
        let model = ManualQAStore.getModelFactor();                 //tag === 6
        let test_data= ManualQAStore.getTestDataFactor();             //tag === 7
        let test_case= ManualQAStore.getTestCaseFactor();             //tag === 8
        let method_test= ManualQAStore.getMethodTestFactor();         //tag === 9
        let bug_report= ManualQAStore.getBugReportFactor();           //tag === 10
        let io_data= ManualQAStore.getIoDataFactor();                 //tag === 11
        
        let auto_label = ManualQAStore.getAutoLabel();
        // let create_date = "2024-01-08T20:17:03.012Z";
        let create_date = ManualQAStore.getCreateDate();
        let status = ManualQAStore.getStatus();
        let user_label_sp = fv["storyPoints"];
        let user_label_hr = fv["hours"];
        // let nazvanie = "WebService на Spring";
        let nazvanie = fv["taskName"];
        // let user_comments = "Использовать WebClient";
        let user_comments = ManualQAStore.getUserComments();
        // let description = "Нужен WebService на Spring с jetty и netty под капотом для реализации простейших CRUD операций над базой Postgrtes с Spring JDBC Template. Бизнес-логика должна быть оформляема в виде динамически подулючаемых модулей";
        let description = fv["description"];
        //сохранить в БД все значения
        let data: TGetManualQATaskFactors = {user_id, access, job, instrument, infra, specs, model, test_data, test_case, method_test, bug_report, io_data, auto_label, create_date, status, user_label_sp, user_label_hr, nazvanie, user_comments,description};
        ManualQAStore.getAccess(data);
        // ManualQAStore.getAccess();
    }

    const navigate = useNavigate();
    const handleClick = () : void => {
        ManualQAStore.setFactor(10);
        //navigate(clientRoutes.ManualQAForm10)
    };

    return (
        <CenterDivWrapper>
            <Title level={4}>Дополниельные данные</Title>
            <Text>Для обучения нейросети мы собираем ваши описания и комментарии в текстовом виде, а также ваши экспертные колличественные оценки.</Text>
            <Text>Нейросетевой модуль построенный в соответствии с архитектурой Bag of words будет обучаться на внесённых текстах и экспертных оценках и формировать собственное предсказание трудоёмкости.</Text>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                onValuesChange={onFormLayoutChange}
            >
                <Form.Item<FieldType>
                    label="Название задачи:"
                    name="taskName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Описание задачи:"
                    name="description"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Комментарии к задаче:"
                    name="userComment"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Text>Для обучения нейросети мы собираем ваши описания и комментарии в текстовом виде, а также ваши экспертные колличественные оценки.</Text>
                <Form.Item<FieldType>
                    label="В сторипоинтах: "
                    name="storyPoints"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Или в человеко-часах:"
                    name="hours"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" onClick={onButtonClick}>
                        Сохранить и показать результат
                    </Button>
                </Form.Item>
            </Form>
        </CenterDivWrapper>
    );
});
