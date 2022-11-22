import { gql } from "@apollo/client";
export const ASIGNATURA_ByID_QUERY = gql`

query asignaturainscritasById($id:Int!){
    asignaturainscritasById(id:$id){
    
    
      nombre_Asignatura

      }
    
  }
`;
