import { useNavigate } from "react-router-dom";

const Select = () => {
  const data = localStorage.getItem('data');
  const navigate = useNavigate();
  console.log(data[0]!);
  
  return (
    <>

      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        To Home Page
      </button>
    </>
  );
};

export default Select;
