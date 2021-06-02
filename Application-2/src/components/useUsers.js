import React, { useEffect } from 'react';
import axiosService from '../api/axios-service';

const useUsers = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    axiosService.get('/users')
    .then(response => response.data)
    .then(json => setUsers(json));
  }, []);
  return users;
}

export default useUsers;