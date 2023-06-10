import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
    return (
        <button className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`} onClick={onToggle}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
