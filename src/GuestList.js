import React from "react"

const GuestList = (props) => {
  const listItems = props.guests.map((guest) => {
    return <li>{guest.firstName} {guest.lastName}</li>
  })
  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default GuestList