import React, {useEffect, useState} from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";
import {useStores} from "../../../stores";
import {ManualQAStore} from "../../../stores/manualQA";
import {observer} from "mobx-react-lite";
import {AuthStore} from "../../../stores/auth";
import {TGetManualQATaskFactors, TGetManualQATaskFactorsResponce} from "src/api/manualQA/types";
// import {uuidv4} from "uuid";//чота не находит uuid надо сделать на бэкенде

type LayoutType = Parameters<typeof Form>[0]["layout"];

export const ManualQAForm1 = observer((): JSX.Element => {

  const {ManualQAStore} = useStores();

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
    ManualQAStore.setAccum(Number(e.target.value));
    ManualQAStore.setAccessFactor(Number(e.target.value));
  };

  const navigate = useNavigate();

  const handleClick = () : void => {
    ManualQAStore.setFactor(2);
  };

  return (
    <CenterDivWrapper>
      <Title level={4}>Факторы влияющие на трудоёмкость задач для тестировщика</Title>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        onValuesChange={onFormLayoutChange}
      >
          <Form.Item label="1. Выберите вариант ситуации с доступами и лицензиями: ">
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>
                {" "}
                1. У тестировщика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии. [0 storypoints]
              </Radio>
              <Radio value={2}>
                {" "}
                2. У тестировщика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время. [1 storypoints]
              </Radio>
              <Radio value={3}>
                {" "}
                3. У тестировщика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня. [2 storypoints]
              </Radio>
              <Radio value={4}>
                {" "}
                4. У тестировщика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней. [3 storypoints]
              </Radio>
              <Radio value={5}>
                {" "}
                5. У тестировщика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [5 storypoints]
              </Radio>
              <Radio value={6}>
                {" "}
                6. У тестировщика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [8 storypoints]
              </Radio>
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
