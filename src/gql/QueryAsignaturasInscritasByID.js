import { gql } from "@apollo/client";
export const ASIGNATURA_ByID_QUERY = gql`

query asignaturainscritasById($id:Int!){
    asignaturainscritasById(id:$id){
    
    
      codigo_Asignatura
      nombre_Asignatura
      numero_Grupo_Asignatura
      creditos_Asignatura
      horas_Asignatura
      ubicacion_Asignatura
      facultad_Asignatura
      }
    
  }
`;
