import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import RecoverEmail from "../pages/auth/recover/Email";
import RecoverCode from "../pages/auth/recover/Code";
import RecoverPassword from "../pages/auth/recover/Password";
import Notiications from "../pages/Notifications";
import Menu from "../pages/profile/Menu";
import ChangePassword from "../pages/profile/Password";
import UpdateProfile from "../pages/profile/Update";
import EventDetails from "../pages/agenda/Details";
import EventList from "../pages/agenda/List";
import EventRequests from "../pages/agenda/Requests";
import AdsAvailabilities from "../pages/ads/Availabilities";
import AdsCreate from "../pages/ads/Create";
import AdsDelete from "../pages/ads/Delete";
import AdsDescription from "../pages/ads/Description";
import AdsDetails from "../pages/ads/Details";
import AdsList from "../pages/ads/List";
import AdsPayment from "../pages/ads/Payment";
import AdsPhotos from "../pages/ads/Photos";
import AdsPlace from "../pages/ads/Place";
import AdsService from "../pages/ads/Services";

function VbRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recover/email" element={<RecoverEmail />} />
          <Route path="/recover/code" element={<RecoverCode />} />
          <Route path="/recover/password" element={<RecoverPassword />} />
          <Route path="/notifications" element={<Notiications />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/event/details" element={<EventDetails />} />
          <Route path="/event/list" element={<EventList />} />
          <Route path="/event/requests" element={<EventRequests />} />
          <Route path="/ads/availabilities" element={<AdsAvailabilities />} />
          <Route path="/ads/create" element={<AdsCreate />} />
          <Route path="/ads/delete" element={<AdsDelete />} />
          <Route path="/ads/description" element={<AdsDescription />} />
          <Route path="/ads/details" element={<AdsDetails />} />
          <Route path="/ads/list" element={<AdsList />} />
          <Route path="/ads/payment" element={<AdsPayment />} />
          <Route path="/ads/photos" element={<AdsPhotos />} />
          <Route path="/ads/place" element={<AdsPlace />} />
          <Route path="/ads/service" element={<AdsService />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default VbRoutes;
