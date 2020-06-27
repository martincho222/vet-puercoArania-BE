const AppointmentModel = require("../models/appointment");

const TurnsController = {
    appointmentsListById: async (req, res, next) => {
        const { id } = req.params;
        const appointmentsById = await AppointmentModel.findById(id).populate('user');
        res.json(appointmentsById)
    },
    appointmentsList: async (req, res, next) =>{
        const appointments = await AppointmentModel.find();
        return res.json(appointments);
    },
    createAppointments: async (req, res, next) => {
        const { service, user, pet, date, time, description } = req.body;
        const appointment = await AppointmentModel.findOne({$or: [{date}, {time}]});
        if(appointment){
            res.status(404).send({error: `El Turno ya esta ocupado`});
            return;
        }
        const newAppointment = new AppointmentModel({service, user, pet, date, time, description});
        const response = await newAppointment.save();
        res.json(response)
    },

    updateAppointments: async (req, res, next) => {
        const { id } = req.params;
        const paramsToUpdate = {...req.body};
        try {
            const response = await AppointmentModel.findByIdAndUpdate(id, paramsToUpdate);
            res.json({message: 'Turno Modificado'})
        } catch (error) {
            res.json({message: 'el turno no fue encontrado'})
        }
    },
    deleteAppointments: async (req, res, next) => {
        const { id } = req.params;
        const response = await AppointmentModel.findByIdAndDelete(id);
       if(response){
           res.json({message: 'el turno fue eliminado exitosamente'})
       }else{
         res.json({message: 'el turno no fue encontrado'})  
       }
    }
}

module.exports = TurnsController;