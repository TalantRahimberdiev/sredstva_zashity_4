
import { classified } from '../data/data'

export default function Classified() {
   const protections = Object.keys(classified).map((item, i) => <li key={i}>{item} : {classified[item]}</li>)
   return (
      <ul>
         {protections}
      </ul>
   )
}