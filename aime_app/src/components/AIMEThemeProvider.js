import React, { useState, useCallback } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { ThemeContext } from '../contexts';
import { dayMode, nightMode } from '../themes';
function AIMEThemeProvider(props) {
    const { children } = props;
    const currTheme = localStorage.getItem('cs_theme') || 'light';
    const [themeName, setThemeName] = useState(currTheme);
    let localTheme = themeName === 'light' ? dayMode : nightMode;
    const setNewTheme = useCallback((name) => {
        localStorage.setItem('cs_theme', name);
        setThemeName(name);
    }, [setThemeName]);
    return <ThemeContext.Provider value={{ themeName, setNewTheme }}>
        <ThemeProvider theme={localTheme}>
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>;
}
export default AIMEThemeProvider;
