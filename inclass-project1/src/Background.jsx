import back from "./assets/project.webp"

function Background({
  events,
  search,
  setSearch,
  handleRegister,
  registered
}) {

  return (
    <div
      className="bg"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="container">

      <h1 className="title">NGO Event Explorer</h1>


        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h3>Total Registered: {registered.length}</h3>

        <div className="event-list">
          {events.map(event => {
            const isRegistered = registered.find(e => e.id === event.id)

            return (
              <div key={event.id} className="event-card">
                <h4>{event.title}</h4>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>

                <button onClick={() => handleRegister(event)}>
                  {isRegistered ? "Registered ✅" : "Register"}
                </button>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Background
