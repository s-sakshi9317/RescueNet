import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const FrameThree = React.lazy(() => import("pages/FrameThree"));
const FrameFour = React.lazy(() => import("pages/FrameFour"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const VolunteerRegister = React.lazy(() => import("pages/VolunteerRegister"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const Login = React.lazy(() => import("pages/Login"));
const Info = React.lazy(() => import("pages/Info"));
const Weather = React.lazy(() => import("pages/Weather"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/desktopsix" element={<DesktopSix />} />
          <Route path="/volunteerregister" element={<VolunteerRegister />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
          <Route path="/framefour" element={<FrameFour />} />
          <Route path="/framethree" element={<FrameThree />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
