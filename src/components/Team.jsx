// src/components/Team.js
import React from 'react';
import TeamMember from './TeamMember';

// Ảnh thành viên (Thay đổi thành đường dẫn thực tế của ảnh)
import SonTan from '../assets/SonTan.jpg';
import TramAnh from '../assets/TramAnh.jpg';

const Team = () => {
    const members = [
        {
            name: 'SON TAN',
            position: 'Lập trình viên',
            image: SonTan,
            profileLink: 'https://tannguyen1129.github.io/personal-introduction/',
        },
        {
            name: 'VO NGOC TRAM ANH',
            position: 'Thiết kế đồ họa',
            image: TramAnh,
            profileLink: 'https://vntanh1406.github.io/simple-introduction/',
        },
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Nhóm của chúng tôi</h2>
            <div style={styles.membersContainer}>
                {members.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        position={member.position}
                        image={member.image}
                        profileLink={member.profileLink}
                    />
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '50px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '30px',
        color: '#fff', // Chữ trắng
        backgroundColor: '#007bff', // Nền xanh
        padding: '10px', // Padding cho tiêu đề
        borderRadius: '5px', // Bo góc
        display: 'inline-block', // Căn giữa tiêu đề
    },
    membersContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
};

export default Team;
