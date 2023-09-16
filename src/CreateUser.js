import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import uuid

function CreateUser({ addUser }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      _id: uuidv4(),
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      phone: formData.phone,
      address: formData.address,
    };

    // Call the addUser function passed from UserList to add the new user to the list
    addUser(newUser);

    // Redirect to the user list page ("/users")
    navigate("/users");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      phone: "",
      address: "",
    });
  };
  const handleCancel = () => {
    // Redirect to the user list page ("/users") without making changes
    navigate("/users");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Welcome</div>
        <div className="subtitle">Let's Create a New User!</div>
        <div className="input-container ic1">
          <input
            name="name"
            className="input"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            Name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            name="age"
            className="input"
            type="text"
            value={formData.age}
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            Age
          </label>
        </div>
        <div className="input-container ic2">
          <input
            name="gender"
            className="input"
            type="text"
            value={formData.gender}
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            Gender
          </label>
        </div>
        <div className="input-container ic2">
          <input
            name="phone"
            className="input"
            type="text"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            Contact
          </label>
        </div>

        <div className="input-container ic2">
          <input
            name="address"
            className="input"
            type="text"
            value={formData.address}
            onChange={handleChange}
          />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            Address
          </label>
        </div>
        <button type="submit" className="submit">
          submit
        </button>
        <button type="button" className="reset" onClick={handleReset}>
          Reset
        </button>
        <button type="button" className="cancel" onClick={handleCancel}>
          cancel
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
