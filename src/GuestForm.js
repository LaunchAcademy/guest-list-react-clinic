import React, {Component} from "react"

class GuestForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: ""
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let hasErrors = false
    if(this.state.firstName.trim() === "") {
      alert("Please enter a valid first name!")
      hasErrors = true
    }

    if(this.state.lastName.trim() === "") {
      alert("Please enter a valid last name!")
      hasErrors = true
    }

    if(!hasErrors) {
      this.props.addNewGuest(this.state)
      this.setState({firstName: "", lastName: ""})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add an ELITE Name to the Guest List</h3>
        <div>
          <label>First Name</label>
          <input 
            type="text" 
            name="firstName" 
            onChange={this.handleFirstNameChange}
            value={this.state.firstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            onChange={this.handleLastNameChange}
            value={this.state.lastName} />
          <input type="submit" value="Add Name" />
        </div>
      </form>
    )
  }
}

export default GuestForm