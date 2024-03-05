import React from "react";

import { gql, useMutation } from "@apollo/client";

const UseMutation = () => {
  const CREATE_USER = gql`
    mutation {
      createUser(
        input: {
          name: "ehsan"
          username: "ef98"
          email: "ehsan@me.com"
          phone: "082329487298"
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
  const [createUser, { loading, error, data, called }] =
    useMutation(CREATE_USER);
  console.log({ loading, error, data, called });

  return (
    <div>
      <button onClick={createUser}>CLICK TO LOAD THE INFO</button>
    </div>
  );
};

export default UseMutation;
