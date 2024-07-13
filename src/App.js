import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./context/Profile.context";
import { PublicRoute, PrivateRoute } from "./helpers/routes";
import LandingPage from "./pages/LandingPage";
import NotFound from "./components/NotFound";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Signup from "./components/signup/Signup";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
axios.defaults.baseURL = "https://doctalk-main-backend.onrender.com";
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("doctalk");

function App() {
  return (
    <>
      <BrowserRouter>
        <ProfileProvider>
          <Routes>
            <Route
              exact
              path="/Doctalk_Main_Frontend/"
              element={
                <PublicRoute>
                  <LandingPage />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/Doctalk_Main_Frontend/doctor/*"
              element={
                // <PrivateRoute>
                // </PrivateRoute>
                <Doctor />
              }
            />
            <Route
              exact
              path="/Doctalk_Main_Frontend/patient/*"
              element={
                // <PrivateRoute>
                // </PrivateRoute>
                <Patient />
              }
            />

            <Route path="/Doctalk_Main_Frontend/signup" element={<Signup />} />
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </ProfileProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
