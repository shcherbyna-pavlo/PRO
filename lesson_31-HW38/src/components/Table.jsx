import { useState, useEffect} from 'react'

function Table({contactForm}) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setContacts(json));
  }, []);

  useEffect(() => {
    setContacts([...contacts, ...contactForm]);
  }, [contactForm]);

  const del = (id) => {
    setContacts(() => {
      return contacts.filter((item) => id !== item.id);
    });
  };

  return contacts.map((contact) => {
    return (
      <tr className="ffff" key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.username}</td>
        <td>{contact.phone}</td>
        <td>
          <button onClick={() => del(contact.id)}>Delete</button>
        </td>
      </tr>
    );
  });
}

export default Table