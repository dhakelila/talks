'use strict';

import React from 'react';

class Create extends React.Component {

    componentWillMount(){
    
    }

    render(){
        return <div>
                <h2>CREATE NEW USER</h2>
                <form action="POST">
                    <input type="User name"/>
                    <select name="" id="">
                        <option value="">option 1</option>
                    </select>
                </form>
            </div>;
        }
};

export default Create;
