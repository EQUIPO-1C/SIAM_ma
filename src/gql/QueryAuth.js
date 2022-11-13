import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
mutation loginSiamUser($username: String, $password: String){
    loginSiamUser(username: $username, password: $password) {
        token
        role
    }
}
`;
