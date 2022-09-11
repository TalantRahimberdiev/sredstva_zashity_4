
import { Input, Button, } from "@mantine/core";
import { useState } from "react";
import { subjects } from '../data/data'

export default function Authentication({ setUser }) {

   const [name, setName] = useState('')

   const findUser = () => {
      const found_user = subjects.filter(bb => bb.name === name)
      if (found_user.length !== 0) {
         setUser(found_user[0])
         alert(`вы найдены. Добро пожаловать ${found_user[0]['name']}!`)

      }
      else alert('вас нет')
   }

   return (
      <center>
         <Input.Wrapper
            withAsterisk
            label="Вход в систему"
            description="авторизация"
         >
            <Input size="sm" onChange={e => setName(e.target.value)} placeholder="пожалуйста введите ваш пароль" />
         </Input.Wrapper>
         <Button onClick={() => findUser()} style={{ marginTop: 7 }} compact>Войти</Button>
      </center>
   )
}