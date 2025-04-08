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
import {clientRoutes} from "src/routes/client";
import {useStores} from "src/stores";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LaptopOutlined,
    ConsoleSqlOutlined,
    PieChartOutlined,
    DatabaseOutlined,
    BugOutlined,
    SunOutlined,
    MoonOutlined
} from '@ant-design/icons';
import {Button, ConfigProvider, Layout, Menu, theme, Switch} from 'antd';
import Logo from "../assets/calculator2.svg";
import {
    layoutStyle,
    siderStyle,
    logoStyle,
    headerStyle,
    headerTitleStyle,
    headerAuthStyle,
    contentStyle,
    footerStyle,
    menuMode,
    getThemeConfig
} from "./style";

const {Header, Sider, Content, Footer} = Layout;

export const Page = observer((): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const {
        token: {borderRadiusLG},
    } = theme.useToken();

    const {
        AuthStore: {isAuth}
    } = useStores();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        !isAuth && navigate(clientRoutes.auth);
    }, [isAuth]);

    useEffect(() => {
        // Проверяем предпочтения пользователя в системе
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);

        // Можно также проверить localStorage, если сохраняли тему там
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

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
        {
            key: 'backendFactors',
            icon: <DatabaseOutlined/>,
            label: 'Бэкенд',
            path: clientRoutes.backendFactors,
        },
        {
            key: 'frontendFactors',
            icon: <LaptopOutlined/>,
            label: 'Фронтенд',
            path: clientRoutes.frontendFactors,
        },
        {
            key: 'testerFactors',
            icon: <BugOutlined/>,
            label: 'Тестировщик',
            path: clientRoutes.testerFactors,
        },
        {
            key: 'analistFactors',
            icon: <PieChartOutlined/>,
            label: 'Аналитик',
            path: clientRoutes.analistFactors,
        },
        {
            key: 'sqlFactors',
            icon: <ConsoleSqlOutlined/>,
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

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <ConfigProvider theme={getThemeConfig(isDarkMode)}>
            <Layout style={layoutStyle}>
                <Sider
                    style={siderStyle(isDarkMode)}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    theme={isDarkMode ? 'dark' : 'light'}
                    width={300}
                >
                    <div className="demo-logo-vertical"/>
                    <Logo
                        onClick={() => navigate(clientRoutes.main)}
                        style={logoStyle}
                    />
                    <Menu
                        theme={isDarkMode ? 'dark' : 'light'}
                        mode={menuMode}
                        selectedKeys={selectedKeys}
                        onClick={handleMenuClick}
                        items={menuItems}
                    />
                </Sider>
                <Layout>
                    <Header style={headerStyle(isDarkMode)}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <div style={headerTitleStyle}>
                            <h1 style={{color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.88)'}}>
                                Task Hardness Calculator
                            </h1>
                        </div>
                        <div style={headerAuthStyle}>
                            <Switch
                                checkedChildren={<SunOutlined/>}
                                unCheckedChildren={<MoonOutlined/>}
                                checked={isDarkMode}
                                onChange={toggleTheme}
                            />
                            {/*<a onClick={() => navigate(clientRoutes.auth)} style={authLinkStyle}>*/}
                            {/*    <span style={{color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.88)'}}>*/}
                            {/*      Войти*/}
                            {/*    </span>*/}
                            {/*</a>*/}
                            <div style={{marginRight: '42px'}}>
                                <h2>
                                    <a onClick={() => navigate(clientRoutes.auth)} style={{cursor: 'pointer'}}>
                                        Войти
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </Header>
                    <Content style={contentStyle(isDarkMode, {borderRadiusLG})}>
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
                    <Footer style={footerStyle(isDarkMode)}>
                        <span style={{color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.88)'}}>
                          Все права защищены © 2022–{new Date().getFullYear()}
                            <br/>
                          TheFst Production
                        </span>
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
});