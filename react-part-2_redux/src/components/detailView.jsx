'use strict';

import React from 'react';
import {Link} from 'react-router';

class Detail extends React.Component {

    componentWillMount(){
        this.props.getDetail(this.props.params.id);
    }

    render(){
        console.log('detailView', this.props)
        return <div>
                <Link to={'/'}><h2>Detail</h2></Link>
                {this.props.detail && <div>
                    <h3>Name: {this.props.detail.name}</h3>
                    <h3>job: {this.props.detail.job}</h3>
                    <button>EDIT</button>
                </div>}

            </div>;
        }
};

export default Detail;
