import React, { useState } from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {FrontStore} from "../../../stores/front";
import {TGetFrontTaskFactors} from "../../../api/front/types";
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

export const FrontForm15 = observer((): JSX.Element => {

    const {FrontStore} = useStores();

    const { Title, Paragraph, Text, Link } = Typography;
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
    // const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        // setFormLayout(layout);
    // };

    const buttonItemLayout =
        formLayout === "horizontal"
            ? { wrapperCol: { span: 14, offset: 4 } }
            : null;
    const formItemLayout =
        formLayout === "horizontal"
            ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
            : null;
    const [value, setValue] = useState(0);
    // const onChange = (e: RadioChangeEvent) => {// обрабатывать события в инпутах
    //     setValue(e.target.value);
    //     // Сохранить в store данные из инпутов
    //     let acc = FrontStore.getAccum();
    //     FrontStore.setAutoLabel(Number(acc));
    //     let createDate =  ""; // сгенерировать текущую дату
    //     FrontStore.setCreateDate(createDate);
    //     let status =  ""; //Считать из инпута
    //     FrontStore.setStatus(status);
    //     let userLabelSp =  0; //Считать из инпута
    //     FrontStore.setUserLabelSp(userLabelSp);
    //     let userLabelHr =  0; //Считать  из инпута
    //     FrontStore.setUserLabelHr(userLabelHr);
    //     let nazvanie =  ""; //Считать из инпута
    //     FrontStore.setNazvanie(nazvanie);
    //     let userComments =  ""; //Считать из инпута
    //     FrontStore.setUserComments(userComments);
    //     let description =  ""; //Считать из инпута
    //     FrontStore.setDescription(description);
    // };

    const onButtonClick = async (values: any) => {
        try {
            await form.validateFields();
            FrontStore.setFactor(16);
        } catch (error) {
            console.error('Ошибка валидации:', error);
            alert("Заполните обязательные поля!");
        }

        // form.setFieldsValue({ taskName: 'Hello world!', description: 'male' });
        let fv = form.getFieldsValue(true);
        console.log("fv[1] = ",fv["taskName"]);
        // FrontStore.setNazvanie(fv["taskName"]);
        // FrontStore.setDescription(fv["description"]);
        // FrontStore.setUserComments(fv["userComment"]);
        // FrontStore.setUserLabelSp(fv["storyPoints"]);
        // FrontStore.setUserLabelHr(fv["hours"]);

        // выбрать из store все значения для отправки на backend
        // let user_id = FrontStore.getUserId();
        // let access = FrontStore.getFrontAccess();
        // let job =  FrontStore.getFrontJob();
        // let model = FrontStore.getModelFactor();
        // let instrument = FrontStore.getInstrumentFactor();
        // let information = FrontStore.getInformationFactor();
        // let buziness = FrontStore.getBuzinessFactor();
        // let ui_back = FrontStore.getUiBackFactor();
        // let collegues = FrontStore.getColleguesFactor();
        // let auto_label = FrontStore.getAutoLabel();
        // // let create_date = "2024-01-08T20:17:03.012Z";
        // let create_date = FrontStore.getCreateDate();
        // let status = FrontStore.getStatus();
        // let user_label_sp = fv["storyPoints"];
        // let user_label_hr = fv["hours"];
        // // let nazvanie = "WebService на Spring";
        // let nazvanie = fv["taskName"];
        // // let user_comments = "Использовать WebClient";
        // let user_comments = FrontStore.getUserComments();
        // // let description = "Нужен WebService на Spring с jetty и netty под капотом для реализации простейших CRUD операций над базой Postgrtes с Spring JDBC Template. Бизнес-логика должна быть оформляема в виде динамически подулючаемых модулей";
        // let description = fv["description"];
        // //сохранить в БД все значения
        // let data: TGetFrontTaskFactors = {user_id, access, job, model, instrument, information, buziness, ui_back, collegues, auto_label, create_date, status, user_label_sp, user_label_hr, nazvanie, user_comments,description};
        // FrontStore.getAccess(data);
        // // FrontStore.getAccess();
    }

    const navigate = useNavigate();
    const handleClick = () : void => {
        FrontStore.setFactor(10);
        //navigate(clientRoutes.frontForm10)
    };

    return (
        <CenterDivWrapper>
            <Title level={4}>Дополнительные данные</Title>
            <Text>Для обучения нейросети мы собираем ваши описания и комментарии в текстовом виде, а также ваши экспертные колличественные оценки.</Text>
            <Text>Нейросетевой модуль построенный в соответствии с архитектурой Bag of words будет обучаться на внесённых текстах и экспертных оценках и формировать собственное предсказание трудоёмкости.</Text>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                // initialValues={{ layout: formLayout }}
                // onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                {/*<Form.Item label="Факторы влияющие на трудоёмкость задач для аналитика">*/}
                <Form.Item<FieldType>
                    label="Название задачи:"
                    name="taskName"
                    rules={[{ required: true, message: 'Это обязательное поле!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Описание задачи:"
                    name="description"
                    rules={[{ required: true, message: 'Это обязательное поле!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Комментарии к задаче:"
                    name="userComment"
                    rules={[{ required: true, message: 'Это обязательное поле!' }]}
                >
                    <Input />
                </Form.Item>
                {/*<Form.Item label="Дайте свою оценку трудоёмкости задачи:"></Form.Item>*/}
                <Text>Для обучения нейросети мы собираем ваши описания и комментарии в текстовом виде, а также ваши экспертные колличественные оценки.</Text>
                <Form.Item<FieldType>
                    label="В сторипоинтах: "
                    name="storyPoints"
                    rules={[{ required: true, message: 'Это обязательное поле!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Или в человеко-часах:"
                    name="hours"
                    rules={[{ required: true, message: 'Это обязательное поле!' }]}
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
