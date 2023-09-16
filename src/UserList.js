import React from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

function UserList({ users, setUsers, profile }) {
  //   const [users, setUsers] = useState([]);

  //   const addUser = (newUser) => {
  //     setUsers((prevUsers) => [...prevUsers, newUser]);
  //   };

  const handleDelete = (userId) => {
    // Send a DELETE request to your API to delete the user
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
  };

  //   useEffect(() => {
  //     // Fetch the list of users from your API (JSON-Server)
  //     fetch("http://localhost:5000/users") // Adjust the API endpoint
  //       .then((response) => response.json())
  //       .then((data) => setUsers(data))
  //       .catch((error) => console.error("Error fetching users:", error));
  //   }, []);

  return (
    <div>
      <div className="user-list-container">
        <h1 className="user-list-header">List of Users</h1>
        <Link to={`/edit-profile/${profile.id}`}>
          <button className="add-button">Edit Profile</button>
        </Link>
      </div>
      <div className="user-list-actions">
        <Link to="/create-user">
          <button className="add-button">Create User</button>
        </Link>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <Link to={`/edit-user/${user._id}`}>
                  <button className="update-button">Update</button>
                </Link>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
