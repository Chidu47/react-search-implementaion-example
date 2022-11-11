import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
// import { Users } from './user';
import Table from "./components/Table";

function App() {
  const [query, setQuery] = useState("");
  // const keys = ['first_name', 'last_name', 'email']

  // const search = (data) => {
  //   return data.filter((item) => (
  //     keys.some(key => item[key].toLowerCase().includes(query))
  //   ))
  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(`http://localhost:3000/Users?q=${query}`)
      setData(data.splice(0, 10))
      // console.log(data);?
    }
    if (query.length === 0 || query.length > 2) fetchUsers()
  }, [query])



  return (
    <div className="app">
      <input type="text" className="search" onChange={(e) => setQuery(e.target.value)} />
      <Table data={data} />

      {/* <Table data={search(Users)} /> */}
      {/* <ul className="list">
        {Users.filter((user) => user.first_name.toLowerCase().includes(query)).map((user) => (
          <li key={user.id} className="listItem">{user.first_name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
