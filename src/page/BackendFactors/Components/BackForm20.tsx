import React, { useState } from "react";
import {Button, Form, Input, Radio, RadioChangeEvent, Space, Table} from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {BackStore} from "../../../stores/back";
import {TGetBackTaskFactors} from "../../../api/back/types";
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

export const BackForm20 = observer((): JSX.Element => {

    const {BackStore} = useStores();

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

    // const navigate = useNavigate();
    // const handleClick = () : void => {
    //     console.log("button clicked");
    //     navigate(clientRoutes.backendFactors)
    // };
    const onChange = (e: RadioChangeEvent) => {// обрабатывать события в инпутах
        setValue(e.target.value);
        // Сохранить в store данные из инпутов
        let acc = BackStore.getAccum();
        BackStore.setAutoLabel(Number(acc));
        let createDate =  ""; // сгенерировать текущую дату
        BackStore.setCreateDate(createDate);
        let status =  ""; //Считать из инпута
        BackStore.setStatus(status);
        let userLabelSp =  0; //Считать из инпута
        BackStore.setUserLabelSp(userLabelSp);
        let userLabelHr =  0; //Считать  из инпута
        BackStore.setUserLabelHr(userLabelHr);
        let nazvanie =  ""; //Считать из инпута
        BackStore.setNazvanie(nazvanie);
        let userComments =  ""; //Считать из инпута
        BackStore.setUserComments(userComments);
        let description =  ""; //Считать из инпута
        BackStore.setDescription(description);
    };

    const onButtonClick = (values: any) => {
        BackStore.setFactor(21);

        let fv = form.getFieldsValue(true);
        console.log("fv[1] = ",fv["taskName"]);

        // выбрать из store все значения для отправки на backend
        let user_id = BackStore.getUserId();
        let access = BackStore.getAccessFactor();
        let job =  BackStore.getJobFactor();
        let model = BackStore.getModelFactor();
        let instrument = BackStore.getInstrumentFactor();
        let infra = BackStore.getInfraFactor();
        let specs = BackStore.getSpecsFactor();
        let tables = BackStore.getTablesFactor();
        let test_data = BackStore.getTestDataFactor();
        let entity = BackStore.getEntityFactor();
        let buz_func = BackStore.getBizFuncFactor();
        let end_point = BackStore.getEndPointFactor();
        let io_data = BackStore.getIoDataFactor();
        let web_client = BackStore.getWebClientFactor();
        let brocker = BackStore.getBrockerFactor();
        let r_and_d = BackStore.getRandDFactor();
        let unit_test = BackStore.getUnitTestFactor();
        let log = BackStore.getLogFactor();
        let migration = BackStore.getMigrationFactor();
        let comments = BackStore.getCommentsFactor();

        let auto_label = BackStore.getAutoLabel();
        // let create_date = "2024-01-08T20:17:03.012Z";
        let create_date = BackStore.getCreateDate();
        let status = BackStore.getStatus();
        let user_label_sp = fv["storyPoints"];
        let user_label_hr = fv["hours"];
        let nazvanie = fv["taskName"];
        let user_comments = fv["userComment"];
        let description = fv["description"];
        // //сохранить в БД все значения
        let data: TGetBackTaskFactors = {user_id, access, job, model, instrument, infra, specs, tables, test_data, entity, buz_func, end_point, io_data, web_client, brocker, r_and_d, unit_test, log, migration, comments,  auto_label, create_date, status, user_label_sp, user_label_hr, nazvanie, user_comments,description};
        BackStore.getAccess(data);
        // BackStore.getAccess();
    }

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
                onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                {/*<Form.Item label="Факторы влияющие на трудоёмкость задач для аналитика">*/}
                <Form.Item<FieldType>
                    label="Название задачи:"
                    name="taskName"
                    rules={[{ required: true, message: 'Please input task name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Описание задачи:"
                    name="description"
                    rules={[{ required: true, message: 'Please input description of the task!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Комментарии к задаче:"
                    name="userComment"
                    rules={[{ required: true, message: 'Please input your comment!' }]}
                >
                    <Input />
                </Form.Item>
                {/*<Form.Item label="Дайте свою оценку трудоёмкости задачи:"></Form.Item>*/}
                <Text>Для обучения нейросети мы собираем ваши описания и комментарии в текстовом виде, а также ваши экспертные колличественные оценки.</Text>
                <Form.Item<FieldType>
                    label="В сторипоинтах: "
                    name="storyPoints"
                    rules={[{ required: true, message: 'Please input your estimate in story points!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Или в человеко-часах:"
                    name="hours"
                    rules={[{ required: true, message: 'Please input your estimate in hours!' }]}
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