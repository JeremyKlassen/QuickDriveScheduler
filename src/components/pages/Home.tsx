import { useNavigate } from "react-router-dom";
import { User } from "../../utils/interfaces.ts";
import { getUsers } from "../../utils/GetData.ts";

const Home = () => {
  let data: User[] = getUsers();

  const navigate = useNavigate();
  const jsonString = JSON.stringify(data);
  localStorage.setItem("users", jsonString);

  // console.log(data);

  return (
    <>
      <button
        onClick={() => {
          navigate("/addData");
        }}
        className="blueButton"
      >
        Add Client, Driver, or Location
      </button>
      <button
        onClick={() => {
          navigate("/removeData");
        }}
        className="blueButton"
      >
        Remove Client, Driver, or Location
      </button>
      <button
        onClick={() => {
          navigate("/Select");
        }}
        className="blueButton"
      >
        Create a Drive Schedule
      </button>
    </>
  );
};

export default Home;
