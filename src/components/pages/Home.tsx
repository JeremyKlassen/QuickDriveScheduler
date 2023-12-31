import { useNavigate } from "react-router-dom";
import { User } from "../../utils/interfaces";
import { getUsers } from "../../utils/GetData";
import Header from "../layout/Header";

const Home = () => {
  let data: User[] = getUsers();

  const navigate = useNavigate();
  const jsonString = JSON.stringify(data);
  localStorage.setItem("users", jsonString);

  return (
    <>
      <Header />
      <div className="max-w-full mt-5">
        <button
          onClick={() => {
            navigate("/Select");
          }}
          className="blueButton w-1/2 m-1 mb-20"
        >
          Create a Drive Schedule
        </button>
        <button
          onClick={() => {
            navigate("/addData");
          }}
          className="greyButton w-1/2 mt-5 mb-5"
        >
          Add a Location
        </button>
        <button
          onClick={() => {
            navigate("/removeData");
          }}
          className="greyButton w-1/2 m-1"
        >
          Remove a Location
        </button>
        <h2 className="text-lg mt-10">Written by: Jeremy Klassen</h2>
        <h2 className="text-lg">Version 0.1.0</h2>
      </div>
    </>
  );
};

export default Home;
