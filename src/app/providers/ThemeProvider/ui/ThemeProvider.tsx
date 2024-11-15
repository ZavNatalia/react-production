import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const defaultTheme = Theme.DARK;

const fallbackTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || defaultTheme;

const ThemeProvider = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props;
    const { theme: defaultTheme } = useJsonSettings();
    const [isThemeMounted, setThemeMounted] = useState(false);
    const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme);

    useEffect(() => {
        if (!isThemeMounted && defaultTheme) {
            setTheme(defaultTheme);
            setThemeMounted(true);
        }
    }, [defaultTheme, isThemeMounted]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
