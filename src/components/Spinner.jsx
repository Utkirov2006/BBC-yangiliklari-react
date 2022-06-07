import React from 'react';

const Spinner = () => {
    return (
        <div className='mx-auto w-50'>
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        </div>
    );
};

export default Spinner;