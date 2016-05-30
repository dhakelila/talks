'use strict';

import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {

	componentWillMount(){
		this.props.init();
	}

	render(){
		return <div>
				<h2>Home</h2>
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
							</tr>
						))}
					</tbody>
				</table>

				<Link to={'/create'}>CREATE NEW USER</Link>
			</div>;
		}
};

export default Home;
