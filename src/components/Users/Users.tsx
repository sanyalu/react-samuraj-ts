import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import defaultUserAvatar from '../../assets/images/avatar.png'
import axios from "axios";

const Users: React.FC<UsersPropsType> = (props) => {
  const getUsers = () => {

    !props.users.length && axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })
  }

  return (
    <div style={{padding: '10px'}}>
      <button onClick={getUsers}>get users</button>
      <ul>
        {props.users.map(u => {
          return (
            <li key={u.id} style={{marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid white'}}>
              <img src={u.photos.small ? u.photos.small : defaultUserAvatar}
                   style={{width: '48px', height: '48px', borderRadius: '50%'}}/>
              <div>Name: {u.name}</div>
              {u.followed
                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                : <button onClick={() => props.follow(u.id)}>Follow</button>}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Users;