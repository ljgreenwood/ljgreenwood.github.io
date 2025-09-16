import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function About() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white sm:bg-gray-100">
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
        <h1 className="text-2xl font-bold mb-4 text-center">
          about lucas greenwood
        </h1>
        <ul className="text-gray-700 space-y-1 text-md">
          <p className="pt-0 p-6">
            My focus is applying formal proof to verify logical function in
            hardware design. Of particular interest to me are FPGAs, which
            enable rapid prototyping and on-board debugging of a variety of
            device architectures. I am also interested in how we can expand
            hardware backing ISAs like RISC-V to be competitive in industry and
            begin interfacing with PICs to accelerate compute stacks.
          </p>
          <p className="pt-0 p-6">
            Aside from academics, I enjoy writing about what I learn, reading
            classic novels, playing piano, and training for sport (primarily
            triathlon, climbing, and rowing).
          </p>
        </ul>

        <span className="flex justify-center space-x-5">
          <a
            href="https://github.com/ljgreenwood"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucasgreenwood/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg shadow-lg  hover:bg-blue-700 transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </span>
      </div>
    </div>
  );
}

export default About;
