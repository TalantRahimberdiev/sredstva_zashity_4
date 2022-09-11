
import { Navbar } from "@mantine/core"
import NavItems from "./navItems"

export default function Nav({ opened }) {

   return (
      <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
         <NavItems />
      </Navbar>
   )
}