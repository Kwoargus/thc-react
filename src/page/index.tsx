import React, {useEffect, useState} from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {AuthPage} from "./Auth";
import {MainPage} from "./Main";
import {BackendFactors} from "./BackendFactors";
import {FrontendFactors} from "./FrontendFactors";
import {TesterFactors} from "./TesterFactors";
import {AnalistFactors} from "./AnalistFactors";
import {SqlFactors} from "./SqlFactors";
import {PageLayout} from "./style";
import {clientRoutes} from "src/routes/client";
import {Breadcrumb, ConfigProvider, Layout, Menu, type MenuProps, theme} from "antd";
import {DesktopOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import Logo from "src/assets/calculator.svg";

// import {useStores} from "src/stores";
import {Sidebar} from "../components/Sidebar";

const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        label,
        key,
        icon,
        children,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('WEB-разработка', 'sub1', <DesktopOutlined rev={undefined}/>, [
        getItem('Бэкенд', clientRoutes.backendFactors),
        getItem('Фронтенд', clientRoutes.frontendFactors),
        getItem('Тестировщик', clientRoutes.testerFactors),
        getItem('Аналитик', clientRoutes.analistFactors, <PieChartOutlined rev={undefined}/>),
        getItem('SQL-разработчик', clientRoutes.sqlFactors),
    ]),
    getItem('1С', 'sub2', <TeamOutlined rev={undefined}/>, [
        getItem('1С-разработчик', '1'),
        getItem('1С-консультант', '2')
    ]),
];


export const Page = observer((): JSX.Element => {

    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    // const {
    //     AuthStore: {isAuth}
    // } = useStores();
    // let {
    //     AnalistStore: {}
    // } = useStores();


    // useEffect(() => {
    //     !isAuth && navigate(clientRoutes.auth);
    // }, [isAuth]);
    //
    // useEffect(() => {
    //
    // });



    return (
        <PageLayout>
            {/*<Sidebar/>*/}
            <ConfigProvider
                theme={{
                    token: { // Глобальные стили

                        // Seed Token
                        // colorPrimary: '#00b96b',
                        // borderRadius: 100,

                        // Отключение анимации:
                        // motion: false,

                        // Alias Token
                        // colorBgContainer: '#f6ffed',
                    },
                    components: {
                        Layout: {
                            bodyBg: 'white', // цвет фона контейнера
                            siderBg: '#77ffff', // цвет бокового меню
                            triggerBg: '#77eeee', // цвет триггера
                            triggerColor: 'black', // цвет "значка" триггера
                        },
                    },
                }}
            >

            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    style={{userSelect: 'none'}}
                    collapsible
                    collapsed={collapsed}
                    width={240}
                    onCollapse={(value) => setCollapsed(value)}>
                    <Logo onClick={() => navigate(clientRoutes.main)}
                          style={{
                              background: "#77ffff", // цвет фона лого
                              maxWidth: '100%',
                              maxHeight: '100%',
                              height: '64px',
                              display: 'block',
                              margin: 'auto',
                              padding: '3px'
                          }}/>
                    <Menu
                        // theme="dark"
                        theme="light"
                        style={{backgroundColor: '#77ffff'}} // цвет фона пунктов меню сайдера
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                        onClick={({key}) => navigate(key)}/>
                </Sider>
                <Layout>
                    {/*<Header style={{background: "#e8e8e8", display: 'flex', alignItems: 'center'}}>*/}
                    {/*    <div style={{flex: '1'}}>*/}
                    {/*        Header*/}
                    {/*    </div>*/}
                    {/*    <div style={{marginRight: '5px'}}>*/}
                    {/*        Войти*/}
                    {/*    </div>*/}
                    {/*    <div style={{*/}
                    {/*        marginRight: '10px',*/}
                    {/*        borderRadius: '50%',*/}
                    {/*        background: 'white',*/}
                    {/*        padding: '5px',*/}
                    {/*        display: 'flex',*/}
                    {/*        alignItems: 'center',*/}
                    {/*        border: "1px solid black"*/}
                    {/*    }}>*/}
                    {/*        <UserOutlined style={{fontSize: '25px', color: 'black'}} rev={undefined}/>*/}
                    {/*    </div>*/}
                    {/*</Header>*/}
                    <Content style={{margin: '0 8px'}}>
                        {/*<Breadcrumb style={{margin: '8px 0', backgroundColor: '#cfcccc', padding: '5px'}}>*/}
                        {/*    <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer, // цвет фона контента
                                borderRadius: borderRadiusLG, // закругление блока контента
                            }}
                        >
                            <Routes>
                                <Route path={clientRoutes.auth} element={<AuthPage/>}/>
                                <Route path={clientRoutes.main} element={<MainPage/>}/>
                                <Route path={clientRoutes.backendFactors} element={<BackendFactors/>}/>
                                <Route path={clientRoutes.frontendFactors} element={<FrontendFactors/>}/>
                                <Route path={clientRoutes.testerFactors} element={<TesterFactors/>}/>
                                <Route path={clientRoutes.analistFactors} element={<AnalistFactors/>}/>
                                <Route path={clientRoutes.sqlFactors} element={<SqlFactors/>}/>
                            </Routes>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center', backgroundColor: '#e8e8e8'}}>
                        Все права защищены © 2022–{new Date().getFullYear()}
                        <br/>
                        TheFst Production
                    </Footer>
                </Layout>
            </Layout>
            </ConfigProvider>
        </PageLayout>
    );
});

