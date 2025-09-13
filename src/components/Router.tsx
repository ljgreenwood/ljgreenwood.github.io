import { Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence} from "framer-motion";
import PageWrapper from "./PageWrapper";
import Home from "../pages/Home";
import Content from "../pages/Content";
import Resume from "../pages/Resume";
import About from "../pages/About";

function Router() {
    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
          <Route path="/content" element={<PageWrapper><Content /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    );
}

export default Router;