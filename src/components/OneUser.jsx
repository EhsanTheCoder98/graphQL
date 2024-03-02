import React , {useState} from 'react';
import { gql , useQuery } from '@apollo/client';


const OneUser = () => {
    const [id,setId] = useState(1);
    const GET_USER = gql `
        query getUser($id:ID!){
            user(id:$id){
                name
            }
        }
    
    `
    const changeHandler = (e) => {
        setId(e.target.value);
    }
    const {loading,data,error} = useQuery(GET_USER,{
        variables:{id:id}
    })
    return (
        <div>
            <input type='text' onChange={changeHandler} />
            {loading?<h1>LOADING...</h1>:(
                <h1>
                    {data.user.name}
                </h1>
            )}
        </div>
    );
};

export default OneUser;