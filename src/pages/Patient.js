import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavbarPatient from '../components/navbar/NavbarPatient';
import PatientAppointment from '../components/appointment/PatientAppointment';
import ProfilePatient from '../components/profile/ProfilePatient';
import DoctorList from '../components/list/DoctorList';
import BookAppointment from '../components/bookAppointment/BookAppointment';
import UploadDocs from '../components/upload/Upload';
import ViewDocs from '../components/views/Views';
import { UserProvider } from '../context/User.context';

export default function Patient() {
	return (
		<UserProvider>
			<ToastContainer />
			<NavbarPatient />
			<Routes>
				<Route path='/Doctalk_Main_Frontend/' element={<PatientAppointment />} />
				<Route path='/Doctalk_Main_Frontend/profile' element={<ProfilePatient />} />
				<Route path='/Doctalk_Main_Frontend/doctorlist' element={<DoctorList />} />
				<Route path='/Doctalk_Main_Frontend/bookAppointment/:id' element={<BookAppointment />} />
				<Route path='/Doctalk_Main_Frontend/uploadDocs' element={<UploadDocs />} />
				<Route path='/Doctalk_Main_Frontend/viewDocs' element={<ViewDocs />} />
			</Routes>
		</UserProvider>
	);
}
