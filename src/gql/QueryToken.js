import { gql } from "@apollo/client";

export const BasicData_QUERY = gql`
mutation{
    loginSiamUser(siamLogin: {
      username: "bdleons",
      password: "swarchbdleons"
    }) {
      token
      role
    }
  }
`;
