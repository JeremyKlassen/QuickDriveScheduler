import { useNavigate } from "react-router-dom";
import { getUsers } from "../../utils/GetData";
import { User } from "../../utils/interfaces";
import { useState } from "react";
import Header from "../layout/Header";

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
      <Header />
      <div className="grid grid-rows-2 place-items-center">
        <select
          className="text-black m-1 mb-12 mt-5 w-1/2 h-8"
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
        <div>
          <button
            className="blueButton m-1 w-1/2"
            onClick={handleRemove}
            disabled={!selectedName}
          >
            Remove Entry
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="greyButton m-3 w-1/2"
          >
            Home
          </button>
          <button className="redButton m-1 w-1/2" onClick={handleClear}>
            Clear All Data
          </button>
        </div>
      </div>
    </>
  );
};

export default RemoveData;
