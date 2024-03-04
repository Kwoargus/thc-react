import React, {useState} from "react";
import {Button, Form, Input, Radio, RadioChangeEvent, Space} from "antd";
import {Divider, Typography} from "antd";
import {CenterDivWrapper} from "../../style";
import {useNavigate} from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {observer} from "mobx-react-lite";
import {TGetTesterTaskFactors} from "../../../api/tester/types";

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

export const TesterForm13 = observer((): JSX.Element => {

    const {TesterStore} = useStores();

    const {Title, Paragraph, Text, Link} = Typography;
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
    // const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    // setFormLayout(layout);
    // };

    const buttonItemLayout =
        formLayout === "horizontal"
            ? {wrapperCol: {span: 14, offset: 4}}
            : null;
    const formItemLayout =
        formLayout === "horizontal"
            ? {labelCol: {span: 4}, wrapperCol: {span: 14}}
            : null;
    const [value, setValue] = useState(0);
    const onChange = (e: RadioChangeEvent) => {// обрабатывать события в инпутах
        setValue(e.target.value);
        // Сохранить в store данные из инпутов
        let acc = TesterStore.getAccum();
        TesterStore.setAutoLabel(Number(acc));
        let createDate = ""; // сгенерировать текущую дату
        TesterStore.setCreateDate(createDate);
        let status = ""; //Считать из инпута
        TesterStore.setStatus(status);
        let userLabelSp = 0; //Считать из инпута
        TesterStore.setUserLabelSp(userLabelSp);
        let userLabelHr = 0; //Считать  из инпута
        TesterStore.setUserLabelHr(userLabelHr);
        let nazvanie = ""; //Считать из инпута
        TesterStore.setNazvanie(nazvanie);
        let userComments = ""; //Считать из инпута
        TesterStore.setUserComments(userComments);
        let description = ""; //Считать из инпута
        TesterStore.setDescription(description);
    };

    const onButtonClick = async (values: any) => {
        try {
            await form.validateFields();
            TesterStore.setFactor(14);
        } catch (error) {
            console.error('Ошибка валидации:', error);
            alert("Заполните обязательные поля!");
        }

        let fv = form.getFieldsValue(true);
        console.log("fv[1] = ", fv["taskName"]);

        // выбрать из store все значения для отправки на backend
        let user_id = TesterStore.getUserId();
        let access = TesterStore.getAccessFactor();
        let job = TesterStore.getJobFactor();
        let model = TesterStore.getModelFactor();
        let instrument = TesterStore.getInstrumentFactor();
        let infra = TesterStore.getInfraFactor();
        let specs = TesterStore.getSpecsFactor();
        let test_data = TesterStore.getTestDataFactor();
        let test_case = TesterStore.getTestCaseFactor();
        let method_test = TesterStore.getMethodTestFactor();
        let io_data = TesterStore.getIoDataFactor();
        let bug_report = TesterStore.getBugReportFactor();
        let pages = TesterStore.getPagesFactor();

        let auto_label = TesterStore.getAutoLabel();
        // let create_date = "2024-01-08T20:17:03.012Z";
        let create_date = TesterStore.getCreateDate();
        let status = TesterStore.getStatus();
        let user_label_sp = fv["storyPoints"];
        let user_label_hr = fv["hours"];
        let nazvanie = fv["taskName"];
        let user_comments = fv["userComment"];
        let description = fv["description"];
        //сохранить в БД все значения
        let data: TGetTesterTaskFactors = {
            user_id,
            access,
            job,
            model,
            instrument,
            infra,
            specs,
            test_data,
            test_case,
            method_test,
            io_data,
            bug_report,
            pages,
            auto_label,
            create_date,
            status,
            user_label_sp,
            user_label_hr,
            nazvanie,
            user_comments,
            description
        };
        TesterStore.getAccess(data);
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
                // onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                {/*<Form.Item label="Факторы влияющие на трудоёмкость задач для аналитика">*/}
                <Form.Item<FieldType>
                    label="Название задачи:"
                    name="taskName"
                    rules={[{required: true, message: 'Please input task name!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="Описание задачи:"
                    name="description"
                    rules={[{required: true, message: 'Please input description of the task!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="Комментарии к задаче:"
                    name="userComment"
                    rules={[{required: true, message: 'Please input your comment!'}]}
                >
                    <Input/>
                </Form.Item>
                {/*<Form.Item label="Дайте свою оценку трудоёмкости задачи:"></Form.Item>*/}
                <Text>Для обучения нейросети мы собираем ваши описания и комментарии в текстовом виде, а также ваши экспертные колличественные оценки.</Text>
                <Form.Item<FieldType>
                    label="В сторипоинтах: "
                    name="storyPoints"
                    rules={[{required: true, message: 'Please input your estimate in story points!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="Или в человеко-часах:"
                    name="hours"
                    rules={[{required: true, message: 'Please input your estimate in hours!'}]}
                >
                    <Input/>
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
