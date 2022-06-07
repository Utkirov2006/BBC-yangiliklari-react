import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const NewsList = (props) => {
    const { data = [] } = props;

    if (data.length === 0) {
        return <Spinner />;
    }


    return (
        <div className='w-75 p-5 m-2 mx-auto'>
            {data.map((item) =>
                <div key={item.id} className="card w-100 p-4 m-2 bg-light">

                       <h5>{item.title}</h5>
                       <p>{item.body}</p>
                       <span className='p-3'>{item.id}</span>

                       <Link to={`/news/${item.id}`} className="btn w-25 waves-effect waves-purple"> batafsil.. </Link>
                      
                </div>
            )}


        </div>
    );
};

export default NewsList;