import React, { useState } from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { Divider, Typography } from "antd";
import { CenterDivWrapper } from "../style";
import { useNavigate } from "react-router-dom";
import {clientRoutes} from "../../../routes/client";

type LayoutType = Parameters<typeof Form>[0]["layout"];

interface IProps {
  obj: string;
}
export const AnalistForm1 = ({ obj }: IProps): JSX.Element => {
  console.log("AnalistForm1 get obj = ", obj)
  const objComponents = obj.split(",", 3);
  const { Title, Paragraph, Text, Link } = Typography;
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const buttonItemLayout = formLayout === "horizontal" ? { wrapperCol: { span: 14, offset: 4 } } : null;
  const [value, setValue] = useState(1);
  let accum = Number(objComponents[2]);
  const formItemLayout =  formLayout === "horizontal" ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    accum = accum  + e.target.value;
    console.log("e.target.value = ", e.target.value);
    console.log("accum = ", accum);
    const objStr=objComponents[0] + "," + objComponents[1] + ","+value;
    console.log("AnalistForm1 made new objStr = : " + objStr);
  };

  const navigate = useNavigate();
  const handleClick = () : void => {
    console.log("button clicked");
    navigate(clientRoutes.analistForm2)
  };

  return (
    <CenterDivWrapper>
      <Title level={4}>Факторы влияющие на трудоёмкость задач для аналитика</Title>
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
              <Radio value={1}>
                {" "}
                1. У аналитика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии. [0 storypoints]
              </Radio>
              <Radio value={2}>
                {" "}
                2. У аналитика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время. [1 storypoints]
              </Radio>
              <Radio value={3}>
                {" "}
                3. У разработчика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня. [2 storypoints]
              </Radio>
              <Radio value={4}>
                {" "}
                4. У аналитика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней. [3 storypoints]
              </Radio>
              <Radio value={5}>
                {" "}
                5. У аналитика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [5 storypoints]
              </Radio>
              <Radio value={6}>
                {" "}
                6. У аналитика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [8 storypoints]
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
};
