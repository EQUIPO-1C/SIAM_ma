
import { gql } from "@apollo/client";

export const ALL_CALIFICACIONES_QUERY_COMPLETE = gql`
query calificacionesinByIDEst($iD:Int!){
    calificacionesinByIDEst(iD:$iD){
        iD_Calificacion 
        definitiva_Calificacion 
        calificaciones_Calificacion 
        porcentajes_Calificaciones
        iD_Estudiante 
        codigo_Asignatura 
        nombre_Asignatura
        numero_Grupo_Asignatura
        creditos_Asignatura
        horas_Asignatura
        facultad_Asignatura
        ubicacion_Asignatura
  }
}
`;

