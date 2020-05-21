import React, { Component } from 'react'
import Faker from 'faker'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      users: [] ,
    }
  }


  componentDidMount() {
    for (let i = 0; i < 15; i++) {
      const user = {
        name: Faker.name.firstName(),
        email: Faker.internet.email(),
        avatar: "https://picsum.photos/100/100?random=" + Math.floor(Math.random() * 100),
        // avatar: Faker.internet.avatar(),
        description: Faker.name.jobDescriptor(),
        city: Faker.address.city(),
        streetName: Faker.address.streetName(),
        country: Faker.address.country(),
        company: Faker.company.companyName(),
      }
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }))
    }
  }


  getUsers(user) {
    return (
      <div style={{ padding: '10px' ,border: 'solid 1px #eee'}}>
        <img src={user.avatar} alt={user.name} width="100" height="100" />
        <h4>Name: {user.name}</h4>
        <h4>Email: {user.email}</h4>
        <h4>Description: {user.description}</h4>
        <h4>Address: {user.streetName}, {user.city}, {user.country}</h4>
        <h4>Company: {user.company}</h4>
      </div>
    )
  }

  render() {
    return <div>{this.state.users.map(user => this.getUsers(user))}</div>
  }
}

export default App;