
import { Table } from "@mantine/core"
import uuid from "react-uuid"
import { nomenklatura, classified } from "../data/data"

export default function Objects() {
   return (
      <div>
         {
            nomenklatura && (
               <Table>

                  <thead>
                     <tr>{Object.keys(nomenklatura[0]).map(k => <th key={uuid()}>{k}</th>)}</tr>
                  </thead>

                  <tbody>
                     {
                        nomenklatura.map(bb=><tr key={uuid()}>{Object.values(bb).map(v=><td key={uuid()}>{typeof v=='number'? classified[v]: v}</td>)}</tr>)
                     }
                  </tbody>
               </Table>
            )
         }

      </div>

   )
}