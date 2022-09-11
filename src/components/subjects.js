
import { useState } from "react";
import Authentication from "./authentication";
import MakeTable from "./table";
import UserDocs from "./userDocs";

export default function Subjects() {

   const [user, setUser] = useState()

   return (
      <div>
         <Authentication setUser={setUser} />
         <MakeTable user={user} />
         <UserDocs user={user} />
      </div>
   )
}