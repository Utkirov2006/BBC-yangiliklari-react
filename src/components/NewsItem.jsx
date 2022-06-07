import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const NewsItem = () => {

    const back=useNavigate();

    const { id } = useParams();

    console.log(id);

    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const [post, setPost] = useState([]);

    console.log(post);

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        fetch(URL)
            .then(request => request.json())
            .then(result => setPost(result))
            .catch(err => console.log('message' + err))
    }



    return (

        <div className='card p-5 m-2 mx-auto '>

            <h5>{post.title}</h5>
            <p>{post.body}</p>


            <button className='w-25 btn btn-outline-danger accent-1 waves-orange mb-2'>{post.id}</button>
      
            <button className='w-25 btn btn-outline-danger accent-1 waves-orange d-inline-block' onClick={()=>back(-1)}>Orqaga</button>
      
        </div>
    );
};

export default NewsItem;