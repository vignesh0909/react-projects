import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from './Auth';

const ProtectedRoute = ({ Component }) => {
    const coachAuth = Auth.isCoachAuthenticated();

    return coachAuth ? <Component /> : <Navigate to="/coachlogin" /> 
}

export default ProtectedRoute;
