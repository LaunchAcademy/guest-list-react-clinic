import React, {Component} from "react"
import GuestList from "./GuestList"
import GuestForm from "./GuestForm"

const initialGuests = [{
  firstName: "Nick",
  lastName: "Alberts"
  }, 
  {
  firstName: "Pat",
  lastName: "Whelan"
}] 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: initialGuests
    }

    this.addNewGuest = this.addNewGuest.bind(this)
  }

  addNewGuest(guest) {
    this.setState({
      guests: [
        ...this.state.guests,
        guest
      ]
    })
  }

  render() {
    return (
      <div>
        <h1>The Super Top Secret VIP List</h1>
        <GuestList guests={this.state.guests} />
        <GuestForm addNewGuest={this.addNewGuest} />
      </div>
    )
  }
}

export default App