import express from "express";
import { addDoctor, allDoctors, loginAdmin, appointmentsAdmin, appointmentCancel, adminDashboard } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailablity } from "../controllers/doctorController.js";


// create your router here.

const adminRouter = express.Router();
// add doctor route
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
// admin login route
adminRouter.post('/login', loginAdmin);
// admin All Doctors route
adminRouter.post('/all-doctors', authAdmin, allDoctors);
// admin All Doctors route
adminRouter.post('/change-availablity', authAdmin, changeAvailablity);
// admin All Appointment route
adminRouter.get('/appointments', authAdmin, appointmentsAdmin);
// admin All Appointment Cancel route
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel);
// admin dashboard route
adminRouter.get('/dashboard', authAdmin, adminDashboard);

export default adminRouter;