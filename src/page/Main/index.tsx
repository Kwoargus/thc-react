import { Sidebar } from "src/components/Sidebar";
import { Content } from "./style";
import {Typography} from "antd";

const { Title, Paragraph, Text, Link } = Typography;
export const MainPage = (): JSX.Element => (

    <Content>
        <Title level={2}>Калькулятор трудоёмкости задач. </Title>
    </Content>

);
