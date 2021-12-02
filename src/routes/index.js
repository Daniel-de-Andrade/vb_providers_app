import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login'

function vbRoutes() {
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default vbRoutes;