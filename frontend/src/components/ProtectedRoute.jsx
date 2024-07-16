import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserService from "./service/UserService";

function ProtectedRoute() {
    const isAuthenticated = UserService.isAuthenticated();
    return isAuthenticated ===  true?<Outlet/>:<Navigate to="/login"/>
}

export default ProtectedRoute