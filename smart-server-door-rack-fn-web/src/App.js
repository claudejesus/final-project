import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
// import AdminPage from "./pages/dashboardPages/adminPages/AdminPage";
import ServerPage from "./pages/dashboardPages/adminPages/ServerPage";
import EditServer from "./pages/dashboardPages/adminPage/EditServer";
import UserAdmin from "./pages/dashboardPages/adminPages/UserAdmin";
import AddServerPage from "./pages/dashboardPages/adminPage/AddServerPage";
import AddUserPage from "./pages/dashboardPages/adminPage/AddUserPage";
import LoginPage from "./pages/users/loginPage/LoginPage";
import UserPage from "./pages/dashboardPages/userPage/UserPage";
import AdminServerDetails from "./pages/dashboardPages/adminPage/AdminServerDetails";
import SwitchServer from "./pages/dashboardPages/userPage/SwitchServer";
import UpdateUser from "./pages/dashboardPages/adminPage/UpdateUser";
import HelpPage from "./pages/helpPage/HelpPage";
import AdminAdminPage from "./pages/dashboardPages/adminPage/AdminAdminPage";
import MainAdminPage from "./pages/dashboardPages/adminPages/MainAdminPage";
import SwitchServerAdminPage from "./pages/dashboardPages/adminPages/SwitchServerAdminPage";
import Report from "./pages/dashboardPages/adminPages/Report";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/admin-page" element={<AdminAdminPage />} />
          <Route path="/admin-report" element={<Report />} />
          <Route path="/login-page" element={<LoginPage/>} />
          <Route path="/server-admin" element={<ServerPage />} />
          <Route path="/add-server-page" element={<AddServerPage/>} />
          <Route path="/add-user-page" element={<AddUserPage/>} />
          <Route path="/admin-server/details/:AllDetalsId" element={<AdminServerDetails/>} />
          <Route path="/admin-user/update/:AllDetalsId" element={<UpdateUser/>} />
          <Route path="/user-admin" element={<UserAdmin/>} />
          <Route path="/server/:editServerId" element={<EditServer />} />
          <Route path="/main-admin" element={<MainAdminPage />} />
          <Route path="/switch-server-admin/:serverId" element={<SwitchServerAdminPage/>} />
           
          <Route path="/help" element={<HelpPage />} />
          {/* USER PART ROUTE */}
          <Route path="/user-dashboard" element={<UserPage/>} />
          <Route path="/switch-server/:serverId" element={<SwitchServer/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
