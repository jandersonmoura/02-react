import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, Image,InputLabel, Input, Button, } from './styles';
import People from "../../assets/people.png";
import Arrow from "../../assets/arrow.png";
import  H1  from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';


function App() {
  
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUsers } = await axios.post("http://localhost:3001/user", { name: inputName.current.value, age: inputAge.current.value })
    setUsers([...users, newUsers])
  
    history.push('/usuarios')

  }


  return (
    <Container>
      <Image alt='people' src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar<img alt='seta' src={Arrow} />
        </Button>



      </ContainerItens>
    </Container>
  )
}

export default App;
