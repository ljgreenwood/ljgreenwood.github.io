import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white sm:bg-gray-100">
      <div className="bg-white sm:shadow-xl rounded-2xl p-12 max-w-xl w-full text-left font-serif">
        <div className="flex justify-center mb-4">
          <button
            className="hover:scale-105 transition-transform"
            onClick={() => navigate("/")}
          >
            <img
              src="/Architetto----Bicicletta.svg"
              alt="Home"
              className="w-10"
            />
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center">lucas greenwood</h1>
        <ul className="text-gray-700 space-y-1 text-md">
          <li>
            <button
              onClick={() => navigate("/about")}
              className="hover:underline text-left"
            >
              about/
            </button>
          </li>
          <li>
            <button
              onClick={() => window.open("/#/resume", "_blank")}
              className="hover:underline text-left"
            >
              resume/
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/content")}
              className="hover:underline text-left"
            >
              content/
            </button>
          </li>
        </ul>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-gray-100 sm:bg-gray-200 p-4 text-center m-0 text-xs text-gray-500 font-serif">
        <p>Developed by Lucas Greenwood • Last updated: Sep 1, 2025</p>
      </div>
    </div>
  );
}

export default Home;
