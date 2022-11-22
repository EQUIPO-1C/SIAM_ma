import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
mutation loginSiamUser($siamLogin: SiamLoginInput!){
    loginSiamUser(siamLogin: $siamLogin) {
        token
        role
    }
}
`;
