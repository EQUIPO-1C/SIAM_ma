import { gql } from "@apollo/client";

export const BasicData_QUERY = gql`
query getAllUserInfo($username: String){
    getAllUserInfo(username: $username){
      identificationNumber
      name
      surname
      role
      birthDate
      nationality
      address
      city
      level
      bloodType
      militarySituation
        
    }
  }
`;