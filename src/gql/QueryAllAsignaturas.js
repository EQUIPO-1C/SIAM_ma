
import { gql } from "@apollo/client";

export const ALL_ASIGNATURA_INSCRITAS_QUERY = gql`
query{
	allAsignaturasinscritas{
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

