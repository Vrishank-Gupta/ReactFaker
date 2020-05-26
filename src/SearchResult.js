import React from 'react';

class SearchResult extends React.Component {


    render() {
        var user=this.props;

        if(user.name === ' ')
        {
            user.name = ''
            return(<p></p>)
        }

        else{
        return (
            <div class="center" style={{ padding: '10px', border: 'solid 6px #eee' }}>
                <img src={user.avatar} alt={user.name} width="100" height="100" />
                <h4>{user.name} {user.lastName}</h4>
                <h4> {user.email}</h4>
                <h4>{user.description}</h4>
                <h4>{user.streetName} {user.city} {user.country}</h4>
                <h4>{user.company}</h4>
            </div>
        );
        }
    }

}

export default SearchResult;