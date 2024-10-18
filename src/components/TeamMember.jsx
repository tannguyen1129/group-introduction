// src/components/TeamMember.js
import React from 'react';

const TeamMember = ({ name, position, image, profileLink }) => {
    return (
        <div style={styles.container}>
            <img src={image} alt={name} style={styles.image} />
            <h3 style={styles.name}>{name}</h3>
            <p style={styles.position}>{position}</p>
            <a href={profileLink} target="_blank" rel="noopener noreferrer" style={styles.button}>
                View Profile
            </a>
        </div>
    );
};

const styles = {
    container: {
        width: '250px',
        margin: '20px',
        textAlign: 'center',
        border: '2px solid #007bff',
        borderRadius: '10px',
        padding: '15px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
    },
    image: {
        width: '150px', // Điều chỉnh kích thước
        height: '150px', // Điều chỉnh kích thước
        borderRadius: '50%',
        border: '3px solid #007bff',
        objectFit: 'cover',
    },
    name: {
        fontSize: '22px',
        color: '#007bff',
    },
    position: {
        fontSize: '16px',
        color: '#666',
    },
    button: {
        marginTop: '10px',
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
    },
};

export default TeamMember;
