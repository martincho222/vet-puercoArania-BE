const AppointmentModel = require("../models/appointment");
const sendMail = require("../controllers/emailController");
const userModel = require("../models/user");
const TurnsController = {
  userAppointments: async (req, res, next) => {
    const userId = req.user.sub;
    // console.log(userId);
    const userAppointments = await AppointmentModel.find({
      user: userId,
    }).populate("user");
    // const { service, pet, date, time, description } = userAppointments;
    // console.log(appointment.service);
    // const { service } = await AppointmentModel.find({
    //   user: userId,
    // }).populate("user");
    // console.log(userAppointments);
    // const { service } = userAppointments;
    // console.log(service);
    // const userDoc = await userModel.findOne({ _id: appointments.user });
    // res.json(userAppointments);
    const userDoc = await userModel.findOne({ _id: userId });
    // const service = await userAppointments.service;
    // console.log(userDoc.username);

    const content = {
      user: userDoc.username,
      userAppointments: userAppointments,
    };
    // console.log(content);
    res.json(content);
  },
  appointmentsList: async (req, res, next) => {
    const appointments = await AppointmentModel.find();
    return res.json(appointments);
    // console.log(appointments);
  },
  createAppointments: async (req, res, next) => {
    const { service, pet, date, time, description } = req.body;
    const user = req.user.sub;
    // console.log(user);
    try {
      const appointment = await AppointmentModel.findOne({ date, time });
      if (appointment) {
        res.status(404).send({ error: `El Turno ya esta ocupado` });
        return;
      }
      const newAppointment = new AppointmentModel({
        service,
        user,
        pet,
        date,
        time,
        description,
      });
      const response = await newAppointment.save();
      const userDoc = await userModel.findOne({ _id: user });
      // console.log(userDoc.username);
      const content = {
        user: userDoc.username,
        service,
        pet,
        date,
        time,
        description,
        email: userDoc.email,
      };
      await sendMail(content);
      res.json(response);
    } catch (error) {
      console.log(error);
      res.status(402).json(error);
    }
  },

  updateAppointments: async (req, res, next) => {
    const { id } = req.params;
    const paramsToUpdate = { ...req.body };
    try {
      const response = await AppointmentModel.findByIdAndUpdate(
        id,
        paramsToUpdate
      );
      res.json({ message: "Turno Modificado" });
    } catch (error) {
      res.json({ message: "el turno no fue encontrado" });
    }
  },
  deleteAppointments: async (req, res, next) => {
    const { id } = req.params;
    const response = await AppointmentModel.findByIdAndDelete(id);
    if (response) {
      res.json({ message: "el turno fue eliminado exitosamente" });
    } else {
      res.json({ message: "el turno no fue encontrado" });
    }
  },
};

module.exports = TurnsController;
