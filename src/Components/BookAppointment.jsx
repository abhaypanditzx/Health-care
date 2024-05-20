const BookAppointment = () => {
    return (
        <div className="flex items-center">
           <div className="min-w-[600px] min-h-[300px] bg-red-400"></div>
           <div className="flex flex-col">
                <h1 className="text-3xl font-bold font-roboto">Book Appointment</h1>
            <form action="" className="flex flex-col">
                <label htmlFor="selectSchedule"> Select Schedule</label>
                <input type="date"/>
            </form>
           </div>
        </div>
    )
}
export default BookAppointment;