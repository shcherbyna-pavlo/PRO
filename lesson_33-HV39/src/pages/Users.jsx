import React from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {useState,useEffect, useCallback} from 'react';

function Users() {

    const [users, setUsers] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }, []);
    
    const handleNextPage = useCallback((id)=>{
      setSearchParams(id)
    })
    console.log(searchParams);
   
    return  users.map((user) => {
        return (<>
            <tr className="ffff" key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.phone}</td>
            <td>
              <Link to={`/albums?userId=${user.id}`} onClick={(()=>{handleNextPage(user.id)})}>Albums</Link>
            </td>
          </tr>
        </>
        );
      });
}

export default Users