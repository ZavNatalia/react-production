import React, { ReactNode, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = (props: ThemeProviderProps) => {
    // const { initialTheme, children } = props;
    // const { theme: defaultTheme } = useJsonSettings();
    // const [isThemeMounted, setThemeMounted] = useState(false);
    // const [theme, setTheme] = useState<Theme>(
    //     initialTheme || defaultTheme || Theme.LIGHT,
    // );
    //
    // useEffect(() => {
    //     if (!isThemeMounted && defaultTheme) {
    //         setTheme(defaultTheme);
    //         setThemeMounted(true);
    //     }
    // }, [defaultTheme, isThemeMounted]);
    const { initialTheme, children } = props;
    // const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

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
//
// import React, { ReactNode, useMemo, useState } from 'react';
// import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
// import { Theme } from '@/shared/const/theme';
// import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
//
// const defaultTheme =
//   (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
//
// interface ThemeProviderProps {
//     initialTheme?: Theme;
//     children: ReactNode;
// }
//
// const ThemeProvider = (props: ThemeProviderProps) => {
//     const { initialTheme, children } = props;
//     const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
//
//     const defaultProps = useMemo(
//       () => ({
//           theme,
//           setTheme,
//       }),
//       [theme],
//     );
//
//     return (
//       <ThemeContext.Provider value={defaultProps}>
//           {children}
//       </ThemeContext.Provider>
//     );
// };
//
// export default ThemeProvider;
