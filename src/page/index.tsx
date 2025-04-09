import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { AuthPage } from "./Auth";
import { MainPage } from "./Main";
import { BackendFactors } from "./BackendFactors";
import { FrontendFactors } from "./FrontendFactors";
import { TesterFactors } from "./TesterFactors";
import { AnalistFactors } from "./AnalistFactors";
import { SqlFactors } from "./SqlFactors";
import { clientRoutes } from "src/routes/client";
import { useStores } from "src/stores";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LaptopOutlined,
    ConsoleSqlOutlined,
    PieChartOutlined,
    DatabaseOutlined,
    BugOutlined,
    SunOutlined,
    MoonOutlined,
    CodeOutlined,
    CloudOutlined,
    SecurityScanOutlined,
    MedicineBoxOutlined,
    LineChartOutlined,
    RobotOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, ConfigProvider, Layout, Menu, type MenuProps, theme, Switch } from 'antd';
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
    getThemeConfig,
    PageLayout,
    breadcrumbStyle,
} from "./style";

const { Header, Sider, Content, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    path?: string
): MenuItem {
    return {
        label,
        key,
        icon,
        children,
        path
    } as MenuItem;
}

const menuItems: MenuItem[] = [
    getItem(
        'Информационные технологии',
        'it',
        <LaptopOutlined />,
        [
            getItem(
                'Разработка ПО',
                'software-dev',
                <CodeOutlined />,
                [
                    getItem('Бэкенд', 'backendFactors', <DatabaseOutlined />, undefined, clientRoutes.backendFactors),
                    getItem('Фронтенд', 'frontendFactors', <LaptopOutlined />, undefined, clientRoutes.frontendFactors),
                    getItem('Тестировщик', 'testerFactors', <BugOutlined />, undefined, clientRoutes.testerFactors),
                    getItem('Аналитик', 'analistFactors', <PieChartOutlined />, undefined, clientRoutes.analistFactors),
                    getItem('SQL-Разработчик', 'sqlFactors', <ConsoleSqlOutlined />, undefined, clientRoutes.sqlFactors),
                    getItem('DevOps', 'devopsFactors', <CloudOutlined />, undefined, '/devops'),
                    getItem('AI/ML Engineer', 'aiFactors', <RobotOutlined />, undefined, '/ai-ml'),
                ]
            ),
            getItem(
                'Кибербезопасность',
                'cybersecurity',
                <SecurityScanOutlined />,
                [
                    getItem('Аналитик безопасности', 'securityAnalyst', <PieChartOutlined />, undefined, '/security-analyst'),
                    getItem('Пентестер', 'pentester', <BugOutlined />, undefined, '/pentester'),
                ]
            )
        ]
    ),
    getItem(
        'Здравоохранение',
        'healthcare',
        <MedicineBoxOutlined />,
        [
            getItem(
                'Медицинские технологии',
                'medtech',
                <LaptopOutlined />,
                [
                    getItem('Мед. аналитик', 'medAnalyst', <PieChartOutlined />, undefined, '/med-analyst'),
                    getItem('Разработчик мед. ПО', 'medDev', <CodeOutlined />, undefined, '/med-dev'),
                ]
            ),
            getItem(
                'Клинические исследования',
                'clinical',
                <LineChartOutlined />,
                [
                    getItem('Координатор исследований', 'researchCoordinator', <PieChartOutlined />, undefined, '/research-coord'),
                    getItem('Монитор качества', 'qualityMonitor', <BugOutlined />, undefined, '/quality-monitor'),
                ]
            )
        ]
    )
];

