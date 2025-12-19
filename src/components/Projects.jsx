const Projects = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-blue-100 shadow-sm p-10 md:p-12 space-y-5">
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm text-center p-3">
              <h1 className="font-bold text-2xl text-left">Room Booking</h1>
              <br></br>
              <div className="gap-5 text-left">
                {" "}
                <p className="font-bold">
                  Designed and developed a room booking system to address
                  real-world scheduling challenges observed in previous roles.
                </p>
                <br></br>
                <p>
                  Implemented a frontend interface for users to specify booking
                  areas and time slots, backed by authenticated REST APIs to
                  manage reservations. The backend enforces business rules to
                  prevent duplicate or conflicting bookings, ensuring reliable
                  and consistent booking workflows.
                </p>
                <br></br>
                <div>languages used here - create languge card</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
