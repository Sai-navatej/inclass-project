import { useState, useEffect } from "react"
import Background from "./background"
// import Background from "./Background"?


function Work() {

  const [events, setEvents] = useState([])
  const [search, setSearch] = useState("")
  const [registered, setRegistered] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {

        const formatted = data.map(item => ({
          id: item.id,
          title: item.title,
          date: "2026-03-01",
          location: "Hyderabad"
        }))

        setEvents(formatted)
      })
  }, [])

  const handleRegister = (event) => {

    const exists = registered.find(e => e.id === event.id)

    if (exists) {
      setRegistered(registered.filter(e => e.id !== event.id))
    } else {
      setRegistered([...registered, event])
    }
  }

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Background
      events={filteredEvents}
      search={search}
      setSearch={setSearch}
      handleRegister={handleRegister}
      registered={registered}
    />
  )
}

export default Work
