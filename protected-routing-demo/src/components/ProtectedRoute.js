import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from './Auth';

const ProtectedRoute = ({ Component }) => {
    const auth = Auth.isAuthenticated();

    return auth ? <Component /> : <Navigate to="/login" /> 
}

export default ProtectedRoute;
