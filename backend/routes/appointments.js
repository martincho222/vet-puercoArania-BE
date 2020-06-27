const router = require("express").Router();
const appointmentsController = require('../controllers/appointmentsController');

const { appointmentsListById, appointmentsList, createAppointments, updateAppointments, deleteAppointments } = appointmentsController

router.route("/")
.get(appointmentsList)
.post(createAppointments)

router.route("/:id")
.get(appointmentsListById)
.put(updateAppointments)
.delete(deleteAppointments)





module.exports = router;