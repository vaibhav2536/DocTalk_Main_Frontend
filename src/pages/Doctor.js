import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavbarDoctor from '../components/navbar/NavbarDoctor';
import DoctorAppointment from '../components/appointment/DoctorAppointment';
import ProfileDoctor from '../components/profile/ProfileDoctor';
import { UserProvider } from '../context/User.context';
import ReferDoctor from '../components/referDoctor/Refer';
import DoctorReferences from '../components/references/DoctorReferences';

export default function Doctor() {
	return (
		<UserProvider>
			<ToastContainer />
			<NavbarDoctor />
			<Routes>
				<Route path='/Doctalk_Main_Frontend/' element={<DoctorAppointment />} />
				<Route path='/Doctalk_Main_Frontend/profile' element={<ProfileDoctor />} />
				<Route path='/Doctalk_Main_Frontend/references' element={<DoctorReferences />} />
				<Route path='/Doctalk_Main_Frontend/referdoctors/:id' element={<ReferDoctor />} />
			</Routes>
		</UserProvider>
	);
}
