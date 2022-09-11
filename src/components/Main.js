import { Route, Routes } from "react-router-dom";

import Classified from "./classified";
import Subjects from "./subjects";
import Task from "./task";
import Objects from "./objects";

export default function Main() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/classified" element={<Classified />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/objects" element={<Objects />} />
         </Routes>
      </div>
   )
}