import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/auth/Login'

function vbRoutes() {
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Home />} />
            <Route path="/register" element={<Login />} />
            <Route path="/dashboard" element={<Signup />} />
            <Route path="/dashboard" element={<RecoverEmail />} />
            <Route path="/dashboard" element={<RecoverCode />} />
            <Route path="/dashboard" element={<RecoverPassword />} />
            <Route path="/dashboard" element={<Notiications />} />
            <Route path="/dashboard" element={<Menu />} />
            <Route path="/dashboard" element={<ChangePassword />} />
            <Route path="/dashboard" element={<UpdateProfile />} />
            <Route path="/dashboard" element={<EventDetails />} />
            <Route path="/dashboard" element={<EventList />} />
            <Route path="/dashboard" element={<EventRequests />} />
            <Route path="/dashboard" element={<AdsAvailabilities />} />
            <Route path="/dashboard" element={<AdsCreate />} />
            <Route path="/dashboard" element={<AdsDelete />} />
            <Route path="/dashboard" element={<AdsDescription />} />
            <Route path="/dashboard" element={<AdsDetails />} />
            <Route path="/dashboard" element={<AdsList />} />
            <Route path="/dashboard" element={<AdsPayment />} />
            <Route path="/dashboard" element={<AdsPhotos />} />
            <Route path="/dashboard" element={<AdsPlace />} />
            <Route path="/dashboard" element={<AdsService />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default vbRoutes;