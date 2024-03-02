import React , {useState} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const LazyQuery = () => {
    const [id,setId] = useState(2);
    const [getData , {data,loading,called}] = useLazyQuery(GET_USER,{
        variables:{id:id},
    })
    const changeHandler = (e) => {
        setId(e.target.value);
    };
    const clickHandler = () => {
        getData();
    }
    console.log(called);
    return (
        <div>
            <input value={id} type='text' onChange={changeHandler} />
            <button onClick={clickHandler}>Click to get data</button>
            {called && (
                loading?<h1>loading...</h1>:
                <div>
                    <h1>{data.user.name}</h1>
                </div>
            ) }
        </div>
    );
};

export default LazyQuery;