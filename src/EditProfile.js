import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit Prodile.css";

function EditProfile({ profile, setProfile }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: profile.name,
    age: profile.age,
    gender: profile.gender,
    contact: profile.contact,
    email: profile.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the user data in your user list (in-memory simulation)
    const updatedUser = {
      id: id,
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      contact: formData.contact,
      email: formData.email,
    };

    setProfile(updatedUser);

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
        <div class="subtitle">Let's Edit your account!</div>
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
            name="contact"
            class="input"
            type="text"
            value={formData.contact}
            onChange={handleChange}
          />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Contact
          </label>
        </div>

        <div class="input-container ic2">
          <input
            name="email"
            class="input"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Email
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

export default EditProfile;
