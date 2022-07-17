import HomePage from "../pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage";
import CreateTripPage from "../pages/CreateTripPage";

export const Router = ()=> {
    return(
        <BrowserRouter>
        <Routes>
            <Route index path='home' element={<HomePage/>}/>
            <Route path="trips" element={<ListTripsPage/>}/>
            <Route path="application/:tripId" element= {<ApplicationFormPage/>} />
            <Route path="login" element= {<LoginPage/>} />
            <Route path="admin" element= {<AdminHomePage/>} />
            <Route path="trip-details/:tripId" element= {<TripDetailsPage/>} />
            <Route path="create-trip" element= {<CreateTripPage/>} />
        </Routes>
        </BrowserRouter>
    )
}