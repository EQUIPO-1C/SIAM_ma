import { gql } from "@apollo/client";
export const SCHEDULE_QUERY = gql`
query horarioByID($id:String!){
    horarioByID(id:$id){
    data{
      inicio
      fin
      lunes {
        codmateria
        materia
        plan
        horas
        grupo
        salon
      }
      martes {
        codmateria
        materia
        plan
        horas
        grupo
        salon
      }
      miercoles {
        codmateria
        materia
        plan
        horas
        grupo
        salon
      }
      jueves {
        codmateria
        materia
        plan
        horas
        grupo
        salon
      }
      viernes {
        codmateria
        materia
        plan
        horas
        grupo
        salon
      }
      sabado {
        codmateria
        materia
        plan
        horas
        grupo
        salon
      }
      domingo {
        codmateria
        materia
        plan
        horas
        grupo
        salon
      }
      idestudiante
    }
  }
}

`;
