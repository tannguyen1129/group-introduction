import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.copyright}>Copyright © 2024. mediumTech. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '20px',
        backgroundColor: '#e74235', // Màu nền được cập nhật
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
    },
    heading: {
        fontSize: '24px',
        color: '#ffffff', // Màu chữ
        marginBottom: '10px',
    },
    contactText: {
        fontSize: '20px',
        color: '#ffffff', // Màu chữ
    },
    copyright: {
        fontSize: '20px',
        color: '#ffffff', // Màu chữ
        marginTop: '10px',
    },
    link: {
        color: '#ffffff', // Màu chữ liên kết
        textDecoration: 'underline',
    },
};

export default Footer;
