import React, { useContext } from 'react';
import { ThemeContext } from '../context';
import { Tooltip, Brightness4OutlinedIcon, WbSunnyOutlinedIcon, IconButton } from '@mui/material';

const Layout = ({ children }) => {
    const { themeName, setNewTheme: setThemeName } = useContext(ThemeContext);
    const toggleTheme = () => {
        if (themeName === 'light') {
            setThemeName('dark');
        } else {
            setThemeName('light');
        }
    };
    return (
        <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleTheme}>
                <Tooltip title='Change Theme'>
                    {themeName === 'light' ? <Brightness4OutlinedIcon /> : <WbSunnyOutlinedIcon />}
                </Tooltip>
            </IconButton>
            <main>
                {children}
            </main>
        </>
    );
}
export default Layout;
