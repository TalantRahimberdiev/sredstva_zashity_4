
import { Table } from "@mantine/core"
import uuid from "react-uuid"
import { classified } from "../data/data"

export default function MakeTable({ user }) {
   return (
      <div>
         {
            user && (
               <Table>

                  <thead>
                     <tr>{Object.keys(user).map(k => <th key={uuid()}>{k}</th>)}</tr>
                  </thead>

                  <tbody>
                     <tr>
                        {
                           Object.keys(user).map(k => {
                              return typeof user[k] !== 'object' ? (
                                 <td key={uuid()}>{k == 'access_level' ? classified[user[k]] : user[k]}</td>
                              ) : (
                                 user[k].map(m => <td style={{ display: 'block' }} key={uuid()}>{m}</td>)
                              )
                           })
                        }
                     </tr>
                  </tbody>
               </Table>
            )
         }

      </div>

   )
}