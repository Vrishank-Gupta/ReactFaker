import React, { Component } from 'react'
import ReactDom from 'react-dom';
import Faker from 'faker';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

class App extends Component {
    state = {
        users: [],
        sr: {
                name: '',    
                email:'',
                avatar: '',
                description: '',
                city: '',
                streetName: '',
                country: '',
                company: '',   
            },
        found :false
    }

    componentDidMount() {
        for (let i = 0; i < 15; i++) {

            const user = {
                name: Faker.name.firstName(),
                lastName: Faker.name.lastName(),
                email: Faker.internet.email(),
                avatar: "https://picsum.photos/200/300?random=" + Math.random() * 100,
                description: Faker.name.jobTitle(),
                city: Faker.address.city(),
                streetName: Faker.address.streetName(),
                country: Faker.address.country(),
                company: Faker.company.companyName(),
            }


            this.setState(prevUser => ({
                users: [...prevUser.users, user],
            }))
        }
    }

    search = (argument) => {
        console.log(argument)

        var j = -1;
        for(let i=0; i<this.state.users.length; i++){
            if(this.state.users[i].name === (argument)){
                j = i;
    

                this.setState({
                    found : true,
                    sr: {
                        name: this.state.users[j].name,
                        lastName: this.state.users[j].lastName,
                        email: this.state.users[j].email,
                        avatar: this.state.users[j].avatar,
                        description: this.state.users[j].description,
                        city: this.state.users[j].city,
                        streetName: this.state.users[j].streetName,
                        country: this.state.users[j].country,
                        company: this.state.users[j].company,
                    }
                })
                break;
            }
            
        }

        console.log(j);

        if (j === -1) {
            alert("Not Found")
        }
        else if ( this.state.found === true) {
            this.setState({
                found : false

            })
        }


        
    }
    getUsers(user) {
        return (
            <div class="center" style={{ padding: '10px', border: 'solid 6px #eee' }}>
                <img src={user.avatar} alt={user.name} width="100" height="100" />\
                <h4>Name: {user.name} {user.lastName}</h4>
                <h4>Email: {user.email}</h4>
                <h4>Description: {user.description}</h4>
                <h4>Address: {user.streetName}, {user.city}, {user.country}</h4>
                <h4>Company: {user.company}</h4>
            </div>
        )
    }
    

    render() {
        return (
            <span>
            <SearchBar className="search" search={this.search} />
            <SearchResult 
                    name={this.state.sr.name}  
                    lastName={this.state.sr.lastName} 
                    email={this.state.sr.email}
                    avatar={this.state.sr.avatar}
                    description= {this.state.sr.description}
                    city={ this.state.sr.city}
                    streetName= {this.state.sr.streetName}
                    country= {this.state.sr.country}
                    company= {this.state.sr.company} 

                    />
            <div>{this.state.users.map(user => this.getUsers(user))}</div>
            </span>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)


