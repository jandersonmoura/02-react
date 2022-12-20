import React, { useState } from 'react';
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User } from './styles';
import People from "./assets/people.png";
import Arrow from "./assets/arrow.png";
import Trash from "./assets/trash.jpg";

function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  function addNewUser() {
    setUsers([...users, { id: Math.random(), name, age }])
  }

  function changeName(event) {
    setName(event.target.value)
  }

  function changeAge(event) {
    setAge(event.target.value)
  }

  function deleteUser() {
    console.log('deletei')
  }

  return (
    <Container>
      <Image alt='people' src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar<img alt='seta' src={Arrow} /></Button>

        <ul>
          {
            users.map(user => (
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={deleteUser}>
                  <img alt='lixo' src={Trash} />
                </button>
              </User>
            ))

          }
        </ul>

      </ContainerItens>
    </Container>
  )
}

export default App;
