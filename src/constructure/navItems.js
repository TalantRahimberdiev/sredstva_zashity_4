
import { useState } from 'react'
import { Box, NavLink } from '@mantine/core'
import { Link } from "react-router-dom"

export default function NavItems() {
   const data = { task: 'задание', classified: 'грифы', subjects: 'субъекты', objects: 'объекты' }
   const [active, setActive] = useState(0)

   const items = Object.keys(data).map((item, index) => (
      <NavLink
         key={item}
         active={index === active}
         label={data[item]}
         component={Link}
         to={index === 0 ? `/` : `/${item}`}
         onClick={() => setActive(index)}
      />
   ))

   return (
      <Box>
         {items}
      </Box>
   )
}