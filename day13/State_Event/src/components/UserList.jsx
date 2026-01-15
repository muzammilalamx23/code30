import { useEffect, useState } from "react";
import "./UserList.css"

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    setUsers(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}
    fetchUsers();
  }, []);

  if (loading) {
    
    return <p>Loading...</p>;
  }

  if(error){
    return <p className="error">Error:{error}</p>;
  }
  return (
    <div>
  <h2>User List</h2>
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        <strong>{user.name}</strong><br />
        Username: {user.username}<br />
        Email: {user.email}<br />
        Phone: {user.phone}<br />
        Company: {user.company?.name}
      </li>
    ))}
  </ul>
</div>

  );
}

export default UserList;
