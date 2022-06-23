import React from "react";
import axios from "axios";
import deleteIcon from '../img/delete.png';
import styled from 'styled-components';

const IconRemove = styled.img`
  width: 20px;
`

export default class ListScreen extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUserList();
  }

  getUserList = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
        {
          headers: {
            Authorization: "bruno-monteiro-alves"
          }
        }
      )
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  removeUser = (userId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
          headers: {
            Authorization: "bruno-monteiro-alves"
          }
        }
      )
      .then((response) => {
        this.getUserList();
        response.status === 200 && alert("o usuario foi deletado com sucesso");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {

    const userListFormatted = this.state.users.map((user) => {
      return <li key={user.id}>{user.name}
        <IconRemove src={deleteIcon} onClick={() => this.removeUser(user.id)} />
      </li>
    })

    return (
      <main>
        <ul>{userListFormatted}</ul>
      </main>
    );
  }
}
