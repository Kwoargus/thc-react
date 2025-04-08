import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
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
import {useStores} from "src/stores";
import {Sidebar} from "../components/Sidebar";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LaptopOutlined,
    ConsoleSqlOutlined,
    PieChartOutlined,
    DatabaseOutlined,
    BugOutlined,
} from '@ant-design/icons';
import {Button, ConfigProvider, Layout, Menu, theme} from 'antd';
import Logo from "../assets/calculator.svg";

const {Header, Sider, Content, Footer} = Layout;

export const Page = observer((): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const {
        AuthStore: {isAuth}
    } = useStores();
    let {
        AnalistStore: {}
    } = useStores();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        !isAuth && navigate(clientRoutes.auth);
    }, [isAuth]);

    useEffect(() => {
        const currentPath = location.pathname;
        const selectedItem = menuItems.find(item => item.path === currentPath);
        if (selectedItem) {
            setSelectedKeys([selectedItem.key]);
        } else {
            setSelectedKeys([]);
        }
    }, [location.pathname]);

    const menuItems = [
        // {
        //     key: 'main',
        //     icon: <UserOutlined rev={undefined}/>,
        //     label: 'Главная',
        //     path: clientRoutes.main,
        // },
        {
            key: 'backendFactors',
            icon: <DatabaseOutlined rev={undefined}/>,
            label: 'Бэкенд',
            path: clientRoutes.backendFactors,
        },
        {
            key: 'frontendFactors',
            icon: <LaptopOutlined rev={undefined}/>,
            label: 'Фронтенд',
            path: clientRoutes.frontendFactors,
        },
        {
            key: 'testerFactors',
            icon: <BugOutlined rev={undefined}/>,
            label: 'Тестировщик',
            path: clientRoutes.testerFactors,
        },
        {
            key: 'analistFactors',
            icon: <PieChartOutlined rev={undefined}/>,
            label: 'Аналитик',
            path: clientRoutes.analistFactors,
        },
        {
            key: 'sqlFactors',
            icon: <ConsoleSqlOutlined rev={undefined}/>,
            label: 'SQL-Разработчик',
            path: clientRoutes.sqlFactors,
        },
    ];

    const handleMenuClick = (e: { key: string }) => {
        const selectedItem = menuItems.find(item => item.key === e.key);
        if (selectedItem) {
            navigate(selectedItem.path);
        }
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        footerBg: 'colorBgContainer',
                    },
                    Menu: {
                        // itemBorderRadius: 0,
                        // itemHoverBg: 'transparent',
                        // itemSelectedBg: 'transparent',
                        // itemSelectedColor: '#00C2CB',
                        activeBarBorderWidth: 0,
                    },
                },
                token: {
                    colorPrimary: '#00C2CB',
                },
            }}
        >
            <Layout style={{
                minHeight: "100vh",
            }}>
                <Sider
                    style={{userSelect: "none"}}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    theme="light"
                    width={240}
                >
                    <div className="demo-logo-vertical"/>
                    <Logo onClick={() => navigate(clientRoutes.main)}
                          style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              height: '64px',
                              display: 'block',
                              margin: 'auto',
                              padding: '5px',
                          }}/>
                    <Menu
                        theme="light"
                        mode="inline"
                        selectedKeys={selectedKeys}
                        onClick={handleMenuClick}
                        items={menuItems}
                    />
                </Sider>
                <Layout>
                    <Header style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: 'flex',
                    }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined rev={undefined}/> :
                                <MenuFoldOutlined rev={undefined}/>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <div style={{flex: '2', marginLeft: '18px'}}>
                            <h1>Task Hardness Calculator</h1>
                        </div>
                        <div style={{marginRight: '42px'}}>
                            <h2><a onClick={() => navigate(clientRoutes.auth)} style={{cursor: 'pointer'}}>Войти</a></h2>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
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
                    </Content>
                    <Footer style={{textAlign: 'center', backgroundColor: '#e8e8e8'}}>
                        Все права защищены © 2022–{new Date().getFullYear()}
                        <br/>
                        TheFst Production
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
});