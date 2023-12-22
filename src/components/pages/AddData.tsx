import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User } from "../../utils/interfaces";
import { getUsers } from "../../utils/GetData";

const AddData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    coordinates: "",
    role: "client", // Default role
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let data: User[] = getUsers();

    const newUser: User = {
      name: formData.name,
      coordinates: formData.coordinates,
      role: formData.role,
      isChecked: true,
    };

    data.push(newUser);
    localStorage.setItem("users", JSON.stringify(data));
    console.log("Form submitted:", formData);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="text-black"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="coordinates">Google coordinates:</label>
          <input
            className="text-black"
            type="text"
            id="coordinates"
            name="coordinates"
            value={formData.coordinates}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            className="text-black"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="client">Client</option>
            <option value="driver">Driver</option>
            <option value="location">Location</option>
          </select>
        </div>
        <button type="submit" className="blueButton">
          Update
        </button>
      </form>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="blueButton"
      >
        Home
      </button>
    </>
  );
};

export default AddData;
