import React , {useState} from "react";

import { gql, useMutation } from "@apollo/client";

const UseMutation = () => {
    const[name,setName] = useState("");
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
  const CREATE_USER = gql`
    mutation createUser(
      $name: String!
      $username: String!
      $email: String!
      $phone: String!
    ) {
      createUser(
        input: {
          name: $name
          username: $username
          email: $email
          phone: $phone
        }
      ) {
        id
        name
        username
        email
        phone
      }
    }
  `;
  const [createUser, { loading, error, data, called }] = useMutation(
    CREATE_USER,
    {
      variables: {
        name: name,
        username: username,
        email: email,
        phone: phone,
      },
    }
  );
  console.log({ loading, error, data, called });

  return (
    <div>
        <input type="text" value={name} placeholder="enter name" onChange={(e)=>setName(e.target.value)} />
        <input type="text" value={username} placeholder="enter username" onChange={(e)=>setUsername(e.target.value)} />
        <input type="text" value={email} placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" value={phone} placeholder="enter phone number" onChange={(e)=>setPhone(e.target.value)} />
      <button onClick={createUser}>CLICK TO LOAD THE INFO</button>
    </div>
  );
};

export default UseMutation;
