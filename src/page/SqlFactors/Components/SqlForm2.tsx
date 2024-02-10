import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {SqlStore} from "../../../stores/sql";
import {observer} from "mobx-react-lite";
import {AuthStore} from "../../../stores/auth";
import {TGetSqlTaskFactors, TGetSqlTaskFactorsResponce} from "src/api/sql/types";
// import {uuidv4} from "uuid";//чота не находит uuid надо сделать на бэкенде

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const SqlForm2 = observer((): JSX.Element => {

  const {SqlStore} = useStores();

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
    SqlStore.setAccum(Number(e.target.value));
    SqlStore.setAccessFactor(Number(e.target.value));
  };

  const navigate = useNavigate();

  const handleClick = () : void => {
    SqlStore.setFactor(2);
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
        onValuesChange={onFormLayoutChange}
        // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
      >
        {/*<Form.Item label="Факторы влияющие на трудоёмкость задач для аналитика">*/}
          <Form.Item label="1. Выберите вариант ситуации с требованиями на разработку: ">
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>
                {" "}
                1. У SQL-разработчика есть детальное описание структуры данных со всеми объектами данных, связями между ними, их атрибутами вплоть до типов данных атрибутов и ограничений их значений. [0 storypoints]
              </Radio>
              <Radio value={2}>
                {" "}
                2. У SQL-разработчика есть описание структуры данных со всеми объектами данных, связями между ними, их атрибутами, но типы данных атрибутов и ограничения их значений необходимо уточнить. [1 storypoints]
              </Radio>
              <Radio value={3}>
                {" "}
                3. У SQL-разработчика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня. [2 storypoints]
              </Radio>
              <Radio value={4}>
                {" "}
                4. У SQL-разработчика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней. [3 storypoints]
              </Radio>
              <Radio value={5}>
                {" "}
                5. У SQL-разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [5 storypoints]
              </Radio>
              <Radio value={6}>
                {" "}
                6. У SQL-разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [8 storypoints]
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
