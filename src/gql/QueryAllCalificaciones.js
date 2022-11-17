
import { gql } from "@apollo/client";

export const ALL_CALIFICACIONES_QUERY = gql`
query allcalifacionesin{
    allcalifacionesin{
    iD_Calificacion
    codigo_Asignatura
    iD_Estudiante
    definitiva_Calificacion
    calificaciones_Calificacion
    porcentajes_Calificaciones

}
}
`;

