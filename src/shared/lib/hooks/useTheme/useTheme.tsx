import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.GREEN;
                break;
            case Theme.GREEN:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
