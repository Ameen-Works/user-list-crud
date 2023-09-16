// Import necessary components and libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import { useEffect, useState } from "react";
import UpdateUser from "./UpdateUser";
import usersData from "./users";
import EditProfile from "./EditProfile";
import { v4 as uuidv4 } from "uuid"; // Import uuid

function App() {
  const [users, setUsers] = useState([]);

  const [profile, setProfile] = useState({
    id: uuidv4(),
    name: "User1",
    age: 27,
    gender: "Male",
    contact: "+91 9876543210",
    email: "test@example.come",
  });

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user._id === updatedUser._id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  useEffect(() => {
    // Fetch the list of users from your API (JSON-Server)
    // fetch("../users.json/users") // Adjust the API endpoint
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data))
    //   .catch((error) => console.error("Error fetching users:", error));

    setUsers(usersData.users);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Define your routes using the Route component */}
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/users"
          element={
            <UserList users={users} setUsers={setUsers} profile={profile} />
          }
        />
        <Route path="/create-user" element={<CreateUser addUser={addUser} />} />
        <Route
          path="/edit-user/:id"
          element={<UpdateUser users={users} updateUser={updateUser} />}
        />
        <Route
          path="/edit-profile/:id"
          element={<EditProfile profile={profile} setProfile={setProfile} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
