import { useNavigate } from "react-router-dom";
import { getUsers } from "../../utils/GetData";
import { User } from "../../utils/interfaces";
import { useState } from "react";

const RemoveData = () => {
  const navigate = useNavigate();
  const [selectedName, setSelectedName] = useState<string>("");
  let data: User[] = getUsers();

  const handleRemove = () => {
    const updatedData = data.filter((user) => user.name !== selectedName);
    localStorage.setItem("users", JSON.stringify(updatedData));
    navigate("/");
  };

  const handleClear = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <select
        className="text-black"
        value={selectedName}
        onChange={(e) => setSelectedName(e.target.value)}
      >
        <option value="" disabled>
          Select a name
        </option>
        {data.map((user) => (
          <option key={user.name} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
      <button
        className="blueButton"
        onClick={handleRemove}
        disabled={!selectedName}
      >
        Remove entry
      </button>
      <button className="blueButton" onClick={handleClear}>
        Clear Data
      </button>
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

export default RemoveData;