// Маппинг для хлебных крошек
const breadcrumbNameMap: Record<string, { title: string, parent?: string }> = {
    'it': { title: 'Информационные технологии' },
    'software-dev': { title: 'Разработка ПО', parent: 'it' },
    'cybersecurity': { title: 'Кибербезопасность', parent: 'it' },
    'healthcare': { title: 'Здравоохранение' },
    'medtech': { title: 'Медицинские технологии', parent: 'healthcare' },
    'clinical': { title: 'Клинические исследования', parent: 'healthcare' },

    // Разработка ПО
    [clientRoutes.backendFactors]: { title: 'Бэкенд', parent: 'software-dev' },
    [clientRoutes.frontendFactors]: { title: 'Фронтенд', parent: 'software-dev' },
    [clientRoutes.testerFactors]: { title: 'Тестировщик', parent: 'software-dev' },
    [clientRoutes.analistFactors]: { title: 'Аналитик', parent: 'software-dev' },
    [clientRoutes.sqlFactors]: { title: 'SQL-Разработчик', parent: 'software-dev' },
    'devopsFactors': { title: 'DevOps', parent: 'software-dev' },
    'aiFactors': { title: 'AI/ML Engineer', parent: 'software-dev' },

    // Кибербезопасность
    'securityAnalyst': { title: 'Аналитик безопасности', parent: 'cybersecurity' },
    'pentester': { title: 'Пентестер', parent: 'cybersecurity' },

    // Медицинские технологии
    'medAnalyst': { title: 'Мед. аналитик', parent: 'medtech' },
    'medDev': { title: 'Разработчик мед. ПО', parent: 'medtech' },

    // Клинические исследования
    'researchCoordinator': { title: 'Координатор исследований', parent: 'clinical' },
    'qualityMonitor': { title: 'Монитор качества', parent: 'clinical' }
};

