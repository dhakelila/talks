'use strict';

import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {

	componentWillMount(){
		this.props.init();
	}

	render(){
		console.log('home', this.props.users)
		return <div>
				<Link to={'/'}><h2>Home</h2></Link>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Job</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users && this.props.users.map((row, i) => (
							<tr key={i}>
								<td><Link to={`/detail/${row.id}`}>{row.name}</Link></td>
								<td>{row.job}</td>
								<td><Link to={`/detail/${row.id}`}>EDIT</Link></td>
								<td><button onClick={this.props.deleteUser.bind(null, row.id)}>DELETE</button></td>
							</tr>
						))}
					</tbody>
				</table>

				<Link to={'/create'}>CREATE NEW USER</Link>
			</div>;
		}
};

export default Home;
