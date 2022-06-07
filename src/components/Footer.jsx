import React from 'react';

const Footer = () => {
    return (
        <div className='p-3 bg-danger text-white fw-bold text-center'>
            powered O'tkirov {new Date().getFullYear()}
        </div>
    );
};

export default Footer;