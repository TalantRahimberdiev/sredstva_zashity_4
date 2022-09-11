
import { Select, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import { nomenklatura, classified } from "../data/data"
import uuid from "react-uuid"

export default function UserDocs({ user }) {

   const [materials, setMaterials] = useState([])
   const [selected, setSelected] = useState('')

   const suitable = () => {
      const token = user['access_level']
      let tmp = nomenklatura.filter(item => item.access < +token)
      for (let x of user.materials) {
         let t = nomenklatura.filter(bb => bb.title == x)
         setMaterials(materials => [...materials, { value: t[0]['title'], label: t[0]['title'], group: classified[t[0]['access']] }])
      }

      for (let x of tmp) {
         setMaterials(materials => [...materials, { value: x.title, label: x.title, group: classified[x['access']] }])
      }
      console.log(materials)
   }

   useEffect(() => {
      if (user) suitable()
   }, [user])

   return (
      <div>
         {
            user && materials && (
               <Select
                  onChange={(value) => setSelected(value)}
                  label="Доступные для вас материалы"
                  placeholder="Выберите один"
                  searchable
                  nothingFound="No options"
                  data={materials}
               />
            )
         }
         {
            selected && (
               <>
                  <Text>Материалы по объекту</Text>
                  {
                     nomenklatura.filter(bb => bb.title === selected).map(item => (
                        <div key={uuid()}>
                           <h5 key={uuid()}>{item.title}</h5>
                           <p key={uuid()}>{item.description}</p>
                           <p key={uuid()}>{item.access}</p>
                        </div>
                     ))
                  }
               </>
            )
         }
      </div>
   )
}