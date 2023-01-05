import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, Image,Button, User } from './styles';
import Avatar from "../../assets/avatar.png";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.jpg";
import H1 from "../../components/Title";
import ContainerItens from '../../components/ContainerItens';

function Users() {

  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3001/user")
      setUsers(newUser)
    }
    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/user/${userId}`)
    const newUser = users.filter(user => user.id !== userId)
    setUsers(newUser)
  }

  function goBackPage() {
    history.push('/')
  }

  return (
    <Container>
      <Image alt='avatar' src={Avatar} />
      <ContainerItens iBlur={true}>
        <H1>Usuário!</H1>
        <ul>
          {
            users.map(user => (
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img alt='lixo' src={Trash} />
                </button>
              </User>
            ))

          }
        </ul>

        <Button onClick={goBackPage}>
          <img alt='seta' src={Arrow} />Voltar
        </Button>



      </ContainerItens>
    </Container>
  )
}

export default Users;
