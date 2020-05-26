import React from 'react';
class SearchBar extends React.Component {
    state = {
        value: '',
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            value: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.value);
        this.setState({
            value: ''
        })
    }


    render() {

        var a = {
            box: {  height: '80px', width: '80%', 'text-align': 'centre', 'margin-top':'20px' },
        }
        return (
            <div class="wrap">

                    <form onSubmit={this.handleSubmit} >    
                    <input class="searchTerm"
                            type="text"
                            placeholder="Enter First name to search"
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            value={this.state.value}
                            style={a.box} />
                
                    </form>
                
            </div>
        );
    }
}

export default SearchBar;