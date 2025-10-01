import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error(err));
  }, []);

  const addUser = async () => {
    const res = await fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const newUser = await res.json();
    setUsers([...users, newUser]);
    setName("");
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;
