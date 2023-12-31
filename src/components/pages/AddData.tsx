import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User } from "../../utils/interfaces";
import { getUsers } from "../../utils/GetData";
import Header from "../layout/Header";
import { calculateDistance } from "../../utils/CreateSchedule";
import { generateFixedData } from "../../utils/InsertData";

const handleExampleUsers = () => {
  const data: User[] = generateFixedData();
  localStorage.setItem("users", JSON.stringify(data));
};

const AddData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    coordinates: "",
    role: "client" as const, // Default role
  });

  const [coordError, setCoordError] = useState(false);

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
    const test = calculateDistance(newUser.coordinates, newUser.coordinates);
    if (Number.isNaN(test)) setCoordError(true);
    else {
      setCoordError(true);
      data.push(newUser);
      localStorage.setItem("users", JSON.stringify(data));
      console.log("Form submitted:", formData);
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <form
        className="grid grid-rows-5 place-items-center"
        onSubmit={handleSubmit}
      >
        <div className="m-3 grid grid-rows-2 place-items-center row h-20">
          <label className="mb-1 text-lg font-bold" htmlFor="name">
            Name:
          </label>
          <input
            className="text-black w-1/1 h-8 p-1"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-3 grid grid-rows-2 place-items-center">
          <label className="mb-1 mt-2 text-lg font-bold" htmlFor="coordinates">
            Google Coordinates:
          </label>
          <input
            className="text-black w-1/1 h-8 p-1"
            type="text"
            id="coordinates"
            name="coordinates"
            value={formData.coordinates}
            onChange={handleChange}
            required
          />
          {coordError ? (
            <p className="text-red-500">
              Error: Coordinates are not in Google Maps format - eg: 49.9999,
              -49.9999
            </p>
          ) : null}
        </div>
        <div className="m-3 grid grid-rows-2 place-items-center w-1/2 mb-8">
          <label className="mb-1 mt-2 text-lg font-bold" htmlFor="role">
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
        <div className="grid grid-rows-3 w-full place-items-center row-span-2">
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
          <button
            className="redButton m-2 w-1/2"
            onClick={() => {
              handleExampleUsers();
              navigate("/");
            }}
          >
            Create Example Users
          </button>
        </div>
      </form>
    </>
  );
};

export default AddData;
