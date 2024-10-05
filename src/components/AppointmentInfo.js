const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
    return (
        <li>
            <button onClick={() => onDeleteAppointment(appointment.id)} type="button">Delete</button>
            <div>
                <div><b>Pet name: </b>{appointment.petName}</div>
                <div><b>Appointment date: </b>{appointment.aptDate}</div>
                <div><b>Owner: </b>{appointment.ownerName}</div>
                <div><b>Consultation note: </b>{appointment.aptNotes}</div>
            </div>
        </li>
    )
}

export default AppointmentInfo;