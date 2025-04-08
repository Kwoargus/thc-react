import styled from "styled-components";
import {MenuProps, theme} from "antd";

// Базовые стили
export const layoutStyle: React.CSSProperties = {
    minHeight: "100vh",
};

export const siderStyle = (isDark: boolean): React.CSSProperties => ({
    userSelect: "none",
    background: isDark ? '#181a1b' : '#fff',
});

export const logoStyle: React.CSSProperties = {
    maxWidth: '100%',
    maxHeight: '100%',
    height: '64px',
    display: 'block',
    margin: 'auto',
    padding: '5px',
    cursor: 'pointer'
};

export const headerStyle = (isDark: boolean): React.CSSProperties => ({
    padding: 0,
    background: isDark ? '#181a1b' : '#fff',
    display: 'flex',
});

export const headerTitleStyle: React.CSSProperties = {
    flex: '2',
    marginLeft: '18px'
};

export const headerAuthStyle: React.CSSProperties = {
    marginRight: '42px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
};

export const authLinkStyle: React.CSSProperties = {
    cursor: 'pointer'
};

export const contentStyle = (isDark: boolean, token: any): React.CSSProperties => ({
    margin: '24px 16px',
    padding: 24,
    minHeight: 280,
    background: isDark ? '#181a1b' : '#fff',
    borderRadius: token.borderRadiusLG,
});

export const footerStyle = (isDark: boolean): React.CSSProperties => ({
    textAlign: 'center',
    background: isDark ? '#25282a' : '#e8e8e8',
});

export const menuTheme: MenuProps['theme'] = 'dark';
export const menuMode: MenuProps['mode'] = 'inline';

export const getThemeConfig = (isDark: boolean) => ({
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    components: {
        Layout: {
            headerBg: isDark ? '#181a1b' : '#fff',
            bodyBg: isDark ? '#1e2021' : '#f5f5f5',
            footerBg: isDark ? '#25282a' : '#fff',
            siderBg: isDark ? '#181a1b' : '#fff', // Фон всего Sider
        },
        Menu: {
            // Основные настройки фона
            popupBg: isDark ? '#181a1b' : '#fff', // Фон выпадающих меню
            subMenuItemBg: isDark ? '#181a1b' : '#fff', // Фон подменю
            itemBg: isDark ? 'transparent' : '#fff', // Оптимальное значение для работы темной темы
            darkItemBg: '#181a1b', // Явное задание фона для темной темы
            darkItemSelectedBg: '#00423c', // Ключевой параметр для выбранного пункта в темной теме
            darkItemSelectedColor: '#3ef6ff', // Цвет текста выбранного пункта в темной теме

            // Настройки состояний
            itemHoverBg: isDark ? '#25282a' : '#f5f5f5', // Фон при наведении
            itemSelectedBg: isDark ? '#00423c' : '#e6fffc', // Фон выбранного пункта
            itemSelectedColor: isDark ? '#3ef6ff' : '#00C2CB', // Цвет текста выбранного пункта
            itemActiveBg: isDark ? '#25282a' : '#f5f5f5', // Фон активного пункта

            // Текст и оформление
            itemColor: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.88)', // Цвет текста
            activeBarBorderWidth: 0, // Убираем полосу выделения
        },
    },
    token: {
        colorPrimary: '#00C2CB',
        colorBgContainer: isDark ? '#181a1b' : '#fff',
        colorBgElevated: isDark ? '#181a1b' : '#fff', // Важно для фона меню
        colorText: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.88)',
        colorTextDescription: isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)',
    },
});

export const PageLayout = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: auto;
`;

export const CenterDivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
`;