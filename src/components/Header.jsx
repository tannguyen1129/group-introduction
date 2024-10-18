// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>mediumTech - 2024</h1>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#1d366b', // Nền màu mới
        padding: '20px 0',
        textAlign: 'center',
    },
    title: {
        color: '#fff', // Chữ trắng
        fontSize: '36px',
        margin: 0,
    },
};

export default Header;
