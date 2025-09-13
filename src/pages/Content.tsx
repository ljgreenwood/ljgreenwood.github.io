import Sketch from "../components/Sketch.tsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

function Content() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [direction, setDirection] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/docs/index.json")
      .then((res) => res.json())
      .then((obj) => obj.writings)
      .then((list: string[]) => setFiles(list));
  }, []);

  useEffect(() => {
    if (files.length > 0 && currentIndex !== null) {
      fetch(`/docs/writings/${files[currentIndex]}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [files, currentIndex]);

  const showContent = currentIndex !== null;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === null ? 0 : (prev - 1 + files.length) % files.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === null ? 0 : (prev + 1) % files.length));
  };

  // Swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  // Detect desktop
  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  // Keyboard navigation (desktop only)
  useEffect(() => {
    if (!isDesktop) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") navigate("/");
      if (e.key === "h") handlePrev();
      if (e.key === "l") handleNext();
    };
    const handleScroll = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      const ae = document.activeElement as HTMLElement | null;
      if (
        ae &&
        (["INPUT", "TEXTAREA", "SELECT"].includes(ae.tagName) ||
          ae.isContentEditable)
      )
        return;

      if (e.key === "j") window.scrollBy({ top: 600, behavior: "smooth" });
      else if (e.key === "k")
        window.scrollBy({ top: -600, behavior: "smooth" });
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keydown", handleScroll);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keydown", handleScroll);
    };
  }, [isDesktop, files, currentIndex]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 font-serif">
      <span className="flex items-center justify-center width-full mt-8 mb-0">
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
      </span>

      <div
        {...handlers}
        className="flex flex-col flex-1 items-center justify-center p-4 w-full align-top sm:pl-20 sm:pr-20"
      >
        {showContent ? (
          <div className="relative w-[98%] max-w-[1900px] h-[75vh]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-white shadow-xl rounded-2xl p-5 sm:p-14  overflow-auto prose"
              >
                {/* {isDesktop && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="fixed left-10 sm:left-26 top-1/2 transform transition-transform hover:scale-125 z-100"
                    >
                      <p>&lt;</p>
                    </button>
                    <button
                      onClick={handleNext}
                      className="fixed right-10 sm:right-26 top-1/2 transform transition-transform hover:scale-125 z-100"
                    >
                      <p>&gt;</p>
                    </button>
                  </>
                )} */}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <>
            <div className="p-4 text-center m-0 text-xs text-gray-500 font-serif">
              <i>click the cube to continue</i>
            </div>
            <button
              onClick={handleNext}
              className="p-4 transform transition-transform hover:scale-110"
            >
              <Sketch />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
