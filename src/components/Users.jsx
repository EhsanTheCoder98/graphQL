import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      data {
        name
        email
        id
      }
    }
  }
`;

const Users = () => {
  const { loading, data ,error } = useQuery(GET_USERS);
  console.log(data);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? <h1>ERROR</h1> :(
        data.users.data.map((user) => {
          return (
            <div key={user.id} style={{ background: "silver", margin: "15px" }}>
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Users;
