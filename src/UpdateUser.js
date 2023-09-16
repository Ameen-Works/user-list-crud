import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser({ users, updateUser }) {
  const { id } = useParams(); // Get the user ID from the route
  const navigate = useNavigate();

  // Find the user with the matching ID
  const userToUpdate = users.find((user) => user._id === id);

  const [formData, setFormData] = useState({
    name: userToUpdate.name,
    age: userToUpdate.age,
    gender: userToUpdate.gender,
    phone: userToUpdate.phone,
    address: userToUpdate.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the user data in your user list (in-memory simulation)
    const updatedUser = {
      _id: id,
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      phone: formData.phone,
      address: formData.address,
    };

    updateUser(updatedUser);

    // Redirect to the user list page ("/users")
    navigate("/users");
  };

  const handleCancel = () => {
    // Redirect to the user list page ("/users") without making changes
    navigate("/users");
  };

  return (
    <div>
      <form class="form" onSubmit={handleSubmit}>
        <div class="title">Welcome</div>
        <div class="subtitle">Let's Edit This User!</div>
        <div class="input-container ic1">
          <input
            name="name"
            class="input"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            Name
          </label>
        </div>
        <div class="input-container ic2">
          <input
            name="age"
            class="input"
            type="text"
            value={formData.age}
            onChange={handleChange}
          />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Age
          </label>
        </div>
        <div class="input-container ic2">
          <input
            name="gender"
            class="input"
            type="text"
            value={formData.gender}
            onChange={handleChange}
          />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Gender
          </label>
        </div>
        <div class="input-container ic2">
          <input
            name="phone"
            class="input"
            type="text"
            value={formData.phone}
            onChange={handleChange}
          />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Contact
          </label>
        </div>

        <div class="input-container ic2">
          <input
            name="address"
            class="input"
            type="text"
            value={formData.address}
            onChange={handleChange}
          />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Address
          </label>
        </div>
        <button type="submit" class="submit">
          submit
        </button>
        <button type="button" class="cancel" onClick={handleCancel}>
          cancel
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