export const Page = observer((): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [breadcrumbItems, setBreadcrumbItems] = useState<{ title: string }[]>([]);

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(savedTheme ? savedTheme === 'dark' : systemDark);
    }, []);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const {
        AuthStore: { isAuth }
    } = useStores();

    useEffect(() => {
        const currentPath = location.pathname;

        // Найти выбранный ключ в меню
        const findSelectedKey = (items: MenuItem[]): string | undefined => {
            for (const item of items) {
                if (!item) continue;

                if ('path' in item && item.path === currentPath) {
                    return item.key as string;
                }

                if ('children' in item && item.children) {
                    const found = findSelectedKey(item.children);
                    if (found) return found;
                }
            }
            return undefined;
        };

        const selectedKey = findSelectedKey(menuItems);
        if (selectedKey) {
            setSelectedKeys([selectedKey]);
        } else {
            setSelectedKeys([]);
        }

        // Обновить хлебные крошки
        const getBreadcrumbItems = (key: string): { title: string }[] => {
            const items: { title: string }[] = [];
            let currentKey: string | undefined = key;

            while (currentKey) {
                const item: { title: string, parent?: string } | undefined = breadcrumbNameMap[currentKey];
                if (item) {
                    items.unshift({ title: item.title });
                    currentKey = item.parent;
                } else {
                    // Если ключ не найден в маппинге, попробуем найти его в путях
                    const pathKey = Object.keys(breadcrumbNameMap).find(
                        k => k === currentPath && breadcrumbNameMap[k].title
                    );
                    if (pathKey) {
                        items.unshift({ title: breadcrumbNameMap[pathKey].title });
                        currentKey = breadcrumbNameMap[pathKey].parent;
                    } else {
                        break;
                    }
                }
            }

            return items;
        };

        if (selectedKey) {
            const items = getBreadcrumbItems(selectedKey);
            setBreadcrumbItems(items);
        } else {
            // Если ключ не найден, попробуем найти путь напрямую
            const directPathItem = breadcrumbNameMap[location.pathname];
            if (directPathItem) {
                const items = getBreadcrumbItems(location.pathname);
                setBreadcrumbItems(items);
            } else {
                setBreadcrumbItems([]);
            }
        }
    }, [location.pathname]);

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

        // Функция для поиска ключа по пути (с учетом вложенности)
        const findKeyByPath = (items: MenuItem[], path: string): string | undefined => {
            for (const item of items) {
                if (!item) continue;

                // Проверяем, есть ли path у текущего элемента
                if ('path' in item && item.path === path) {
                    return item.key as string;
                }

                // Рекурсивно проверяем детей
                if ('children' in item && item.children) {
                    const foundInChildren = findKeyByPath(item.children, path);
                    if (foundInChildren) return foundInChildren;
                }
            }
            return undefined;
        };

        const foundKey = findKeyByPath(menuItems, currentPath);
        setSelectedKeys(foundKey ? [foundKey] : []);
    }, [location.pathname]);

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        const findItemPath = (items: MenuItem[], key: string): string | undefined => {
            for (const item of items) {
                if (!item) continue;

                if ('key' in item && item.key === key && 'path' in item && item.path) {
                    return item.path as string;
                }

                if ('children' in item && item.children) {
                    const found = findItemPath(item.children, key);
                    if (found) return found;
                }
            }
            return undefined;
        };

        const path = findItemPath(menuItems, e.key);
        if (path) {
            navigate(path);
        }
    };

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <div className={`theme-${isDarkMode ? 'dark' : 'light'}`}>

        <ConfigProvider 
            key={isDarkMode ? 'dark' : 'light'} // Синхронное переключение темы 
            theme={getThemeConfig(isDarkMode)}
        >
            <Layout style={layoutStyle}>
                <Sider
                    style={siderStyle(isDarkMode)}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    theme={isDarkMode ? 'dark' : 'light'}
                    width={350}
                >
                    <div className="demo-logo-vertical" />
                    <Logo
                        onClick={() => navigate(clientRoutes.main)}
                        style={logoStyle}
                    />
                    <Menu
                        theme={isDarkMode ? 'dark' : 'light'}
                        mode={menuMode}
                        selectedKeys={selectedKeys}
                        items={menuItems}
                        onClick={handleMenuClick}
                        defaultOpenKeys={['it', 'software-dev', 'cybersecurity', 'healthcare', 'medtech', 'clinical']}
                    />
                </Sider>
                <Layout>
                    <Header style={headerStyle(isDarkMode)}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <div style={headerTitleStyle}>
                            <h1 style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.88)' }}>
                                Task Hardness Calculator
                            </h1>
                        </div>
                        <div style={headerAuthStyle}>
                            <Switch
                                checkedChildren={<SunOutlined />}
                                unCheckedChildren={<MoonOutlined />}
                                checked={isDarkMode}
                                onChange={toggleTheme}
                            />
                            <div style={{ marginRight: '42px' }}>
                                <h2>
                                    <a onClick={() => navigate(clientRoutes.auth)} style={{ cursor: 'pointer' }}>
                                        Войти
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </Header>
                    <Content style={contentStyle(isDarkMode, { borderRadiusLG })}>
                        <Breadcrumb style={breadcrumbStyle(isDarkMode, { borderRadiusLG })}>
                            {breadcrumbItems.map((item, index) => (
                                <Breadcrumb.Item key={index}>
                                    {item.title}
                                </Breadcrumb.Item>
                            ))}
                        </Breadcrumb>
                        <Routes>
                            <Route path={clientRoutes.auth} element={<AuthPage />} />
                            <Route path={clientRoutes.main} element={<MainPage />} />
                            <Route path={clientRoutes.backendFactors} element={<BackendFactors />} />
                            <Route path={clientRoutes.frontendFactors} element={<FrontendFactors />} />
                            <Route path={clientRoutes.testerFactors} element={<TesterFactors />} />
                            <Route path={clientRoutes.analistFactors} element={<AnalistFactors />} />
                            <Route path={clientRoutes.sqlFactors} element={<SqlFactors />} />
                        </Routes>
                    </Content>
                    <Footer style={footerStyle(isDarkMode)}>
                        <span style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.88)' }}>
                            Все права защищены © 2022–{new Date().getFullYear()}
                            <br />
                            TheFst Production
                        </span>
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
        </div>

    );
});