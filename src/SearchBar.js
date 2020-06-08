import React from 'react';
export class SearchBar extends React.Component {
    state = {
        value: '',
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            value: e.target.value,
        });

        this.props.search(e.target.value);

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.value);
        this.setState({
            value: ''
        })
        alert("h")

    }


    render() {

        return ( 
        
        <div class = "wrap" >

            <form onSubmit = { this.handleSubmit } >

            <input class = "searchTerm"
            type = "text"
            placeholder = "Enter name to search"
            onChange = { this.handleChange }
            onSubmit = { this.handleSubmit }
            value = { this.state.value }
            />

            </form>

            </div>
        );
    }
}