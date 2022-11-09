import { gql } from "@apollo/client";

export const BasicData_QUERY = gql`
query getAllUserInfo($username: String){
    getAllUserInfo(username: $username){
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