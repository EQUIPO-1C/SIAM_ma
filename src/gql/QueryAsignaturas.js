import { gql } from "@apollo/client";

export const ASIGNATURA_QUERY = gql`
query allAsignaturas{
    allAsignaturas{
      nombreAsignatura
      codigoasignatura
      idProfesor
      idEdificio
      programa
      creditos
      cupos
      descripcion
      duracion
      fechaFinal
      fechaInicio
      horario
      jornada
      nivelDeEstudio
      sede
      tipologia
  
  
    }
  }
`;
