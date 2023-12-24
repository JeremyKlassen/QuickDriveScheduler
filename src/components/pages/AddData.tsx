import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User } from "../../utils/interfaces";
import { getUsers } from "../../utils/GetData";

const AddData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    coordinates: "",
    role: "client" as const, // Default role
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
      <h1 className="text-3xl font-bold mb-5 mt-5">Quick Drive Scheduler</h1>
      <form
        className="grid grid-rows-5 place-items-center"
        onSubmit={handleSubmit}
      >
        <div className="m-3 grid grid-rows-2 place-items-center">
          <label className="mb-1" htmlFor="name">
            Name:
          </label>
          <input
            className="text-black w-1/1"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-3 grid grid-rows-2 place-items-center">
          <label className="mb-1 mt-2" htmlFor="coordinates">
            Google Coordinates:
          </label>
          <input
            className="text-black w-1/1"
            type="text"
            id="coordinates"
            name="coordinates"
            value={formData.coordinates}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-3 grid grid-rows-2 place-items-center w-1/2 mb-8">
          <label className="mb-1 mt-2" htmlFor="role">
            Role:
          </label>
          <select
            className="text-black h-8 w-1/1"
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
        <div className="grid grid-rows-2 w-full place-items-center">
          <button type="submit" className="blueButton w-1/2 m-2">
            Update
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="greyButton m-2 w-1/2"
          >
            Home
          </button>
        </div>
      </form>
    </>
  );
};

export default AddData;
