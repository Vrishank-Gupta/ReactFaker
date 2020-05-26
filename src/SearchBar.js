
import React from 'react';
class SearchBar extends React.Component {
    state = {
        value: '',
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    handleSubmit = () => {
        const { value } = this.state;
    }

    render() {
        return (
            <ul class="token-input">
                <li class="token-">
                    <input
                        name="p"
                        value={this.state.value}
                        className="form-control"
                        onchange={this.handleChange}
                    />
                </li>
            </ul>
        );
    }
}

export default SearchBar;