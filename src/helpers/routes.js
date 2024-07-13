import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useUser } from './../context/User.context';
import { useProfile } from './../context/Profile.context';

export const AdminRoute = ({ ...routeProps }) => {
	const { user } = useUser();
	console.log(user);

	if (!user) {
		return <Navigate to='/Doctalk_Main_Frontend' />;
	}
	return <Route {...routeProps} />;
};

export const DoctorRoute = ({ ...routeProps }) => {
	const { user } = useUser();
	console.log(useUser());

	if (user && user.role === 'Doctor') {
		return <Navigate to='/Doctalk_Main_Frontend/doctor' />;
	} else {
		<Navigate to='/Doctalk_Main_Frontend/patient' />;
	}
};

export const PrivateRoute = ({ ...routeProps }) => {
	const { profile } = useProfile();
	console.log(profile);

	if (profile && !profile.isPatient) {
		return <Navigate to='/Doctalk_Main_Frontend/doctor' />;
	} else if (profile && profile.isPatient) {
		return <Navigate to='/Doctalk_Main_Frontend/patient' />;
	}
	return <Navigate to='/Doctalk_Main_Frontend/' />;
};

export const PublicRoute = ({ children }) => {
	const { profile } = useProfile();
	console.log(profile);

	if (profile && !profile.isPatient) {
		return <Navigate to='/Doctalk_Main_Frontend/doctor' />;
	} else if (profile && profile.isPatient) {
		return <Navigate to='/Doctalk_Main_Frontend/patient' />;
	}
	return <div>{children}</div>;
};
